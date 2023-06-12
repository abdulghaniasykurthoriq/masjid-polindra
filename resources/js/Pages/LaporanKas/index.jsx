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

    const showDetail = () => {
        return <div></div>;
    };

    return (
        <Content>
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
                                        <th>Kategori</th>
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
                                                            {/* Open the modal using ID.showModal() method */}
                                                            {/* <button
                                                                className="btn"
                                                 
                                                            >
                                                                open modal
                                                            </button>
                                                            <form
                                                                method="dialog"
                                                                id="my_modal_5"
                                                                className="modal modal-bottom sm:modal-middle"
                                                            >
                                                                <div
                                                                    
                                                                    className="modal-box"
                                                                >
                                                                    <h3 className="font-bold text-lg">
                                                                        Hello!
                                                                    </h3>
                                                                    <p className="py-4">
                                                                        Press
                                                                        ESC key
                                                                        or click
                                                                        the
                                                                        button
                                                                        below to
                                                                        close
                                                                    </p>
                                                                    <div className="modal-action">
                                                                        <button className="btn">
                                                                            Close
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </form> */}
                                                            {/* Open the modal using ID.showModal() method */}
{/* You can open the modal using ID.showModal() method */}
{/* You can open the modal using ID.showModal() method */}
<button className="btn" onClick={()=>window.my_modal_4.showModal()}>open modal</button>
<dialog id="my_modal_4" className="modal">
  <form method="dialog" className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="modal-action">
      {/* if there is a button, it will close the modal */}
      <button className="btn">Close</button>
    </div>
  </form>
</dialog>
                                                            {/* <button
                                                                onClick={() =>
                                                                    window.my_modal_5.showModal()
                                                                }
                                                                className="btn btn-accent"
                                                            >
                                                                Show detail
                                                            </button>
                                                            <dialog
                                                                id="my_modal_5"
                                                                className="modal modal-bottom sm:modal-middle"
                                                            >
                                                                <form
                                                                    method="dialog"
                                                                    className="modal-box"
                                                                >
                                                                    <h1 className="py-2 px-4 font-bold text-lg border-b">
                                                                        PEMASUKAN
                                                                        <br />
                                                                        Rp.
                                                                        1000.000
                                                                    </h1>

                                                                    <h2 className="py-2 px-4 text-md bg-base-200 rounded">
                                                                        001-MSK
                                                                    </h2>
                                                                    <p className="py-2">
                                                                        12/06/2023
                                                                    </p>
                                                                    <div className="modal-action">
                                                           
                                                                        <button className="btn">
                                                                            Close
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </dialog> */}
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
        alert('wpi');
        Inertia.get('/laporan-kas', { kode }, { preserveState: true });
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
                            placeholder="Search . . ."
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
