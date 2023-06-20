import InputMateri from '@/Components/atoms/InputMateri';
import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head } from '@inertiajs/react';
import LogoGallery from '../../../assets/logo/gallery_icon.png';
import LogoFile from '../../../assets/logo/file_icon.png';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import useFormatDate from '../../../helpers/useFormatDate';
import Swal from 'sweetalert2';
import HeaderPage from '@/Components/moleculs/headerPage';
export default function Detail(props) {
    useEffect(() => {
        console.log('props', props);
    });
    const downloadPdf = (name) => {
        const url = route('materi.downloadPDF', { name });
        Inertia.get(url);
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
                const url = route('materi.destroy', { id });
                Inertia.delete(url);
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    };
    return (
        <div className="flex">
            <Head title="Management Event Masjid" />
            <Sidebar props={props} />
            <div className="bg-blue-50 w-full">
                {/* Header section */}
                {/* <div className="flex justify-between p-8">
                    <p className="text-3xl font-bold">MANAGEMENT EVENT</p>
                    <p>logout</p>
                </div> */}
                <HeaderPage title={'MANAGEMENT EVENT'} />

                <div className="mx-8 my-2 mb-8 min-h-[400px] bg-white mt-6 rounded-t-2xl">
                    {props.event != null ? (
                        <>
                            <div className="flex items-center py-4 px-8 border-b-2">
                                <div className="bg-gray-400 w-[70px] p-3 rounded-md">
                                    <img
                                        src={
                                            props.event.image == null
                                                ? LogoGallery
                                                : `../images/${props.event.image}`
                                        }
                                        alt="gallery"
                                    />
                                </div>
                                <div className="flex flex-col pl-2">
                                    <b>{props.event.nama}</b>
                                    <small>
                                        {useFormatDate(props.event.created_at)}
                                    </small>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>not found</>
                    )}

                    {/* list materi */}
                    {props.event &&
                        props.event.materi.map((materi, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex items-center justify-between py-4 px-8 border-b-2"
                                >
                                    <div className="flex items-center pl-8">
                                        {/* <a
                                            href={`materi/${materi.file_materi}`}
                                            download={true}
                                        >

                                        </a> */}
                                        <div
                                            onClick={() =>
                                                downloadPdf(materi.file_materi)
                                            }
                                            className="bg-gray-300 w-max p-1 rounded-md"
                                        >
                                            <img src={LogoFile} alt="file" />
                                        </div>

                                        <b className="pl-3">{materi.name}</b>
                                    </div>

                                    <div className="">
                                        {/* <button className="btn btn-sm btn-secondary">
                                            <FaPencilAlt />
                                        </button> */}
                                        <button
                                            onClick={() => onDeleted(materi.id)}
                                            className="btn btn-sm  btn-error"
                                        >
                                            delete
                                            {/* <FaTrash /> */}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}

                    {/* end list materi */}
                </div>
            </div>
        </div>
    );
}
