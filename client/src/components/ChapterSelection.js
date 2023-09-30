// src/ChapterSelection.js
import React, { useState } from 'react';

const ChapterSelection = ({ selectedSubject, selectedClass, selectedChapter, onChapterSelected }) => {

  const handleChapterChange = (event) => {
    const newSelectedChapter = event.target.value;
    onChapterSelected(newSelectedChapter); // Notify the parent component of the selected chapter
  };

  // You can replace this sample chapter data with your actual chapter data
  const chapterData = {
    maths: {
      // class    
      1: [1, 2, 3],
      // class    
      2: [1, 2, 3],

      // Add chapters for other classes here
    },
    science: {
      // class    
      1: [1, 2, 3],
      // class    
      2: [1, 2, 3],

      // Add chapters for other classes here
    },
    history: {
      // class    
      1: [1, 2, 3],

      // class    
      2: [1, 2, 3],
      // Add chapters for other classes here
    },
    English: {
      // class    
      1: [1, 2, 3],
      // class    
      2: [1, 2, 3],

      // Add chapters for other classes here
    },
  };

  const chapters = chapterData[selectedSubject]?.[selectedClass] || [];

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">
        Select a Chapter for {selectedSubject}, {selectedClass}:
      </h2>
      <select
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
        onChange={handleChapterChange}
        value={selectedChapter}
      >
        <option value="">-- Select a Chapter --</option>
        {chapters.map((chapter) => (
          <option key={chapter} value={chapter}>
            {chapter}
          </option>
        ))}
      </select>
      <p className="mt-2">Selected Chapter: {selectedChapter}</p>
    </div>
  );
};

export default ChapterSelection;
