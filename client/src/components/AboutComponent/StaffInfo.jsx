import React from 'react';

const StaffInfo = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 space-y-4 divide-x divide-gray-300'>
      <div className='space-y-2 flex flex-col items-center w-full'>
        <h1 className='text-6xl font-bold opacity-70'>229</h1>
        <p className='font-semibold opacity-60'>HAPPY CLIENTS</p>
      </div>
      <div className='space-y-2 flex flex-col items-center w-full '>
        <h1 className='text-6xl font-bold opacity-70'>109</h1>
        <p className='font-semibold opacity-60'>COMPLETED PROJECTS</p>
      </div>
      <div className='space-y-2 flex flex-col items-center w-full '>
        <h1 className='text-6xl font-bold opacity-70'>22</h1>
        <p className='font-semibold opacity-60'>AWESOME STAFF</p>
      </div>
      <div className='space-y-2 flex flex-col items-center w-full'>
        <h1 className='text-6xl font-bold opacity-70'>11</h1>
        <p className='font-semibold opacity-60'>WINNING AWARDS</p>
      </div>
    </div>
  );
}

export default StaffInfo;
