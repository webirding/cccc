'use client'

import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Img from './Img'


type Props = {
    imageUrl: string
    className: string
}

export default function GroupAvatar({ imageUrl, className }: Props) {
    const [isLoading, setLoading] = useState(true);
    return (
        <>
            <div className='flex flex-row items-center'>
                <div className="flex items-center -space-x-4">
                    {/* <Avatar */}
                    <Avatar className='inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className='inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className='inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className='inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar className='inline-block h-10 w-10 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    
                    {/* <Img
                    imageUrl="https://cdn.pixabay.com/photo/2022/11/22/01/03/textile-7608525_960_720.png"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
                <Img
                    imageUrl="https://cdn.pixabay.com/photo/2022/11/22/01/03/textile-7608525_960_720.png"
                    className="relative inline-block h-12 w-12 rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                /> */}
                </div>

                <div className="w-full  px-4  mx-auto ">
                    <div className="text-sm text-gray-700 ">
                        <div className='flex flex-col'>
                            <a className="text-gray-700  font-semibold" href="https://www.material-tailwind.com/docs/html/avatar#avatar-stack?ref=tailwindcomponents" target="_blank">256 Connections</a>
                            <a href="https://www.creative-tim.com?ref=tailwindcomponents" className="text-gray-700 font-semibold opacity-60 -mt-1 " target="_blank"> 23 ahijados</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}