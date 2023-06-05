import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head, Link } from '@inertiajs/react';
import { FaFilter } from 'react-icons/fa';
import HeaderPage from '@/Components/moleculs/headerPage';
import { Inertia } from '@inertiajs/inertia';


export default function KotakSaranMasuk(props) {

    const onSetujui = (id) => {
        const url = route('kotak-saran.setujui', { id });
        Inertia.post(url);
    }
    const onTolak = (id) => {
        // alert('wpo')
        const url = route('kotak-saran.hapus', { id });
        Inertia.delete(url);
    }
    return (
        <div className="flex">
            <Head title="Kotak Saran Masuk Masjid" />
            <Sidebar />
            <div className="bg-blue-50 w-full">
                <HeaderPage title={'Kotak Saran Masuk'} />
                {/* Menu section */}
                <div className="flex justify-between px-8 pt-8">
                    <div className="flex items-center  w-full max-w-[600px] ">
                        <div className="w-full">
                            <TextInput placeholder="search" />
                        </div>
                        <div className="flex items-center ml-4 text-2xl w-full">
                            <FaFilter />
                        </div>
                    </div>

                    <div className="flex">
                        <Link href={route('postingan.create')}>
                            <button
                                className="bg-blue-400 px-4 rounded-lg text-white"
                                type="btn"
                            >
                                +10 New Saran
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
                                        <th>Username</th>
                                        <th>Kritik dan Saran</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {props.kotak_saran_masuk.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <th>1</th>
                                                <td>{item.username}</td>
                                                <td>{item.text_saran}</td>
                                                <td>
                                                    <button 
                                                        onClick={() =>onSetujui(item.id)}
                                                    className="btn mx-1 btn-primary">
                                                        setujui
                                                    </button>
                                                    <button 
                                                    onClick={() =>onTolak(item.id)}
                                                    className="btn mx-1 btn-error">
                                                        tolak
                                                    </button>
                                                </td>
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
