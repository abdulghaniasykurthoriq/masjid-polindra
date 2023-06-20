import React, { useEffect, useState } from 'react';
import Logo from '../../../assets/logo.png';
// import {MdSpaceDashboard,MdMessage} from 'react-icons/md'
// import {FaWallet,FaCalendarDay, FaUserFriends,FaUsersCog,FaUserCircle, FaArrowDown} from 'react-icons/fa'
import { MdSpaceDashboard, MdMessage, MdMonitor } from 'react-icons/md';
import {
    FaWallet,
    FaCalendarDay,
    FaUserFriends,
    FaUsersCog,
    FaUserCircle,
    FaArrowDown,
    FaDeezer,
} from 'react-icons/fa';
// import { Link } from '@inertiajs/inertia-react';
import { Link } from '@inertiajs/react';
import useMediaQuery from '../../../../resources/helpers/useMediaQuery';
// import useMediaQuery from 'resources/helpers/mediaQuery';

export default function Sidebar({ props }) {
    const [isShow, setIsShow] = useState(false);
    const [isKeuangan, setIsKeuangan] = useState(false);
    const isDesktop = useMediaQuery('(min-width:1024px)');
    const isMobile = useMediaQuery('(min-width:200px)');

    let angka = 29;
    const handleShow = () => {
        setIsShow(!isShow);
    };

    const showKeuangan = () => {
        setIsKeuangan(!isKeuangan);
    };
    const currentPage = window.location.pathname;
    useEffect(() => {
        if (
            currentPage == '/laporan-kas' ||
            currentPage == '/laporan-kas/pemasukan' ||
            currentPage == '/laporan-kas/pengeluaran'
        ) {
            setIsKeuangan(true);
        }
        if (isMobile) {
            setIsShow(true);
        }
        if (isDesktop) {
            setIsShow(false);
        }
        console.log('angka', currentPage);
        // setIsKeuangan(false)
    }, [isMobile, isDesktop]);
    return (
        <>
            <div className="lg:min-w-[320px] overflow-auto scroll-smooth  min-h-screen z-50">
                {/* <div
                    onClick={handleShow}
                    className="bg-red-200 z-50 w-14 h-14 rounded-full absolute  left-3 top-3"
                ></div> */}
                <div className="fixed z-10 overflow-auto ">
                    {/* //TODO:THIS START CIRCLE */}

                    {/* //TODO: END BTN CIRCLE */}
                    <div
                        style={{ backgroundColor: '#f6f7ff' }}
                        className=" relative h-screen border-r-2 "
                    >
                        <div
                            style={{ backgroundColor: '#f6f7ff' }}
                            className={`${
                                isShow ? 'hidden' : ''
                            } w-full z-30 fixed lg:relative lg:flex-col  min-h-screen lg:w-80`}
                        >
                            <div
                                onClick={handleShow}
                                className="lg:hidden bg-red-200 w-14 h-14 rounded-full absolute right-10 top-10 z-50"
                            ></div>
                            <div className="flex items-center p-8">
                                <img
                                    src={Logo}
                                    alt="logo"
                                    className="w-20 h-20"
                                />
                                <p className="pl-4 text-xl font-bold">
                                    BAITUL
                                    <br /> MUTTAQIN
                                </p>
                            </div>

                            <div className="w-full ">
                                <div className="pt-8">
                                    <p className="pl-10 ">Administrator</p>
                                    <ul className="text-lg font-semibold">
                                        <Link href={route('login')}>
                                            <li
                                                style={
                                                    currentPage === '/dashboard'
                                                        ? {
                                                              backgroundColor:
                                                                  '#d9ddfc',
                                                          }
                                                        : {}
                                                }
                                                className="pl-10 flex items-center py-2  w-full"
                                            >
                                                {' '}
                                                <MdSpaceDashboard />{' '}
                                                <p className="pl-4">
                                                    Dashboard
                                                </p>{' '}
                                            </li>
                                        </Link>

                                        {/* START LAPORAN KAS */}
                                        <Link href={route('kas.index')}>
                                            <li
                                                style={
                                                    currentPage ===
                                                    '/laporan-kas'
                                                        ? {
                                                              backgroundColor:
                                                                  '#d9ddfc',
                                                          }
                                                        : {}
                                                }
                                                className="cursor-pointer pl-10 flex items-center py-2"
                                            >
                                                {' '}
                                                <FaWallet />{' '}
                                                <p className="pl-4">
                                                    Laporan Kas
                                                </p>{' '}
                                            </li>
                                        </Link>
                                        {/* <div
                                            className={`${
                                                isKeuangan ? '' : 'hidden'
                                            }`}
                                        >
                                            <Link href={route('kas.index')}>
                                                <li
                                                    style={
                                                        currentPage ===
                                                        '/laporan-kas'
                                                            ? {
                                                                  backgroundColor:
                                                                      '#d9ddfc',
                                                              }
                                                            : {}
                                                    }
                                                    className="ease-in-out duration-300 pl-14 flex items-center py-2"
                                                >
                                                    {' '}
                                                    <FaDeezer />{' '}
                                                    <p className="pl-4">
                                                        Laporan Keuangan
                                                    </p>{' '}
                                                </li>
                                            </Link>
                                            <Link
                                                href={route(
                                                    'kas.createPemasukan'
                                                )}
                                            >
                                                <li
                                                    style={
                                                        currentPage ===
                                                        '/laporan-kas/pemasukan'
                                                            ? {
                                                                  backgroundColor:
                                                                      '#d9ddfc',
                                                              }
                                                            : {}
                                                    }
                                                    className="ease-in-out duration-300 pl-14 flex items-center py-2"
                                                >
                                                    {' '}
                                                    <FaDeezer />{' '}
                                                    <p className="pl-4">
                                                        Pemasukan
                                                    </p>{' '}
                                                </li>
                                            </Link>
                                            <Link
                                                href={route(
                                                    'kas.createPengeluaran'
                                                )}
                                            >
                                                <li
                                                    style={
                                                        currentPage ===
                                                        '/laporan-kas/pengeluaran'
                                                            ? {
                                                                  backgroundColor:
                                                                      '#d9ddfc',
                                                              }
                                                            : {}
                                                    }
                                                    className="ease-in-out duration-300 pl-14 flex items-center py-2"
                                                >
                                                    {' '}
                                                    <FaDeezer />{' '}
                                                    <p className="pl-4">
                                                        Pengeluaran
                                                    </p>{' '}
                                                </li>
                                            </Link>
                                        </div> */}

                                        {/* END LAPORAN KAS */}

                                        <Link href={route('event.index')}>
                                            <li
                                                style={
                                                    currentPage === '/event'
                                                        ? {
                                                              backgroundColor:
                                                                  '#d9ddfc',
                                                          }
                                                        : {}
                                                }
                                                className="pl-10 flex items-center py-2 "
                                            >
                                                {' '}
                                                <FaCalendarDay />{' '}
                                                <p className="pl-4">
                                                    Kegiatan
                                                </p>{' '}
                                            </li>
                                        </Link>

                                        <Link href={route('postingan.index')}>
                                            <li
                                                style={
                                                    currentPage === '/postingan'
                                                        ? {
                                                              backgroundColor:
                                                                  '#d9ddfc',
                                                          }
                                                        : {}
                                                }
                                                className="pl-10 flex items-center py-2"
                                            >
                                                {' '}
                                                <MdSpaceDashboard />{' '}
                                                <p className="pl-4">
                                                    Postingan
                                                </p>
                                            </li>
                                        </Link>
                                        <Link
                                            href={route(
                                                'kehadiran-jamaah.index'
                                            )}
                                        >
                                            <li
                                                style={
                                                    currentPage ===
                                                    '/kehadiran-jamaah'
                                                        ? {
                                                              backgroundColor:
                                                                  '#d9ddfc',
                                                          }
                                                        : {}
                                                }
                                                className="pl-10 flex items-center py-2"
                                            >
                                                {' '}
                                                <FaUserFriends />{' '}
                                                <p className="pl-4">
                                                    Kehadiran Jamaah{' '}
                                                </p>
                                            </li>
                                        </Link>
                                        <Link href={route('kotak-saran.index')}>
                                            <li
                                                style={
                                                    currentPage ===
                                                    '/kotak-saran'
                                                        ? {
                                                              backgroundColor:
                                                                  '#d9ddfc',
                                                          }
                                                        : {}
                                                }
                                                className="pl-10 flex items-center py-2"
                                            >
                                                {' '}
                                                <MdMessage />{' '}
                                                <p className="pl-4">
                                                    Kotak Saran{' '}
                                                </p>
                                            </li>
                                        </Link>
                                        <a href="monitor" target="_blank">
                                            <li
                                                style={
                                                    currentPage === '/monitor'
                                                        ? {
                                                              backgroundColor:
                                                                  '#d9ddfc',
                                                          }
                                                        : {}
                                                }
                                                className="pl-10 flex items-center py-2"
                                            >
                                                {' '}
                                                <MdMonitor />{' '}
                                                <p className="pl-4">
                                                    Go to Monitor{' '}
                                                </p>
                                            </li>
                                        </a>

                                        {/* <Link to="/event">
                        <li
                          style={currentPage === "/event" ? { backgroundColor: "#d9ddfc" } : {}}
                          className="pl-10 flex items-center py-2"
                        >
                          {" "}
                          <MdMessage /> <p className="pl-4">Event </p>
                        </li>
                      </Link> */}
                                    </ul>
                                    <p className="pl-10 pt-4">Administrator</p>
                                    <ul>
                                        <Link href={route('akun.index')}>
                                            <li
                                                style={
                                                    currentPage === '/akun'
                                                        ? {
                                                              backgroundColor:
                                                                  '#d9ddfc',
                                                          }
                                                        : {}
                                                }
                                                className="pl-10 flex items-center font-semibold py-2"
                                            >
                                                {' '}
                                                <FaUsersCog />{' '}
                                                <p className="pl-4">
                                                    Management Account
                                                </p>{' '}
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className="h-20 bg-red">
                                {/* //!:JUST GAP */}
                            </div>
                            <div className="content-end absolute bottom-0 w-full h-20 bg-blue-200 flex">
                                <div className="pl-8 flex items-center font-semibold text-gray-700">
                                    <FaUserCircle />{' '}
                                    <p className="pl-4 pr-2">
                                        {props.auth.user.name}
                                    </p>
                                    <FaArrowDown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// export default function Sidebar() {
//   return (
//     <div style={{width:350}} className=' bg-blue-50 min-h-screen flex flex-col justify-between border-r-4 '>

//         <div>
//         <div className='flex items-center p-8'>
//             <img src={Logo} alt="logo" className='w-20 h-20'/>
//             <p className='pl-4 text-xl font-bold'>BAITUL<br/> MUTTAQIN</p>
//         </div>

//         <div className='pl-10 pt-8'>
//             <p>Administrator</p>
//             <ul className='text-lg font-semibold'>
//               <li className='flex items-center pt-4'> <MdSpaceDashboard /> <p className='pl-4'>Dashboard</p>  </li>
//               <li className='flex items-center pt-4'> <FaWallet/> <p className='pl-4'>Laporan Kas</p> </li>
//               <li className='flex items-center pt-4'> <FaCalendarDay/> <p className='pl-4'>Kegiatan</p> </li>
//               <li className='flex items-center pt-4'> <MdSpaceDashboard/> <p className='pl-4'>Postingan</p></li>
//               <li className='flex items-center pt-4'> <FaUserFriends/> <p className='pl-4'>Kehadiran Jamaah </p></li>
//               <li className='flex items-center pt-4'> <MdMessage/> <p className='pl-4'>Kotak Saran </p></li>
//             </ul>
//             <p className='pt-4'>Administrator</p>
//             <ul>
//             <li className='flex items-center font-semibold pt-4'> <FaUsersCog/> <p className='pl-4'>Management Account</p>  </li>
//             </ul>
//         </div>

//         </div>
//         <div className='content-end h-20 bg-blue-200 flex'>
//             <div className='pl-8 flex items-center font-semibold text-gray-700'>
//               <FaUserCircle/> <p className='pl-4 pr-2'>Abdul Ghani</p>
//               <FaArrowDown/>
//             </div>
//         </div>
//     </div>
//   )
// }
