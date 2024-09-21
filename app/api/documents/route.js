import { prisma } from "@/lib/prisma-client";

export async function GET(req) {

    const { searchParams } = new URL(req.url);
    const filter = searchParams.get('filter');

    try {
      const documents = await prisma.documents.findMany({
        where: {
          category: filter
        }
      });

      return Response.json({ data: documents, error: false });
    } catch (error) {
      return Response.json({ data: null, error: true, message: error.message });
    }
    // if (filter && documents[filter]) {
    //   return Response.json({ data: documents[filter], error: false });
    // }
  
    // return Response.json({ data: documents, error: false });
  }
