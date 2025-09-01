import React from 'react'

function StudentCard({ name, age, course, isGraduated, skills, photo }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '16px',
      width: '250px',
      margin: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <img 
        src={photo} 
        alt={name} 
        style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }}
      />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>
        {isGraduated ? "✅ Graduated" : "❌ Still Studying"}
      </p>
      <h4>Skills:</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {skills.map((skill, index) => (
          <li key={index}>⚡ {skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default StudentCard
