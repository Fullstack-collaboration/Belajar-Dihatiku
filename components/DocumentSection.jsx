import { IoDocumentTextOutline, IoPeople } from "react-icons/io5";
import CardDocument from "./CardDocument";
import { FaCalendarAlt } from "react-icons/fa";

const DocumentSection = () => {
  return (
    <>
      <main className="w-11/12 lg:w-10/12 mx-auto my-20">
        <div className="my-12">
          <h1 data-aos="fade-up" className="text-4xl lg:text-4xl font-bold text-center mt-7 mb-3 lg:mb-4">
            <span className="text-[#2F327D]">Tridharma</span> belajardihatiku<span className="text-[#4AC3BF]">.com</span>
          </h1>
          <p data-aos="fade-left" className="text-[#696984] font-extralight text-center text-base">Tridarma Perguruan Tinggi berkomitmen pada tiga pilar utama: Pendidikan dan Pengajaran, Pengabdian Masyarakat, serta Penelitian dan Pengembangan</p>
        </div>
        <div className="mt-16 flex flex-wrap justify-around gap-16 lg:gap-3">
          <CardDocument data-aos="fade-up"
            title="Pendidikan"
            description={"Dr. Dedy Hartama, S.T, M.Kom menyelesaikan pendidikan formalnya dengan gelar Doktor dari Universitas Sumatera Utara. Fokus pendidikannya mencakup bidang Sistem Informasi dan Teknik Informatika, yang mendukung keahliannya dalam riset teknologi dan data."}
            color={"#2F327D"}
            link={"/documents/pendidikan"}
            logo={<IoDocumentTextOutline size={35} className="text-white" />}
          />
          <CardDocument data-aos="zoom-out-up"
            title="Penelitian"
            description={"Penelitian Dr. Dedy Hartama, S.T, M.Kom berfokus pada pengembangan model data mining dan big data, dengan kontribusi penting pada pemodelan algoritma pencarian dan analisis data skala besar."}
            color={"#29B9E7"}
            link={"/documents/penelitian"}
            logo={<IoPeople size={35} className="text-white" />}
            />
          <CardDocument data-aos="flip-right"
            title="Pengabdian"
            description={"Dalam kapasitasnya sebagai Rektor STIKOM Tunas Bangsa, Dr. Dedy Hartama, S.T, M.Kom secara aktif berperan dalam pengembangan pendidikan tinggi dan pengabdian kepada masyarakat melalui berbagai inisiatif akademis dan profesional."}
            color={"#F48C06"}
            link={"/documents/pengabdian"}
            logo={<FaCalendarAlt size={35} className="text-white" />}
          />
        </div>
          {/* <div>
            <iframe src="https://www.instagram.com/p/C_fPamoSaD2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className="w-full h-screen overflow-hidden" frameborder="0"></iframe>
          </div> */}
      </main>
    </>
  );
};

export default DocumentSection;
