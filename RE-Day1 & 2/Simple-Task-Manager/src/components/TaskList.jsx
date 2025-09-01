import React from 'react'
import TaskItem from './TaskItem'

export default class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        { id: 1, taskName: 'Finish project report', isCompleted: false },
        { id: 2, taskName: 'Buy groceries', isCompleted: true },
        { id: 3, taskName: 'Read chapter 7', isCompleted: false },
        { id: 4, taskName: 'Walk the dog', isCompleted: false }
      ]
    }
  }

  // Arrow function to preserve `this` and to pass as callback
  handleMarkAsDone = (id) => {
    this.setState((prev) => ({
      tasks: prev.tasks.map(t =>
        t.id === id ? { ...t, isCompleted: true } : t
      )
    }))
  }

  render() {
    const { tasks } = this.state

    return (
      <section className="task-list">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks available.</p>
        ) : (
          tasks.map(task => (
            <TaskItem
              key={task.id}
              taskName={task.taskName}
              isCompleted={task.isCompleted}
              onMarkDone={() => this.handleMarkAsDone(task.id)}
            />
          ))
        )}
      </section>
    )
  }
}
