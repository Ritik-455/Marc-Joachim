import React from "react";
import btnsvg from '../assets/images/btnsvg.svg'

function Comnbtn(props) {
    return (
        <button className={` ${props.spacing} cmn-btn  `}>
            <span><img src={btnsvg} alt="btn-svg" /></span>
            <span className="ff-inter fw-medium text-btn lh-24 text-gradient">Book a non-binding initial consultation now</span>
        </button>
    )
}
export default Comnbtn