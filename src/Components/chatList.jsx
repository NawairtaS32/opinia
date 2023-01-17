export default function ChatList({gambar, nama, tanggal , pesan, notif}) {
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            <div className="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
            </div>
            <div className="">
                <h1>
                    Oktada
                </h1>
                <h1>
                    Selamat siang Adam
                </h1>
            </div>
            <div className="">
                <p>
                    tanggal
                </p>
                <div className="w-24 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                </div>
            </div>
        </div>
    )
};
