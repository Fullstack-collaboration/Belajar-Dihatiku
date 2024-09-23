import Image from "next/image"
import { IoIosSchool } from "react-icons/io"
import { Button } from "./ui/button"
import Link from "next/link"

const ResearchSection = () => {
    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-2 w-11/12 lg:w-10/12 mx-auto my-20 gap-4">
                <div className="mx-auto order-2 lg:order-last flex items-center justify-center">
                    <div data-aos="fade-left" className="size-[85%] lg:size-[80%] flex items-center justify-center">
                        <Image src="/research.svg" layout="responsive" width={550} height={550} alt="Education" />
                    </div>
                </div>
                <div className="order-1 lg:order-1 flex flex-col justify-center lg:gap-2">
                    <h1 data-aos="fade-up" className="font-semibold text-2xl text-start lg:text-start md:text-3xl lg:text-4xl lg:font-bold text-[#FF725E] mt-5 mb-3">Kontribusi <span className="text-[#2F327D] ">Penelitian</span></h1>
                    <div className="mx-auto flex flex-col items-center lg:justify-start lg:gap-5 lg:text-lg">
                        <p data-aos="fade-up" className="text-muted-foreground text-justify lg:text-justify md:text-lg lg:text-xl font-medium">
                        Dr. Dedy Hartama, S.T, M.Kom dikenal atas kontribusinya dalam penelitian di bidang data mining dan big data. Dengan ID SINTA 259865, ia memiliki Skor SINTA 1.137 secara keseluruhan. Penelitiannya berfokus pada pemodelan data skala besar, memberikan dampak pada berbagai aplikasi akademis dan industri. Berbagai publikasinya menjadi referensi penting dalam studi analisis data dan pengembangan sistem informasi.
                        </p>
                        {/* <div className="mx-auto grid gap-2 lg:gap-5 mt-2">
                            <div className="flex items-center gap-5">
                                <IoIosSchool size={30} className="text-[#2F327D]" />
                                <p className="text-muted-foreground lg:text-xl">S3: Doktor, Universitas Sumatera Utara, 2018</p>
                            </div>
                            <div className="flex items-center gap-5">
                                <IoIosSchool size={30} className="text-[#2F327D]" />
                            <p className="text-muted-foreground lg:text-xl">S2: Magister Komputer, Universitas Sumatera Utara, 2011</p>
                            </div>
                            <div className="flex items-center gap-5">
                                <IoIosSchool size={30} className="text-[#2F327D]" />                
                                <p className="text-muted-foreground lg:text-xl">S1: Sarjana Teknik, Universitas Harapan Medan, 2003</p>
                            </div>
                        </div> */}
                        <Button data-aos="fade-up" variant="primaryPink" className="mt-5 self-start" asChild >
                            <Link href={"/documents/penelitian"}>Lebih lanjut tentang penelitian...</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ResearchSection