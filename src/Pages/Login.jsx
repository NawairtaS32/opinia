import { useState } from "react";
import {RxEyeClosed} from "react-icons/rx";
import playStore from "../Images/playStore.png"
import BackgroundLogin from "../Images/BackgroundLogin.jpg"
import verticalContainer from "../Images/verticalContainer.svg"
import opiniaLogo  from "../Images/opinia-logo.svg"
import { useNavigate } from 'react-router-dom';
import google from "../Images/Google.svg"


export default function Login() {
    const [loginForm, setLoginForm] = useState({
        username : "",
        password : "",
        ingatkanSaya : false,
    });
    const history=useNavigate();

    const background = {
        backgroundImage: 'url(' + BackgroundLogin + ')',
        backgroundSize: 'cover',
        overflow: 'hidden',
    }

    const change = ((e)=> setLoginForm ({...loginForm, [e.target.name]:e.target.value}))

    const handleSubmit = () => {
        if ( loginForm.username && loginForm.password ) {
            history('/home')
        } else {
            alert('please input username and password')
        }
    }

    return (
        <div className="w-screen h-screen bg-base-200"  style={background}> 
            <div className="flex gap-[80px] h-screen justify-center items-center drop-shadow-md">
                <img src={verticalContainer} alt="opinia-Logo" className="w-[600px] hidden lg:flex" />

                <div className="">
                    <div className="flex md:hidden mt-[-90px] mb-[80px] justify-center items-center">
                        <img src={opiniaLogo} alt="opinia-Logo" />
                    </div>
                    <div className=" w-[328px] py-[28px] px-[16px] lg:w-[380px] bg-base-100 rounded-[12px]">
                        <form className="form-control" onSubmit={handleSubmit}>
                            <div className="flex flex-wrap gap-2">
                                <div className=" w-full bg-base-100 rounded-[8px] border-2">
                                    <input type="text" name="username" onChange={change} value={loginForm.username} placeholder="Email atau Nomor Telepon" className="  w-full input " />
                                </div>
                                <div className="flex w-full gap-4 bg-base-100 rounded-[8px] border-2">
                                    <input type="Password" name="password" onChange={change} value={loginForm.password} placeholder="Password" className="input w-full pr-[80px]" />
                                    <button>
                                        <RxEyeClosed className="text-lg mr-2" />
                                    </button>
                                </div>
                                <div className="flex gap-10 lg:gap-20">
                                    <label className="label cursor-pointer gap-2">
                                        <input type="checkbox" name="ingatkanSaya" checked={loginForm.ingatkanSaya} name="ingatkanSaya" onChange={change} className="checked:bg-[#05678E]" />
                                        <span className="label-text">Ingatkan Saya</span> 
                                    </label>
                                    <a href="#" className="mt-2 text-[#05678E]">
                                        Lupa Kata Sandi ?
                                    </a>
                                </div>
                                <div className="flex flex-col w-full gap-2">
                                    <button type="submit" className="btn bg-[#EDEDED] border-[#E0E0E0] text-[#9E9E9E] hover:bg-[#05B1A1] rounded-[8px] hover:text-[#FFFFFF] hover:border-0 font-bold" >Masuk</button>
                                    <button className="btn flex gap-[12px] bg-[#F5F5F5] border-0 text-[#9E9E9E] hover:bg-[#05B1A1] rounded-[8px] hover:border-0 hover:text-[#FFFFFF] font-bold">
                                        <img src={google} alt="google" />
                                        Masuk dengan Google
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="justify-center items-center py-4 flex gap-2">
                            Belum Punya akun ? 
                            <a href="#" className="text-[#05678E]">Daftar</a>
                        </div>
                        <div className="text-center absolute lg:static mt-[80px] lg:mt-0 ml-[-40px] p-6 lg:p-0 lg:ml-0">
                            Dengan Masuk, kamu menyetujui <span className="font-bold text-slate-900"> Ketentuan Layanan </span> dan <span className="font-bold text-slate-900"> Panduan Komunitas </span> Opinia
                        </div>
                    </div>  
                    <div className=" p-6 flex-col justify-center items-center hidden lg:flex">
                        <span className="font-bold text-md">
                            Dapatkan aplikasi
                        </span>
                        <img src={playStore} alt="playStore" className="w-40 h-20 py-4" />
                    </div>
                </div>
            </div>
            <div className="w-screen lg:flex flex-col gap-2 justify-center items-center hidden fixed bottom-8">
                <div className="flex gap-9 text-green-600 text-xl">
                    <a href="#">Bantuan</a>
                    <a href="#">Tentang Kami</a>
                </div>
                    <p className="text-xl">
                        © 2022 PT.Opinia Media Teknologi
                    </p>
            </div>
        </div>
    )
};
