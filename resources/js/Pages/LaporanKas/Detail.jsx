
import Sidebar from '@/Components/moleculs/Sidebar';
import { Head } from '@inertiajs/react';
import LogoGallery from '../../../assets/logo/gallery_icon.png'
import LogoFile from '../../../assets/logo/file_icon.png'
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
export default function Detail(props) {


    return (
        <div className='flex'>
            <Head title="Management Event Masjid" />
            <Sidebar/>
            <div className='bg-blue-50 w-full'>
                {/* Header section */}
                <div className='flex justify-between p-8'>
                    <p className='text-3xl font-bold'>DETAIL LAPORAN KAS</p>
                    <p>logout</p>
                </div>

                <div className='mx-8 my-2 mb-8 min-h-[400px] bg-white mt-6 rounded-t-2xl'>
                        <div className='flex items-center py-4 px-8 border-b-2'>
                            <p>Pengeluaran</p>
                        </div>
                        {/* list materi */}
                        <div className='flex items-center justify-between py-4 px-8 border-b-2'>
                            <div className='pl-8'>
                                <p>Belanja Dapur</p>
                                <p>Rp. 1.500.000</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <div className='flex justify-center my-2'>
                                <button className="btn mx-2 btn-primary">Update</button>
                                <button className="btn mx-2 btn-error">Delete</button>
                                </div>
                            </div>

                        </div>
                        {/* end list materi */}
                </div>
            </div>
        </div>
    );
}
