import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head, Link } from '@inertiajs/react';
import { FaFilter } from 'react-icons/fa';
import Swal from 'sweetalert2';
import HeaderPage from '@/Components/moleculs/headerPage';
import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';

export default function Dashboarad(props) {
    

    
    return (
        <div className="flex">
            <Head title="Management Dashboarad Masjid" />
            <Sidebar />
            <div className="bg-blue-50 w-full">
                <HeaderPage title={' Dashboarad'} />
                {/* Menu section */}


                {/* Content section */}
                <div className="mx-8 my-2 mt-6">
                    {/* card content section */}
                    <ListCard/>
                </div>
            </div>
        </div>
    );
}
const ListCard = () => {
    return (
        <div className="w-full flex flex-wrap items-center justify-center ">
            {/* <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  h-40 w-40"></div>
             */}
            <div
                className="
            bg-gradient-to-r  from-[#FEECD2] to-100% to-[#D0D5FC]
            md:w-60 md:h-32 
            lg:w-[200px] 
            xl:w-72 xl:h-40 m-2 px-4 lg:px-8 py-2 lg:py-4 flex flex-col justify-between"
            >
                <p className=" z-10 text-[9px] sm:text-lg">Total Saldo</p>
                <p className="z-10 text-center xl:text-3xl">Rp.999.999.999</p>
                <p className="z-10 text-xs text-right">periode 32 oktober</p>
            </div>
            <div
                className="
             bg-gradient-to-r  from-[#FDEFC8] to-100% to-[#FEE1ED]
             md:w-60 md:h-32 md:mx-1
             lg:w-[200px] 
             xl:w-72 xl:h-40 m-2 px-4 lg:px-8 py-2 lg:py-4 flex flex-col justify-between"
            >
                <p className=" z-10 text-[9px] sm:text-lg">Pemasukan</p>
                <p className="z-10 text-center xl:text-3xl">Rp.999.999.999</p>
                <p className="z-10 text-xs text-right">periode 32 oktober</p>
            </div>
            <div
                className="
            bg-gradient-to-r  from-[#e5fcbc] to-100% to-[#A2C960]
            md:w-60 md:h-32
            lg:w-[200px] 
            xl:w-72 xl:h-40 m-2 px-4 lg:px-8 py-2 lg:py-4 flex flex-col justify-between relative"
            >
                <div className="hidden xl:flex h-16 w-16 bg-opacity-50  bg-[#DBE8C7] rounded-full absolute top-0 right-0 ">
                    <div className="h-24 w-24 bg-opacity-50  bg-[#D0E0B3] rounded-full absolute right-[55%] top-[10%] ">
                        <div
                            className="
                        bg-opacity-50
                        h-36 w-36 rounded-full absolute right-[50%] top-[10%] bg-[#D0E0B3]"
                        ></div>
                    </div>
                </div>
                <p className="z-10 text-[9px]  sm:text-lg">Pengeluaran</p>
                <p className="z-10 text-center xl:text-3xl">Rp.50.000</p>
                <p className="z-10 text-xs text-right">periode 32 oktober</p>
            </div>
        </div>
    );
};