import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavItems = () => {
    const [menuToogle, setMenutoggle] = useState(false)
    const [socialToggle, setSocialToogle] = useState(false)
    const [headerFixed, setHeaderFixed] = useState(false)

    // Add event listener

    window.addEventListener("scroll", ()=>{
        if(window.scrollY >200){
            setHeaderFixed(true)
        }
        else{
            setHeaderFixed(false)
        }
    })
  return (
    <header>
        {/* {header top start} */}
        <div className=''>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to="/signup" className='lab-btn me-3'><span>Create Account</span></Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavItems