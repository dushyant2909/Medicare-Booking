import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  })

  const handleInput = (event) => {
    setformData({ ...formData, [event.target.name]: event.target.value })
  }

  const submitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <section className="px-5 lg:px-0 ">
      <div className="w-full max-w-[520px] lg:border mx-auto rounded-lg lg:shadow-md p-5 lg:p-10">
        <h3 className="text-headingColor text-[25px] lg:text-3xl  leading-9 font-bold mb-10 px-2 lg:mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 👋
        </h3>
        <form onSubmit={submitHandler}>
          <div className="mb-5">
            <input type="email" placeholder='E-mail' name="email"
              className='w-full px-4 py-3 border-b border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColor text-[20px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
              value={formData.email} onChange={handleInput} required />
          </div>

          <div className="mb-5">
            <input type="password" placeholder='Password' name="password"
              className='w-full px-4 py-3 border-b border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColor text-[20px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
              value={formData.password} onChange={handleInput} required />
          </div>

          <div className="mt-5 px-5">
            <button className='btn w-full rounded-lg text-white text-[18px] ' type='submit'>Login</button>
          </div>

          <div className="mt-5 text-textColor text-center font-semibold">
            Didn't have an account? <Link to={'/signup'} className='text-primaryColor'>Register</Link>
          </div>
        </form>
      </div>


    </section>
  )
}

export default Login