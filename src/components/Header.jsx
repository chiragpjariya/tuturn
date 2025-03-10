'use client'

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';


//icons
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { styled } from '@mui/material';

const CustomTooltip = styled(Tooltip)(({ theme, bgColor }) => ({
    [`& .MuiTooltip-tooltip`]: {
        backgroundColor: bgColor || "orange", 
        color: "white",
        fontSize: "10px",
        textAlign: "center",
        borderRadius: "30px",
        padding: theme.spacing(1, 1),
    },
    [`& .MuiTooltip-arrow`]: {
        color: bgColor || "orange",
    },
}));



function Header() {
    return (
        <nav className=' h-[80px] w-full  flex border-b-1 border-gray-200 '>

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
                    <li className="relative h-full flex items-center before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-orange-500 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <CustomTooltip title="New" arrow placement="top-end" bgColor="orange" open >
                            <Link href="#" className="text-[16px] font-sans">Online classes</Link>
                        </CustomTooltip>
                    </li>


                    <li className="relative h-full flex items-center before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[3px] before:bg-orange-500 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100">
                        <Link href="#" className='text-[16px] font-sans'>Learning material</Link>
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

                        <Link href="#">
                            <Badge badgeContent={4} color="error" >
                                <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 25 }} />
                            </Badge>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Badge badgeContent={3} color="error">
                                <NotificationsNoneOutlinedIcon sx={{ fontSize: 26 }} />
                            </Badge>
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