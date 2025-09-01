import React from 'react';
import PersonalBio from './PersonalBio.jsx';

const App = () => {
  return (
    <div>
      <PersonalBio 
        name="Vani" 
        age={32} 
        bio="I am a web developer learning React. I love building projects!" 
      />
    </div>
  );
}

export default App;
