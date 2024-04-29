import React from 'react'
import footerlogo from '../assets/images/footer-logo.svg'
import { Facebook, Twitter, Instagram, Mail } from '../components/Icon'

function Footer() {
    return (
        <>
            <footer className='bg-footer d-flex'>
                <div className="container-2 w-100 d-flex flex-column flex-grow-1 justify-content-center">
                    <div className=" d-flex justify-content-md-between w-60 ms-md-auto flex-column flex-md-row align-items-center">
                        <div className="">
                            <img src={footerlogo} alt="footerlogo" className=' cursor-pointer' />
                            <p className=' ff-poppins fw-normal text-16 lh-25 mb-0 text-white max-w-264 text-center mt-3'>(c)2022 MARC JOACHIM HUBRICH
                                All Rights Reserved</p>
                        </div>
                        <div className="d-flex flex-md-column gap-12 mt-3 mt-md-0">
                            <Facebook />
                            <Twitter />
                            <Mail />
                            <Instagram />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer