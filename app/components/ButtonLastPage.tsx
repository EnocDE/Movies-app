'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function ButtonLastPage() {
  const router = useRouter()

  function handleOnClick() {
    router.back()
  }
  
  return (
    <button className='absolute hover:text-[#c1c1c1] transition-colors top-5 right-7 w-[50px] font-bold text-lg text-white' onClick={handleOnClick}>Volver</button>
  )
}
