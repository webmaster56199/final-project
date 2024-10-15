import React from 'react';
import { Link } from 'react-router-dom';


const App = () => {
  return (
    <div className="wrapper bg-[#111827] text-white w-full min-h-screen h-max">
      <div className='wrapper-main w-[1200px] mx-auto py-4'>
      <div className='upper-part flex font-sans font-medium w-[10rem] gap-10'>
        <h1>Faculty</h1>
        <h1>Students</h1>
        <h1>Admin</h1>
      </div>
      <div className='main-part flex w-full justify-between mt-[20rem] items-center'>
        <div className='left-part'>
          <h1 className='font-sans font-medium text-4xl'>ATTENDEASE</h1>
          <p className='font-sans w-[30rem] mt-4'>In the heart of a bustling city, where skyscrapers kissed the clouds and streets pulsed with life.</p>
        </div>
        <div className='right-part bg-white w-[30rem] text-black rounded-lg p-5 h-max'>
          <div className='data-form space-y-3'>
            <h1 className='font-bold block font-sans text-3xl text-center mb-6'>Sign In</h1>
            <input className='block border-gray-200 border rounded-lg w-full p-2'  type='text' placeholder='Email address' />
            <input  className='block border-gray-200 border rounded-lg w-full p-2 'type='text' placeholder='Password' />
            <input className='block border-gray-200 border rounded-lg w-full p-2' type='text' placeholder='' />
            <div className='pt-2'>
            <Link to="/dashboard" className='bg-black text-white px-4 py-2 rounded-md'>Sign In</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;