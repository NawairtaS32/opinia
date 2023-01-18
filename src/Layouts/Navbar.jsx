import {BiSearch} from "react-icons/bi";
import {} from "react-icons/";
import {IoHomeOutline, } from "react-icons/io5";
import {IoIosChatbubbles, IoIosNotificationsOutline, IoIosSearch} from "react-icons/io";
import {GrGroup} from "react-icons/gr";
import iconSatu from "../Images/icon1.svg";
import logoNavbar from "../Images/logoNavbar.svg";
import Menu from "../Components/Menu";
// import {} from "react-icons/";

export default function Navbar() {
    return(
        <div className="flex lg:place-content-between">
            <div className="lg:flex gap-[500px] hidden">
                <div className="flex  gap-[8px] rounded-[19px] justify-center items-center w-[294px] h-[40px] bg-[#F5F5F5] ">
                    <BiSearch  className=" text-xl "/>
                    <input type="text" placeholder="Cari di Opinia" className="input bg-[#F5F5F5] w-[238px] h-[19px] " />
                </div>
                <div className="">
                    <img src={logoNavbar} alt="" />
                </div>
            </div>
            <div className="flex lg:gap-8 gap-12 ">
                <button className="btn btn-ghost btn-circle">
                    <IoHomeOutline className="text-3xl" />
                </button>
                <button className="btn btn-ghost btn-circle lg:hidden flex">
                    <IoIosSearch className="text-3xl" />
                </button>
                <button className="btn btn-ghost btn-circle">
                    <IoIosChatbubbles className="text-3xl text-green-500" />
                </button>
                <button className="btn btn-ghost btn-circle">
                    <GrGroup className="text-3xl" />
                </button>
                <button className="btn btn-ghost btn-circle hidden lg:flex">
                    <IoIosNotificationsOutline className="text-3xl" />
                </button>
                <img src={iconSatu} alt="iconSatu" className="hidden lg:flex" />           
                <Menu />
            </div>

        </div>
    )
};