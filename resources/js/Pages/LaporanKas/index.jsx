import { FaSearch } from 'react-icons/fa';
import { Inertia } from '@inertiajs/inertia';
import Content from '@/Components/moleculs/content';
import React, { useState } from 'react';
import HeaderPage from '@/Components/moleculs/headerPage';
// import useFormatDate from '../../helpers/useFormatDate';
import useFormatDate from '../../../helpers/useFormatDate';
import useFormatRupiah from '../../../helpers/useFormatRupiah';
function LaporanKas(props) {
    console.log('props', props);

    

    const [display, setDisplay] = useState(false)
    const [judul, setJudul] = useState('')
    const [item, setItem] = useState('')
    const [itemCreatedAt, setItemCreatedAt] = useState('')
    const [itemStatus, setItemStatus] = useState('')
    const [itemKode, setItemKode] = useState('')
    const [itemData, setItemData] = useState([])
    const showDetail = (pemasukanStatus,kodeItem, pemasukan,detail) => {
        setDisplay(true)
        setJudul('agat');
        setItemCreatedAt(pemasukan)
        setItemStatus(pemasukanStatus)
        setItemKode(kodeItem)
        console.log('pp', detail)
        setItemData(detail)
    };
    const setShow = () => {
        setDisplay(false)
        setJudul('');
        setItemCreatedAt('')
        setItemStatus('')
        setItemKode('')
        setItemData([])
        
    }

    const Dialog = () => {
        console.log('niko new', itemData)
            return (
                <div  className={ `${display ? 'flex' : 'hidden'} absolute w-screen h-screen flex justify-center items-center`}>
                <div onClick={setShow} style={{zIndex:99}} className={ `bg-gray-400 w-screen h-screen absolute opacity-50 items-center justify-center`}>
                    
                </div>
                <div style={{zIndex:100, opacity:1}} className='bg-white w-full max-w-xl h-[400px] rounded-xl shadow-2xl overflow-y-auto'>
                        <div className='p-8'>
                        <h3 className="font-bold text-lg">{itemStatus}
                        <button className="btn btn-xs btn-outline btn-secondary mx-2">{itemKode}</button>
                        </h3>
                        <p>{useFormatDate(itemCreatedAt)}</p>
                        <div className='pt-2 mt-2 w-full'>
                            {itemData.map((item,index) => {
                                return (
<div key={index} className='border-t-2 pt-2 mt-2'>
                                <h3>{item.kategory}</h3>
                                <h2>{useFormatRupiah(item.jumlah)}</h2>
                                <div>
                                <p>{item.keterangan}</p>
                                </div>
                                
                            </div>
                                )
                            })}
                            
 

                        </div>
                        </div>
                        
                        
                    </div>
            </div>
        )
    }



    return (
        <>
        
        {display && <Dialog/> }
        
        <Content props={props}>
            
            <div className=" min-h-screen ">
                <HeaderPage title={'LAPORAN KEUANGAN'} />

                <Header />
                <div className="relative">
                    {/* <ListCard /> */}

                    <div className="flex mx-16 mb-4 ">
                        {/* start table  */}
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full ">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>kode laporan</th>
                                        <th>Status</th>
                                        <th>Nominal</th>
                                        <th>Tanggal</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {props.laporan_keuangan.length > 0 &&
                                        props.laporan_keuangan.map(
                                            (pemasukan, index) => {
                                                return (
                                                    <tr
                                                        className="hover"
                                                        key={index}
                                                    >
                                                        <td>
                                                            {
                                                                pemasukan.kode_laporan
                                                            }{' '}
                                                        </td>
                                                        <td>
                                                            {pemasukan.status}{' '}
                                                        </td>
                                                        <td>
                                                            {useFormatRupiah(
                                                                pemasukan.total
                                                            )}
                                                        </td>
                                                        <td>
                                                            {useFormatDate(
                                                                pemasukan.created_at
                                                            )}
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn"
                                                                onClick={() =>
                                                                    showDetail(
                                                                        pemasukan.status,
                                                                        pemasukan.kode_laporan,
                                                                        pemasukan.created_at,
                                                                        pemasukan.detail
                                                                        
                                                                        )
                                                                }
                                                            >
                                                                Show detail
                                                            </button>
                                                         
                                                        </td>
                                                    </tr>
                                                );
                                            }
                                        )}
                                </tbody>
                            </table>
                        </div>
                        {/* end table */}

                        {/* //todo: grafik */}
                        {/* <div className="hidden xl:flex bg-gray-200  w-[400px] h-200 text-center justify-center items-center">
              this is grafik <br />
              under constructured
            </div> */}
                    </div>
                </div>
            </div>
        </Content>
        </>
        
    );
}

const Header = () => {
    const [kode, setKode] = useState('');
    const goToCreatePemasukan = () => {
        const url = route('kas.createPemasukan');
        Inertia.get(url);
    };
    const goToCreatePengeluaran = () => {
        const url = route('kas.createPengeluaran');
        Inertia.get(url);
    };
    const submitFilter = (e) => {
        e.preventDefault();
        // alert('wpi');
        // route('kas.filter', { kode });
        const params = new URLSearchParams();
        params.append('kode', kode);
        //window.location.href(`/laporan-kas?${params.toString()}`)
        Inertia.post(`/laporan-kas?${params.toString()}`, {
            preserveState: true,
        });
    };
    return (
        <div className="w-full flex justify-between px-12 pt-12 pb-6 ">
            {/* //todo: input search */}
            <form onSubmit={submitFilter}>
                <div className="form-control">
                    <label className="input-group">
                        <span className="bg-white text-gray-300">
                            <FaSearch />
                        </span>
                        <input
                            type="text"
                            value={kode}
                            onChange={(e) => setKode(e.target.value)}
                            placeholder="Search kode laporan . . ."
                            className="input"
                        />
                    </label>
                </div>
            </form>

            {/* //todo: logout  */}
            <div>
                <a href="laporan-kas/pemasukan">
                    <button
                        // onClick={() => goToCreatePemasukan()}
                        className="btn btn-primary mx-2"
                    >
                        + Pemasukan
                    </button>
                </a>
                <a href="laporan-kas/pengeluaran">
                    <button
                        // onClick={goToCreatePengeluaran}
                        className="btn btn-secondary mx-2"
                    >
                        + Pengeluaran
                    </button>
                </a>

                {/* <p className="px-2">Logout</p>
                <BiLogOutCircle /> */}
            </div>
        </div>
    );
};

const ListCard = () => {
    return (
        <div className="w-full flex flex-wrap items-center justify-center absolute top-[-50px] lg:top-[-90px]">
            {/* <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  h-40 w-40"></div>
             */}
            <div
                className="
            bg-gradient-to-r  from-[#FEECD2] to-100% to-[#D0D5FC]
            md:w-60 md:h-32 
            lg:w-[200px] 
            xl:w-72 xl:h-40 m-2 px-4 lg:px-8 py-2 lg:py-4 flex flex-col justify-between"
            >
                <p className=" z-10 text-[9px] sm:text-lg">Pemasukan</p>
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
                <p className="z-10 text-[9px]  sm:text-lg">Pemasukan</p>
                <p className="z-10 text-center xl:text-3xl">Rp.50.000</p>
                <p className="z-10 text-xs text-right">periode 32 oktober</p>
            </div>
        </div>
    );
};

export default LaporanKas;
