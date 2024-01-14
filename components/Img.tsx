'use client'

import React, { useState } from 'react'
import Image from 'next/image'

type Props = {
    imageUrl: string
    className: string
}

export default function Img({ imageUrl, className }: Props) {
    const [isLoading, setLoading] = useState(true);
    return (
        <>
        <Image
            src={imageUrl}
            alt='image'
            fill
            priority
            className={`
                ${className}
                group-hover:opacity-75
                duration-700
                ease-in-out
                ${isLoading ? 'grayscale blur-sm scale-100' : ' blur-0 scale-100'}
            `}
            sizes='(max-width:768px) 100vw, (max-width: 1200px) 50vw, 25vw'
            onLoad={() => setLoading(false)}
        /></>
    )
}