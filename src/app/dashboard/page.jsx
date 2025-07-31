"use client"
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import EmptyState from './_components/EmptyState';
import Link from 'next/link';

function Dashboard() {
  const [VideoList] = useState([]);
console.log("🔑 NEXT_PUBLIC_GEMINI_API_KEY:", process.env.NEXT_PUBLIC_GEMINI_API_KEY);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-red-500'>Dashboard</h2>

        <Link href={'/dashboard/create-new'}>
          <Button>+ Create New</Button>
        </Link>
        
      </div>

      {/* Empty state */}
      {VideoList?.length === 0 && (
        <div>
          <EmptyState />
        </div>
      )}
    </div>
  )
}

export default Dashboard
