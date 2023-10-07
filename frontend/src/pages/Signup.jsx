import React, { useState } from 'react';
import signupImg from '../assets/images/signup.gif';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'patient',
    gender: 'male',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* -------Img box--------- */}
          <div className="hidden lg:block rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="Signup Image" className="rounded-l-lg w-full h-[450px]" />
            </figure>
          </div>

          {/* -------Sign up form------- */}
          <div className="rounded-l-lg lg:pl-16 lg:py-10 bg-white">
            <h3 className="text-headingColor text-3xl px-2 leading-9 font-bold mb-5 lg:mb-7">
              Create an <span className="text-primaryColor">account</span> 🚀
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  className="w-full px-4 py-2 rounded-lg border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor leading-7 text-headingColor placeholder-text-textColor cursor-pointer"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  className="w-full px-4 py-2 rounded-lg border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor leading-7 text-headingColor placeholder-text-textColor cursor-pointer"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-7">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  className="w-full px-4 py-2 rounded-lg border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor leading-7 text-headingColor placeholder-text-textColor cursor-pointer"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2 px-1 flex flex-wrap items-center justify-between">
                <label htmlFor="role" className="text-headingColor flex items-center gap-2 font-bold text-[16px] leading-7">
                  Are you a:
                  <select
                    name="role"
                    value={formData.role}
                    className="text-textColor bg-none font-semibold text-[15px] leading-7 p-1 focus:outline-none">
                    <option value="patient" >Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label htmlFor="gender" className="text-headingColor flex items-center gap-3 font-bold text-[16px] leading-7">
                  Gender:
                  <select
                    name="gender"
                    value={formData.gender}
                    className="text-textColor bg-none font-semibold text-[15px] p-1 leading-7 focus:outline-none">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>
              <div className="px-3">
                <button className="btn w-full rounded-lg text-white text-[18px]">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
