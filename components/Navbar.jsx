'use client'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import { Button } from './ui/button'
import { RxHamburgerMenu } from "react-icons/rx"
import MovileNav from './MovileNav'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { ClerkLoaded, ClerkLoading, UserButton, useUser } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'

const Navbar = () => {

  const router = useRouter()

  const navData = [
    {href: "/pengabdian", label: "Pengabdian"},
    {href: "/publikasi", label: "Publikasi"},
    {href: "/aplikasi", label: "Aplikasi"},
  ]

  const {isLoaded, isSignedIn, user} = useUser()
  console.log({isLoaded, isSignedIn, user})
  
  const pathName = usePathname()

  console.log({pathName})

  return (
    <nav className='bg-[#E2F6FC]' >
      <div className='hidden lg:w-10/12 mx-auto lg:flex justify-between items-center py-4 sticky'>
          {/* <h1 className='text-xl ml-10 font-bold'>belajardihatiku<span className='text-cyan-600'>.com</span></h1> */}
          <Link href={"/"}  className='cursor-pointer hover:scale-105 transition'>
            <Image src={"/navhatiku.svg"} alt='belajardihatiku.com' width={240} height={30} />
          </Link>
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
          {
            (!isSignedIn) ? (
              <>
                <ClerkLoading>
                  <Loader2 className='animate-spin' />
                </ClerkLoading>
              <ClerkLoaded>
                <div className='flex justify-end gap-3'>
                  <Button variant="semi" onClick={() => router.push("/sign-up")} >Register</Button>
                  <Button variant="primary" onClick={() => router.push("/sign-in")}>Login</Button>
                </div>
              </ClerkLoaded>
              </>
            ) : (
              <div className='flex justify-end gap-3'>
                <ClerkLoaded>
                  <div className='flex items-center gap-4 cursor-pointer'>
                    {/* <p className='font-semibold'>{user?.fullName}</p> */}
                    <UserButton className="size-10"/>
                  </div>
                </ClerkLoaded>
                <ClerkLoading>
                  <Loader2 className='animate-spin' />
                </ClerkLoading>
              </div>
            )
          }
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
