import avatarSatu from "../Images/avatars1.svg";
import iconSepuluh from "../Images/icon10.svg";

export default function ChatList({gambar, nama, tanggal , pesan, notif}) {
    return (
        <div className="flex place-content-between gap-4 py-[8px]">
            <div className="flex gap-[12px]">
                <div className="avatar">
                    <div className="w-[48px] h-[48px]">
                        <img src={gambar} />
                    </div>
                </div>
                <div className="">
                    <h1 className="text-[#0D0D0D] text-16px font-bold">
                        {nama}
                    </h1>
                    <h1>
                        {pesan}
                    </h1>
                </div>
            </div>
            <div className="">
                <p className="text-[12px] text-[#9E9E9E] flex items-end justify-end">
                    {tanggal}
                </p>
                <div className="w-24 py-1 rounded-full flex items-end justify-end">
                    <img src={notif} />
                </div>
            </div>
        </div>
    )
};
