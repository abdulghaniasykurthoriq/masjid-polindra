import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head, Link } from '@inertiajs/react';
import { FaFilter } from 'react-icons/fa';
import HeaderPage from '@/Components/moleculs/headerPage';
import { useEffect, useState } from 'react';

export default function KehadiranJamaah(props) {
    const [filter, setFilter] = useState('');
    const searchFilter = () => {
        console.log('filter', filter);
    };
    useEffect(() => {
        console.log('props', props);
    });
    return (
        <div className="flex">
            <Head title="Management Kehadiran Jamaah Masjid" />
            <Sidebar />
            <div className="bg-blue-50 w-full">
                <HeaderPage title={'Kehadiran Jamaah'} />
                {/* Menu section */}
                <div className="flex justify-between px-8 pt-8">
                    <div className="flex items-center  w-full max-w-[600px] ">
                        <div className="w-full">
                            <TextInput
                                placeholder="search"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            />
                        </div>
                        <div
                            onClick={searchFilter}
                            className="flex items-center ml-4 text-2xl w-full"
                        >
                            <FaFilter />
                        </div>
                    </div>

                    <div className="flex">
                        <Link href={route('postingan.create')}>
                            <button
                                className="bg-blue-400 px-4 rounded-lg text-white"
                                type="btn"
                            >
                                + New Post
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-8 my-2 bg-white mt-6">
                    {/* card content section */}
                    <div className="">
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Nama</th>
                                        <th>Jurusan</th>
                                        <th>No Handphone</th>
                                        <th>Tanggal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {props.kehadiran.map((kehadiran, i) => {
                                        return (
                                            <tr>
                                                <th>1</th>
                                                <td>{kehadiran.nama}</td>
                                                <td>{kehadiran.jurusan}</td>
                                                <td>{kehadiran.no_hp}</td>
                                                <td>{kehadiran.created_at}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
