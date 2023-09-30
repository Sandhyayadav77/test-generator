// src/SubjectSelection.js
import React from 'react';

const SubjectSelection = ({ onSubjectSelected,  selectedSubject}) => {
  const handleSubjectChange = (event) => {
    const selectedSubject = event.target.value;
    onSubjectSelected(selectedSubject); // Notify the parent component of the selected subject
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Select a Subject:</h2>
      <select
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        onChange={handleSubjectChange}
      >
        <option value="">-- Select a Subject --</option>
        <option value="maths">Mathematics</option>
        <option value="science">Science</option>
        <option value="history">History</option>
        <option value="English">English</option>
      </select>
      <p className="mt-2">Selected Subject: {selectedSubject}</p>
    </div>
  );
};

export default SubjectSelection;
