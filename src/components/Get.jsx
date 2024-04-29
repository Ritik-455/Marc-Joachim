import React from 'react'
import Comnbtn from '../common/Comnbtn'
import flower from '../assets/images/flower.svg'
import btnsvg from '../assets/images/btnsvg.svg'
import rightellips from '../assets/images/get-right-ellips.png'
import leftellips from '../assets/images/left-ellips.png'

function Get() {
    return (
        <>
            <section className=' position-relative' id="benifits">
                <div className="container-2 pb-coaching">
                    <p className=' ff-poppins fw-normal text-16 lh-25 text-black text-center mb-0  mt-42'>You are not alone! Numerous women before you stood exactly at this point, where you are now.</p>
                    <div className="d-flex justify-content-center">
                        <Comnbtn spacing=" mt-3" />
                    </div>
                    <div className=" d-flex gap-15 align-items-center pt-coaching flex-wrap">
                        <div className="">
                            <p className=' ff-helve fw-normal text-52 lh-66 mb-0 text-uppercase'>what you </p>
                            <p className=' ff-helve fw-normal text-60 lh-sm-78 mb-0 text-uppercase'>will <span className='color-brown'>get</span></p>
                        </div>
                        <img src={flower} alt="flower" className=' d-none d-lg-block' />
                        <div className="d-flex gap-12">
                            <div className="text-border2"></div>
                            <p className=' max-w-419 ff-poppins fw-normal text-16 lh-25 mb-0'>I will show you which steps are necessary for you to finally successfully let go of your EX. And I will support you to look confidently into your new future.</p>
                        </div>
                    </div>
                    <p className=' ff-helve fw-normal text-20 lh-28 text-black mb-0 text-center mt-5'>In a 1:1 live coaching session, we will clarify the following questions in particular:</p>
                    <div className=" position-absolute linepos d-none d-lg-block">
                        <div className="position-relative">
                            <p className=' ff-poppins fw-light text-20 lh-34 lts-45 mb-0 v-text w-content position-absolute text-pos2'>MJH</p>
                            <div className="d-flex">
                                <div className="d-flex align-items-end mb-11">
                                    <p className=' ff-helve fw-normal text-40 lh-51 mb-0 w-content writing-vertical'>02</p>
                                </div>
                                <div className="text-line2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-4 flex-wrap flex-lg-nowrap justify-content-around justify-content-lg-start">
                        <div className="coaching-box d-flex justify-content-center align-items-center mt-3 mt-md-0">
                            <p className=' ff-poppins fw-normal text-16 lh-25 text-black mb-0 max-w-283'>Why does your EX have to disappear from your life forever?
                            </p>
                        </div>
                        <div className="coaching-box d-flex justify-content-center align-items-center mt-3 mt-md-0">
                            <p className=' ff-poppins fw-normal text-16 lh-25 text-black mb-0 max-w-283'>What should your everyday life as a single person look like now and how can you cope with the new challenges?
                            </p>
                        </div>
                        <div className="coaching-box d-flex justify-content-center align-items-center mt-3 mt-lg-0">
                            <p className=' ff-poppins fw-normal text-16 lh-25 text-black mb-0 max-w-283'>How can you handle the divorce quickly and without complications, without worrying about finances or the well-being of the children?
                            </p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-around justify-content-lg-start flex-wrap flex-lg-nowrap mt-3 mt-lg-0">
                        <div className="coaching-box d-flex justify-content-center align-items-center mt-3 mt-md-0">
                            <p className=' ff-poppins fw-normal text-16 lh-25 text-black mb-0 max-w-283'>Who are you without your EX?
                            </p>
                        </div>
                        <div className="coaching-box d-flex justify-content-center align-items-center mt-3 mt-md-0">
                            <p className=' ff-poppins fw-normal text-16 lh-25 text-black mb-0 max-w-283'>What new dreams and hopes do you want to live?
                            </p>
                        </div>
                        <div className="d-flex justify-content-center max-w-380 w-100  mt-3 mt-lg-0">
                            <button className=" mb-0 ff-inter text-gradient fw-medium  text-16 lh-24 max-w-292 session-btn d-flex align-items-center  ">
                                <img src={btnsvg} alt="btnsvg" />
                                <span className=" text-start">
                                    Book a non-binding initial consultation now
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="d-xl-flex d-none position-absolute line-pos3">
                        <div className="text-line3"></div>
                        <div className="d-flex align-items-end mb-11">
                            <p className=' ff-helve fw-normal text-40 lh-51 mb-0 v-text w-content'>03</p>
                            <p className=' ff-helve fw-normal text-24 lh-3091 mb-0 text-uppercase '>Goal</p>
                        </div>
                    </div>
                </div>
                <div className="position-absolute right-pos d-none d-lg-block">
                    <img src={rightellips} alt="rightellips" />
                </div>
                <div className="position-absolute left-pos d-none d-lg-block">
                    <img src={leftellips} alt="leftellips" />
                </div>
            </section>
        </>
    )
}

export default Get