import React, { useState } from 'react';

import './background button.css';

function Button() {
  const [bgColor, setBgColor] = useState('lightgray');

  const handleClick = () => {
    
    setBgColor(prevColor => (prevColor === 'lightgray' ? 'skyblue' : 'lightgray'));
  };

  
  

  return (
    <>

    <div className='button-container'>
    <button className='back-button'
      onClick={handleClick} >
      Click Me
    </button>
  
  </div>
  </>
  );
}

export default Button;
