import Image from "next/image"

const HeroBanner = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-[#E2F6FC] from-80% to-[#FEFFFF]">
                <div className="w-11/12 lg:w-9/12 mx-auto pt-7 grid grid-cols-1 md:grid-cols-2">
                    <div className="h-60 md:h-full flex text-center md:text-start justify-center flex-col md:mx-7 lg:mx-8 gap-4 lg:gap-6">
                        <h1 className="text-5xl lg:text-6xl font-bold"> Selamat <span className="text-[#4AC3BF]"> Datang </span></h1>
                        <h2 className="text-4xl lg:text-5xl font-semibold">belajardihatiku<span className="text-[#4AC3BF]">.com</span></h2>
                        <div>
                            <button className="px-9 py-3 mt-2 bg-[#4AC3BF] text-slate-100 hover:text-slate-50 hover:bg-opacity-80 hover:scale-105 transition w-auto rounded-full font-semibold text-center">Lihat lebih lengkap</button>
                        </div>
                    </div>

                    <div className="flex items-center justify-center p-4 lg:p-0 mx-auto lg:ml-auto lg:mr-0 ">
                        <Image src="/herodihatiku.svg" alt="Belajardihatiku.com" width={500} height={500} className="ml-auto mx-5 my-10" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBanner