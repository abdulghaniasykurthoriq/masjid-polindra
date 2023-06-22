import { Inertia } from '@inertiajs/inertia';
import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';
import HeaderPage from '@/Components/moleculs/headerPage';

export default function Update(props) {
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    const [status, setStatus] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        setId(props.user.id);
        setUsername(props.user.username);
        setName(props.user.name);
        setLevel(props.user.level);
        setStatus(props.user.status);
        // setPassword(props.user.password);
        console.log('woi ini property lahh', props);
    }, []);
    const sendUpdate = (e) => {
        e.preventDefault();
        const data = { id, name, username, level, status, password };
        // console.log('data', data);
        Inertia.post(`/akun/update/{$id}`, data);
    };

    return (
        <div className="flex">
            <Head title="Management Event Masjid" />
            <Sidebar props={props} />
            <div className="bg-blue-50 w-full">
                {/* Header section */}
                {/* <div className="flex justify-between p-8">
                    <p className="text-3xl font-bold">FORM ACCOUNT</p>
                    <p>logout</p>
                </div> */}
                <HeaderPage title={'UPDATE AKUN'} />

                <div className="mx-8 my-2 mb-8 bg-white mt-6 rounded-t-2xl">
                    <div>
                        <div className="p-4 flex items-center">
                            <div onClick={() => window.history.back()} className="cursor-pointer bg-red-600 p-2 w-max flex items-center text-white rounded-lg">
                                <FaArrowLeft className="mr-2" />
                                <p>Back</p>
                            </div>
                            <p className="px-6 text-2xl font-bold">Buat Akun</p>
                        </div>
                    </div>
                    <form onSubmit={sendUpdate} className="">
                        <div className="  flex w-full justify-between px-6 p-2 items-center">
                            <label>username</label>
                            <div className="max-w-4xl w-full">
                                <TextInput
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="  flex w-full justify-between px-6 p-2 items-center">
                            <label>Full Name</label>
                            <div className="max-w-4xl w-full">
                                <TextInput
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="  flex w-full justify-between px-6 p-2 items-center">
                            <label>Password</label>
                            <div className="max-w-4xl w-full">
                                <TextInput
                                    className=""
                                    type="password"
                                    value={password}
                                    placeholder={'********'}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="  flex w-full  px-6 p-2 items-center">
                            <label className="max-w-[380px] w-full">
                                Level
                            </label>
                            <select
                                value={level}
                                onChange={(e) => setLevel(e.target.value)}
                                className="select w-full max-w-xs mr-2 border-2 border-gray-200"
                            >
                                <option value={'dosen'}>Dosen</option>
                                <option value={'mahasiswa'}>Mahasiswa</option>
                            </select>
                            {/* <div className='max-w-4xl w-full'>
                            <TextInput className='' />
                            </div> */}
                        </div>
                        <div className="  flex w-full  px-6 p-2 items-center">
                            <label className="max-w-[380px] w-full">
                                Status
                            </label>
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="select w-full max-w-xs mr-2 border-2 border-gray-200"
                            >
                                {/* <option value={1} disabled selected>
                                    infaq jumat
                                </option> */}
                                <option value={'active'}>Aktif</option>
                                <option value={'non-active'}>
                                    Tidak aktif
                                </option>
                            </select>
                            {/* <div className='max-w-4xl w-full'>
                            <TextInput className='' />
                            </div> */}
                        </div>

                        <div className="flex justify-center py-8 full">
                            <button
                                onClick={sendUpdate}
                                className="btn btn-primary"
                            >
                                Simpan
                            </button>
        
                            <button onClick={() => window.history.back() } className="btn btn-error mx-2">
                                cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
