import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='space-y-2 flex items-center justify-center flex-col my-30'>
      <h1 className="text-3xl font-semibold text-red-600 font-['Playfair_Display']k">Error 404 - Page not found</h1>
      <p className='text-xl'>Go back to <Link to={"/"} className="text-blue-700 font-['Playfair_Display'] font-bold">Home</Link></p>
    </div>
  );
}

export default Error;
