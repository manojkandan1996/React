import React, { useState } from 'react'
import EmployeeList from './components/EmployeeList'

export default function App() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Alice Johnson", designation: "Software Engineer", department: "IT", isActive: true },
    { id: 2, name: "Bob Smith", designation: "UI/UX Designer", department: "Design", isActive: true },
    { id: 3, name: "Charlie Brown", designation: "HR Executive", department: "HR", isActive: false },
    { id: 4, name: "Diana Prince", designation: "Project Manager", department: "Operations", isActive: true },
  ])

  // Promote function (callback)
  const promoteEmployee = (id) => {
    setEmployees(employees.map(emp =>
      emp.id === id ? { ...emp, designation: "Senior " + emp.designation } : emp
    ))
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>👩‍💼 Employee Directory</h1>
        <p className="subtitle">Class + Function Components • Props • Conditional Rendering</p>
      </header>

      <main>
        <EmployeeList employees={employees} onPromote={promoteEmployee} />
      </main>

      <footer className="app-footer">
        <small>Built with React + Vite</small>
      </footer>
    </div>
  )
}
