import React from 'react'
import btnsvg from '../assets/images/btnsvg.svg'


function Request() {
    return (
        <>
            <section>
                <div className="bg-sky">
                    <div className="container-2 py-req">
                        <div className="row">
                            <div className="col-12 col-md-7">
                                <p className=' ff-helve fw-normal text-52 lh-sm-66 text-black mb-0 text-uppercase'>Request your </p>
                                <p className=' ff-helve text-uppercase fw-normal text-52 lh-sm-66 text-black mb-0'><span className=' color-brown'>non-binding</span> strategy</p>
                                <p className=' ff-helve text-normal text-52 lh-sm-66 mb-0 text-uppercase mb-0'>meeting now!</p>
                            </div>
                            <div className="col-12 col-md-5 d-flex align-items-center justify-content-md-center mt-3 mt-md-0">
                                <div className="d-flex gap-3">
                                    <div className="text-border3"></div>
                                    <p className=' ff-poppins fw-normal text-16 lh-25 text-black mb-0 max-w-398'>Click on the button below, choose an appointment and answer the questions truthfully. One of our strategy consultants will then contact you and conduct your free consultation. We can advise you on the following topics: </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-meeting d-flex">
                    <div className="container-2 w-100 d-flex flex-column flex-grow-1 justify-content-center">
                        <div className="d-flex justify-content-lg-center justify-content-around flex-wrap">
                            <div className="meeting-box">
                                <p className=' ff-poppins fw-normal text-16 lh-25 text-white mb-0 max-w-173'>How do I let go of my EX so I can finally leave him behind?</p>
                            </div>
                            <div className="meeting-box mt-3 mt-sm-0">
                                <p className=' ff-poppins fw-normal text-16 lh-25 text-white mb-0 max-w-173'>How does the divorce process work?</p>
                            </div>
                            <div className="meeting-box mt-3 mt-md-0">
                                <p className=' ff-poppins fw-normal text-16 lh-25 text-white mb-0 max-w-173'>Do I need a lawyer?</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-lg-center justify-content-around mt-3 mt-34 flex-wrap">
                            <div className="meeting-box">
                                <p className=' ff-poppins fw-normal text-16 lh-25 text-white mb-0 max-w-173'>How much will the divorce cost?</p>
                            </div>
                            <div className="meeting-box mt-3 mt-sm-0">
                                <p className=' ff-poppins fw-normal text-16 lh-25 text-white mb-0 max-w-173'>What will happen to my children?</p>
                            </div>
                            <div className="meeting-box mt-3 mt-md-0">
                                <p className=' ff-poppins fw-normal text-16 lh-25 text-white mb-0 max-w-173'>What does my future as a single person look like now?</p>
                            </div>
                            <div className="meeting-box mt-3 mt-lg-0">
                                <p className=' ff-poppins fw-normal text-16 lh-25 text-white mb-0 max-w-173'>How do I rebuild my self-esteem?</p>
                            </div>
                        </div>
                        <div className=" d-flex justify-content-center mt-58">
                            <button className="req-btn">
                                <span><img src={btnsvg} alt="btn-svg" /></span>
                                <span className="ff-inter fw-medium text-btn lh-24 text-gradient">Book a non-binding initial consultation now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Request