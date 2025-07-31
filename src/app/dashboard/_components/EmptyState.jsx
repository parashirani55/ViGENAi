import React from 'react'
import {Button} from '@/components/ui/button'
import Link from 'next/link'

function EmptyState() {
  return (
    <div className='p-5 py-24 flex items-center flex-col mt-10 border-2 border-dashed'>
      <h2>You don't have any short video genrated</h2>
      <Link href={'dashboard/create-new'}>
      <Button>Genrate New Video</Button>
      </Link>
    </div>
  )
}

export default EmptyState
