import React from 'react';

const Welcome = () => {
  // Inline CSS
  const style = {
    textAlign: 'center',
    backgroundColor: '#f1c40f',
    padding: '30px',
    borderRadius: '10px',
    color: '#2c3e50',
    fontSize: '24px',
    fontFamily: 'Arial, sans-serif',
    margin: '20px auto',
    width: '400px'
  };

  return (
    <div style={style}>
      Welcome to React Learning!
    </div>
  );
};

export default Welcome;
