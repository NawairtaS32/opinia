import {BiSearch} from "react-icons/bi";
import {SlOptions} from "react-icons/sl";
import {MdOutlineAttachFile} from "react-icons/md";
import {AiFillCamera} from "react-icons/ai";
import ChatList from "../Components/chatList";
import Navbar from "../Layouts/Navbar";
import avatarSatu from "../Images/avatars1.svg";
import avatarDua from "../Images/avatars2.svg";
import avatarTiga from "../Images/avatars3.svg";
import iconSepuluh from "../Images/icon10.svg";
import buttonChat from "../Images/ButtonChat1.svg";
import buttonHoverChat from "../Images/ButtonHoverChat.svg";
import { useState } from "react";
import MenuList from "../Components/menuList";
import MenuDetail from "../Components/MenuDetail";
import imageChat from "../Images/Image.svg"
import Chat from "../Components/Chat";


export default function Home() {
    const [send, setSend] = useState(false)
    const [message, setMessage] = useState([])

    let [modalChatList, setModalChatList] = useState(false)

    function closeModalList() {
        setModalChatList(false)
    }
  
    function openModalList() {
        setModalChatList(true)
    }

    const handleSend = ()=>{
        setSend(!send)
    }
    
    const background = {
        backgroundImage: 'url(' + imageChat + ')',
        backgroundSize: 'cover',
        overflow: 'hidden',
        opacity: 0.8,
    }

    return(
        <div className="w-screen bg-white font-sans" >
            <div className="w-screen bg-[#FFFFFF] py-[20px] px-[24px] border-t-2 lg:border-b-2 fixed bottom-0 lg:bottom-[850px] lg:top-0 z-10 ">
                <Navbar />
            </div>
            <div className="flex lg:w-[990px] lg:h-[685px] lg:mt-[8%] lg:ml-[25%]">
                <div className=" w-screen lg:w-[360px]  border-l-2 border-y-2 bg-[#FFFFFF] rounded-l-[8px]  drop-shadow-md">
                    <div className=" flex border-b-2 gap-4 py-[12px] px-[14px] ">
                        <div className="flex flex-row-reverse lg:flex-col gap-4 text-xl font-bold place-content-between">
                            <div className="flex gap-4 lg:gap-0 place-content-between">
                                <div className="">
                                    <h1 className="text-[20px] hidden lg:flex">Pesan</h1>
                                </div>
                                <div className="mt-2 lg:mt-0">
                                    <button>
                                        <MenuList />
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-[4px] px-2 bg-[#F5F5F5] lg:w-[328px] p-[12px] rounded-[23px] ">
                                <input type="text" placeholder="Cari teman atau pengikut" className=" bg-[#F5F5F5] input w-[268px] lg:w-[284px] h-[19px] " />
                                <button>
                                    <BiSearch className="text-md" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="h-[800px]   lg:h-0 px-[16px]">
                        <ChatList 
                            gambar ={avatarSatu}
                            nama   = {"Oktada"}
                            pesan = {"Selamat siang Adam"}
                            tanggal = {"28 Sep 22"}
                            notif = {iconSepuluh}
                        />
                        <ChatList 
                            gambar ={avatarDua}
                            nama   = {"Rea Resti Ananda"}
                            pesan = {"Sama-sama"}
                            tanggal = {"26 Sep 22"}
                        />

                        <ChatList 
                            gambar ={avatarTiga}
                            nama   = {"Ahmad Alex"}
                            pesan = {"Sama-sama"}
                            tanggal = {"26 Sep 22"}
                        />

                    </div>
                </div>
                <div className="hidden md:flex">
                    <div className="w-[577px] border-r-2 rounded-r-[8px] border-y-2 drop-shadow-md ">
                        <div className="flex place-content-between py-[8px] bg-[#FFFFFF] px-[16px] border-b-2">
                            <div className="flex gap-[16px]">
                                <img src={avatarSatu} alt="" />
                                <div className="">
                                    <p className="text-[16px] font-bold">
                                        Oktavia Nanda
                                    </p>
                                    <p className=" text-[#757575] text-[12px] font-bold ">
                                        Title
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2 text-[24px]">
                                <button>
                                    <MenuDetail />
                                </button>
                                </div>
                        </div>
                        <div className=" w-[577px] h-[540px]" style={background}>
                            <Chat />
                        </div>
                        <div className="w-[575px] h-[60px] px-[8px] py-[12px] border-t-2">
                            <div className="flex gap-[8px]">
                                <button>
                                    <AiFillCamera  className="text-[#05B1A1] text-2xl "/>
                                </button>
                                <button>
                                    <MdOutlineAttachFile  className="text-[#05B1A1] text-2xl "/>
                                </button>
                                <input type="text" placeholder="Type here" className="input lg:w-[433px] lg:h-[44px] p-[12px] bg-[#EDEDED] rounded-[23px] "  />
                                <button onClick={handleSend} className="z-10">
                                    {
                                        send ?
                                        <img src={buttonHoverChat} alt="" />
                                        :
                                        <img src={buttonChat} alt="" />
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
