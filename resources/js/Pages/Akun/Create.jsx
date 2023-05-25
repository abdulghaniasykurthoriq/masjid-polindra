
import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Inertia } from '@inertiajs/inertia';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { FaArrowLeft, FaPlus } from 'react-icons/fa';

export default function CreateAccount(props) {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [level, setLevel] = useState('')
    const [status, setStatus] = useState('')
    const [password, setPassword] = useState('')
    const data = {username,name,level,password,status};
    const onsubmit = (e) => {
        e.preventDefault()
        console.log('username', username)
        console.log('username', name)
        console.log('username', password)
        console.log('level', level)
        Inertia.post('/akuncreate',data)
       
        
    }
    const [totalMateri, setTotalMateri] = useState(1);
    const handleTotalMateri = () => {
        setTotalMateri(totalMateri+1)
    }
    let listMateri = []
    for (let index = 0; index < totalMateri; index++) {
        listMateri.push(
            <div className='flex w-full justify-between px-6 p-2 items-center'>
                            <label>Thumbnail</label>
                            <div className='max-w-4xl float-start max-w-md w-full flex'>
                                <input
                                class=" max-w-sm file:bg-blue-500 file:text-white file:absolute file:-right-3 relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 dark:border-neutral-600 bg-clip-padding py-[0.32rem] px-3 leading-[2.15] font-normal text-neutral-700  transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 dark:file:bg-neutral-700 file:px-3 file:py-[0.32rem] file:text-neutral-700 dark:file:text-neutral-100 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none"
                                id="formFileLg"
                                type="file" />
                                {index == totalMateri-1 && (<div onClick={handleTotalMateri} className=' bg-blue-500 p-3 mx-2 text-white '><FaPlus /></div>)}
                            </div>
                            
                        </div>
        )
        
    }
    

    return (
        <div className='flex'>
            <Head title="Management Event Masjid" />
            <Sidebar/>
            <div className='bg-blue-50 w-full'>
                {/* Header section */}
                <div className='flex justify-between p-8'>
                    <p className='text-3xl font-bold'>FORM ACCOUNT</p>
                    <p>logout</p>
                </div>

                <div className='mx-8 my-2 mb-8 bg-white mt-6 rounded-t-2xl'>
                    <div>
                        <div className='p-4 flex items-center'>
                            <div className='bg-red-600 p-2 w-max flex items-center text-white rounded-lg'>
                                <FaArrowLeft className='mr-2'/>
                                <p>Back</p> 
                            </div>
                            <p className='px-6 text-2xl font-bold'>Buat Akun</p>
                        </div>
                    </div>
                    <form className=''>
                        <div className='  flex w-full justify-between px-6 p-2 items-center'>
                            <label>username</label>
                            <div className='max-w-4xl w-full'>
                            <TextInput value={username} onChange={e => setUsername(e.target.value)} />
                            </div>
                            
                        </div>
                        <div className='  flex w-full justify-between px-6 p-2 items-center'>
                            <label>Full Name</label>
                            <div className='max-w-4xl w-full'>
                            <TextInput value={name} onChange={e => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className='  flex w-full justify-between px-6 p-2 items-center'>
                            <label>Password</label>
                            <div className='max-w-4xl w-full'>
                            <TextInput className='' value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <div className='  flex w-full  px-6 p-2 items-center'>
                            <label className="max-w-[380px] w-full">Level</label>
                            <select
                                value={level} onChange={e => setLevel(e.target.value)}
                                className="select w-full max-w-xs mr-2 border-2 border-gray-200"
                                >
                                <option value={'dosen'}>Dosen</option>
                                <option value={'mahasiswa'}>Mahasiswa</option>
                            </select>
                            {/* <div className='max-w-4xl w-full'>
                            <TextInput className='' />
                            </div> */}
                            
                        </div>
                        <div className='  flex w-full  px-6 p-2 items-center'>
                            <label className="max-w-[380px] w-full">Status</label>
                            <select
                                value={level} onChange={e => setStatus(e.target.value)}
                                className="select w-full max-w-xs mr-2 border-2 border-gray-200"
                                >
                                {/* <option value={1} disabled selected>
                                    infaq jumat
                                </option> */}
                                <option value={'active'}>Aktif</option>
                                <option value={'non-active'}>Tidak aktif</option>
                            </select>
                            {/* <div className='max-w-4xl w-full'>
                            <TextInput className='' />
                            </div> */}
                            
                        </div>

                        <div className='flex justify-center py-8 full'>
                            <button onClick={onsubmit} className='btn btn-primary'>
                                Simpan
                            </button>
                            <button className="btn btn-error mx-2">cancel</button>
                        </div>
                        

                    </form>
                    
                </div>
            </div>
        </div>
    );
}
