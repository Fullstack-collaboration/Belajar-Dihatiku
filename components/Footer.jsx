import Image from "next/image"

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-[#42A7C3] h-80 pt-3 flex flex-col items-center justify-around gap-4">
                <div >
                    <div className="tracking-wide text-center flex justify-center items-center flex-wrap gap-4">
                        <Image src="/footerhatiku.svg" alt="belajardihatiku.com" width={250} height={50} className="md:border-r-2 md:pr-3" />
                        {/* <h1 className="text-2xl font-semibold border-r-2 py-3 px-2 border-slate-300">belajardihatiku<span className="text-white">.com</span></h1> */}
                        <h1 className="text-white font-thin text-sm md:text-base   ">Dr. Dedy Hartama, S.T, M.Kom</h1>
                    </div>
                </div>
                <div className="tracking-wide">
                    <p className="text-slate-50 font-extralight text-sm md:text-base text-center tracking-widest">Hubungi Saya</p>
                    <div className="mt-2 flex gap-3">
                        <input type="email" placeholder="Email Kamu" className="rounded-full  px-6 py-2 md:px-10 md:py-2 bg-transparent border-2 border-white text-white placeholder:text-white active:shadow-lg active:text-white focus:border-2 focus:border-white" />
                        <button className="px-5 py-2 md:px-14 md:py-2 text-white font-light rounded-full bg-gradient-to-r from-[#2FBFE7] to-[#107797]">Kirim</button>
                    </div>
                </div>
                <div>
                <div className="flex justify-center items-center text-sm gap-2 lg:gap-6 text-white lg:text-base mb-1 tracking-wider">
                    <div>Careers</div>
                    <div className="border-x-2 px-6">Privacy Policy</div>
                    <div>Terms & Condition</div>
                </div> 
                <div className="flex justify-center items-center mt-2">
                    <p className="text-center text-sm text-white font-extralight tracking-widest">© 2024 belajardihatiku.com </p>
                </div>
                </div>
            </footer>
        </>
    )
}

export default Footer