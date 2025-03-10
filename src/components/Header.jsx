import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Header() {
    return (
        <nav className=' h-[80px] w-full bg-red-300 flex'>

            {/* brand */}
            <div className='h-[80px] w-[120px] ml-[12px] flex items-center'>
                <Image
                    src="/imgs/logo.png"
                    alt="Example"
                    width={500}
                    height={300}
                />
            </div>

            {/* nav-manu */}
            <div className='w-[80%] h-[80px] bg-amber-400 flex justify-end'>
                <ul className='w-[700px] h-full flex items-center bg-blue-500 justify-between px-2'>
                    <li>
                        <Link href="#" className='text-[16px] font-sans'> Online classes</Link>
                    </li>
                    <li>
                        <Link href="#" className='text-[16px] font-sans'>Learning material</Link>
                    </li>
                    <li>
                        <Link href="#" className='text-[16px] font-sans'>Success stories</Link>
                    </li>
                    <li>
                        <Link href="#" className='text-[16px] font-sans'>Pages</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header