import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4'>
        <h1 className='text-xl ml-10 font-bold'>belajardihatiku<span className='text-cyan-600'>.com</span></h1>
        <div className='flex gap-8 space-x-8 justify-center flex-grow'>
            <h4 className='hover:text-cyan-500 font-semibold cursor-pointer'>Pengabdian</h4>
            <h4 className='hover:text-cyan-500 font-semibold cursor-pointer'>Publikasi</h4>
            <h4 className='hover:text-cyan-500 font-semibold cursor-pointer'>Aplikasi</h4>
        </div>
    </div>
  )
}

export default Navbar
