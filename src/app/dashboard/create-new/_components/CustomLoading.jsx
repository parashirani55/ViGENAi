import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from 'next/image'

function CustomLoading({loading}) {
  return (
    <div>
      <AlertDialog open={loading}>
  <AlertDialogContent className='bg-white'>
    <div className='bg-white flex flex-col items-center my-5 justify-center'>
        <Image src={'/images/progress.gif'} width={100} height={100} alt='Loading' className='m-5'></Image>
        <h2>Genrating Your Video...Do not Refresh The Page</h2>
    </div>
  </AlertDialogContent>
</AlertDialog>
    </div>
  )
}

export default CustomLoading
