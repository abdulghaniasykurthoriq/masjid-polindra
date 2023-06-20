import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import BSI from '../../assets/bsi.jpg';
import useFormatDate from '../../helpers/useFormatDate';
import useFormatRupiah from '../../helpers/useFormatRupiah';

function Monitor(props) {
    console.log('props', props);
    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    };

    useEffect(() => {
        const timerID = setInterval(tick, 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    // Format waktu dalam HH:MM:SS
    const formattedTime = time.toLocaleTimeString([], { hour12: false });

    useEffect(() => {
        let index = 0;
        const intervalID = setInterval(() => {
            if (index === 4) {
                window.location.href = '#0';
                index = 0;
            } else {
                window.location.href = `#${index}`;
            }
            index++;
            console.log('index', index);
        }, 3000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div className="bg-blue-50 h-screen flex">
            <aside className="w-96 border h-screen relative">
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
                    {props.laporan_keuangan.map((item, i) => (
                        <div
                            key={i}
                            className="flex justify-between px-8 pb-4 py-2 border-b-2"
                        >
                            <div>{item.status}</div>
                            <div>
                                <p>
                                    {/* Format Rupiah */}{' '}
                                    {useFormatRupiah(item.total)}
                                </p>
                                <p>
                                    {/* Format Tanggal */}{' '}
                                    {useFormatDate(item.created_at)}{' '}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="card w-full bg-base-100 shadow-xl absolute bottom-0">
                    <figure>
                        <img src={BSI} alt="ATM" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </aside>

            <div className="w-full h-screen  flex flex-col items-center justify-center relative">
                <div className="carousel   h-2/3 w-2/3 rounded-3xl">
                    {props.postingan.map((postingan, index) => (
                        <div
                            style={{ backgroundColor: postingan.warna }}
                            id={index}
                            key={index}
                            className="carousel-item relative w-full "
                        >
                            <div className="relative  text-center flex items-center justify-center p-8 w-full ">
                                <p className="text-4xl text-white w-full ">
                                    {postingan.text}
                                </p>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a
                                        href={`#${
                                            index === 0
                                                ? props.postingan.length
                                                : index - 1
                                        }`}
                                        className="btn btn-circle"
                                    >
                                        ❮
                                    </a>
                                    <a
                                        href={`#${
                                            index === props.postingan.length - 1
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
                    ))}
                    <div className="absolute bottom-0 flex justify-center">
                        <div className=" bg-red-200 px-10 py-5">
                            <p>Shubuh</p>
                            <p className="text-2xl py-2 font-extrabold">
                                {props.subuh}
                            </p>
                        </div>
                        <div className=" bg-blue-200 px-10 py-5">
                            <p>Duhur</p>
                            <p className="text-2xl py-2 font-extrabold">
                                {props.duhur}
                            </p>
                        </div>
                        <div className=" bg-green-200 px-10 py-5">
                            <p>Ashar</p>
                            <p className="text-2xl py-2 font-extrabold">
                                {props.ashar}
                            </p>
                        </div>
                        <div className=" bg-accent px-10 py-5">
                            <p>Maghrib</p>
                            <p className="text-2xl py-2 font-extrabold">
                                {props.maghrib}
                            </p>
                        </div>
                        <div className=" bg-red-200 px-10 py-5">
                            <p>Isya</p>
                            <p className="text-2xl py-2 font-extrabold">
                                {props.isya}
                            </p>
                        </div>
                        <div className="drop-shadow-md  px-10 py-5  bg-gray-400 w-full">
                            <p className="text-xl text-white">INDRAMAYU</p>
                            <p className="text-2xl py-2">{formattedTime}</p>
                            <p></p>
                        </div>
                    </div>
                </div>
                {/* <div

                    className="drop-shadow-md  px-10 py-5 rounded-2xl bg-gray-400 mt-4"
                >
                    <p className="text-xl text-white">INDRAMAYU</p>
                    <p className="text-6xl py-2">{formattedTime}</p>
                    <p></p>
                </div> */}
            </div>
        </div>
    );
}
export default Monitor;
