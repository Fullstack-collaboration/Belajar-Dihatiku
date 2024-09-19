'use client'
import { usePathname, useRouter } from "next/navigation"
import { Button } from "./ui/button"
import Link from "next/link"
import { CiLogin } from "react-icons/ci"
import { IoPersonAddOutline } from "react-icons/io5"
import { ClerkLoaded, ClerkLoading, UserButton, useUser } from "@clerk/nextjs"
import { Loader2 } from "lucide-react"

const MovileNav = () => {
    const pathName = usePathname()
    const router = useRouter()

    const {isLoaded, isSignedIn, user} = useUser()
    console.log({isLoaded, isSignedIn, user})


    if (!isSignedIn) {
      return (
        <>belum lgin</>
      )
    }

    return (
        <>
            <div className="flex flex-col justify-between w-full h-full" > 
              <div className='flex flex-col items-start justify-start'>
                <div onClick={() => router.push("/")} className='cursor-pointer text-2xl mb-4 font-bold'>belajardihatiku<span className='text-cyan-600'>.com</span></div>
                <div onClick={() => router.push("/documents/pendidikan")} className={`w-full py-2 px-3 ${pathName == '/documents/pendidikan' ? "text-cyan-600 shadow" : ""} hover:text-cyan-500 hover:shadow rounded-md font-semibold cursor-pointer`}>Pendidikan</div>
                <div onClick={() => router.push("/documents/penelitian")} className={`w-full py-2 px-3 ${pathName == '/documents/penelitian' ? "text-cyan-600 shadow" : ""} hover:text-cyan-500 hover:shadow rounded-md font-semibold cursor-pointer`}>Penelitian</div>
                <div onClick={() => router.push("/documents/pengabdian")} className={`w-full py-2 px-3 ${pathName == '/documents/pengabdian' ? "text-cyan-600 shadow" : ""} hover:text-cyan-500 hover:shadow rounded-md font-semibold cursor-pointer`}>Pengabdian</div>
              </div>
              <div className='flex flex-col justify-start items-start  w-full font-semibold'>
                {!isSignedIn ? (
                  <>
                    <Link variant="semi" href={"/sign-up"} className="flex items-center hover:shadow-cyan-300 rounded px-3 hover:bg-slate-300/60 gap-3 w-full border-t-2 py-2" > <IoPersonAddOutline  size={25} /> Register</Link>
                    <Link variant="primary " href={"/sign-in"} className="flex items-center hover:shadow-cyan-300 rounded px-3 hover:bg-slate-300/60 gap-3 w-full border-t-2 py-2"> <CiLogin size={25}  /> Login</Link>
                  </>
                ) : (
                  <>
                    <ClerkLoaded >
                      <div className="flex items-center gap-4">
                        <UserButton />
                        <p className="font-semibold">{user?.fullName}</p>
                      </div>
                    </ClerkLoaded>
                    <ClerkLoading>
                      <Loader2 className="animate-spin" />
                    </ClerkLoading>
                  </>
                )}
              </div>  
            </div>
        </>
    )
}

export default MovileNav