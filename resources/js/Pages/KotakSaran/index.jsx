import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head, Link } from '@inertiajs/react';
import { FaFilter } from 'react-icons/fa';
import HeaderPage from '@/Components/moleculs/headerPage';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Inertia } from '@inertiajs/inertia';

export default function KotakSaran(props) {
    const [filter, setFilter] = useState('');

    const searchFilter = () => {
        console.log('filter', filter);

        Inertia.get('/akun', { name: filter }, { preserveState: true });
    };
    useEffect(() => {
        console.log('props', props);
    }, []);

    const onDelete = (id) => {
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
                const url = route('kotak-saran.hapus', { id });
                Inertia.delete(url);
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    };

    return (
        <div className="flex">
            <Head title="Kotak Saran Jamaah Masjid" />
            <Sidebar props={props}/>
            <div className="bg-blue-50 w-full">
                <HeaderPage title={'Kotak Saran'} />
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
                        <div className="flex items-center ml-4 text-2xl w-full">
                            <FaFilter onClick={searchFilter} />
                        </div>
                    </div>

                    <div className="flex">
                        <Link href={route('kotak-saran.masuk')}>
                            <button
                                className="bg-blue-400 px-4 rounded-lg text-white"
                                type="btn"
                            >
                                + New Saran
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

                                    {props.kotak_saran.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <th>1</th>
                                                <td>{item.username}</td>
                                                <td>{item.text_saran}</td>
                                                <td>
                                                    <button
                                                        onClick={() =>
                                                            onDelete(item.id)
                                                        }
                                                        className="btn btn-error"
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
