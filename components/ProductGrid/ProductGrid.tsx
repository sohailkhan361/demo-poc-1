'use client'
import Image from 'next/image';
import React from 'react';
import { BuilderElement, BuilderComponent, builder } from '@builder.io/react';

type Product = {
    product: {
        name: string;
        description?: string;
        author: string;
        salesrank: number;
        image: string;
        releaseDate: string;
    };
};

type ProductsGridProps = {
    products: (Product | BuilderElement)[];
};

const ProductsGrid: React.FC<ProductsGridProps> = ({ products = [] }) => {
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 overflow-auto w-full'>
            {products && products?.map((product, index) => (
                <div key={index} className='flex flex-col justify-center p-2 m-2'>
                    {isProduct(product) ? (
                        <div className='flex flex-col shadow-md rounded-lg'>
                            <h1 className='font-bold flex justify-center items-center p-2'>
                                {product?.product?.name}
                            </h1>
                            {product?.product?.image ? (
                                <div className='flex justify-center items-center p-1'>
                                    <Image
                                        height={100}
                                        width={200}
                                        alt='product Cover'
                                        src={product.product.image}
                                    />
                                </div>
                            ) : null}
                            <h4 className='text-sm p-4 text-center'>
                                By: {product.product?.author}
                            </h4>
                        </div>
                    ) : (
                        <BuilderComponent content={product} model='products-list' />
                    )}
                </div>
            ))}
        </div>
    );
};

// Helper function to check if an object is of type Product
function isProduct(obj: any): obj is Product {
    return 'product' in obj && typeof obj.product === 'object';
}

export default ProductsGrid;