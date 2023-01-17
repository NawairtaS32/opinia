import {BiSearch} from "react-icons/bi";
import {SlOptions} from "react-icons/sl";
import ChatList from "../Components/chatList";
import Navbar from "../Layouts/Navbar";

export default function Home() {
    return(
        <div className="w-screen h-screen bg-white">
            <Navbar />
            <div className="w-screen h-screen">
                <div className="flex w-screen">
                    <div className="w-full border-2">
                        <div className=" flex flex-col border-b-2 gap-4 py-[12px] px-[26px] ">
                            <div className="flex gap-4 text-xl font-bold place-content-between">
                                <div className="">
                                    <div className="flex gap-2 w-[294px] h-[40px] border-2 p-2 rounded-[19px]">
                                        <input type="text" placeholder="Cari di Opinia" className="input w-[238px] h-[19px] " />
                                        <button>
                                            <BiSearch className="text-xl" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <button>
                                        <SlOptions />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <ChatList />
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        ini halaman
                    </div>
                </div>
            </div>
        </div>
    )
};
