'use client';

import Image from "next/image";
import { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();
            if (res.ok) {
                alert(data.message); // Tampilkan pesan sukses
            } else {
                alert(data.error); // Tampilkan pesan error jika gagal
            }
        } catch (error) {
            alert('Terjadi kesalahan saat mengirim email.');
        }
    };

    return (
        <>
            <footer className="w-full bg-[#42A7C3] h-80 pt-3 flex flex-col items-center justify-around gap-4">
                <div>
                    <div className="tracking-wide text-center flex justify-center items-center flex-wrap gap-4">
                        <Image src="/footerhatiku.svg" alt="belajardihatiku.com" width={260} height={70} className="md:border-r-2 md:pr-3" />
                        <h1 className="text-white font-thin text-base md:text-lg px-2 ">Dr. Dedy Hartama, S.T, M.Kom</h1>
                    </div>
                </div>
                <div className="tracking-wide">
                    <p className="text-slate-50 font-extralight text-base text-center tracking-widest">Hubungi Saya</p>
                    <form onSubmit={handleSubmit} className="mt-2 flex gap-3">
                        <input 
                            type="email" 
                            placeholder="Email Kamu" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="rounded-full px-6 py-2 md:px-10 md:py-2 bg-transparent border-2 border-white text-white placeholder:text-white active:shadow-lg active:text-white focus:border-2 focus:border-white"
                        />
                        <button 
                            type="submit" 
                            className="px-5 py-2 md:px-14 md:py-2 text-white font-light rounded-full bg-gradient-to-r from-[#2FBFE7] to-[#107797]"
                        >
                            Kirim
                        </button>
                    </form>
                </div>
                <div>
                    <div className="flex justify-center items-center gap-6 text-white text-base mb-1 tracking-wider">
                        <div>Careers</div>
                        <div className="border-x-2 px-6">Privacy Policy</div>
                        <div>Terms & Condition</div>
                    </div>
                    <div className="flex justify-center items-center mt-2">
                        <p className="text-center text-white font-extralight text-sm tracking-widest">© 2024 belajardihatiku.com</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
