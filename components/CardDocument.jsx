import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";
const CardDocument = ({link, title, description, logo, color}) => {
    return (
        <>
            <div className="rounded-lg border-0 shadow-2xl px-5 py-10 text-center lg:w-[30%] relative flex flex-col gap-4">
                <div className={`absolute -top-12 left-1/2 right-1/2 w-20 h-20 transform -translate-x-1/2 flex justify-center items-center rounded-full bg-[${color}]`} >
                    {logo}
                </div>
                <h1 className={`text-3xl md:text-2xl font-bold text-[${color}] py-2`}>{title}</h1>
                <p className="text-[#696984] font-extralight text-center text-xl md:text-lg">{description}</p>
                <Link className={`px-7 py-4 bg-[${color}] rounded-full font-semibold text-white mt-3`} href={link}>Cek Dokumen</Link>
            </div>
        </>
    )
}

export default CardDocument