import {BiSearch} from "react-icons/bi";
import {} from "react-icons/";
import {IoHomeOutline, } from "react-icons/io5";
import {IoIosChatbubbles, IoIosNotificationsOutline, IoIosSearch} from "react-icons/io";
import {GrGroup} from "react-icons/gr";
import iconSatu from "../Images/icon1.svg";
import Menu from "../Components/Menu";
// import {} from "react-icons/";

export default function Navbar() {
    return(
        <div className="navbar bg-base-100 gap-[500px] lg:py-[24px] px-[20px] border-t-2 lg:border-b-2 border-slate-200 fixed bottom-[0px] lg:bottom-[880px] lg:top-0 right-0 left-0 ">
            <div className="navbar-start hidden lg:flex">
                <div className="form-control">
                    <div className="flex gap-2 w-[294px] h-[40px] border-2 p-2 rounded-[19px]">
                        <button>
                            <BiSearch className="text-xl" />
                        </button>
                        <input type="text" placeholder="Cari di Opinia" className="input w-[238px] h-[19px] " />
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <img src="http://assets.kompasiana.com/items/album/2022/08/15/opinia-62fa47d808a8b506414dc552.png" alt="" className="w-[140px]" />
            </div>
            <div className="navbar-end gap-6 w-screen lg:w-lg pr-10 lg:pr-0  ">
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