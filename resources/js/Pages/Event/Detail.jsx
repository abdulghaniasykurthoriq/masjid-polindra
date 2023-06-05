import InputMateri from '@/Components/atoms/InputMateri';
import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head } from '@inertiajs/react';
import LogoGallery from '../../../assets/logo/gallery_icon.png';
import LogoFile from '../../../assets/logo/file_icon.png';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
export default function Detail(props) {
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

                <div className="mx-8 my-2 mb-8 min-h-[400px] bg-white mt-6 rounded-t-2xl">
                    <div className="flex items-center py-4 px-8 border-b-2">
                        <div className="bg-gray-400 w-max p-3 rounded-md">
                            <img src={LogoGallery} alt="gallery" />
                        </div>
                        <div className="flex flex-col pl-2">
                            <b>Memperingati Maulid Nabi Muhammad</b>
                            <small>Mar 8, 2023</small>
                        </div>
                    </div>
                    {/* list materi */}
                    <div className="flex items-center justify-between py-4 px-8 border-b-2">
                        <div className="flex items-center pl-8">
                            <div className="bg-gray-300 w-max p-1 rounded-md">
                                <img src={LogoFile} alt="file" />
                            </div>
                            <b className="pl-3">Materi 1</b>
                        </div>

                        <div className="">
                            <button className="btn btn-sm btn-secondary">
                                <FaPencilAlt />
                            </button>
                            <button className="btn btn-sm  btn-accent">
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                    {/* end list materi */}
                </div>
            </div>
        </div>
    );
}
