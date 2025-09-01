import React from 'react';
import TaskManager from './TaskManager.jsx';

const App = () => {
  const tasks = [
    { name: 'Complete React project' },
    { name: 'Read Tailwind docs' },
    { name: 'Go for a walk' },
    { name: 'Prepare dinner' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <TaskManager tasks={tasks} />
    </div>
  );
};

export default App;
