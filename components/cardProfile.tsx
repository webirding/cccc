'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Img from './Img'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import GroupAvatar from './groupAvatar'
import Verified from './icons/iconVerified'
import Location from './icons/location'
import Disc from './icons/disc'

type Props = {
    imageUrl: string
    className: string
}

export default function CardProfile() {
    const [isLoading, setLoading] = useState(true);
    return (
        <>
            <div className=" border flex flex-col rounded-xl bg-linen bg-opacity-30">
                <div className='relative h-32 
             lg:h-48'>
                    <Img className="object-cover top-0 z-index:-1 rounded-t-xl" imageUrl="https://cdn.pixabay.com/photo/2022/11/22/01/03/textile-7608525_960_720.png" /></div>

                <div className='-mt-20 ml-8 sm:-mt-18'>
                    <Avatar className='border-4 border-white w-28 h-28 rounded-full'>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>

                <div className="ml-8 mr-8 mt-4 sm:flex sm:min-w-0 sm:flex-1 sm:items-start sm:justify-end sm:space-x-6 sm:pb-1 mb-8">
                    <div className="mt-2 min-w-0 flex-1 sm:hidden md:block">
                        <div className='flex flex-row justify-between items-center'><div className='inline-flex items-center gap-2'><h1 className="truncate text-2xl font-bold text-blue-300">Shehab coding</h1><Verified size={18} /></div>
                            <div className='inline-flex gap-6' >
                            <div className='inline-flex gap-2 text-sm'><div><Disc/></div><div>Awo</div></div>
                                <div className='flex flex-row gap-2 text-sm item-center'><Location/><div>Lagos, Nigeria</div></div>
                            </div>
                        </div>
                        <h1 className="truncate text-md font-bold text-blue-300">@hehabcdn</h1>
                        <div className='max-w-196px'>
                            <p className="text-jet text-base mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                        </div>
                        <div className='mt-6 flex flex-row justify-between'>
                            <GroupAvatar imageUrl={''} className={''} />
                            <div className="  mt-2 text-center space-x-4 md:block">
                                <button className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-none font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg transition ease-in duration-300">
                                    Message
                                </button>
                                <button className="bg-jet hover:bg-jet-100 px-5 ml-4 py-2 text-sm shadow-none hover:shadow-lg font-medium tracking-wider text-white rounded-full transition ease-in duration-300">Connect</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}

