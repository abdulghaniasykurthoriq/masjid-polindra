import { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import useFormatDate from '../../helpers/useFormatDate';
import useFormatRupiah from '../../helpers/useFormatRupiah';
function Monitor(props) {
    let index = 0;
    const [time, setTime] = useState(new Date());
    // console.log('props.postingan.length', props.postingan.length);
    const tick = () => {
        setTime(new Date());
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    // // Format waktu dalam HH:MM:SS
    const formattedTime = time.toLocaleTimeString();

    setInterval(function () {
        if (index === 4) {
            window.location.href = `#0`;
            index = 0;
        } else {
            window.location.href = `#${index}`;
        }
        index++;
        console.log('index', index);
    }, 3000);

    return (
        <div className="bg-blue-50 h-screen flex">
            <aside className="w-96 border h-screen">
                <div className="flex items-center">
                    <div className="w-[100px] mt-8 mb-4 ml-8 mr-4">
                        <img src={Logo} alt="img" />
                    </div>
                    <p className="text-2xl font-bold">
                        Baitul <br /> Mutaqin
                    </p>
                </div>
                {/* TODO::SECTION */}
                <div>
                    <p className="text-2xl ml-8 mb-4">Laporan Keuangan</p>
                    {props.laporan_keuangan.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className="flex justify-between px-8 pb-4 py-2 border-b-2"
                            >
                                <div>{item.status}</div>
                                <div>
                                    <p>{useFormatRupiah(item.total)}</p>
                                    <p>{useFormatDate(item.created_at)}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </aside>

            <div className="w-full h-screen  flex items-center justify-center relative">
                <div
                    style={{ backgroundColor: '#21D998' }}
                    className="drop-shadow-md  absolute px-10 py-5 top-5 right-5 rounded-2xl"
                >
                    <p className="text-xl text-white">INDRAMAYU</p>
                    <p className="text-6xl py-2">{formattedTime}</p>
                    <p>Senin, 12 Juni 2023</p>
                </div>
                <div className="carousel   h-1/2 w-2/3 rounded-3xl">
                    {props.postingan.map((postingan, index) => {
                        console.log('postingan.length', postingan.length);
                        return (
                            <div
                                style={{ backgroundColor: postingan.warna }}
                                id={index}
                                key={index}
                                className="carousel-item relative w-full "
                            >
                                <div className="relative  text-center flex items-center justify-center p-8 w-full ">
                                    <p className="text-4xl text-white w-full ">
                                        {postingan.text}
                                        {/* hadirilah tablik akbar pada pukul 09.00 yang
                                dihadiri oleh habib syech abdul ghani asykur
                                thoriq */}
                                    </p>
                                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a
                                            href={`#${
                                                index == 0
                                                    ? props.postingan.length
                                                    : index - 1
                                            }`}
                                            className="btn btn-circle"
                                        >
                                            ❮
                                        </a>
                                        <a
                                            href={`#${
                                                index ===
                                                props.postingan.length - 1
                                                    ? 0
                                                    : index + 1
                                            }`}
                                            className="btn btn-circle"
                                        >
                                            ❯
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    <div className="absolute bottom-0 flex justify-center">
                        <div className=" bg-red-200 px-10 py-5">
                            <p>Shubuh</p>
                            <p className="text-2xl font-extrabold">05:00</p>
                        </div>
                        <div className=" bg-blue-200 px-10 py-5">
                            <p>Shubuh</p>
                            <p className="text-2xl font-extrabold">05:00</p>
                        </div>
                        <div className=" bg-green-200 px-10 py-5">
                            <p>Shubuh</p>
                            <p className="text-2xl font-extrabold">05:00</p>
                        </div>
                        <div className=" bg-accent px-10 py-5">
                            <p>Shubuh</p>
                            <p className="text-2xl font-extrabold">05:00</p>
                        </div>
                        <div className=" bg-violet px-10 py-5">
                            <p>Shubuh</p>
                            <p className="text-2xl font-extrabold">05:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Monitor;
