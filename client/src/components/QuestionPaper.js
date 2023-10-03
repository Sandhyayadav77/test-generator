import React, { useEffect, useState } from 'react';
import questionsData from '../data/questions.json'; // Adjust the path as needed
import CustomQuestionPaper from './CustomQuestionPaper';

const QuestionPaper = ({ selectedClass, selectedSubject, selectedChapter }) => {

    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [selectedQuestions, setSelectedQuestions] = useState({}); // 

    const handleQuestionSelection = (categoryName, question) => {
        const formattedQuestion = {
            question: `${question.question}`,
            options: question.options,
            correctAnswer: question.correctAnswer,
        };

        // Check if the question is already selected
        const isQuestionSelected = selectedQuestions[categoryName]?.some((selectedQuestion) =>
            selectedQuestion.question === formattedQuestion.question
        );

        if (!isQuestionSelected) {
            setSelectedQuestions((prevSelectedQuestions) => {
                // Create a copy of the previous selected questions
                const updatedQuestions = { ...prevSelectedQuestions };

                // Check if the category already exists in the object
                if (updatedQuestions.hasOwnProperty(categoryName)) {
                    // Append the new question to the existing array
                    updatedQuestions[categoryName].push(formattedQuestion);
                } else {
                    // If the category doesn't exist, create a new array for it
                    updatedQuestions[categoryName] = [formattedQuestion];
                }
                console.log('updated ', updatedQuestions);

                return updatedQuestions;
            });
        }
    };
    const uniqueSelectedQuestions = {};
    for (const category in selectedQuestions) {
        uniqueSelectedQuestions[category] = Array.from(
            new Set(selectedQuestions[category].map((q) => JSON.stringify(q)))
        ).map((strQ) => JSON.parse(strQ));
    }

    console.log('uniqueSelectedQuestions', uniqueSelectedQuestions)
    console.log(selectedQuestions)
    useEffect(() => {
        try {
            const subjectData = questionsData?.subjects.find(subject => subject.name === selectedSubject);
            if (subjectData) {
                const classData = subjectData.classes.find(classData => classData.class === Number(selectedClass));

                if (classData) {
                    const chapterData = classData.chapters.find(chapter => chapter.chapter === Number(selectedChapter));

                    if (chapterData) {
                        const questionsByCategory = {};
                        chapterData.categories.forEach(category => {
                            const categoryQuestions = category.questions;
                            if (categoryQuestions && categoryQuestions.length > 0) {
                                questionsByCategory[category.categoryName] = categoryQuestions;
                            }
                        });

                        setFilteredQuestions(questionsByCategory);
                    } else {
                        setFilteredQuestions({}); // Set to an empty object if the chapter has no questions
                    }
                } else {
                    setFilteredQuestions({}); // Set to an empty object if the class has no questions
                }
            } else {
                setFilteredQuestions({}); // Set to an empty object if the subject has no questions
            }
        } catch (error) {
            console.error('An error occurred while filtering questions:', error);
            setFilteredQuestions({}); // Set to an empty object if an error occurs
        }
    }, [selectedClass, selectedSubject, selectedChapter]);

    return (
        <>
            <div className=" grid  grid-cols-2 gap-4 mx-5 my-3">
                <div className="p-4">
                    {Object.keys(filteredQuestions).length > 0 && (
                        <>
                            <h2 className="text-2xl font-semibold mb-4">Question Paper</h2>
                            {Object.keys(filteredQuestions).map((categoryName, index) => (
                                <div key={index} className="mb-4">
                                    <h3 className="text-lg font-medium">{categoryName}</h3>
                                    <ul>
                                        {filteredQuestions[categoryName].map((question, questionIndex) => (
                                            <li key={questionIndex} className="mt-2">
                                                <p
                                                    className="font-medium"
                                                    onClick={() => handleQuestionSelection(categoryName, question)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    Question {question.index}: {question.question}
                                                </p>
                                                {question.options && question.options.length > 0 && (
                                                    <div className="mt-2">
                                                        {question.options.map((option, optionIndex) => (
                                                            <label key={optionIndex} className="block mb-2">
                                                                <input
                                                                    type="radio"
                                                                    name={`question${questionIndex}`}
                                                                    value={option}
                                                                    className="mr-2"
                                                                />
                                                                {option}
                                                            </label>
                                                        ))}
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </>
                    )}
                </div>
                <CustomQuestionPaper selectedQuestions={uniqueSelectedQuestions}  setSelectedQuestions ={setSelectedQuestions } />
            </div>
        </>
    );
};

export default QuestionPaper;
