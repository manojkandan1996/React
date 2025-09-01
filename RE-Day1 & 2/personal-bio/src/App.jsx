import React from 'react';
import PersonalBio from './PersonalBio.jsx';

const App = () => {
  return (
    <div>
      <PersonalBio 
        name="manoj" 
        age={29} 
        bio="I am a web developer!" 
      />
    </div>
  );
}

export default App;
