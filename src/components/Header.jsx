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
            <div className='w-[80%] h-[80px]  flex justify-end'>
                <ul className='w-[500px] h-full flex items-center  justify-between px-2'>
                    <li className="relative font-[400] h-full flex items-center before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-orange-500 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">

                        <Link href="#" className="text-[16px] font-sans ">
                            <div className='flex flex-col relative'>
                                <Notification text="NEW" color="white" bgColor="orange" classes="  rounded-[10px_10px_0px_10px] px-2 py-[1px] absolute h-[18px] w-[40px] bottom-6 font-[700] left-[56px] text-[10px] flex items-center justify-center font-medium" />
                                Online classes
                            </div>

                        </Link>
                    </li>


                    <li className="relative h-full flex items-center before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-orange-500 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <Link href="#" className='text-[16px] font-sans'>
                            <div className='flex flex-col relative'>
                                <Notification text="FREE" color="white" bgColor="green" classes=" rounded-[10px_10px_0px_10px] px-2 py-[1px] absolute h-[18px] w-[40px] bottom-6 font-[700] left-[80px] text-[10px] flex items-center justify-center font-medium" />
                                Learning material
                            </div>
                        </Link>
                    </li>
                    <li className="relative h-full flex items-center before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-orange-500 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <Link href="#" className='text-[16px] font-sans'>Success stories</Link>
                    </li>
                    <li className=" relative h-full  border-t-3 border-orange-500">
                        <Link href="#" className="w-[90px] text-[16px] flex items-center justify-center font-sans h-full ">
                            Pages
                            <KeyboardArrowDownOutlinedIcon />
                        </Link>
                    </li>
                </ul>
            </div>

            {/* icons  */}
            <div className=' w-[200px] h-[100%] flex  flex-col items-center px-2'>
                <ul className='w-full h-full flex   items-center justify-evenly'>
                    <li>

                        <Link href="#" >
                            <div className='flex flex-col relative'>
                                <Notification text={4} color="white" bgColor="red" classes="text-[0.8rem] text-white rounded-full absolute h-[22px] w-[22px] bottom-3 left-4 z-20 flex items-center justify-center font-medium" />
                                <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 25 }} />
                            </div>

                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <div className='flex flex-col relative'>
                                <Notification text={3} color="white" bgColor="red" classes="text-[0.8rem] text-white rounded-full absolute h-[22px] w-[22px] bottom-3 left-3 z-20 flex items-center justify-center font-medium" />
                                <NotificationsNoneOutlinedIcon sx={{ fontSize: 26 }} />
                            </div>
                        </Link>
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