import React from 'react'
import EmployeeCard from './EmployeeCard'

export default function EmployeeList({ employees, onPromote }) {
  return (
    <section className="employee-list">
      {employees.map(emp => (
        <EmployeeCard 
          key={emp.id}
          name={emp.name}
          designation={emp.designation}
          department={emp.department}
          isActive={emp.isActive}
          onPromote={() => onPromote(emp.id)}
        />
      ))}
    </section>
  )
}
