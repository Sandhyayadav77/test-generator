// import React, { useRef, useState } from 'react';

// const CustomQuestionPaper = ({ selectedQuestions }) => {
//   const customQuestionPaperRef = useRef(null);
//   const [schoolName, setSchoolName] = useState('');
//   const [subject, setSubject] = useState('');
//   const [classInfo, setClassInfo] = useState('');
//   const [totalMarks, setTotalMarks] = useState('');
//   const [timeForExam, setTimeForExam] = useState('');
//   const [marks, setMarks] = useState({});
//   const [selectedQuestionsState, setSelectedQuestionsState] = useState(selectedQuestions);

//   // Function to handle printing the CustomQuestionPaper component
//   const handlePrint = () => {
//     if (customQuestionPaperRef.current) {
//       // Hide the "Print" button before printing
//       const printButton = document.getElementById('print-button');
//       if (printButton) {
//         printButton.style.display = 'none';
//       }
  
//       const printWindow = window.open('', '', 'width=595,height=842');
//       printWindow.document.open();
//       printWindow.document.write(`
//         <html>
//           <head>
//             <title>Custom Question Paper</title>
//             <style>
//               @media print {
//                 body {
//                   width: 21cm;
//                   height: 29.7cm;
//                   margin: 0 auto;
//                   padding: 20px;
//                 }
           
//                   input[type="text"] {
//                     border: none !important;
//                     outline: none !important;
//                   }
//                 }
//                 button#print-button {
//                   display: none;
//                 }
//                 .header {
//                   text-align: center;
//                   margin-bottom: 20px;
//                 }
//                 .custom{
//                   display:none;
//                 }
                
//                 .question {
//                   margin-bottom: 20px;
//                 }
//               }
//             </style>
//           </head>
//           <body>
//             <div class="custom-question-paper" ref="customQuestionPaperRef">
           
//               ${customQuestionPaperRef.current.innerHTML}
//             </div>
//           </body>
//         </html>
//       `);
//       printWindow.document.close();
//       printWindow.print();
//       printWindow.close();

//       // Show the "Print" button again after printing
//       if (printButton) {
//         printButton.style.display = 'block';
//       }
//     }
//   };



//   // Function to handle marks input change
//   const handleMarksChange = (questionIndex, event) => {
//     const { name, value } = event.target;
//     setMarks({ ...marks, [name]: value });
//   };
//   const removeQuestion = (categoryName, questionIndex) => {
//     const updatedQuestions = { ...selectedQuestionsState };
//     updatedQuestions[categoryName].splice(questionIndex, 1);
//     setSelectedQuestionsState(updatedQuestions);
//   };

//   return (
//     <div className="custom-question-paper" ref={customQuestionPaperRef}>
//       <h2 className="text-3xl font-semibold custom text-center">Custom Question Paper</h2>
//       <button
//         id="print-button"
//         className="bg-blue-500 mx-3 my-2 text-white py-2 px-4 rounded mt-4 flex justify-center items-center w-full m-auto"
//         onClick={handlePrint}
//       >
//         Print
//       </button>
//       <div className="header flex flex-col justify-center items-center">
//         <div className="column flex ">
//           <label>School Name:</label>
//           <input
//             className='border px-1  outline-none ml-3  my-1'
//             type="text"
//             placeholder=" Enter School Name"
//             value={schoolName}
//             onChange={(e) => setSchoolName(e.target.value)}
//           />
//         </div>
//         <div className="column flex">
//           <label>Subject:</label>
//           <input
//             className='border px-1  outline-none ml-3  my-1'
//             type="text"
//             placeholder=" Enter Subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//           />
//         </div>
//         <div className="column flex ">
//           <label>Class:</label>
//           <input
//             type="text"
//             className='border px-1  outline-none ml-3  my-1'
//             placeholder="Enter Class"
//             value={classInfo}
//             onChange={(e) => setClassInfo(e.target.value)}
//           />
//         </div>
//         <div className="column flex ">
//           <label>Total Marks:</label>
//           <input
//             type="text"
//             className='border px-1  outline-none ml-3 my-1'
//             placeholder="Enter Total Marks"
//             value={totalMarks}
//             onChange={(e) => setTotalMarks(e.target.value)}
//           />
//         </div>
//         <div className="column flex ">
//           <label>Total Time (minutes):</label>
//           <input
//             type="text"
//             className='border px-1  outline-none ml-3  my-1'
//             placeholder=" Enter Total Time (minutes)"
//             value={timeForExam}
//             onChange={(e) => setTimeForExam(e.target.value)}
//           />
//         </div>
//       </div>
//       {Object.keys(selectedQuestions).map((categoryName, categoryIndex) => (
//         <div key={categoryIndex}>
//           <h3 className='font-semibold'> Question {categoryIndex + 1}: {categoryName}</h3>
//           {selectedQuestions[categoryName].map((question, questionIndex) => (
//             <div key={questionIndex} className="question">
//                <button
//                 className="delete-button"
//                 onClick={() => removeQuestion(questionIndex)}
//                Delete
//               >
//                Delete

