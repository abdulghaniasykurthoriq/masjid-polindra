import Content from '@/Components/moleculs/content';
import HeaderPage from '@/Components/moleculs/headerPage';
import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Inertia } from '@inertiajs/inertia';

function Pemasukan() {
    return (
        <Content>
            <div className="flex flex-col  min-h-screen bg-blue-50">
                <HeaderPage title="Form Pemasukan" />

                <FormPemasukan />
            </div>
        </Content>
    );
}

export default Pemasukan;

const FormPemasukan = () => {
    const [items, setItems] = useState([]);
    const data = [
        {
            kategori: '',
            jumlah_pemasukan: '',
            keterangan: '',
        },
    ];
    const [kodeLaporan, setKodeLaporan] = useState('');

    let angka = 0;

    const onPlus = () => {
        // setCurr(curr + 1);
        angka += 1;
        const [data, setData] = useState({
            kategori: '',
            jumlah_pemasukan: '',
            keterangan: '',
        });
        const newItem = (
            <div className="w-full max-w-xl">
                <div className="border-2 w-full max-w-xl pl-2 mt-4 mb-2 mr-2">
                    <div className="m-2 flex items-center">
                        <label className="max-w-[200px] w-full">
                            Kategory*
                        </label>
                        <select
                            defaultValue={1}
                            className="select w-full max-w-xs mr-2 border-2 border-gray-200"
                        >
                            <option value={1} disabled selected>
                                infaq jumat
                            </option>
                            <option value={1}>01</option>
                            <option value={1}>02</option>
                            <option value={1}>03</option>
                        </select>
                    </div>
                    <div className="m-2 flex items-center">
                        <label className="max-w-[200px] w-full">
                            Jumlah Pemasukan*
                        </label>
                        <div className="form-control w-full max-w-xs">
                            <label className="input-group w-full">
                                <span>Rp</span>
                                <input
                                    type="number"
                                    placeholder="enter the amount"
                                    className="input w-full input-bordered"
                                />
                            </label>
                        </div>
                    </div>
                    <div className="m-2 flex items-center">
                        <label className="max-w-[200px] w-full">
                            Keterangan*
                        </label>
                        <select
                            defaultValue={1}
                            className="select w-full max-w-xs mr-2 border-2 border-gray-200"
                        >
                            <option value={1} disabled selected>
                                infaq jumat
                            </option>
                            <option value={1}>01</option>
                            <option value={1}>02</option>
                            <option value={1}>03</option>
                        </select>
                    </div>
                </div>
            </div>
        );
        const newItems = [...items, newItem];
        setItems(newItems);
        scroll.scrollToBottom({ duration: 1000, smooth: true });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // const url = route('kas.storePemasukan', { kode_laporan: kodeLaporan });
        // Inertia.post(url);
        // alert('woi');
    };
    const onPlus2 = () => {
        const newItem = <ItemPemasukan />; // Contoh: Menambahkan elemen acak
        setItems([...items, newItem]);
    };
    const onDel2 = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    return (
        <div className="w-full">
            <div className="sm:mx-10 bg-white">
                <div className=" border-b-2 px-10 py-4 ">
                    <p>Tambah Pemasukan</p>
                </div>
                <form className="p-2 px-8" onSubmit={handleSubmit}>
                    <div className="m-2 flex items-center">
                        <label className="max-w-[200px] w-full">
                            Kode Pemasukan
                        </label>
                        <input
                            type="text"
                            value={kodeLaporan}
                            onChange={(e) => setKodeLaporan(e.target.value)}
                            placeholder="Type here"
                            className="input w-full max-w-xs bg-gray-300"
                        />
                    </div>

                    {/* //!:ITEM PEMASUKAN */}
                    {/* <div className="flex items-end">
                        <div className="border-2 pl-2 mt-4 mb-2 mr-2 w-full max-w-xl">
                            <div className="m-2 flex items-center">
                                <label className="max-w-[200px] w-full">
                                    Kategory*
                                </label>
                                <select
                                    defaultValue={"infaq"}
                                    className="select w-full max-w-xs mr-2 border-2 border-gray-200"
                                >
                                    <option value={"infaq"} disabled selected>
                                        infaq jumat
                                    </option>
                                    <option value={"lainya"}>lainya</option>
                                </select>
                            </div>
                            <div className="m-2 flex items-center">
                                <label className="max-w-[200px] w-full">
                                    Jumlah Pemasukan*
                                </label>
                                <div className="form-control w-full max-w-xs">
                                    <label className="input-group w-full">
                                        <span>Rp</span>
                                        <input
                                            type="number"
                                            placeholder="enter the amount"
                                            className="input w-full input-bordered"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="m-2 flex items-center">
                                <label className="max-w-[200px] w-full">
                                    Keterangan*
                                </label>
                                <select className="select w-full max-w-xs mr-2 border-2 border-gray-200">
                                    <option disabled selected>
                                        infaq jumat
                                    </option>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                </select>
                            </div>
                        </div>
                        <div
                            onClick={onPlus}
                            className={
                                items.length == 0
                                    ? 'btn btn-primary mb-2'
                                    : 'hidden'
                            }
                        >
                            +
                        </div>
                    </div> */}

                    {/* {items.map((item, index) => (
                        <div key={index} id={index} className="flex items-end">
                            {item}
                            {index == items.length - 1 && (
                                <button
                                    onClick={onPlus}
                                    className="btn btn-primary mb-2"
                                >
                                    +
                                </button>
                            )}
                        </div>
                    ))} */}

                    {/* <ItemPemasukan /> */}
                    <div className="w-full max-w-xl flex items-end">
                        <div className="border-2 w-full max-w-xl pl-2 mt-4 mb-2 mr-2">
                            <div className="m-2 flex items-center">
                                <label className="max-w-[200px] w-full">
                                    Kategory*
                                </label>
                                <select
                                    defaultValue={1}
                                    className="select w-full max-w-xs mr-2 border-2 border-gray-200"
                                >
                                    <option value={1} disabled selected>
                                        infaq jumat
                                    </option>
                                    <option value={1}>01</option>
                                    <option value={1}>02</option>
                                    <option value={1}>03</option>
                                </select>
                            </div>
                            <div className="m-2 flex items-center">
                                <label className="max-w-[200px] w-full">
                                    Jumlah Pemasukan*
                                </label>
                                <div className="form-control w-full max-w-xs">
                                    <label className="input-group w-full">
                                        <span>Rp</span>
                                        <input
                                            type="number"
                                            placeholder="enter the amount"
                                            className="input w-full input-bordered"
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="m-2 flex items-center">
                                <label className="max-w-[200px] w-full">
                                    Keterangan*
                                </label>
                                <select
                                    defaultValue={1}
                                    className="select w-full max-w-xs mr-2 border-2 border-gray-200"
                                >
                                    <option value={1} disabled selected>
                                        infaq jumat
                                    </option>
                                    <option value={1}>01</option>
                                    <option value={1}>02</option>
                                    <option value={1}>03</option>
                                </select>
                            </div>
                        </div>

                        <button
                            onClick={onPlus2}
                            className="btn btn-primary mb-2 mr-2"
                        >
                            +
                        </button>
                        <button onClick={onDel2} className="btn btn-error mb-2">
                            {' '}
                            -{' '}
                        </button>
                    </div>

                    <div className={`max-w-[200px] py-10`}>
                        <button className="btn btn-primary w-full">
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const ItemPemasukan = (itemId) => {
    // const [itemId, setItemId] = useState("")
    return (
        <div className="w-full max-w-xl flex items-end">
            <div className="border-2 w-full max-w-xl pl-2 mt-4 mb-2 mr-2">
                <div className="m-2 flex items-center">
                    <label className="max-w-[200px] w-full">Kategory*</label>
                    <select
                        defaultValue={1}
                        className="select w-full max-w-xs mr-2 border-2 border-gray-200"
                    >
                        <option value={1} disabled selected>
                            infaq jumat
                        </option>
                        <option value={1}>01</option>
                        <option value={1}>02</option>
                        <option value={1}>03</option>
                    </select>
                </div>
                <div className="m-2 flex items-center">
                    <label className="max-w-[200px] w-full">
                        Jumlah Pemasukan*
                    </label>
                    <div className="form-control w-full max-w-xs">
                        <label className="input-group w-full">
                            <span>Rp</span>
                            <input
                                type="number"
                                placeholder="enter the amount"
                                className="input w-full input-bordered"
                            />
                        </label>
                    </div>
                </div>
                <div className="m-2 flex items-center">
                    <label className="max-w-[200px] w-full">Keterangan*</label>
                    <select
                        defaultValue={1}
                        className="select w-full max-w-xs mr-2 border-2 border-gray-200"
                    >
                        <option value={1} disabled selected>
                            infaq jumat
                        </option>
                        <option value={1}>01</option>
                        <option value={1}>02</option>
                        <option value={1}>03</option>
                    </select>
                </div>
            </div>

            <button className="btn btn-primary mb-2">+</button>
        </div>
    );
};
