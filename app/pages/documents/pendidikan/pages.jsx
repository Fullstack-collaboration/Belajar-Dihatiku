import { useRouter } from 'next/router';

const DocumentPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const documents = {
    pendidikan: {
      title: "Pendidikan dan Pengajaran",
      description:
        "Tempat pendidikan berkualitas tinggi bertemu pengajaran inovatif. Bergabunglah untuk meraih masa depan cerah melalui pengalaman belajar yang menginspirasi.",
      color: "#2F327D",
    },
    pengabdian: {
      title: "Pengabdian Masyarakat",
      description:
        "Program Pengabdian Masyarakat kami dan jadilah agen perubahan yang membawa dampak positif dalam masyarakat.",
      color: "#29B9E7",
    },
    penelitian: {
      title: "Penelitian dan Pengembangan",
      description:
        "Inovasi adalah kunci, kita menjelajahi batas ilmu pengetahuan. Bergabunglah untuk menciptakan solusi inovatif yang membawa perubahan nyata.",
      color: "#F48C06",
    },
  };

  const document = documents[id];

  if (!document) {
    return <p>Loading...</p>; // Atau bisa menampilkan pesan kesalahan jika id tidak ditemukan
  }

  return (
    <div
      className="max-w-2xl mx-auto mt-16 p-8 rounded-md"
      style={{ backgroundColor: document.color }}
    >
      <h1 className="text-2xl font-bold text-white">{document.title}</h1>
      <p className="text-white mt-4">{document.description}</p>
    </div>
  );
};

export default DocumentPage;