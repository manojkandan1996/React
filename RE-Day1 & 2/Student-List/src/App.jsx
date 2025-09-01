import React from 'react';
import StudentList from './StudentList.jsx';

const App = () => {
  const students = [
    { name: 'Alice', marks: 75 },
    { name: 'Bob', marks: 45 },
    { name: 'Charlie', marks: 60 },
    { name: 'David', marks: 30 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <StudentList students={students} />
    </div>
  );
};

export default App;
