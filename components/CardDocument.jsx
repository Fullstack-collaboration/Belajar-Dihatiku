import Link from "next/link";

const CardDocument = ({ link, title, description, logo, color }) => {
    return (
      <Link data-aos="fade-up" href={link} className=" hover:scale-105 hover:shadow-cyan-100 hover:lg:shadow-cyan-300 cursor-pointer transition  rounded-lg border-2 shadow-xl border-slate-100 px-5 py-8 text-center w-11/12 lg:w-[30%] relative flex flex-col gap-3">
        <div
          className="absolute -top-9 left-1/2 right-1/2 size-16 transform -translate-x-1/2 flex justify-center items-center rounded-full"
          style={{ backgroundColor: color }}
        >
          {logo}
        </div>
        <h1 className="text-2xl md:text-xl font-bold py-1" style={{ color: color }}>
          {title}
        </h1>
        <p className="text-[#696984] font-extralight text-justify text-base md:text-base">{description}</p>
        {/* <Link href={link}>
          <div className="px-7 py-4 rounded-full font-semibold text-white mt-3" style={{ backgroundColor: color }}>
            Cek Dokumen
          </div>
        </Link> */}

      </Link>
    );
  };
  
  export default CardDocument;
  