import React from 'react'
import Logo from '../../../assets/logo.png'
import {MdSpaceDashboard,MdMessage} from 'react-icons/md'
import {FaWallet,FaCalendarDay, FaUserFriends,FaUsersCog,FaUserCircle, FaArrowDown} from 'react-icons/fa'


export default function Sidebar() {
  return (
    <div style={{width:350}} className=' bg-blue-50 min-h-screen flex flex-col justify-between border-r-4 '>
        
        <div>
        <div className='flex items-center p-8'>
            <img src={Logo} alt="logo" className='w-20 h-20'/>
            <p className='pl-4 text-xl font-bold'>BAITUL<br/> MUTTAQIN</p>
        </div>
        
        <div className='pl-10 pt-8'>
            <p>Administrator</p>
            <ul className='text-lg font-semibold'>
              <li className='flex items-center pt-4'> <MdSpaceDashboard /> <p className='pl-4'>Dashboard</p>  </li>
              <li className='flex items-center pt-4'> <FaWallet/> <p className='pl-4'>Laporan Kas</p> </li>
              <li className='flex items-center pt-4'> <FaCalendarDay/> <p className='pl-4'>Kegiatan</p> </li>
              <li className='flex items-center pt-4'> <MdSpaceDashboard/> <p className='pl-4'>Postingan</p></li>
              <li className='flex items-center pt-4'> <FaUserFriends/> <p className='pl-4'>Kehadiran Jamaah </p></li>
              <li className='flex items-center pt-4'> <MdMessage/> <p className='pl-4'>Kotak Saran </p></li>
            </ul>
            <p className='pt-4'>Administrator</p>
            <ul>
            <li className='flex items-center font-semibold pt-4'> <FaUsersCog/> <p className='pl-4'>Management Account</p>  </li>
            </ul>
        </div>
        
        </div>
        <div className='content-end h-20 bg-blue-200 flex'>
            <div className='pl-8 flex items-center font-semibold text-gray-700'>
              <FaUserCircle/> <p className='pl-4 pr-2'>Abdul Ghani</p>  
              <FaArrowDown/>
            </div>
        </div>
    </div>
  )
}
