import React from 'react';

const Temperature = ({ value }) => {
  // Determine temperature status
  let status = '';
  let style = {
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
    width: '200px',
    margin: '20px auto',
    fontSize: '20px',
    color: '#fff'
  };

  if (value > 30) {
    status = 'Hot';
    style.backgroundColor = '#e74c3c'; // red
  } else if (value < 15) {
    status = 'Cold';
    style.backgroundColor = '#3498db'; // blue
  } else {
    status = 'Normal';
    style.backgroundColor = '#2ecc71'; // green
  }

  return (
    <div style={style}>
      Temperature: {value}°C <br />
      Status: {status}
    </div>
  );
};

export default Temperature;
