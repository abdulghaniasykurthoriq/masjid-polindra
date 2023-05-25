import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head, Link } from '@inertiajs/react';
import { FaFilter, FaPencilAlt, FaRegSadTear, FaTrashAlt, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2'
import HeaderPage from '@/Components/moleculs/headerPage';

export default function Postingan(props) {

    const onDeleted = () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
    return (
        <div className='flex'>
            <Head title="Management Postingan Masjid" />
            <Sidebar/>
            <div className='bg-blue-50 w-full'>
                <HeaderPage title={"FORM POSTINGAN"}/>
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
                    <div>
                    <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>id post</th>
        <th>Text</th>
        <th>Dibuat oleh</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>
        <Link href={route('postingan.update')}>

        <button className="btn btn-primary mx-1">Update</button>
        </Link>
            <button className="btn btn-success mx-1">Show detail</button>
            <button onClick={onDeleted} className="btn btn-error mx-1">hapus</button>
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
