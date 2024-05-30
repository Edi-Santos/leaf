import React from 'react';
import './inConstruction.css';

function InConstruction() {
  return (
    <div className='in-construction-container'>
      <h1 className='in-construction-text'>Página em Construção...</h1>
      <iframe
        className='in-construction-img'
        src='https://giphy.com/embed/jtXxlGob7X9wJlOfCc'
      ></iframe>
    </div>
  );
}

export default InConstruction;
