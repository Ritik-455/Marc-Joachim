import Comnbtn from '../common/Comnbtn'
import sliderellips from '../assets/images/slider-ellips.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCreative, Pagination, Navigation } from 'swiper/modules';
import next from '../assets/images/arrow-next.svg'
import prev from '../assets/images/prev-btn.svg'
import slidetopellips  from '../assets/images/slider-top-ellips.svg'


function Mindset() {
    return (
        <>
            <section className=' position-relative'>
                <div className="container-2 pb-mindset">
                    <div className="position-relative mt-65 d-none d-lg-block">
                        <p className=' ff-poppins fw-light text-20 lh-34 lts-45 mb-0 v-text w-content position-absolute text-pos3'>MJH</p>
                        <div className="d-flex justify-content-end">
                            <div className="d-flex align-items-end mb-11">
                                <p className=' text-uppercase mb-0 ff-helve fw-normal text-24 lh-3091 text-black'>analysis</p>
                                <p className=' ff-helve fw-normal text-40 lh-51 mb-0 w-content writing-vertical'>04</p>
                            </div>
                            <div className="text-line2"></div>
                        </div>
                    </div>
                    <p className=' text-uppercase mb-0 ff-helve fw-normal text-24 lh-3091 text-black mt-4 d-lg-none'>04 analysis</p>
                    <div className="row mt-4">
                        <div className="col-12 col-lg-6 d-flex align-items-center">
                            <div className="">
                                <p className=' ff-helve fw-normal text-29 lh-37 mb-0'>THE FOUR PHASES OF</p>
                                <p className=' ff-helve fw-normal text-52 lh-sm-62'>SEPARATION<span className=' d-block color-brown'>MINDSET</span></p>
                                <p className=' ff-poppins fw-normal text-16 lh-25 mb-0 max-w-484'>There are 4 typical separation phases. The 4 phases are not always clearly separated from each other and can overlap.</p>
                                <Comnbtn spacing=" mt-36" />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 position-relative mt-3 mt-lg-0">
                            <div className="max-w-608">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={{ nextEl: ".swiper-btn-next", prevEl: ".swiper-btn-prev" }}
                                    modules={[Autoplay, EffectCreative, Pagination, Navigation]}
                                    grabCursor={true}
                                    effect={'creative'}
                                    speed={500}
                                    creativeEffect={{
                                        prev: {
                                            shadow: true,
                                            translate: ['-120%', 0, -500],
                                        },
                                        next: {
                                            shadow: true,
                                            translate: ['120%', 0, -500],
                                        },
                                    }}
                                >
                                    <SwiperSlide>
                                        <div className="phase-box position-relative">
                                            <p className=' ff-poppins fw-medium text-20 lh-32 text-white text-center mb-0'>1st phase
                                                <span className=' d-block'>"The not-wanting-to-be-true"</span></p>
                                            <p className=' ff-poppins fw-normal text-16 lh-25 text-white text-center mb-0 mt-2'>This phase is characterized by denial and <br /> ignoring the final separation.</p>
                                            <div className="position-absolute ellips-slider-pos"><img src={sliderellips} alt="sliderellips" /></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="phase-box position-relative">
                                            <p className=' ff-poppins fw-medium text-20 lh-32 text-white text-center mb-0'>2st phase
                                                <span className=' d-block'>"The not-wanting-to-be-true"</span></p>
                                            <p className=' ff-poppins fw-normal text-16 lh-25 text-white text-center mb-0 mt-2'>This phase is characterized by denial and <br /> ignoring the final separation.</p>
                                            <div className="position-absolute ellips-slider-pos"><img src={sliderellips} alt="sliderellips" /></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="phase-box position-relative">
                                            <p className=' ff-poppins fw-medium text-20 lh-32 text-white text-center mb-0'>3st phase
                                                <span className=' d-block'>"The not-wanting-to-be-true"</span></p>
                                            <p className=' ff-poppins fw-normal text-16 lh-25 text-white text-center mb-0 mt-2'>This phase is characterized by denial and <br /> ignoring the final separation.</p>
                                            <div className="position-absolute ellips-slider-pos"><img src={sliderellips} alt="sliderellips" /></div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="phase-box position-relative">
                                            <p className=' ff-poppins fw-medium text-20 lh-32 text-white text-center mb-0'>4st phase
                                                <span className=' d-block'>"The not-wanting-to-be-true"</span></p>
                                            <p className=' ff-poppins fw-normal text-16 lh-25 text-white text-center mb-0 mt-2'>This phase is characterized by denial and <br /> ignoring the final separation.</p>
                                            <div className="position-absolute ellips-slider-pos"><img src={sliderellips} alt="sliderellips" /></div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="position-absolute prev-pos d-none d-lg-block"><img className="swiper-btn-prev" src={prev} alt="prev" /></div>
                            <div className="position-absolute next-pos d-none d-lg-block"><img className="swiper-btn-next" src={next} alt="next" /></div>
                        </div>
                    </div>
                </div>
                <div className="position-absolute d-none d-lg-block slide-pos-top">
                    <img src={slidetopellips} alt="slidetopellips" />
                </div>
            </section>
        </>
    )
}

export default Mindset