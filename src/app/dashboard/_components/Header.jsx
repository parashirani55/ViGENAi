import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from "next/link";

function Header() {
  return (

    <div className='p-2 px-5 flex justify-between'>
      <div className='flex gap-3 items-center'>
        <Image src="/images/Logo.png" alt="Logo" width={120} height={40} />
        <h2>AI Short Video Genrator</h2>
      </div>
      <div className='flex gap-3 items-center'>
         <Link href={'/dashboard'}>
          
        <button style={{ backgroundColor: '#fc8494' }} className='text-white px-4 py-2 rounded'>Dashboard</button>
        </Link>
        <UserButton />
      </div>
    </div>
  )
}

export default Header

