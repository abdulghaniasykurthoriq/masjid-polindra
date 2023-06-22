import Sidebar from '@/Components/moleculs/Sidebar';
import { Head, Link } from '@inertiajs/react';
import {
    FaSearch,
    FaUser,
} from 'react-icons/fa';
import Logo from '../../../assets/logo.png';
import HeaderPage from '@/Components/moleculs/headerPage';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2';
import { useState } from 'react';

export default function Event(props) {

    const [nama, setNama] = useState("");
    const filter = (e) => {
        e.preventDefault();

        const params = new URLSearchParams();
        params.append('nama', nama);
        Inertia.post(`/event/filter?${params.toString()}`, {
            preserveState: true,
        });
    }
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
                const url = route('event.destroy', { id });
                Inertia.delete(url);
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    };
    console.log('props', props);
    return (
        <div className="flex">
            <Head title="Management Event Masjid" />
            <Sidebar props={props} />
            <div className="bg-blue-50 w-full">
                {/* Header section */}
                {/* <div className='flex justify-between p-8'>
                    <p className='text-3xl font-bold'>MANAGEMENT EVENT</p>
                    <p>logout</p>
                </div> */}
                {/* <HeaderContent title={"MANAGEMENT EVENT"} /> */}
                <HeaderPage title={'MANAGEMENT EVENT'} />
                {/* Menu section */}
                <div className="flex justify-between px-8 pt-8">
                    <div className="flex items-center  w-full max-w-[600px] ">
                        <form onSubmit={filter}>
                            <div className="form-control">
                                <label className="input-group">
                                    <span className="bg-white text-gray-300">
                                        <FaSearch />
                                    </span>
                                    <input
                                        type="text"
                                        value={nama}
                                        onChange={(e) => setNama(e.target.value)}
                                        placeholder="judul atau penulis . . .  "
                                        className="input"
                                    />
                                </label>
                            </div>
                        </form>
                        {/* <div className="flex items-center ml-4 max-w-2xl w-full">
                            <span>Kategory : </span>
                            <div className="px-4 mx-2 bg-gray-200 py-2 rounded-lg ">
                                <p> Mater/ judul / Tanggal</p>
                            </div>
                        </div> */}
                    </div>

                    <div className="flex">
                        {/* <Link href={route('eventdetail', { id: 1 })}>
                            <button
                                className="bg-gray-400 px-4  rounded-lg text-white"
                                type="btn"
                            >
                                Most Recent
                            </button>
                        </Link> */}
                        <Link href={route('event.create')}>
                            <button className="btn btn-primary" type="btn">
                                + Event
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-8 my-2 bg-white mt-6">
                    {/* card content section */}

                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Judul</th>
                                    <th>Dibuat Oleh</th>
                                    <th>Kategori</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {props.event &&
                                    props.event.map((event, i) => {
                                        var inputDate = event.created_at;

                                        var dt = new Date(inputDate);
                                        return (
                                            <tr key={i}>
                                                <th>1</th>
                                                <td>
                                                    <div className="flex w-full items-center">
                                                        <img
                                                            className="w-16"
                                                            src={
                                                                event.image ==
                                                                null
                                                                    ? Logo
                                                                    : `../images/${event.image}`
                                                            }
                                                            alt="image"
                                                        />
                                                        <div className="px-2">
                                                            <p>{event.nama}</p>
                                                            {/* <div className="flex">
                                                                <p className="pr-20">
                                                                    {useFormatDate(
                                                                        event.created_at
                                                                    )}
                                                                </p>
                                                                <p className="pr-4">
                                                                    263
                                                                </p>
                                                                <p className="pr-4">
                                                                    1.1k
                                                                </p>
                                                                <p className="pr-4">
                                                                    100
                                                                </p>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="pr-8 flex items-center">
                                                        {' '}
                                                        <FaUser className="mr-2" />{' '}
                                                        {event.user.name}
                                                    </p>
                                                </td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <button className="btn  btn-sm mr-8">
                                                            {event.kategori}
                                                        </button>
                                                        {/* <p className="px-4 bg-blue-500 mx-4 self-center">

                                                        </p> */}
                                                        {/* <a
                                                            href={`/event/${event.id}`}
                                                        >
                                                            <button
                                                                className="mx-2 bg-green-700 p-2 rounded-lg"
                                                                type="btn"
                                                                // onClick={() =>
                                                                //     goDetail(
                                                                //         event.id
                                                                //     )
                                                                // }
                                                            >
                                                                {' '}
                                                                <FaRegSadTear />{' '}
                                                            </button>
                                                        </a> */}
                                                        <a
                                                            href={`event/${event.id}`}
                                                        >
                                                            <button
                                                                className="mx-2 btn btn-info"
                                                                type="btn"
                                                            >
                                                                update
                                                            </button>
                                                        </a>

                                                        <button
                                                            onClick={() =>
                                                                onDeleted(
                                                                    event.id
                                                                )
                                                            }
                                                            className="mx-2 btn btn-error"
                                                            type="btn"
                                                        >
                                                            DELETE
                                                        </button>
                                                    </div>
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
    );
}

{
    /* <div className="flex px-6 py-4  border-b-2">
                        <div className="flex  justify-between  w-full">
                            <div className="flex w-full items-center">
                                <p className="pr-4">1.</p>
                                <img className="w-16" src={Logo} alt="image" />
                                <div className="px-2">
                                    <p>Memperingati Mulid Nabi Muhammad</p>
                                    <div className="flex">
                                        <p className="pr-20">Mar 8, 2023</p>
                                        <p className="pr-4">263</p>
                                        <p className="pr-4">1.1k</p>
                                        <p className="pr-4">100</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center w-full">
                                <p className="pr-8 flex items-center">
                                    {' '}
                                    <FaUser className="mr-2" /> Agat Abdul
                                </p>
                                <div className="flex">
                                    <p className="px-4 bg-blue-500 mx-4 self-center">
                                        Pengajian Umum
                                    </p>
                                    <button
                                        className="mx-2 bg-green-700 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaRegSadTear />{' '}
                                    </button>
                                    <Link
                                        href={route('eventdetail', { id: 1 })}
                                    >
                                        <button
                                            className="mx-2 bg-blue-400 p-2 rounded-lg"
                                            type="btn"
                                        >
                                            {' '}
                                            <FaPencilAlt />{' '}
                                        </button>
                                    </Link>

                                    <button
                                        className="mx-2 bg-red-400 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaTrashAlt />{' '}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-6 py-4  border-b-2">
                        <div className="flex  justify-between  w-full">
                            <div className="flex w-full items-center">
                                <p className="pr-4">1.</p>
                                <img className="w-16" src={Logo} alt="image" />
                                <div className="px-2">
                                    <p>Memperingati Mulid Nabi Muhammad</p>
                                    <div className="flex">
                                        <p className="pr-20">Mar 8, 2023</p>
                                        <p className="pr-4">263</p>
                                        <p className="pr-4">1.1k</p>
                                        <p className="pr-4">100</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center w-full">
                                <p className="pr-8 flex items-center">
                                    {' '}
                                    <FaUser className="mr-2" /> Agat Abdul
                                </p>
                                <div className="flex">
                                    <p className="px-4 bg-blue-500 mx-4 self-center">
                                        Pengajian Umum
                                    </p>
                                    <button
                                        className="mx-2 bg-green-700 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaRegSadTear />{' '}
                                    </button>
                                    <button
                                        className="mx-2 bg-blue-400 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaPencilAlt />{' '}
                                    </button>
                                    <button
                                        className="mx-2 bg-red-400 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaTrashAlt />{' '}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-6 py-4  border-b-2">
                        <div className="flex  justify-between  w-full">
                            <div className="flex w-full items-center">
                                <p className="pr-4">1.</p>
                                <img className="w-16" src={Logo} alt="image" />
                                <div className="px-2">
                                    <p>Memperingati Mulid Nabi Muhammad</p>
                                    <div className="flex">
                                        <p className="pr-20">Mar 8, 2023</p>
                                        <p className="pr-4">263</p>
                                        <p className="pr-4">1.1k</p>
                                        <p className="pr-4">100</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center w-full">
                                <p className="pr-8 flex items-center">
                                    {' '}
                                    <FaUser className="mr-2" /> Agat Abdul
                                </p>
                                <div className="flex">
                                    <p className="px-4 bg-blue-500 mx-4 self-center">
                                        Pengajian Umum
                                    </p>
                                    <button
                                        className="mx-2 bg-green-700 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaRegSadTear />{' '}
                                    </button>
                                    <button
                                        className="mx-2 bg-blue-400 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaPencilAlt />{' '}
                                    </button>
                                    <button
                                        className="mx-2 bg-red-400 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaTrashAlt />{' '}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-6 py-4  border-b-2">
                        <div className="flex  justify-between  w-full">
                            <div className="flex w-full items-center">
                                <p className="pr-4">1.</p>
                                <img className="w-16" src={Logo} alt="image" />
                                <div className="px-2">
                                    <p>Memperingati Mulid Nabi Muhammad</p>
                                    <div className="flex">
                                        <p className="pr-20">Mar 8, 2023</p>
                                        <p className="pr-4">263</p>
                                        <p className="pr-4">1.1k</p>
                                        <p className="pr-4">100</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center w-full">
                                <p className="pr-8 flex items-center">
                                    {' '}
                                    <FaUser className="mr-2" /> Agat Abdul
                                </p>
                                <div className="flex">
                                    <p className="px-4 bg-blue-500 mx-4 self-center">
                                        Pengajian Umum
                                    </p>
                                    <button
                                        className="mx-2 bg-green-700 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaRegSadTear />{' '}
                                    </button>
                                    <button
                                        className="mx-2 bg-blue-400 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaPencilAlt />{' '}
                                    </button>
                                    <button
                                        className="mx-2 bg-red-400 p-2 rounded-lg"
                                        type="btn"
                                    >
                                        {' '}
                                        <FaTrashAlt />{' '}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> */
}
