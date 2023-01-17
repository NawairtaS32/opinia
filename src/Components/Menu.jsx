import iconDua from "../Images/icon2.svg";
import iconTiga from "../Images/icon3.svg";
import iconEmpat from "../Images/icon4.svg";
import iconLima from "../Images/icon5.svg";
import iconEnam from "../Images/icon6.svg";
import iconTujuh from "../Images/icon7.svg";
import iconDelapan from "../Images/icon8.svg";
import iconSembilan from "../Images/icon9.svg";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

export default function Menu() {
    const [show, setShow] = useState(false)

    const handleShowModal = ()=>{
        setShow(!show)
    }

    return(
        <>
            {show && (
                    <div className="fixed  top-24 right-10">
                        
                    </div>
            )}
        
            <button onClick={handleShowModal} className="hidden lg:flex z-50    ">
                {
                    show ?
                    <img src={iconTiga} alt="" />
                    :
                    <img src={iconDua} alt="" />
                }
            </button>
        </>
    )
};
