import { usePathname } from "next/navigation"

const MovileNav = () => {
    const pathName = usePathname()

    return (
        <>
            <div > 
              <div className='flex flex-col items-start justify-start'>
                <div className='cursor-pointer text-2xl mb-4 font-bold'>belajardihatiku<span className='text-cyan-600'>.com</span></div>
                <div className={`w-full py-2 px-3 ${pathName == '/pengabdian' ? "text-cyan-600 shadow" : ""} hover:text-cyan-500 hover:shadow rounded-md font-semibold cursor-pointer`}>Pengabdian</div>
                <div className={`w-full py-2 px-3 ${pathName == '/publication' ? "text-cyan-600 shadow" : ""} hover:text-cyan-500 hover:shadow rounded-md font-semibold cursor-pointer`}>Publikasi</div>
                <div className={`w-full py-2 px-3 ${pathName == '/application' ? "text-cyan-600 shadow" : ""} hover:text-cyan-500 hover:shadow rounded-md font-semibold cursor-pointer`}>Aplikasi</div>
              </div>
            </div>
        </>
    )
}

export default MovileNav