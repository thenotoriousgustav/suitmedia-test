import Image from 'next/image';

export default function Banner() {
  return (
    <div className='relative overflow-hidden'>
      <div className='h-[450px] w-screen relative'>
        <Image
          src='/img/banner.jpg'
          alt='Banner Image'
          className='transform -skew-y-[7deg] h-full w-full rounded-md object-cover '
          width='0'
          height='0'
          sizes='100vw'
        />
      </div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-white text-center z-10'>
          <h1 className='text-4xl font-bold mb-4'>Ideas</h1>
          <p className='text-lg'>Where all our great things begin</p>
        </div>
      </div>
    </div>
  );
}
