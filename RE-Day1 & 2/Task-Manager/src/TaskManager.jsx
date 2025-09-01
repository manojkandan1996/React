import React, { useState } from 'react';

const TaskManager = ({ tasks }) => {
  const [taskList, setTaskList] = useState(
    tasks.map(task => ({ ...task, completed: false }))
  );

  const handleToggle = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTaskList(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Task Manager</h2>
      <ul className="space-y-4">
        {taskList.map((task, index) => (
          <li key={index} className="flex items-center justify-between">
            <label className={`flex items-center space-x-3 cursor-pointer ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => handleToggle(index)} 
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span>{task.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;

