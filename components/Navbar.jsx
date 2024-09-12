'use client'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import { Button } from './ui/button'
import { RxHamburgerMenu } from "react-icons/rx"
import MovileNav from './MovileNav'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {

  const navData = [
    {href: "/pengabdian", label: "Pengabdian"},
    {href: "/publikasi", label: "Publikasi"},
    {href: "/aplikasi", label: "Aplikasi"},
  ]
  
  const pathName = usePathname()

  console.log({pathName})

  return (
    <nav className='bg-[#E2F6FC]' >
      <div className='hidden lg:w-10/12 mx-auto lg:flex justify-between items-center py-4 sticky'>
          <h1 className='text-xl ml-10 font-bold'>belajardihatiku<span className='text-cyan-600'>.com</span></h1>
          <div className='flex gap-8 space-x-8 justify-center flex-grow'>
              {
                navData.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <h4 className={`hover:text-cyan-500 px-4 py-2 rounded-md font-semibold cursor-pointer ${pathName === item.href ? 'bg-white/20 shadow text-cyan-600' : ''}`}>{item.label}</h4>
                  </Link>
                ))
              }
              {/* <h4 className='hover:text-cyan-500 font-semibold cursor-pointer'>Pengabdian</h4>
              <h4 className='hover:text-cyan-500 font-semibold cursor-pointer'>Publikasi</h4>
              <h4 className='hover:text-cyan-500 font-semibold cursor-pointer'>Aplikasi</h4> */}
          </div>
          <div className='flex justify-end gap-3'>
            <Button variant="semi" >Register</Button>
            <Button variant="primary">Login</Button>
          </div>
      </div>
      <div>
        <Sheet>
        <div className='lg:hidden sticky mx-auto w-11/12 flex justify-between items-center py-4'>
          <h1 className='text-xl ml-10 font-bold'>belajardihatiku<span className='text-cyan-600'>.com</span></h1>
          <SheetTrigger> 
            <div variant="primary" className='cursor-pointer hover:rotate-90 transition hover:text-cyan-600'>
              <RxHamburgerMenu  size={25}/>
            </div>
          </SheetTrigger>
          <SheetContent side="left">
              <MovileNav />
          </SheetContent>
          </div>
        </Sheet>
        </div>
      {/* </div> */}
    </nav>
  )
}

export default Navbar
