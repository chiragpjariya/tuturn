'use client'

import React, { useState } from 'react'



function page() {

    const [input, setInput] = useState('')



    return (
        <>
            <div className='w-full h-screen bg-amber-400  px-3'>
                <div className='h-[200px] w-full bg-blue-400 flex items-center justify-center'>

                    <div className='bg-yellow-50 rounded h-[50px] w-[500px] flex items-center p-3'>
                        <input type="text" id="first_name" class=" w-[400px] h-[40px] p-2 rounded outline-none"
                            placeholder="Input fields"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            type="button"
                            class="ml-2  flex focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                            Purple
                        </button>
                    </div>
                </div>

                <div className='flex w-full h-full'>
                    <div className='h-[500px] w-[30%] bg-red-400'>

                    </div>
                    <div className=' w-full h-[500px] bg-pink-600 '>

                    </div>
                </div>


            </div>
        </>
    )
}

export default page