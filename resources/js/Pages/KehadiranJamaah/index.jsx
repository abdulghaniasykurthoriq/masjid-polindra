import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head, Link } from '@inertiajs/react';
import { FaFilter, FaPencilAlt, FaRegSadTear, FaTrashAlt, FaUser } from 'react-icons/fa';
import Logo from '../../../assets/logo.png'
import HeaderPage from '@/Components/moleculs/headerPage';

export default function KehadiranJamaah(props) {
    return (
        <div className='flex'>
            <Head title="Management Kehadiran Jamaah Masjid" />
            <Sidebar/>
            <div className='bg-blue-50 w-full'>
                <HeaderPage title={"Kehadiran Jamaah"}/>
                {/* Menu section */}
                <div className='flex justify-between px-8 pt-8'>
                    <div className='flex items-center  w-full max-w-[600px] '>   
                    <div className='w-full'>
                        
                    <TextInput 
                        placeholder='search'
                    />
                    </div> 
                    <div className='flex items-center ml-4 text-2xl w-full'>
                        <FaFilter/>
                    </div>
                    </div>

                    <div className='flex'>

                    <Link href={route('postingan.create')}>
                        <button className='bg-blue-400 px-4 rounded-lg text-white' type="btn">+ New Post</button>
                    </Link>
                    </div>
                </div>

                {/* Content section */}
                <div className='mx-8 my-2 bg-white mt-6'>
                    {/* card content section */}
                    <div className=''>
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
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>kamis 29 juli 2023</td>
      </tr>
    </tbody>
  </table>
</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
