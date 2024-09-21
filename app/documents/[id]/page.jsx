"use client";

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaFilePdf, FaEdit, FaTrash } from "react-icons/fa"; // Tambahkan ikon edit dan hapus
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { FaSearch } from 'react-icons/fa';

const DocumentPage = () => {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const [documentData, setDocumentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [triggerSearch, setTriggerSearch] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const id = pathname.split('/').pop();

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/documents?filter=${id}`);
        if (!response.ok) throw new Error('Gagal mengambil data dari API');
        const data = await response.json();
        setDocumentData(data.data);
        setFilteredData(data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pathname]);

  const handleSearch = () => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = documentData.filter(
      (doc) =>
        doc.title.toLowerCase().includes(lowercasedQuery) ||
        doc.year.toString().includes(lowercasedQuery)
    );
    setFilteredData(filtered);
    setTriggerSearch(true);
  };

  // Fungsi untuk menangani penghapusan dokumen
  const handleDelete = async (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus dokumen ini?')) {
      try {
        const response = await fetch(`/api/documents/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) throw new Error('Gagal menghapus dokumen');
        setDocumentData((prev) => prev.filter((doc) => doc.id !== id));
        setFilteredData((prev) => prev.filter((doc) => doc.id !== id));
      } catch (error) {
        alert(error.message);
      }
    }
  };

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

  if (isLoading) {
    return (
      <div className='h-screen flex flex-col justify-center items-center'>
        <Loader2 className="size-10 animate-spin" />
        <p className='text-lg font-semibold lg:font-bold lg:text-xl text-slate-700'>Loading</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className='h-screen flex flex-col justify-center items-center'>
        <div className="rounded bg-red-300 border-2 border-red-400 flex items-center justify-center px-20 py-5">
          <p className='text-lg font-semibold lg:font-bold lg:text-xl text-red-900'>Error Fetching backend!</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto mt-16 mb-10 p-10 rounded-md bg-white shadow-[0_4px_20px_0_rgba(135,206,235,0.6)] relative">
        <h1 className="flex justify-center text-2xl font-bold text-black mb-8">{document.title}</h1>

        {/* Search bar dan tombol upload */}
        <div className="flex justify-end items-center mb-5">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="border px-4 py-2 rounded-md shadow-sm"
              placeholder="Cari dokumen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white p-2 rounded-md shadow-md flex items-center"
            >
              <FaSearch className="text-white" />
            </button>
            <Button onClick={() => router.push(`/upload/${params.id}`)} variant="primary">
              Upload berkas
            </Button>
          </div>
        </div>

        {/* Tabel dokumen */}
        <table className="w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-300 text-left">No</th>
              <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Nama Berkas</th>
              <th className="py-2 px-4 border-b-2 border-gray-300 text-left">Tahun</th>
              <th className="py-2 px-4 border-b-2 border-gray-300 text-center">Dokumen</th>
              <th className="py-2 px-4 border-b-2 border-gray-300 text-center">Aksi</th> {/* Kolom untuk aksi */}
            </tr>
          </thead>
          <tbody>
            {triggerSearch && filteredData.length === 0 && (
              <tr>
                <td colSpan="5" className="py-2 px-4 border-b border-gray-300 text-center">Tidak ada data</td>
              </tr>
            )}
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-300">{index + 1}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.title}</td>
                <td className="py-2 px-4 border-b border-gray-300">{item.year}</td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <a href={item.link} target="_blank" className="flex justify-center items-center text-red-500">
                    <FaFilePdf size={20} />
                  </a>
                </td>
                <td className="py-2 px-4 border-b border-gray-300 text-center">
                  <button
                    onClick={() => router.push(`/edit/${item.id}`)}
                    className="text-blue-500 hover:text-blue-700 mr-3"
                  >
                    <FaEdit size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash size={16} />
                  </button>
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
