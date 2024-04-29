import React from 'react'
import laywer from '../assets/images/lawyer.png'
import marrie from '../assets/images/slider-top-img.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from "swiper/modules"
import aboutellips from '../assets/images/about-ellips.svg'
import dotsellips from '../assets/images/ellips-dots.png'

function About() {
    return (
        <>
            <section className=' position-relative'>
                <div className="container-2">
                    <div className="d-xl-flex d-none mt-3">
                        <div className="text-line4"></div>
                        <div className="d-flex align-items-end mb-11">
                            <p className=' ff-helve fw-normal text-40 lh-51 mb-0 v-text w-content'>05</p>
                            <p className=' ff-helve fw-normal text-24 lh-3091 mb-0 text-uppercase '>About</p>
                        </div>
                    </div>
                    <div className="row mt-52">
                        <div className="col-12 col-md-6">
                            <img src={laywer} alt="laywer" className=' w-100 max-w-559' />
                        </div>
                        <div className="col-12 col-md-6 d-flex justify-content-lg-end">
                            <div className="max-w-523">
                                <p className=' ff-helve fw-normal text-52 lh-sm-66 mb-0 text-black'>LAWYER <span className=' color-brown'> &</span> DIVORCE COACH</p>
                                <p className=' text-uppercase fw-normal text-36 lh-47 text-black mb-0'><span className=' color-brown'>M</span>arc <span className=' color-brown'>J</span>oachim <span className=' color-brown'>H</span>ubrich</p>
                                <h2 className=' ff-helve fw-normal text-20 lh-28 text-capitalize mb-0 mt-2 mt-lg-4'>About the mindset agency coach</h2>
                                <p className=' ff-poppins fw-normal text-16 lh-25 mt-2 max-w-484 mb-0'>Marc J. Hubrich is the founder of the mindset agency specializing in consulting services.</p>
                                <div className="  pt-0 pt-md-3">
                                    <button className=" agency_btn d-flex align-items-center mt-4 gap-3 ff-inter fw-medium text-16 lh-24 text-capitalize text-gradient">
                                        Learn more about the agency
                                        <span>
                                            <svg
                                                width="41"
                                                height="14"
                                                viewBox="0 0 41 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M40.101 7.60104C40.433 7.2691 40.433 6.73091 40.101 6.39896L34.6917 0.989595C34.3597 0.65765 33.8215 0.65765 33.4896 0.989595C33.1576 1.32154 33.1576 1.85973 33.4896 2.19168L38.2979 7L33.4896 11.8083C33.1576 12.1403 33.1576 12.6785 33.4896 13.0104C33.8215 13.3424 34.3597 13.3424 34.6917 13.0104L40.101 7.60104ZM0.5 7.85L39.5 7.85L39.5 6.15L0.5 6.15L0.5 7.85Z"
                                                    fill="url(#paint0_linear_1102_7)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_1102_7"
                                                        x1="-3.7"
                                                        y1="7.38462"
                                                        x2="-3.4011"
                                                        y2="11.1488"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="#0C5FD1" />
                                                        <stop offset="1" stop-color="#8703C5" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h3 className=' text-uppercase ff-helve fw-normal text-52 lh-sm-66 mb-0 mt-client text-center'>What our <span className=' color-brown'>clients</span> say</h3>
                </div>
                <div className="pb-client">
                    <div className="position-relative">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            direction="vertical"
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            className=' swiper-height'>
                            <SwiperSlide>
                                <div className="container-2 d-flex flex-column align-items-center">
                                    <div className="clinet-box position-relative mt-84">
                                        <p className=' ff-poppins fw-normal text-16 lh-25 text-black text-center max-w-721 mb-0'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                                        <p className=' ff-poppins fw-medium text-16 lh-25 text-black mb-0 text-center mt-3'>Marrie James-CEO</p>
                                        <p className=' ff-poppins fw-normal text-16 lh-25 text-black text-center mb-0'>Limana Enterprises, CA</p>
                                        <div className="position-absolute marrie-pos"><img src={marrie} alt="marrie" /></div>
                                    </div>
                                </div>
                                <div className="container-2 d-flex flex-column align-items-center mt-20">
                                    <div className=" d-flex gap-20 justify-content-center justify-content-lg-start flex-wrap">
                                        <div className="client-small-box">
                                            <p className=' ff-poppins fw-normal text-16 lh-25 text-center text-black mb-0'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                            <p className=' ff-poppins fw-medium text-16 lh-25 text-black mb-0 text-center mt-3'>Ralph Edwards-CEO</p>
                                            <p className=' ff-poppins fw-normal text-16 lh-25 text-black text-center mb-0'>Limana Enterprises, CA</p>
                                        </div>
                                        <div className="client-small-box">
                                            <p className=' ff-poppins fw-normal text-16 lh-25 text-center text-black mb-0'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                            <p className=' ff-poppins fw-medium text-16 lh-25 text-black mb-0 text-center mt-3'>Ralph Edwards-CEO</p>
                                            <p className=' ff-poppins fw-normal text-16 lh-25 text-black text-center mb-0'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="container-2 d-flex flex-column align-items-center">
                                    <div className="clinet-box position-relative mt-84">
                                        <p className=' ff-poppins fw-normal text-16 lh-25 text-black text-center max-w-721 mb-0'>Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum. </p>
                                        <p className=' ff-poppins fw-medium text-16 lh-25 text-black mb-0 text-center mt-3'>Marrie James-CEO</p>
                                        <p className=' ff-poppins fw-normal text-16 lh-25 text-black text-center mb-0'>Limana Enterprises, CA</p>
                                        <div className="position-absolute marrie-pos"><img src={marrie} alt="marrie" /></div>
                                    </div>
                                </div>
                                <div className="container-2 d-flex flex-column align-items-center mt-20">
                                    <div className=" d-flex gap-20 justify-content-center justify-content-lg-start flex-wrap">
                                        <div className="client-small-box">
                                            <p className=' ff-poppins fw-normal text-16 lh-25 text-center text-black mb-0'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                            <p className=' ff-poppins fw-medium text-16 lh-25 text-black mb-0 text-center mt-3'>Ralph Edwards-CEO</p>
                                            <p className=' ff-poppins fw-normal text-16 lh-25 text-black text-center mb-0'>Limana Enterprises, CA</p>
                                        </div>
                                        <div className="client-small-box">
                                            <p className=' ff-poppins fw-normal text-16 lh-25 text-center text-black mb-0'>Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.</p>
                                            <p className=' ff-poppins fw-medium text-16 lh-25 text-black mb-0 text-center mt-3'>Ralph Edwards-CEO</p>
                                            <p className=' ff-poppins fw-normal text-16 lh-25 text-black text-center mb-0'>Limana Enterprises, CA</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="position-absolute dots-pos d-none d-xxl-block"><img src={dotsellips} alt="dotsellips" /></div>
                    </div>
                    <div className="position-absolute text5-pos">
                        <div className="position-relative d-none d-lg-block">
                            <p className=' ff-poppins fw-light text-20 lh-34 lts-45 mb-0 v-text w-content position-absolute text-mjh-3'>MJH</p>
                            <div className="d-flex justify-content-end">
                                <div className="d-flex align-items-end mb-11">
                                    <p className=' ff-helve fw-normal text-40 lh-51 mb-0 w-content writing-vertical'>06</p>
                                </div>
                                <div className="text-line5"></div>
                            </div>
                        </div>
                    </div>
                    <div className=" position-absolute text-pos4 d-none d-lg-block">
                        <div className="position-relative">
                            <p className=' ff-poppins fw-light text-20 lh-34 lts-45 mb-0 v-text w-content position-absolute text-pos'>MJH</p>
                            <div className="d-flex">
                                <div className="text-line"></div>
                                <div className="d-flex align-items-end mb-11">
                                    <p className=' ff-helve fw-normal text-40 lh-51 mb-0 v-text w-content'>07</p>
                                    <p className=' ff-helve fw-normal text-24 lh-3091 mb-0 text-uppercase '>take step</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute d-none d-xl-block about-pos">
                        <img src={aboutellips} alt="aboutellips" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About