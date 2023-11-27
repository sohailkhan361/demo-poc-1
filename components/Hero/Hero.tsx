import React from 'react';
import Image from 'next/image';

type HeroProps = {
    title: string;
    imageUrl: string;
};

const Hero: React.FC<HeroProps> = ({ title, imageUrl }) => {
    return (
        <main className='flex min-w-screen items-center justify-between md:block sm:hidden'>
            <div style={{ position: 'relative', width: '100%' }}>
                <Image
                    height={400}
                    width={600}
                    alt='Hero Image'
                    src={imageUrl || ''}
                    priority={true}
                    layout="responsive"
                    objectFit="cover"
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '20%',
                        left: '20%',
                        transform: 'translate(-20%)',
                        textAlign: 'center',
                        color: '#fff',
                        margin: '20px',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        padding: '20px',
                        borderRadius: '10px',
                        width: '40%'
                    }}
                >
                    <h1 className='md:text-[40px] font-extrabold md:block sm:hidden text-ellipsis text-yellow-500'>
                        {title}
                    </h1>
                </div>
            </div>
        </main>
    );
};

export default Hero;