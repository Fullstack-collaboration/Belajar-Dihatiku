"use client";

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaFilePdf } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const DocumentPage = () => {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const [documentData, setDocumentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(params.id)

  useEffect(() => {

    window.scrollTo(0, 0);


    const id = pathname.split('/').pop();

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/documents?filter=${id}`); 
        if (!response.ok) throw new Error('Gagal mengambil data dari API');
        const data = await response.json();
        setDocumentData(data.data); 
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const id = pathname.split('/').pop();

  const documents = {
    pendidikan: {
      title: "Pendidikan dan Pengajaran",
    },
    pengabdian: {
      title: "Pengabdian Masyarakat",
    },
    penelitian: {
      title: "Penelitian dan Pengembangan",
    },
  };

  const document = documents[id];

  if (!document) {
    return (
      <div className='h-screen flex flex-col justify-center items-center'>
        {/* <Loader2 className="size-10 animate-spin" /> */}
        <div className="rounded bg-red-300 border-2 border-red-400 flex items-center justify-center px-20 py-5">
          <p className='text-lg font-semibold lg:font-bold lg:text-xl text-red-900'>Error Fetching backend!</p>
        </div>
      </div>  
    )
  }

  if (isLoading) {
    return (
      <div className='h-screen flex flex-col justify-center items-center'>
        <Loader2 className="size-10 animate-spin" />
        <p className='text-lg font-semibold lg:font-bold lg:text-xl text-slate-700'>Loading</p>
      </div>
    )}
  if (error) {
    return (
      <div className='h-screen flex flex-col justify-center items-center'>
        {/* <Loader2 className="size-10 animate-spin" /> */}
        <div className="rounded bg-red-300 border-2 border-red-400 flex items-center justify-center px-20 py-5">
          <p className='text-lg font-semibold lg:font-bold lg:text-xl text-red-900'>Error Fetching backend!</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="max-w-6xl mx-auto mt-16 p-10 rounded-md bg-white shadow-[0_4px_20px_0_rgba(135,206,235,0.6)] relative ">
        <Button onClick={() => router.push(`/upload/${params.id}`)} className='absolute top-5 right-5' variant="primary" >Upload berkas</Button>
        <h1 className="flex justify-center text-2xl font-bold text-black mb-8">{document.title}</h1>

        <table className="w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-300 text-left">No</th>
              <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Nama Berkas</th>
              <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Tahun</th>
              <th className="py-2 px-4 border-b-2 border-gray-300 text-center">Dokumen</th>
            </tr>
          </thead>
          <tbody>
            {documentData.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-300">{index + 1}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.namaBerkas}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.tahun}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <a href={item.dokumenUrl} target="_blank" className="flex justify-center items-center text-red-500">
                    <FaFilePdf size={20} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DocumentPage;
