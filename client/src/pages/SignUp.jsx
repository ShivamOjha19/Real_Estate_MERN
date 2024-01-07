/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,

    });
  }
  useEffect(() => {
    console.log(formData);
  }, [formData])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(false);
      const res = await fetch('/api/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json();

      if (data.success === false) {
        setError(data.message);
        setLoading(false)
        return
      }
      setLoading(false);
      setError(null);

      console.log(data);
      navigate('/sign-in')

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }

  }
  return (
    <div className='p-3 mx-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
      <form className='flex flex-col gap-4 items-center' onSubmit={handleSubmit}>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange} />
        <input type="text" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type="text" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading....' : 'SignUp'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an Account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>SignIn</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
