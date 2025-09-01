import React from 'react';
import TaskList from './TaskList.jsx';

const App = () => {
  const tasks = [
    "Complete React project",
    "Read Vite documentation",
    "Go for a walk",
    "Prepare dinner"
  ];

  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
