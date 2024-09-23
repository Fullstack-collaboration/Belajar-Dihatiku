import Image from "next/image"

const About = () => {
    return (
        <>
            <section  data-aos="fade-up" className="w-11/12 lg:w-10/12 my-40 mx-auto flex flex-col items-center justify-center gap-4 lg:gap-5 shadow-xl border-2 border-slate-50 rounded-lg p-5 ">
                    <h1  data-aos="fade-up" className="font-semibold text-4xl lg:text-5xl lg:font-extrabold text-[#2F327D]">`&quot;` Siapa <span className='text-[#F48C06]'> Dedy Hartama? `&quot;`</span></h1>
                    <p data-aos="fade-up" className="text-muted-foreground text-justify lg:text-xl">
                        Dr. Dedy Hartama, S.T, M.Kom adalah akademisi dan peneliti yang berkomitmen pada kemajuan teknologi informasi dan pendidikan di Indonesia. Sebagai Ketua STIKOM Tunas Bangsa, ia memimpin berbagai inisiatif akademis dan berkontribusi dalam pengembangan sistem informasi. Fokus penelitiannya meliputi data mining, big data, dan pemodelan algoritma, dengan dampak signifikan dalam analisis data skala besar. Dengan publikasi yang diakui, Dr. Dedy terus berperan aktif di komunitas akademis nasional dan internasional.
                    </p>
                    {/* <Image /> */}
            </section>
            {/* <section className="w-11/12 lg:w-10/12 mx-auto flex flex-col items-center justify-center gap-2 lg:gap-3">
                    <h1 className="font-semibold text-4xl lg:text-5xl lg:font-extrabold text-[#2F327D]">Tentang <span className="text-[#F48C06]"> Dedy Hartama</span></h1>
                    <p className="text-muted-foreground text-center lg:text-xl">Informasi tambahan tentang Pendidikan, Penelitian dan Pengabdian</p>
            </section> */}
        </>
    )
}

export default About