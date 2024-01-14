'use client'

import React, { useState } from 'react'

import Img from './Img'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type Props = {
    imageUrl: string
    title: string
    body: string
    author: string
    tags: string
    date: string
}

export default function ArticleCard({ imageUrl, title, body, author, tags, date }: Props) {
    const [isLoading, setLoading] = useState(true);
    return (
        <div className="lg:flex">

            <div className=" position: relative h-32 w-48 lg:h-48 ">
                <Img className=" object-cover rounded-lg " imageUrl="https://cdn.pixabay.com/photo/2022/11/22/01/03/textile-7608525_960_720.png" />
            </div>
            <div className="flex flex-col justify-between py-3 lg:mx-6">
                <div className='flex gap-3'>
                    <a href="#" className="text-sm  text-cinnabar hover:underline dark:text-white ">
                        sometag1
                    </a>
                    <a href="#" className="text-sm  text-cinnabar hover:underline dark:text-white ">
                        sometag1
                    </a>
                    <a href="#" className="text-sm  text-cinnabar hover:underline dark:text-white ">
                        sometag1
                    </a>
                </div>
                <a href="#" className="text-xl font-semibold text-jet hover:underline dark:text-white ">
                    How to use sticky note for problem solving
                </a>
                <p className="text-jet text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                <div className='mt-6 flex items-center gap-x-4'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <div className="text-md">William Shakespeare</div>
                        <span className="text-sm text-almond-300 dark:text-gray-300">On: 20 October 2019</span>
                    </div>
                </div>


            </div>
        </div>
    )
}