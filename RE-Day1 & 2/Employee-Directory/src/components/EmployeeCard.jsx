import React, { Component } from 'react'

class EmployeeCard extends Component {
  render() {
    const { name, designation, department, isActive, onPromote } = this.props

    return (
      <div className="employee-card">
        <h2>{name}</h2>
        <p><b>Designation:</b> {designation}</p>
        <p><b>Department:</b> {department}</p>
        <p className={isActive ? "active" : "inactive"}>
          {isActive ? "Available ✅" : "Not Available ❌"}
        </p>
        <button onClick={onPromote}>Promote</button>
      </div>
    )
  }
}

export default EmployeeCard
