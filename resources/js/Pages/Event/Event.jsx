import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head, Link } from '@inertiajs/react';
import { FaPencilAlt, FaRegSadTear, FaTrashAlt, FaUser } from 'react-icons/fa';
import Logo from '../../../assets/logo.png';
import HeaderContent from '@/Components/moleculs/headerContent';
import HeaderPage from '@/Components/moleculs/headerPage';

export default function Event(props) {
    return (
        <div className="flex">
            <Head title="Management Event Masjid" />
            <Sidebar />
            <div className="bg-blue-50 w-full">
                {/* Header section */}
                {/* <div className='flex justify-between p-8'>
                    <p className='text-3xl font-bold'>MANAGEMENT EVENT</p>
                    <p>logout</p>
                </div> */}
                {/* <HeaderContent title={"MANAGEMENT EVENT"} /> */}
                <HeaderPage title={'MANAGEMENT EVENT'} />
                {/* Menu section */}
                <div className="flex justify-between px-8 pt-8">
                    <div className="flex items-center  w-full max-w-[600px] ">
                        <div className="w-full">
                            <TextInput placeholder="search" />
                        </div>
                        <div className="flex items-center ml-4 max-w-2xl w-full">
                            <span>Kategory : </span>
                            <div className="px-4 mx-2 bg-gray-200 py-2 rounded-lg ">
                                <p> Mater/ judul / Tanggal</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <Link href={route('event.detail')}>
                            <button
                                className="bg-gray-400 px-4  rounded-lg text-white"
                                type="btn"
                            >
                                Most Recent
                            </button>
                        </Link>
                        <Link href={route('event.create')}>
                            <button
                                className="bg-blue-400 px-4 rounded-lg text-white"
                                type="btn"
                            >
                                + Event
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-8 my-2 bg-white mt-6">
                    {/* card content section */}
                    <div className="flex px-6 py-4  border-b-2">
                        <div className="flex  justify-between  w-full">
                            <div className="flex w-full items-center">
                                <p className="pr-4">1.</p>
                                <img className="w-16" src={Logo} alt="image" />
                                <div className="px-2">
                                    <p>Memperingati Mulid Nabi Muhammad</p>
                                    <div className="flex">
                                        <p className="pr-20">Mar 8, 2023</p>
                                        <p className="pr-4">263</p>
                                        <p className="pr-4">1.1k</p>
                                        <p className="pr-4">100</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center w-full">
                                <p className="pr-8 flex items-center">
                                    {' '}
                                    <FaUser className="mr-2" /> Agat Abdul
                                </p>
                                <div className="flex">
                                    <p className="px-4 bg-blue-500 mx-4 self-center">
                                        Pengajian Umum
                                    </p>
                                    <button
                                        className="mx-2 bg-green-700 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaRegSadTear />{' '}
                                    </button>
                                    <Link href={route('event.detail')}>
                                        <button
                                            className="mx-2 bg-blue-400 p-2 rounded-lg"
                                            type="btn"
                                        >
                                            {' '}
                                            <FaPencilAlt />{' '}
                                        </button>
                                    </Link>

                                    <button
                                        className="mx-2 bg-red-400 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaTrashAlt />{' '}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-6 py-4  border-b-2">
                        <div className="flex  justify-between  w-full">
                            <div className="flex w-full items-center">
                                <p className="pr-4">1.</p>
                                <img className="w-16" src={Logo} alt="image" />
                                <div className="px-2">
                                    <p>Memperingati Mulid Nabi Muhammad</p>
                                    <div className="flex">
                                        <p className="pr-20">Mar 8, 2023</p>
                                        <p className="pr-4">263</p>
                                        <p className="pr-4">1.1k</p>
                                        <p className="pr-4">100</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center w-full">
                                <p className="pr-8 flex items-center">
                                    {' '}
                                    <FaUser className="mr-2" /> Agat Abdul
                                </p>
                                <div className="flex">
                                    <p className="px-4 bg-blue-500 mx-4 self-center">
                                        Pengajian Umum
                                    </p>
                                    <button
                                        className="mx-2 bg-green-700 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaRegSadTear />{' '}
                                    </button>
                                    <button
                                        className="mx-2 bg-blue-400 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaPencilAlt />{' '}
                                    </button>
                                    <button
                                        className="mx-2 bg-red-400 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaTrashAlt />{' '}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-6 py-4  border-b-2">
                        <div className="flex  justify-between  w-full">
                            <div className="flex w-full items-center">
                                <p className="pr-4">1.</p>
                                <img className="w-16" src={Logo} alt="image" />
                                <div className="px-2">
                                    <p>Memperingati Mulid Nabi Muhammad</p>
                                    <div className="flex">
                                        <p className="pr-20">Mar 8, 2023</p>
                                        <p className="pr-4">263</p>
                                        <p className="pr-4">1.1k</p>
                                        <p className="pr-4">100</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center w-full">
                                <p className="pr-8 flex items-center">
                                    {' '}
                                    <FaUser className="mr-2" /> Agat Abdul
                                </p>
                                <div className="flex">
                                    <p className="px-4 bg-blue-500 mx-4 self-center">
                                        Pengajian Umum
                                    </p>
                                    <button
                                        className="mx-2 bg-green-700 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaRegSadTear />{' '}
                                    </button>
                                    <button
                                        className="mx-2 bg-blue-400 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaPencilAlt />{' '}
                                    </button>
                                    <button
                                        className="mx-2 bg-red-400 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaTrashAlt />{' '}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-6 py-4  border-b-2">
                        <div className="flex  justify-between  w-full">
                            <div className="flex w-full items-center">
                                <p className="pr-4">1.</p>
                                <img className="w-16" src={Logo} alt="image" />
                                <div className="px-2">
                                    <p>Memperingati Mulid Nabi Muhammad</p>
                                    <div className="flex">
                                        <p className="pr-20">Mar 8, 2023</p>
                                        <p className="pr-4">263</p>
                                        <p className="pr-4">1.1k</p>
                                        <p className="pr-4">100</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center w-full">
                                <p className="pr-8 flex items-center">
                                    {' '}
                                    <FaUser className="mr-2" /> Agat Abdul
                                </p>
                                <div className="flex">
                                    <p className="px-4 bg-blue-500 mx-4 self-center">
                                        Pengajian Umum
                                    </p>
                                    <button
                                        className="mx-2 bg-green-700 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaRegSadTear />{' '}
                                    </button>
                                    <button
                                        className="mx-2 bg-blue-400 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaPencilAlt />{' '}
                                    </button>
                                    <button
                                        className="mx-2 bg-red-400 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaTrashAlt />{' '}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
