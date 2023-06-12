import Content from '@/Components/moleculs/content';
import HeaderPage from '@/Components/moleculs/headerPage';
import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Inertia } from '@inertiajs/inertia';

function Pengeluaran(props) {
    // console.log('props', props)
    return (
        <Content>
            <div className="flex flex-col  min-h-screen bg-blue-50">
                <HeaderPage title="Form Pengeluaran" />

                <FormPengeluaran props={props} />
            </div>
        </Content>
    );
}
export default Pengeluaran;

const FormPengeluaran = (props) => {
    console.log('props', props);
    // useEffect(() => {

    // },[])
    const [kodeLaporan, setKodeLaporan] = useState(props.props.kode_laporan);
    const [inputs, setInputs] = useState([
        { id: 1, jumlah_pengeluaran: 0, kategory: 'infaq', keterangan: '' },
    ]);

    const handleInputChange = (index, value) => {
        console.log('input.value', inputs);
        const updatedInputs = [...inputs];
        updatedInputs[index].jumlah_pengeluaran = parseInt(value);
        setInputs(updatedInputs);
    };
    const handleInputChange2 = (index, value) => {
        console.log('input.value', inputs);
        const updatedInputs = [...inputs];
        updatedInputs[index].kategory = value;
        setInputs(updatedInputs);
    };
    const handleInputChange3 = (index, value) => {
        console.log('input.value', inputs);
        const updatedInputs = [...inputs];
        updatedInputs[index].keterangan = value;
        setInputs(updatedInputs);
    };

    const handleAddInput = () => {
        const newInput = {
            id: inputs.length + 1,
            jumlah_pengeluaran: 0,
            kategory: 'infaq',

            keterangan: '',
        };
        setInputs([...inputs, newInput]);
        scroll.scrollToBottom({ duration: 1000, smooth: true });
    };

    const handleRemoveInput = (index) => {
        const updatedInputs = [...inputs];
        updatedInputs.splice(index, 1);
        setInputs(updatedInputs);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const url = route('kas.storePengeluaran', {
            kode_laporan: kodeLaporan,
            items: inputs,
        });
        Inertia.post(url);
        console.log(inputs);
    };

    return (
        <div className="w-full">
            <div className="sm:mx-10 bg-white mb-16">
                <div className=" border-b-2 px-10 py-4 ">
                    <p>Tambah Pengeluaran</p>
                </div>
                <form className="p-2 px-8" onSubmit={handleSubmit}>
                    <div className="m-2 flex items-center">
                        <label className="max-w-[200px] w-full">
                            Kode Pengeluaran
                        </label>
                        <input
                            type="text"
                            value={kodeLaporan}
                            disabled={true}
                            // onChange={(e) => setKodeLaporan(e.target.value)}
                            placeholder="Type here"
                            className="input w-full max-w-xs bg-gray-300"
                        />
                    </div>
                    {inputs.map((input, index) => (
                        <div
                            key={input.id}
                            className="w-full max-w-xl flex items-end"
                        >
                            <div className="border-2 w-full max-w-xl pl-2 mt-4 mb-2 mr-2">
                                <div className="m-2 flex items-center">
                                    <label className="max-w-[200px] w-full">
                                        Kategory*
                                    </label>
                                    <select
                                        // value={input.kategory}
                                        onChange={(event) =>
                                            handleInputChange2(
                                                index,
                                                event.target.value
                                            )
                                        }
                                        value={input.kategory}
                                        className="select w-full max-w-xs mr-2 border-2 border-gray-200"
                                    >
                                        {/* <option value={"satu"} disabled selected>
                                      infaq jumat
                                  </option> */}
                                        <option value={'infaq'}>infaq</option>
                                        <option value={'shodaqah'}>
                                            shodaqah
                                        </option>
                                        <option value={'zakat'}>zakat</option>
                                        <option value={'lainya'}>lainya</option>
                                    </select>
                                </div>
                                <div className="m-2 flex items-center">
                                    <label className="max-w-[200px] w-full">
                                        Jumlah Pengeluaran*
                                    </label>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="input-group w-full">
                                            <span>Rp</span>
                                            <input
                                                value={input.jumlah_pengeluaran}
                                                onChange={(event) =>
                                                    handleInputChange(
                                                        index,
                                                        event.target.value
                                                    )
                                                }
                                                type="number"
                                                placeholder="enter the amount"
                                                className="input w-full input-bordered"
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="m-2 flex ">
                                    <label className="max-w-[200px] w-full">
                                        Keterangan*
                                    </label>
                                    <textarea
                                        value={inputs.keterangan}
                                        onChange={(event) =>
                                            handleInputChange3(
                                                index,
                                                event.target.value
                                            )
                                        }
                                        className="textarea textarea-bordered"
                                        placeholder="Bio"
                                    ></textarea>
                                    {/* <select
                                        defaultValue={1}
                                        className="select w-full max-w-xs mr-2 border-2 border-gray-200"
                                    >
                                        <option value={1} disabled selected>
                                            infaq jumat
                                        </option>
                                        <option value={1}>01</option>
                                        <option value={1}>02</option>
                                        <option value={1}>03</option>
                                    </select> */}
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={handleAddInput}
                                className="btn btn-primary mb-2 mr-2"
                            >
                                +
                            </button>
                            {inputs.length > 1 && (
                                <button
                                    type="button"
                                    onClick={() => handleRemoveInput(index)}
                                    className="btn btn-error mb-2"
                                >
                                    {' '}
                                    -{' '}
                                </button>
                            )}
                        </div>
                        // <div key={input.id}>
                        //     <input
                        //         type="text"
                        //         value={input.value}
                        //         onChange={(event) =>
                        //             handleInputChange(index, event.target.value)
                        //         }
                        //     />
                        //     {index > 0 && (
                        //         <button
                        //             type="button"
                        //             onClick={() => handleRemoveInput(index)}
                        //         >
                        //             Hapus
                        //         </button>
                        //     )}
                        // </div>
                    ))}
                    {/* <button type="button" onClick={handleAddInput}>
                        Tambah Input
                    </button> */}
                    <div className={`max-w-[200px] py-10`}>
                        <button className="btn btn-primary w-full">
                            Simpan
                        </button>
                    </div>
                    {/* <button type="submit">Submit</button> */}
                </form>
            </div>
        </div>
    );
};
