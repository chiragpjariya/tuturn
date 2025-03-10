import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Avatar from '@mui/material/Avatar';



//icons
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


function Header() {
    return (
        <nav className=' h-[80px] w-full  flex border-b-1 '>

            {/* brand */}
            <div className='h-[80px] w-[120px] ml-[12px] flex items-center'>
                <Image
                    src="/imgs/logo.png"
                    alt="logo"
                    width={500}
                    height={300}
                />
            </div>

            {/* nav-manu */}
            <div className='w-[80%] h-[80px]  flex justify-end'>
                <ul className='w-[500px] h-full flex items-center  justify-between px-2'>
                    <li className='h-full flex items-center'>
                        <Link href="#" className='text-[16px] font-sans'> Online classes</Link>
                    </li>
                    <li className='h-full flex items-center'>
                        <Link href="#" className='text-[16px] font-sans'>Learning material</Link>
                    </li>
                    <li className='h-full flex items-center'>
                        <Link href="#" className='text-[16px] font-sans'>Success stories</Link>
                    </li>
                    <li className="relative h-full flex items-center before:absolute before:top-0 before:left-0 before:w-full  before:h-[3px] before:bg-orange-500">
                        <Link href="#" className="text-[16px] font-sans">
                            Pages
                            <KeyboardArrowDownOutlinedIcon />
                        </Link>
                    </li>
                </ul>
            </div>

            {/* icons  */}
            <div className=' w-[180px] h-[100%] flex  flex-col items-center px-2'>
                <ul className='w-full h-full flex   items-center justify-evenly'>
                    <li>
                        <Link href="#"><ChatBubbleOutlineOutlinedIcon /> </Link>
                    </li>
                    <li>
                        <Link href="#"><NotificationsNoneOutlinedIcon /> </Link>
                    </li>
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