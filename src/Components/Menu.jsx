import iconDua from "../Images/icon2.svg";
import iconTiga from "../Images/icon3.svg";
import idea from "../Images/idea.svg";
import cerita from "../Images/cerita.svg";
import petisi from "../Images/petisi.svg";
import poling from "../Images/poling.svg";
import artikel from "../Images/artikel.svg";
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
                <div className="w-screen h-screen bg-slate-900/50 fixed top-0 right-0 left-0 z-40">
                    <div className="flex flex-col gap-4 fixed top-[90px] right-6 text-2xl text-[#FFFFFF] font-bold ">
                        <div className="flex gap-4 place-content-between">
                            <span className="mt-2" >
                                Idea
                            </span>
                            <img src={idea} alt="idea.svg" />
                        </div>
                        <div className="flex place-content-between gap-4">
                            <span className="mt-2" >
                                Artikel
                            </span>
                            <img src={artikel} alt="artiker.svg" />
                        </div>
                        <div className="flex place-content-between gap-4">
                            <span className="mt-2" >
                                Cerita
                            </span>
                            <img src={cerita} alt="cerita.svg" />
                        </div>
                        <div className="flex place-content-between gap-4">
                            <span className="mt-2" >
                                Poling
                            </span>
                            <img src={poling} alt="poling.svg" />
                        </div>
                        <div className="flex place-content-between gap-4">
                            <span className="mt-2" >
                                Petisi
                            </span>
                            <img src={petisi} alt="pestisi.svg" />
                        </div>
                    </div>
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
