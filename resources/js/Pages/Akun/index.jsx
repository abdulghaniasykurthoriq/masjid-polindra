import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head, Link } from '@inertiajs/react';
import { FaFilter } from 'react-icons/fa';
import HeaderPage from '@/Components/moleculs/headerPage';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Akun(props) {
    const [filter, setFilter] = useState('');
    const [isDosen, setIsDosen] = useState(false);
    const [isMahasiswa, setIsMahasiswa] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isLevel, setIsLevel] = useState('');
    useEffect(() => {
        console.log('woi ini property lahh', props);
    }, []);
    console.log('isDosen', isDosen);
    const handleDosenFilter = () => {
        setIsDosen(!isDosen);
        console.log('isDosen', isDosen);
        if (isDosen === true) {
            setIsLevel('dosen');
        }

        console.log('isDosen', isDosen);
    };
    const handleMahasiswaFilter = () => {
        setIsMahasiswa(!isMahasiswa);
    };
    const handleActiveFilter = () => {
        setIsActive(!isActive);
    };

    const onFilterLevel = () => {};
    const onFilter = () => {
        if (isDosen === true && isMahasiswa === true) {
            setIsLevel('');
        } else if (isDosen === true) {
            setIsLevel('dosen');
        } else if (isMahasiswa === true) {
            setIsLevel('mahasiswa');
        }
        Inertia.get(
            '/akun',
            { name: filter, level: isLevel },
            { preserveState: true }
        );
    };

    function onReset(id) {
        console.log('id', id);
        Swal.fire({
            title: 'Are you sure to reset password?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, resete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                const url = route('akun.resetPassword', { id: id });
                Inertia.put(url);
                Swal.fire(
                    'Reset Password!',
                    'Your Account has been reseted.',
                    'success'
                );
            }
        });
    }

    function onUpdate(id) {
        const url = route('akun.update', { id: id });
        Inertia.get(url);
    }
    function onDelete(id) {
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
                Inertia.delete(`/akun/${id}/delete`);
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    }

    return (
        <div className="flex">
            <Head title="Management Postingan Masjid" />
            <Sidebar props={props}/>
            <div className="bg-blue-50 w-full">
                <HeaderPage title={'MANAGEMENT ACCOUNT'} />
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
                        <div className="flex">
                            <div className="flex items-center ml-4 text-2xl w-full ">
                                <FaFilter onClick={onFilter} />
                            </div>
                            <div
                                onClick={handleDosenFilter}
                                className={
                                    isDosen
                                        ? 'bg-white border border-blue-800 px-4 py-2 rounded-xl mx-2'
                                        : 'border text-gray-400 px-4 py-2 rounded-xl mx-2'
                                }
                            >
                                Dosen
                            </div>
                            <div
                                onClick={handleMahasiswaFilter}
                                className={
                                    isMahasiswa
                                        ? 'bg-white border border-blue-800 px-4 py-2 rounded-xl mx-2'
                                        : 'border text-gray-400 px-4 py-2 rounded-xl mx-2'
                                }
                            >
                                Mahasiswa
                            </div>
                            <div
                                onClick={handleActiveFilter}
                                className={
                                    isActive
                                        ? 'bg-white border border-blue-800 px-4 py-2 rounded-xl mx-2'
                                        : 'border text-gray-400 px-4 py-2 rounded-xl mx-2'
                                }
                            >
                                Active
                            </div>
                        </div>
                    </div>

                    <div className="flex">
                        <Link href={route('akun.create')}>
                            <button
                                className="btn btn-primary text-white"
                                type="btn"
                            >
                                + New Account
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
                                        <th>USERNAME</th>
                                        <th>FULL NAME</th>
                                        <th>LEVEL</th>
                                        <th>STATUS</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {props.user &&
                                        props.user.map((data, i) => {
                                            return (
                                                <tr key={i}>
                                                    <th>1</th>
                                                    <td>{data.username}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.level}</td>
                                                    <td>{data.status}</td>
                                                    <td>
                                                        {/* <Link href={route('akun.update')}>
            <button className="btn btn-info mx-1">Update</button>
          </Link> */}
                                                        <a
                                                            href={`akun/update/${data.id}`}
                                                        >
                                                            <button
                                                                // onClick={(e) =>
                                                                //     onUpdate(
                                                                //         data.id
                                                                //     )
                                                                // }
                                                                className="btn btn-info mx-1"
                                                            >
                                                                Update
                                                            </button>
                                                        </a>

                                                        <button
                                                            onClick={(e) =>
                                                                onReset(data.id)
                                                            }
                                                            className="btn btn-accent mx-1"
                                                        >
                                                            Reset Password
                                                        </button>
                                                        <button
                                                            onClick={(e) =>
                                                                onDelete(
                                                                    data.id
                                                                )
                                                            }
                                                            className="btn btn-secondary mx-1"
                                                        >
                                                            Hapus
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
