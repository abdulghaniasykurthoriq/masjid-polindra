import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import { Inertia } from '@inertiajs/inertia';
export default function CreateEvent(props) {
    const [totalMateri, setTotalMateri] = useState(1);
    const [file, setFile] = useState(null);
    const handleTotalMateri = () => {
        setTotalMateri(totalMateri + 1);
    };
    let listMateri = [];
    for (let index = 0; index < totalMateri; index++) {
        listMateri.push(
            <div className="flex w-full justify-between px-6 p-2 items-center">
                <label>Thumbnail</label>
                <div className="max-w-4xl float-start max-w-md w-full flex">
                    <input
                        onChange={(e) => setFile(e.target.files[0])}
                        class=" max-w-sm file:bg-blue-500 file:text-white file:absolute file:-right-3 relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 dark:border-neutral-600 bg-clip-padding py-[0.32rem] px-3 leading-[2.15] font-normal text-neutral-700  transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 dark:file:bg-neutral-700 file:px-3 file:py-[0.32rem] file:text-neutral-700 dark:file:text-neutral-100 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
                        id="formFileLg"
                        type="file"
                    />
                    {index == totalMateri - 1 && (
                        <div
                            onClick={handleTotalMateri}
                            className=" bg-blue-500 p-3 mx-2 text-white "
                        >
                            <FaPlus />
                        </div>
                    )}
                </div>
            </div>
            // <div className='flex justify-between max-w-4xl'>

            //     <InputMateri className='bg-red-200'/>
            //     {index == totalMateri-1 && (<div onClick={handleTotalMateri} className=' bg-blue-500 p-4 text-white my-2 mr-6'>
            //         <FaPlus />
            //     </div>)
            //     }

            // </div>
        );
    }
    // const {files} = usePage().props
    // const { data, setData, errors, post, progress} = useForm({
    //     nama:"",
    //     kategori:"",
    //     file:null
    // });
    const [nama, setNama] = useState('');
    const [kategori, setKategori] = useState('');
    const [image, setImage] = useState(null);
    // const [materi, setMateri] = useState(null);
    let materi = [];
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        setError(null);
        setImage(event.target.files[0]);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', image);
        formData.append('nama', nama);
        formData.append('kategori', kategori);
        var arrayOfObjects = [
            ['John', 25],
            ['Jane', 30],
            ['Bob', 35],
        ];
        //   formData.append('items', arrayOfObjects);

        // Iterasi melalui array dan tambahkan setiap objek ke FormData
        for (var i = 0; i < arrayOfObjects.length; i++) {
            formData.append('items[' + i + '].', arrayOfObjects[i]);
        }

        Inertia.post('/event', formData, {
            onError: (errors) => {
                setError(errors['image'][0]);
            },
            onSuccess: () => {
                setImage(null);
                setError(null);
            },
        });
    };

    return (
        <div className="flex">
            <Head title="Management Event Masjid" />
            <Sidebar />
            <div className="bg-blue-50 w-full">
                {/* Header section */}
                <div className="flex justify-between p-8">
                    <p className="text-3xl font-bold">MANAGEMENT EVENT</p>
                    <p>logout</p>
                </div>

                <div className="mx-8 my-2 mb-8 bg-white mt-6 rounded-t-2xl">
                    <div>
                        <div className="p-4 flex items-center">
                            <div className="bg-red-600 p-2 w-max flex items-center text-white rounded-lg">
                                <FaArrowLeft className="mr-2" />
                                <p>Back</p>
                            </div>
                            <p className="px-6 text-2xl font-bold">
                                Bikin Event
                            </p>
                        </div>
                    </div>
                    {/* <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form> */}
                    <form className="" onSubmit={handleSubmit}>
                        <div className="  flex w-full justify-between px-6 p-2 items-center">
                            <label>Judul</label>
                            <div className="max-w-4xl w-full">
                                <TextInput
                                    className=""
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex w-full justify-between px-6 p-2 items-center">
                            <label>Kategori</label>
                            <div className="max-w-4xl w-full">
                                <TextInput
                                    className=""
                                    value={kategori}
                                    onChange={(e) =>
                                        setKategori(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        <div className="flex w-full justify-between px-6 p-2 items-center">
                            <label> Gambar materi</label>
                            <div className=" float-start max-w-md w-full">
                                <input
                                    class=" max-w-sm file:bg-blue-500 file:text-white file:absolute file:-right-3 relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 dark:border-neutral-600 bg-clip-padding py-[0.32rem] px-3 leading-[2.15] font-normal text-neutral-700  transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit dark:file:bg-neutral-700 file:px-3 file:py-[0.32rem] file:text-neutral-700 dark:file:text-neutral-100 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
                                    id="formFileLg"
                                    type="file"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                        {listMateri}

                        <div className="flex justify-center py-8 full">
                            <button className="btn btn-primary">Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
