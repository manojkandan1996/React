import React from 'react';
import './PersonalBio.css'; // External CSS

const PersonalBio = ({ name, age, bio }) => {
  return (
    <div className="bio-container">
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>{bio}</p>
    </div>
  );
}

export default PersonalBio;
