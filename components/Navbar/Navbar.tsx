import Image from 'next/image';
import React from 'react';

type NavItem = {
    name: string
};

type NavbarProps = {
    links?: NavItem[];
};

const Navbar: React.FC<NavbarProps> = ({ links = [{ name: 'Home' }] }) => {
    return (
        <div className='flex min-w-screen items-center justify-between p-3 px-5 shadow-sm border-b-[1px]'>
            <Image
                src='/PodiumLogo.png'
                alt='Podium Audio'
                width={100}
                height={100}
                priority={true}
            />
            <div className='hidden md:flex gap-5 text-lg font-bold'>
                {links.map((item) => (
                    <h2
                        key={item.name}
                        className='hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white'
                    >
                        {item.name}
                    </h2>
                ))}
            </div>
            <div className='flex rounded-full overflow-hidden'>
                <Image
                    src='/UserDefault.png'
                    alt='User'
                    width={50}
                    height={50}
                    priority={true}
                />
            </div>
        </div>
    );
};

export default Navbar;