import { IoDocumentTextOutline, IoPeople } from "react-icons/io5";
import CardDocument from "./CardDocument";
import { FaCalendarAlt } from "react-icons/fa";

const DocumentSection = () => {
  return (
    <>
      <main className="w-11/12 lg:w-10/12 mx-auto">
        <div className="my-12">
          <h1 className="text-4xl lg:text-4xl font-bold text-center mt-7 mb-3 lg:mb-4">
            <span className="text-[#2F327D]">Tridharma</span> belajardihatiku<span className="text-[#4AC3BF]">.com</span>
          </h1>
          <p className="text-[#696984] font-extralight text-center text-base">Tridarma Perguruan Tinggi berkomitmen pada tiga pilar utama: Pendidikan dan Pengajaran, Pengabdian Masyarakat, serta Penelitian dan Pengembangan</p>
        </div>
        <div className="mt-16 flex flex-wrap justify-around gap-16 lg:gap-3">
          <CardDocument
            title="Pendidikan dan Pengajaran"
            description={"Tempat pendidikan berkualitas tinggi bertemu pengajaran inovatif. Bergabunglah untuk meraih masa depan cerah melalui pengalaman belajar yang menginspirasi."}
            color={"#2F327D"}
            link={"/documents/pendidikan"}
            logo={<IoDocumentTextOutline size={35} className="text-white" />}
          />
          <CardDocument
            title="Pengabdian Masyarakat"
            description={"Program Pengabdian Masyarakat kami dan jadilah agen perubahan yang membawa dampak positif dalam masyarakat."}
            color={"#29B9E7"}
            link={"/documents/pengabdian"}
            logo={<IoPeople size={35} className="text-white" />}
          />
          <CardDocument
            title="Penelitian dan Pengembangan"
            description={"inovasi adalah kunci, kita menjelajahi batas ilmu pengetahuan. Bergabunglah untuk menciptakan solusi inovatif yang membawa perubahan nyata."}
            color={"#F48C06"}
            link={"/documents/penelitian"}
            logo={<FaCalendarAlt size={35} className="text-white" />}
          />
        </div>
      </main>
    </>
  );
};

export default DocumentSection;