//               </button>
//               <div className='flez flex-row justify-between items-center'>
//               <p>
//                 Q{questionIndex + 1}: {question.question}
//               </p>
//               {/* <div className='flex'>
//                 <label>Marks:</label>
//                 <input
//                   type="text"
//                   name={`marks_${questionIndex}`}
//                   className="marks-input border w-14"
//                   placeholder="Marks"
//                   value={marks[`marks_${questionIndex}`] || ''}
//                   onChange={(e) => handleMarksChange(`marks_${questionIndex}`, e)}
//                 />
//               </div> */}
//               </div>
//               {question.options && question.options.length > 0 && (
//                 <div>
//                   <p>Options:</p>
//                   <ul>
//                     {question.options.map((option, optionIndex) => (
//                       <div key={optionIndex}>
//                         <label>
//                           <input type="radio" name={`question_${questionIndex}`} value={option} />
//                           {option}
//                         </label>
//                       </div>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ))}

//     </div>
//   );
// };

// export default CustomQuestionPaper;


// import React, { useRef, useState } from 'react';

// const CustomQuestionPaper = ({ selectedQuestions }) => {
//   const customQuestionPaperRef = useRef(null);
//   const [schoolName, setSchoolName] = useState('');
//   const [subject, setSubject] = useState('');
//   const [classInfo, setClassInfo] = useState('');
//   const [totalMarks, setTotalMarks] = useState('');
//   const [timeForExam, setTimeForExam] = useState('');
//   const [marks, setMarks] = useState({});
//   const [selectedQuestionsState, setSelectedQuestionsState] = useState(selectedQuestions);

//   // Function to handle printing the CustomQuestionPaper component
//   const handlePrint = () => {
//     if (customQuestionPaperRef.current) {
//       // Hide the "Print" button before printing
//       const printButton = document.getElementById('print-button');
//       if (printButton) {
//         printButton.style.display = 'none';
//       }
  
//       const printWindow = window.open('', '', 'width=595,height=842');
//       printWindow.document.open();
//       printWindow.document.write(`
//         <html>
//           <head>
//             <title>Custom Question Paper</title>
//             <style>
//               @media print {
//                 body {
//                   width: 21cm;
//                   height: 29.7cm;
//                   margin: 0 auto;
//                   padding: 20px;
//                 }
           
//                   input[type="text"] {
//                     border: none !important;
//                     outline: none !important;
//                   }
//                 }
//                 button#print-button {
//                   display: none;
//                 }
//                 .header {
//                   text-align: center;
//                   margin-bottom: 20px;
//                 }
//                 .custom{
//                   display:none;
//                 }
                
//                 .question {
//                   margin-bottom: 20px;
//                 }
//               }
//             </style>
//           </head>
//           <body>
//             <div class="custom-question-paper" ref="customQuestionPaperRef">
           
//               ${customQuestionPaperRef.current.innerHTML}
//             </div>
//           </body>
//         </html>
//       `);
//       printWindow.document.close();
//       printWindow.print();
//       printWindow.close();

//       // Show the "Print" button again after printing
//       if (printButton) {
//         printButton.style.display = 'block';
//       }
//     }
//   };



//   // Function to handle marks input change
//   const handleMarksChange = (questionIndex, event) => {
//     const { name, value } = event.target;
//     setMarks({ ...marks, [name]: value });
//   };
//   const removeQuestion = (categoryName, questionIndex) => {
//     const updatedQuestions = { ...selectedQuestionsState };
//     updatedQuestions[categoryName].splice(questionIndex, 1);
//     setSelectedQuestionsState(updatedQuestions);
//   };

