import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '15px' }}>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ padding: '5px 0' }}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
