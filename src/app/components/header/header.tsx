import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profileImg from '../../../../public/profile.jpg';

const Header = () => {
  return (
    <header className="bg-[#4E53A2] w-full flex items-center justify-between px-4 sm:px-8 py-4">
        <div className="text-4xl font-bold text-white">
            Logo
        </div>
            
        <div className="flex items-center space-x-4">
            <div className="text-white">
                <Link href="/profile">
                    <Image 
                    src={profileImg}  
                    alt="Profile"
                    className="rounded-full w-12 h-12 sm:w-16 sm:h-16"
                    />
                </Link>
            </div>
        </div>
    </header>
  );
};

export default Header;
