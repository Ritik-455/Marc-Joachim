import React from 'react'
import logo from '../assets/images/Logo.svg'
import { useState } from 'react';

function Navbar() {
    const [show, setfirst] = useState(false);

    if (show === true) {
        document.body.classList.add('overflow_hidden')
    }
    else {
        document.body.classList.remove('overflow_hidden')
    }

    return (
        <>
            <div className=" container-2 w-100 ">
                <nav className=' d-flex justify-content-between pt-4'>
                    <img src={logo} alt="logo" className=' cursor-pointer position-relative z-3 ' />
                    <ul className={`${show ? "end-0" : "right_100"} d-flex  gap-4 align-items-center mobile-view `}>
                        <li><a href="#benifits" className=' ff-helve fw-normal text-16 lh-20 text-white nav_link position-relative d-none d-lg-block ' onClick={() => {
                            setfirst(!show);
                        }}>Benifits</a></li>
                        <li><a href="#testimonials" className=' ff-helve fw-normal text-16 lh-20 text-white nav_link position-relative d-none d-lg-block ' onClick={() => {
                            setfirst(!show);
                        }}>Testimonials</a></li>
                        <li><a href="#benifits" className=' ff-helve fw-normal text-16 lh-20 text-black nav_link position-relative d-lg-none' onClick={() => {
                            setfirst(!show);
                        }}>Benifits</a></li>
                        <li><a href="#testimonials" className=' ff-helve fw-normal text-16 lh-20 text-black nav_link position-relative d-lg-none' onClick={() => {
                            setfirst(!show);
                        }}>Testimonials</a></li>
                        <li><button className=' nav-btn ff-inter fw-medium text-white text-16 lh-24 '>Book consultation now</button></li>
                    </ul>
                    <div className="menu z-5 d-lg-none" onClick={() => {
                        setfirst(!show);
                    }}>
                        <span></span>
                        <span className='my-2'></span>
                        <span></span>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar