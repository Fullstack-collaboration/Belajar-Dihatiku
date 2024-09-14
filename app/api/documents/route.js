export async function GET(req) {
    const documents = {
      pendidikan: [
        { namaBerkas: "SK.131231", tahun: 2021, dokumenUrl: "/documents/pendidikan/SK.131231.pdf", format: "PDF" },
        { namaBerkas: "SK.145678", tahun: 2022, dokumenUrl: "/documents/pendidikan/SK.145678.pdf", format: "PDF" }
      ],
      pengabdian: [
        { namaBerkas: "SK.223344", tahun: 2020, dokumenUrl: "/documents/pengabdian/SK.223344.pdf", format: "PDF" },
        { namaBerkas: "SK.556677", tahun: 2023, dokumenUrl: "/documents/pengabdian/SK.556677.pdf", format: "PDF" }
      ],
      penelitian: [
        { namaBerkas: "SK.334455", tahun: 2019, dokumenUrl: "/documents/penelitian/SK.334455.pdf", format: "PDF" },
        { namaBerkas: "SK.334455", tahun: 2019, dokumenUrl: "/documents/penelitian/SK.334455.pdf", format: "PDF" },
        { namaBerkas: "SK.334455", tahun: 2019, dokumenUrl: "/documents/penelitian/SK.334455.pdf", format: "PDF" },
        { namaBerkas: "SK.334455", tahun: 2019, dokumenUrl: "/documents/penelitian/SK.334455.pdf", format: "PDF" },
        { namaBerkas: "SK.334455", tahun: 2019, dokumenUrl: "/documents/penelitian/SK.334455.pdf", format: "PDF" },
        { namaBerkas: "SK.334455", tahun: 2019, dokumenUrl: "/documents/penelitian/SK.334455.pdf", format: "PDF" },
        { namaBerkas: "SK.334455", tahun: 2019, dokumenUrl: "/documents/penelitian/SK.334455.pdf", format: "PDF" },
        { namaBerkas: "SK.334455", tahun: 2019, dokumenUrl: "/documents/penelitian/SK.334455.pdf", format: "PDF" },
        { namaBerkas: "SK.334455", tahun: 2019, dokumenUrl: "/documents/penelitian/SK.334455.pdf", format: "PDF" },
        { namaBerkas: "SK.667788", tahun: 2022, dokumenUrl: "/documents/penelitian/SK.667788.pdf", format: "PDF" }
      ]
    };
  
    const { searchParams } = new URL(req.url);
    const filter = searchParams.get('filter');
  
    if (filter && documents[filter]) {
      return Response.json({ data: documents[filter], error: false });
    }
  
    return Response.json({ data: documents, error: false });
  }
  
  export async function POST(req) {
    const body = await req.json();
  
    const filter = body.filter; 
  
    const documents = {
      pendidikan: [
        { namaBerkas: "SK.131231", tahun: 2021, dokumenUrl: "/documents/pendidikan/SK.131231.pdf", format: "PDF" },
        { namaBerkas: "SK.145678", tahun: 2022, dokumenUrl: "/documents/pendidikan/SK.145678.pdf", format: "PDF" }
      ],
      pengabdian: [
        { namaBerkas: "SK.223344", tahun: 2020, dokumenUrl: "/documents/pengabdian/SK.223344.pdf", format: "PDF" },
        { namaBerkas: "SK.556677", tahun: 2023, dokumenUrl: "/documents/pengabdian/SK.556677.pdf", format: "PDF" }
      ],
      penelitian: [
        { namaBerkas: "SK.334455", tahun: 2019, dokumenUrl: "/documents/penelitian/SK.334455.pdf", format: "PDF" },
        { namaBerkas: "SK.667788", tahun: 2022, dokumenUrl: "/documents/penelitian/SK.667788.pdf", format: "PDF" }
      ]
    };
  
    if (filter && documents[filter]) {
      return Response.json({ data: documents[filter], error: false });
    }
  
    return Response.json({ data: null, error: true, message: "Filter tidak valid atau tidak ditemukan." });
  }
  