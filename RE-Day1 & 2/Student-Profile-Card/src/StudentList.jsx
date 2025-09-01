import React from 'react'
import StudentCard from './StudentCard'

function StudentList() {
  const students = [
    {
      name: "Alice Johnson",
      age: 21,
      course: "Computer Science",
      isGraduated: false,
      skills: ["JavaScript", "React", "CSS"],
      photo: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Bob Smith",
      age: 24,
      course: "Mechanical Engineering",
      isGraduated: true,
      skills: ["AutoCAD", "Matlab", "Python"],
      photo: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      name: "Charlie Brown",
      age: 22,
      course: "Business Administration",
      isGraduated: false,
      skills: ["Marketing", "Excel", "Communication"],
      photo: "https://randomuser.me/api/portraits/men/46.jpg"
    }
  ]

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {students.map((student, index) => (
        <StudentCard key={index} {...student} />
      ))}
    </div>
  )
}

export default StudentList
