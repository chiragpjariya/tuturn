'use client'

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Avatar from '@mui/material/Avatar';


//icons
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

//component
import Notification from './Notification';




function Header() {
    return (
        <nav className=' h-[80px] w-full  flex border-b-1 border-gray-200 '>

            {/* brand */}
            <div className='h-full w-[120px] ml-[19px] flex items-center'>
                <Image
                    src="/imgs/logo.png"
                    alt="logo"
                    width={600}
                    height={400}
                />
            </div>

            {/* nav-manu */}
            <div className='w-[90%] h-[80px]  flex justify-end'>
                <ul className='w-[400px] h-full flex items-center  justify-between px-2'>
                    <li className="relative font-[400] h-full flex items-center before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-orange-500 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">

                        <Link href="/" className="text-[16px] font-sans cursor-pointer hover:text-[#0170B9] font-[500]">
                            HOME
                        </Link>
                    </li>


                    <li className="relative h-full flex items-center before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-orange-500 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <Link href="/find_student" className='text-[16px] font-[500] font-sans hover:text-[#0170B9]'>
                            FIND STUDENT
                        </Link>
                    </li>
                    <li className="relative h-full flex items-center before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-orange-500 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <Link href="#" className='font-[500] text-[16px] font-sans hover:text-[#0170B9]'>FIND TUTOR</Link>
                    </li>
                </ul>
            </div>

            {/* icons  */}
            <div className=' w-[100px] h-[100%] flex  flex-col items-center px-2'>
                <ul className='w-full h-full flex   items-center justify-evenly'>
                    <li>
                        <Link href="#">
                            <Avatar alt="Travis Howard" src="/imgs/login.png" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header