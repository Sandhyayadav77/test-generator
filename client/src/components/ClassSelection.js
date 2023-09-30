// src/ClassSelection.js
import React from 'react';

const ClassSelection = ({ selectedSubject, onClassSelected, selectedClass }) => {
  const handleClassChange = (event) => {
    const newSelectedClass = event.target.value;
    onClassSelected(newSelectedClass); // Notify the parent component of the selected class
  };

  // Update classData to include classes from Nursery to 8
  const classData = {
    maths: [1, 2,3,4,5,6,7,8],
    science:[1, 2,3,4,5,6,7,8],
    history:[1, 2,3,4,5,6,7,8],
    English: [1, 2,3,4,5,6,7,8],
  };

  const classOptions = classData[selectedSubject] || [];

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">
        Select a Class for {selectedSubject}:
      </h2>
      <select
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        onChange={handleClassChange}
      >
        <option value="">-- Select a Class --</option>
        {classOptions.map((className) => (
          <option key={className} value={className}>
            {className}
          </option>
        ))}
      </select>
      <p className="mt-2">Selected Class: {selectedClass}</p>
    </div>
  );
};

export default ClassSelection;
