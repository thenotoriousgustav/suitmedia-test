import Link from 'next/link';
import React from 'react';

export default function WorkPage() {
  return (
    <div className='pt-20 min-h-[50vh] flex'>
      <div className='m-auto flex flex-col gap-y-2'>
        <h2 className='text-center text-3xl font-semibold'>Welcome to Work</h2>
        <Link
          className='text-center bg-orange-500 text-white hover:bg-orange-600 px-2 py-1 w-fit rounded-lg mx-auto block'
          href='/ideas'
        >
          Go to ideas page
        </Link>
      </div>
    </div>
  );
}
