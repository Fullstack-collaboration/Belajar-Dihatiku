import { prisma } from "@/lib/prisma-client";
import { R2Uploader } from "@/lib/s3-client";

// GET - Mengambil dokumen berdasarkan kategori dan ID
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const filter = searchParams.get('filter'); 

  try {
    const [category, id] = filter.split('/'); 

    if (id) {

      const document = await prisma.documents.findUnique({
        where: { id: parseInt(id) }, 
      });

      if (!document) {
        return Response.json({ data: null, error: true, message: "Document not found" });
      }

      return Response.json({ data: document, error: false });
    }


    const documents = await prisma.documents.findMany({
      where: { category: category },
    });

    return Response.json({ data: documents, error: false });
  } catch (error) {
    return Response.json({ data: null, error: true, message: error.message });
  }
}

// POST - Mengedit dokumen
export async function POST(req) {
  const formData = await req.formData();
  const id = formData.get('id');
  const name = formData.get('name');
  const uploader = formData.get('uploader');
  const myfile = formData.get('file'); 
  const category = formData.get('category');
  const year = formData.get('year');
  let link; 

  if (myfile) {
    const buffer = Buffer.from(await myfile.arrayBuffer());
    const splitFileName = myfile.name.split('.');
    const fileExtension = splitFileName[splitFileName.length - 1];
    const nameFileWithoutSpace = splitFileName[0].split(' ').join('-');

    const file = {
      buffer: buffer,
      name: myfile.name,
      type: myfile.type,
      extension: fileExtension,
      nameWithoutSpace: nameFileWithoutSpace,
    };

    link = await R2Uploader(file); 
  }

  try {
    const updatedDocument = await prisma.documents.update({
      where: { id: parseInt(id) }, 
      data: {
        title: name,
        link: link || undefined, 
        category: category,
        author: uploader,
        year: year,
      },
    });

    return Response.json({ message: "Success", updatedDocument });
  } catch (error) {
    console.log(error);
    return Response.json({ error: true, message: error.message });
  }
}

// DELETE - Menghapus dokumen
export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id'); 

  try {
    const deletedDocument = await prisma.documents.delete({
      where: { id: parseInt(id) }, 
    });

    console.log(deletedDocument)

    return Response.json({ message: "Document deleted successfully", deletedDocument });
  } catch (error) {
    console.log(error);
    return Response.json({ error: true, message: error.message });
  }
}
