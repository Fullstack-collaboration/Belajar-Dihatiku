import Image from "next/image"
import { IoIosSchool } from "react-icons/io"
import { Button } from "./ui/button"
import Link from "next/link"

const EducationSection = () => {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 w-11/12 md:w-10/12 mx-auto my-20 gap-4">
                <div className="mx-auto order-2 md:order-1 flex items-center justify-center">
                    <div data-aos="fade-up" className="size-[85%] md:size-[85%] flex items-center justify-center">
                        <Image src="/pendidikan.svg" layout="responsive" width={550} height={550} alt="Education" />
                    </div>
                </div>
                <div className="order-1 md:order-last flex flex-col justify-center md:gap-2">
                    <h1 data-aos="fade-up" className="font-semibold text-2xl text-center md:text-3xl md:font-bold text-[#2F327D] mt-5 mb-3">Pendidikan <span className="text-[#F48C06] ">Dr.Dedy Hartama, S.T, M.Kom</span></h1>
                    <div className="mx-auto flex flex-col items-center md:justify-start md:text-md">
                        <p data-aos="fade-up" className="text-muted-foreground text-center  md:text-md md:text-xl font-medium">Dr. Dedy Hartama menyelesaikan pendidikan formalnya di beberapa universitas terkemuka:</p>
                        <div className="mx-auto grid gap-2 md:gap-5 mt-2">
                            <div data-aos="fade-up" className="flex items-center gap-5">
                                <IoIosSchool size={30} className="text-[#2F327D]" />
                                <p className="text-muted-foreground md:text-xl">S3: Doktor, Universitas Sumatera Utara, 2018</p>
                            </div>
                            <div data-aos="fade-up" className="flex items-center gap-5">
                                <IoIosSchool size={30} className="text-[#2F327D]" />
                            <p className="text-muted-foreground md:text-xl">S2: Magister Komputer, Universitas Sumatera Utara, 2011</p>
                            </div>
                            <div data-aos="fade-up" className="flex items-center gap-5">
                                <IoIosSchool size={30} className="text-[#2F327D]" />                
                                <p className="text-muted-foreground md:text-xl">S1: Sarjana Teknik, Universitas Harapan Medan, 2003</p>
                            </div>
                        </div>
                        <Button data-aos="fade-up" variant="primaryYellow" className="mt-10" asChild >
                            <Link href={"/documents/pendidikan"}>Lebih lanjut...</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EducationSection