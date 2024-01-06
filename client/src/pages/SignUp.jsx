/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [formData , setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,

    });
  }
  useEffect(() => {
    console.log(formData);
  },[formData])

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const res = await fetch('/api/auth/sign-up' , {
      method: "POST",
      headers: {
        'Content-Type': 'applicationjson'
      },
      body: JSON.stringify(formData),
    })
    const data = await res.json();
    console.log(data);
  }
  return (
    <div className='p-3 mx-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
      <input type="text" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
      <input type="text" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
      <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>SignUp</button>
    </form>
    <div className='flex gap-2 mt-5'>
      <p>Have an Account?</p>
      <Link to={"/sign-in"}>
        <span className='text-blue-700'>SignIn</span>
      </Link>
    </div>
    </div>
  )
}
