import { SignIn } from '@clerk/nextjs'
import Image from 'next/image';

export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <Image src={'/images/2151666392.jpg'} alt='Login' width={500} height={800} className='w-full object-cover h-screen'/>
      </div>
      <div className='flex justify-center items-center h-screen'>
        <SignIn />
      </div>
    </div>
  )
}