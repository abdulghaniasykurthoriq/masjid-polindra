import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head, Link } from '@inertiajs/react';
import { FaFilter } from 'react-icons/fa';
import Swal from 'sweetalert2';
import HeaderPage from '@/Components/moleculs/headerPage';
import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';

export default function Postingan(props) {
    const [kode, setKode] = useState('');
    console.log('props', props);
    const onUpdate = (id) => {
        const url = route('postingan.edit', { id });
        Inertia.get(url);
    };

    const submitFilter = () => {
        alert('wpi');
        // Inertia.get(
        //     '/laporan-kas',
        //     { kode},
        //     { preserveState: true }
        // );
    };

    const onDeleted = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                const url = route('postingan.delete', { id });
                Inertia.delete(url);
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    };
    return (
        <div className="flex">
            <Head title="Management Postingan Masjid" />
            <Sidebar />
            <div className="bg-blue-50 w-full">
                <HeaderPage title={'FORM POSTINGAN'} />
                {/* Menu section */}
                <div className="flex justify-between px-8 pt-8">
                    <form
                        onSubmit={submitFilter}
                        className="flex items-center  w-full max-w-[600px] "
                    >
                        <div className="w-full">
                            <TextInput
                                placeholder="search"
                                value={kode}
                                onChange={(e) => setKode(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center ml-4 text-2xl w-full">
                            <FaFilter />
                        </div>
                    </form>

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
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>warna</th>
                                        <th>Text</th>
                                        <th>Dibuat oleh</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {props.postingan.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <th>{i+1}</th>
                                                <td>
                                                    <div
                                                        style={{
                                                            backgroundColor:
                                                                item.warna,
                                                        }}
                                                        className="flex items-center justify-center w-20 h-10"
                                                    >
                                                        {item.warna}
                                                    </div>
                                                </td>
                                                <td>{item.text}</td>
                                                <td>{item.user.username}</td>
                                                <td>
                                                    <a
                                                        href={`postingan/${item.id}/edit`}
                                                    >
                                                        <button
                                                            // onClick={() =>
                                                            //     onUpdate(item.id)
                                                            // }
                                                            className="btn btn-primary mx-1"
                                                        >
                                                            Update
                                                        </button>
                                                    </a>
                                                    
                                                    <button className="btn btn-success mx-1">
                                                        Show detail
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            onDeleted(item.id)
                                                        }
                                                        className="btn btn-error mx-1"
                                                    >
                                                        hapus
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
