import React from 'react';

// Functional component with destructuring and default props
const Profile = ({ name, age, city }) => {
  const cardStyle = {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    width: '250px',
    margin: '20px auto',
    backgroundColor: '#e0f7fa',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
};

// Default props
Profile.defaultProps = {
  name: 'John Doe',
  age: 25,
  city: 'New York'
};

export default Profile;
