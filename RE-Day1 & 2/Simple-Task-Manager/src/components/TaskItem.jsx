import React from 'react'

export default function TaskItem({ taskName, isCompleted, onMarkDone }) {
  return (
    <div className={`task-item ${isCompleted ? 'task-done' : ''}`}>
      <div className="task-left">
        <span className={`status ${isCompleted ? 'done' : 'pending'}`}>
          {isCompleted ? '✅' : '❌'}
        </span>
        <span className="task-title">{taskName}</span>
      </div>

      <div className="task-actions">
        <button
          className="mark-btn"
          onClick={onMarkDone}
          disabled={isCompleted}
          aria-disabled={isCompleted}
        >
          {isCompleted ? 'Completed' : 'Mark as Done'}
        </button>
      </div>
    </div>
  )
}
