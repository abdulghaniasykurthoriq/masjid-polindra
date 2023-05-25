import Sidebar from '@/Components/moleculs/Sidebar';
import TextInput from '@/Components/TextInput';
import { Head, Link } from '@inertiajs/react';
import { FaFilter } from 'react-icons/fa';
import HeaderPage from '@/Components/moleculs/headerPage';
import Swal from 'sweetalert2';

export default function Akun(props) {
    function onReset(){
      Swal.fire({
        title: 'Are you sure to reset password?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, resete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Reset Password!',
            'Your Account has been reseted.',
            'success'
          )
        }
      })
    }
    function onUpdate(){}
    function onDelete(){
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
                <HeaderPage title={"MANAGEMENT ACCOUNT"}/>
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

                    <Link href={route('akun.create')}>
                        <button className='btn btn-primary text-white' type="btn">+ New Account</button>
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
        <th>USERNAME</th>
        <th>FULL NAME</th>
        <th>LEVEL</th>
        <th>STATUS</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>ijoel707</td>
        <td>utul jubdailah ashik</td>
        <td>Dosen</td>
        <td>active</td>
        <td>
          <Link href={route('akun.update')}>
            <button className="btn btn-info mx-1">Update</button>
          </Link>
          <button onClick={onReset} className="btn btn-accent mx-1">Reset Password</button>
          <button onClick={onDelete} className="btn btn-secondary mx-1">Hapus</button>
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
