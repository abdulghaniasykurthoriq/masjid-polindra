import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head, Link } from '@inertiajs/react';
import { FaFilter, FaPencilAlt, FaRegSadTear, FaTrashAlt, FaUser } from 'react-icons/fa';
import Logo from '../../../assets/logo.png'
import HeaderPage from '@/Components/moleculs/headerPage';

export default function KotakSaran(props) {
    return (
        <div className='flex'>
            <Head title="Kotak Saran Jamaah Masjid" />
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

                    <Link href={route('kotak-saran.masuk')}>
                        <button className='bg-blue-400 px-4 rounded-lg text-white' type="btn">+10 New Saran</button>
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
        <th>Username</th>
        <th>Kritik dan Saran</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Bambang Purmadi</td>
        <td>saya suka kesal ketika saya mau piipis wc pintu masjidny
selalu tidak rapat ditutup</td>
        <td>
        <button className="btn btn-error">hapus</button>
        
        </td>
        
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
