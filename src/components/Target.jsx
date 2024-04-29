import React from 'react'

function Target() {
    return (
        <>
            <section className=' position-relative'>
                <div className="bg-sky">
                    <div className="container-2">
                        <div className="row pt-48 pb-52">
                            <div className="col-12 col-md-7 d-flex justify-content-md-end">
                                <p className=' ff-helve fw-normal text-52 lh-66 mb-0 color-brown'>TARGET<span className=' text-uppercase text-black'>group</span></p>
                            </div>
                            <div className="col-12 col-md-5 mt-3 mt-md-0">
                                <div className=" d-flex justify-content-md-end">
                                    <div className="d-flex gap-3">
                                        <div className="text-border"></div>
                                        <p className=' ff-poppins fw-normal text-16 lh-25 text-black mb-0 max-w-350'>The coaching is aimed at married women who have already separated or are thinking of separating.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-target d-flex">
                    <div className="container-2 w-100 d-flex flex-grow-1 flex-column justify-content-center align-items-center align-items-lg-start">
                        <div className="target-box w-100">
                            <p className=' ff-poppins fw-normal text-16 lh-25 text-white mb-0'>You have separated and have the feeling that you can never be happy again and that you will be alone forever.</p>
                        </div>
                        <div className="target-box w-100 mt-32">
                            <p className=' ff-poppins fw-normal text-16 lh-25 text-white mb-0'>How are you supposed to be able to let go of someone who is so entangled with your life? It's impossible, isn't it?</p>
                        </div>
                        <div className="target-box mt-3 bg-blue d-lg-none">
                            <p className=' ff-poppins fw-normal text-16 lh-25 mb-0 text-white'>To understand how to let go of your partner, you need a detailed step-by-step action plan, which you will receive from me in a 1:1 coaching session.</p>
                        </div>
                    </div>
                    <div className="target-blue-box position-lg-absolute box-pos d-none d-lg-block">
                        <p className=' ff-poppins fw-normal text-16 lh-25 mb-0 text-white'>To understand how to let go of your partner, you need a detailed step-by-step action plan, which you will receive from me in a 1:1 coaching session.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Target