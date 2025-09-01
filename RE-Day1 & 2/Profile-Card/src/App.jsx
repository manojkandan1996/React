import React from 'react';
import Profile from './Profile.jsx';

const App = () => {
  return (
    <div>
      <Profile name="Alice Johnson" age={28} city="London" />
      <Profile /> {/* Uses default props */}
    </div>
  );
};

export default App;
