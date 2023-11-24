import Image from 'next/image'
import React from 'react'

export type Book = {
    title: string;
    description: string;
    author: string;
    rank: number;
    cover: any;
    releaseDate?: string;
};


const ProductView: React.FC<Book> = ({ title = 'Title', description, author, rank, cover, releaseDate }) => {
    return (
        <div className='grid md:grid-cols-2 p-2 sm:grid-cols-1'>
            <div className='flex justify-center p-4'>
                <Image
                    height={200}
                    width={400}
                    alt='Book Cover'
                    src={cover || ''}
                    priority={true}
                />
            </div>
            <div className='flex flex-col p-4 font-bold md:border-l-4 pl-6'>
                <h1 className='text-lg'>{title}</h1>
                <p className='text-sm font-normal'>About: <br/> {description}</p>
                <h4>Author: {author}</h4>
                <h4>Release Date: {releaseDate}</h4>
                <h4>Rank: {rank}</h4>
            </div>
        </div>
    )
}

export default ProductView