//   return (
//     <div className="custom-question-paper" ref={customQuestionPaperRef}>
//       <h2 className="text-3xl font-semibold custom text-center">Custom Question Paper</h2>
//       <button
//         id="print-button"
//         className="bg-blue-500 mx-3 my-2 text-white py-2 px-4 rounded mt-4 flex justify-center items-center w-full m-auto"
//         onClick={handlePrint}
//       >
//         Print
//       </button>
//       <div className="header flex flex-col justify-center items-center">
//         <div className="column flex ">
//           <label>School Name:</label>
//           <input
//             className='border px-1  outline-none ml-3  my-1'
//             type="text"
//             placeholder=" Enter School Name"
//             value={schoolName}
//             onChange={(e) => setSchoolName(e.target.value)}
//           />
//         </div>
//         <div className="column flex">
//           <label>Subject:</label>
//           <input
//             className='border px-1  outline-none ml-3  my-1'
//             type="text"
//             placeholder=" Enter Subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//           />
//         </div>
//         <div className="column flex ">
//           <label>Class:</label>
//           <input
//             type="text"
//             className='border px-1  outline-none ml-3  my-1'
//             placeholder="Enter Class"
//             value={classInfo}
//             onChange={(e) => setClassInfo(e.target.value)}
//           />
//         </div>
//         <div className="column flex ">
//           <label>Total Marks:</label>
//           <input
//             type="text"
//             className='border px-1  outline-none ml-3 my-1'
//             placeholder="Enter Total Marks"
//             value={totalMarks}
//             onChange={(e) => setTotalMarks(e.target.value)}
//           />
//         </div>
//         <div className="column flex ">
//           <label>Total Time (minutes):</label>
//           <input
//             type="text"
//             className='border px-1  outline-none ml-3  my-1'
//             placeholder=" Enter Total Time (minutes)"
//             value={timeForExam}
//             onChange={(e) => setTimeForExam(e.target.value)}
//           />
//         </div>
//       </div>
//       {Object.keys(selectedQuestions).map((categoryName, categoryIndex) => (
//         <div key={categoryIndex}>
//           <h3 className='font-semibold'> Question {categoryIndex + 1}: {categoryName}</h3>
//           {selectedQuestions[categoryName].map((question, questionIndex) => (
//             <div key={questionIndex} className="question">
//                <button
//                 className="delete-button"
//                 onClick={() => removeQuestion(categoryName, questionIndex)}
//                >
//                  Delete
//                </button>
//               <div className='flez flex-row justify-between items-center'>
//               <p>
//                 Q{questionIndex + 1}: {question.question}
//               </p>
//               {/* <div className='flex'>
//                 <label>Marks:</label>
//                 <input
//                   type="text"
//                   name={`marks_${questionIndex}`}
//                   className="marks-input border w-14"
//                   placeholder="Marks"
//                   value={marks[`marks_${questionIndex}`] || ''}
//                   onChange={(e) => handleMarksChange(`marks_${questionIndex}`, e)}
//                 />
//               </div> */}
//               </div>
//               {question.options && question.options.length > 0 && (
//                 <div>
//                   <p>Options:</p>
//                   <ul>
//                     {question.options.map((option, optionIndex) => (
//                       <div key={optionIndex}>
//                         <label>
//                           <input type="radio" name={`question_${questionIndex}`} value={option} />
//                           {option}
//                         </label>
//                       </div>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CustomQuestionPaper;


import React, { useRef, useState } from 'react';

