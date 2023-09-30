// src/App.js
import React, { useEffect, useState } from 'react';
import SubjectSelection from './components/SubjectSelection';
import ClassSelection from './components/ClassSelection';
import ChapterSelection from './components/ChapterSelection';
import QuestionPaper from './components/QuestionPaper';

function App() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
//   useEffect(() => {
//  console.log('selectedSubject', selectedSubject)
//  console.log('selectedClass', selectedClass)
//  console.log('selectedChapter', selectedChapter)
//   })
  

  const handleSubjectSelected = (subject) => {
    setSelectedSubject(subject);
    // You can reset the selected class and chapter here if needed
    setSelectedClass('');
    setSelectedChapter('');
  };

  const handleClassSelected = (selectedClass) => {
    setSelectedClass(selectedClass);
    // Reset the selected chapter when a class is selected
    setSelectedChapter('');
  };

  const handleChapterSelected = (selectedChapter) => {
    setSelectedChapter(selectedChapter);
  };
  useEffect(() => {
    console.log(selectedSubject)
    console.log(selectedClass)
    console.log(selectedChapter)
  }, [selectedSubject])

  return (
    <div className="App">
      <h1>Test Generator App</h1>
      <SubjectSelection onSubjectSelected={handleSubjectSelected} selectedSubject={selectedSubject} />
      {selectedSubject && (
        <>
          <ClassSelection
            selectedSubject={selectedSubject}
            selectedClass={selectedClass}
            onClassSelected={handleClassSelected}
          />
          {selectedClass && (
            <>
              <ChapterSelection
                selectedSubject={selectedSubject}
                selectedClass={selectedClass}
                selectedChapter={selectedChapter}
                onChapterSelected={handleChapterSelected}
              />
              {selectedChapter && (
                <QuestionPaper
                  selectedSubject={selectedSubject}
                  selectedClass={selectedClass}
                  selectedChapter={selectedChapter}
                />
              )}
            </>
          )}
        </>
      )}
      {/* <p>Selected Subject: {selectedSubject}</p>
      <p>Selected Class: {selectedClass}</p>
      <p>Selected Chapter: {selectedChapter}</p> */}
      <QuestionPaper />
    </div>
  );
}

export default App;
