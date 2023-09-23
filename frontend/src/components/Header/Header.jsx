import React, { useState, useRef, useEffect } from 'react'
import logo from '../../assets/images/logo.png'
import userImage from '../../assets/images/avatar-icon.png'
import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'

const navlinks = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
]

const Header = () => {
  //Navbar

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      }
      else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()

    return () => window.removeEventListener('scroll', handleStickyHeader)
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')


  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-around">
          {/* ----------- Logo ---------------- */}
          <Link to={'/'} className='p-1'>
            <img src={logo} alt="Company Logo" />
          </Link>

          {/*------------ Menu options ------------ */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.2rem]">
              {
                navlinks.map((item, index) => (
                  <li key={index} >
                    <NavLink to={item.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[18px] leading-7 font-[600]' :
                      'text-textColor text-[18px] leading-7 font-[500] hover:text-primaryColor'}>{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* ------------ Navbar right ---------------- */}
          <div className="flex items-center gap-4">
            {/* User-image */}
            <div className='hidden'>
              <Link to={'/'}>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <img src={userImage} className='w-full rounded-full' alt="User avatar" />
                </figure>
              </Link>
            </div>

            {/* Login button */}
            <Link to={'/login'}>
              <button className='bg-primaryColor py-2 px-5 text-white h-[40px] font-[600] flex items-center justify-center rounded-[50px]'>Login</button>
            </Link>

            {/* Shorteer devices side menu option in navbar */}
            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer'></BiMenu>
            </span>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header