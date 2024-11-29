'use client';

import Link from 'next/link';
import Image from 'next/image';
import profileImg from '../../../public/profile.jpg';
import React from 'react';

const Profile = () => {
  return (
    <div className="min-h-screen w-full bg-white flex justify-center items-center">
      <div className="w-full max-w-none bg-white shadow-lg  overflow-hidden">
        <div className="bg-[#4E53A2] text-white text-center py-5">
          <h1 className="text-3xl font-bold">luka abramishvili</h1>
          <p className="text-lg text-gray-200">Frontend Developer</p>
        </div>
        <div className="flex flex-col items-center mt-8 mb-12">
          <Image
            src={profileImg}
            alt="Profile Picture"
            className="rounded-full w-48 h-48 border-4 border-[#4E53A2] shadow-lg"
            width={192}
            height={192}
          />
          <p className="mt-4 text-2xl font-semibold text-black">luka abramishvili</p>
          <p className="text-lg text-gray-500">lukaabramishvili3@gmail.com</p>
        </div>
        <div className="mt-8 px-12">
          <h2 className="text-xl font-bold text-black">About Me</h2>
          <p className="mt-2 text-lg text-gray-600">
            Passionate frontend developer with expertise in creating responsive and user-friendly websites. 
            Proficient in React and Tailwind CSS.
          </p>
        </div>
        <div className="mt-8 px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="bg-[#777E99] text-white p-6 rounded-lg">
            <p className="text-2xl font-bold">50</p>
            <p className="text-lg">Projects</p>
          </div>
          <div className="bg-[#777E99] text-white p-6 rounded-lg">
            <p className="text-2xl font-bold">5+</p>
            <p className="text-lg">Years</p>
          </div>
          <div className="bg-[#777E99] text-white p-6 rounded-lg">
            <p className="text-2xl font-bold">98%</p>
            <p className="text-lg">Rating</p>
          </div>
        </div>
        <div className="mt-8 px-12 mb-12 flex justify-between flex-wrap">
          <Link href="/" passHref>
            <button className="bg-[#4E53A2] text-white py-3 px-6 rounded-lg hover:bg-[#777E99] text-lg">
              Return Back
            </button>
          </Link>
          <button className="bg-gray-200 text-black py-3 px-6 rounded-lg hover:bg-gray-300 text-lg mt-4 sm:mt-0">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
