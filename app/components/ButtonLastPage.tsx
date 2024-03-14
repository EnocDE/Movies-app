'use client'
import { useRouter } from 'next/navigation';

export default function ButtonLastPage() {
  const router = useRouter()

  function handleLastPage() {
    router.back()
  }
  
  return (
    <button className='absolute dark:text-white dark:hover:text-[#cfcfcf] hover:text-black transition-colors top-5 right-7 w-[50px] font-bold text-lg text-[#333] drop-shadow-lg' onClick={handleLastPage}>Volver</button>
  )
}