const CustomQuestionPaper = ({ selectedQuestions }) => {
  const customQuestionPaperRef = useRef(null);
  const [schoolName, setSchoolName] = useState('');
  const [subject, setSubject] = useState('');
  const [classInfo, setClassInfo] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [timeForExam, setTimeForExam] = useState('');
  const [marks, setMarks] = useState({});
  const [selectedQuestionsState, setSelectedQuestionsState] = useState(selectedQuestions);
console.log('selectedQuestionsState', selectedQuestionsState)
  // Function to handle printing the CustomQuestionPaper component
  const handlePrint = () => {
    if (customQuestionPaperRef.current) {
      // Hide the "Print" button before printing
      const printButton = document.getElementById('print-button');
      if (printButton) {
        printButton.style.display = 'none';
      }

      const printWindow = window.open('', '', 'width=595,height=842');
      printWindow.document.open();
      printWindow.document.write(`
        <html>
          <head>
            <title>Custom Question Paper</title>
            <style>
              @media print {
                body {
                  width: 21cm;
                  height: 29.7cm;
                  margin: 0 auto;
                  padding: 20px;
                }

                input[type="text"] {
                  border: none !important;
                  outline: none !important;
                }
              }
              button#print-button {
                display: none;
              }
              .header {
                text-align: center;
                margin-bottom: 20px;
              }
              .custom {
                display: none;
              }

              .question {
                margin-bottom: 20px;
              }
            </style>
          </head>
          <body>
            <div class="custom-question-paper" ref="customQuestionPaperRef">

              ${customQuestionPaperRef.current.innerHTML}
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
      printWindow.close();

      // Show the "Print" button again after printing
      if (printButton) {
        printButton.style.display = 'block';
      }
    }
  };

  // Function to handle marks input change
  const handleMarksChange = (questionIndex, event) => {
    const { name, value } = event.target;
    setMarks({ ...marks, [name]: value });
  };

  // Function to remove a question
  const removeQuestion = (categoryName, questionIndex, question) => {
    const updatedQuestions = { ...selectedQuestionsState };
    console.log(updatedQuestions)
    console.log(categoryName, questionIndex, question)
    if (updatedQuestions[categoryName]) {
      updatedQuestions[categoryName].splice(questionIndex, 1);
      setSelectedQuestionsState(updatedQuestions);
    }
  };

  return (
    <div className="custom-question-paper" ref={customQuestionPaperRef}>
      <h2 className="text-3xl font-semibold custom text-center">Custom Question Paper</h2>
      <button
        id="print-button"
        className="bg-blue-500 mx-3 my-2 text-white py-2 px-4 rounded mt-4 flex justify-center items-center w-full m-auto"
        onClick={handlePrint}
      >
        Print
      </button>
      <div className="header flex flex-col justify-center items-center">
        <div className="column flex">
          <label>School Name:</label>
          <input
            className='border px-1 outline-none ml-3 my-1'
            type="text"
            placeholder=" Enter School Name"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </div>
        <div className="column flex">
          <label>Subject:</label>
          <input
            className='border px-1 outline-none ml-3 my-1'
            type="text"
            placeholder=" Enter Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="column flex">
          <label>Class:</label>
          <input
            type="text"
            className='border px-1 outline-none ml-3 my-1'
            placeholder="Enter Class"
            value={classInfo}
            onChange={(e) => setClassInfo(e.target.value)}
          />
        </div>
        <div className="column flex">
          <label>Total Marks:</label>
          <input
            type="text"
            className='border px-1 outline-none ml-3 my-1'
            placeholder="Enter Total Marks"
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
          />
        </div>
        <div className="column flex">
          <label>Total Time (minutes):</label>
          <input
            type="text"
            className='border px-1 outline-none ml-3 my-1'
            placeholder=" Enter Total Time (minutes)"
            value={timeForExam}
            onChange={(e) => setTimeForExam(e.target.value)}
          />
        </div>
      </div>
      {Object.keys(selectedQuestions).map((categoryName, categoryIndex) => (
        <div key={categoryIndex}>
          <h3 className='font-semibold'>Question {categoryIndex + 1}: {categoryName}</h3>
          {selectedQuestions[categoryName].map((question, questionIndex) => (
            <div key={questionIndex} className="question">
              <button
                className="delete-button"
                onClick={() => removeQuestion(categoryName, questionIndex, question)}
              >
                Delete
              </button>
              <div className='flex flex-row justify-between items-center'>
                <p>
                  Q{questionIndex + 1}: {question.question}
                </p>
                {/* <div className='flex'>
                  <label>Marks:</label>
                  <input
                    type="text"
                    name={`marks_${questionIndex}`}
                    className="marks-input border w-14"
                    placeholder="Marks"
                    value={marks[`marks_${questionIndex}`] || ''}
                    onChange={(e) => handleMarksChange(`marks_${questionIndex}`, e)}
                  />
                </div> */}
              </div>
              {question.options && question.options.length > 0 && (
                <div>
                  <p>Options:</p>
                  <ul>
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex}>
                        <label>
                          <input type="radio" name={`question_${questionIndex}`} value={option} />
                          {option}
                        </label>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CustomQuestionPaper;
