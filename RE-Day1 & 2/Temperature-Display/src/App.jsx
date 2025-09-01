import React from 'react';
import Temperature from './Temperature.jsx';

const App = () => {
  return (
    <div>
      <Temperature value={35} />
      <Temperature value={10} />
      <Temperature value={22} />
    </div>
  );
};

export default App;
