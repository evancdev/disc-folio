import React from 'react';

const Member = ({className}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    className = {className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2z" />
    <path d="M16 4.384a3 3 0 0 1 0 5.808" fill="none" stroke="rgb(156, 163, 175)" strokeWidth="2" strokeLinecap="round" />
    <path d="M20.5 21v-1.5a3 3 0 0 0-2.25-2.9" fill="none" stroke="rgb(156, 163, 175)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="9" cy="7" r="4" />
  </svg>
);

export default Member;