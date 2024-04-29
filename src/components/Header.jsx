import React from 'react'
import Navbar from './Navbar'
import Comnbtn from '../common/Comnbtn'
import call from '../assets/images/bxs_phone-call.svg'
import headellips from '../assets/images/header-ellips.png'
import faultellips from '../assets/images/fault-ellips.svg'

function Header() {
    return (
        <>
            <header className=' position-relative'>
                <div className=' bg-hero d-flex flex-column '>
                    <Navbar />
                    <div className="container-2 d-flex flex-grow-1 flex-column justify-content-center w-100 ">
                        <div className=" d-flex justify-content-lg-between max-w-1000 flex-wrap position-relative">
                            <div className=" max-w-657">
                                <p className=' ff-helve fw-normal text-18 lh-24 mb-0 color-brown text-capitalize '>Marc joachim hubrich</p>
                                <p className='ff-helve fw-normal text-60 lh-sm-77 text-black mb-0 text-uppercase '>Now I let you
                                    <div className=" d-lg-block">go!</div></p>
                                <p className=' ff-poppins fw-normal text-16 lh-25 mb-0 max-w-517'>For women who do not want to be completely dragged down by a SEPARATION. <div className=" d-lg-block">
                                    How to let go of your EX so you can leave him behind
                                    without having to run to a therapist right away.
                                </div>
                                </p>
                                <div className="d-flex gap-17 mt-32 ">
                                    <Comnbtn />
                                    <img src={call} alt="call-btn" />
                                </div>
                            </div>
                            <div className="d-flex align-items-end position-lg-absolute bottom-34 right-1 mt-5">
                                <div className=" d-flex gap-5 ">
                                    <div className="d-flex gap-3">
                                        <hr className=' text-border' />
                                        <p className=' ff-helve fw-normal text-16 lh-27 text-white mb-0 text-uppercase d-none d-lg-block'>Die wichtigsten <br /> Aspekte einer <br /> Trennung:</p>
                                        <p className=' ff-helve fw-normal text-16 lh-27 mb-0 text-uppercase d-lg-none'>Die wichtigsten <br /> Aspekte einer <br /> Trennung:</p>
                                    </div>
                                    <div className="d-none d-lg-block">
                                        <p className='dots ff-poppins fw-medium text-16 lh-25 mb-0 text-white text-capitalize'>physische Trennung</p>
                                        <p className='dots ff-poppins fw-medium text-16 lh-25 text-white mb-0 text-capitalize'>mentale Trennung</p>
                                    </div>
                                    <div className="d-lg-none">
                                        <p className='dots ff-poppins fw-medium text-16 lh-25 mb-0 text-capitalize'>physische Trennung</p>
                                        <p className='dots ff-poppins fw-medium text-16 lh-25 mb-0 text-capitalize'>mentale Trennung</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-2">
                    <div className=" position-absolute top-61 d-none d-lg-block">
                        <div className="position-relative">
                            <p className=' ff-poppins fw-light text-20 lh-34 lts-45 mb-0 v-text w-content position-absolute text-pos'>MJH</p>
                            <div className="d-flex">
                                <div className="text-line"></div>
                                <div className="d-flex align-items-end mb-11">
                                    <p className=' ff-helve fw-normal text-40 lh-51 mb-0 v-text w-content'>01</p>
                                    <p className=' ff-helve fw-normal text-24 lh-3091 mb-0 text-uppercase '>fault</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className=' ff-helve fw-normal text-40 lh-51 mb-0 text-uppercase d-lg-none'>01 fault</p>
                    <div className=" d-flex mt-151 justify-content-lg-center justify-content-lg-between w-100 max-w-1000 flex-wrap">
                        <div className="max-w-570 d-flex justify-content-lg-end w-100">
                            <div className="">
                                <p className=' ff-helve fw-normal text-60 lh-sm-77 mb-0'>IT'S NOT</p>
                                <p className='ff-helve fw-normal text-60 lh-sm-77 color-brown mb-0 transform-lg-20'>YOUR <span className=' text-black'>FAULT!</span></p>
                            </div>
                        </div>
                        <div className="w-299 ">
                            <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
                                <div className=" text-border2"></div>
                                <p className=' ff-poppins fw-normal text-16 lh-25 text-black mb-0'>It's not your fault for not knowing how to let go of the partner who no longer made you feel special.</p>
                            </div>
                        </div>
                    </div>
                    <h2 className=' ff-helve fw-normal text-20 lh-28 text-black text-center mt-58 text-capitalize mb-34'>How would you know when you are busy with completely different things at the moment:</h2>
                </div>
                <div className="position-absolute top-pos d-none d-lg-block">
                    <img src={headellips} alt="headellips" />
                </div>
                <div className="position-absolute fault-pos d-none d-lg-block">
                    <img src={faultellips} alt="faultellips" />
                </div>
            </header>
        </>
    )
}

export default Header