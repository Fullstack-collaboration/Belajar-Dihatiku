import { prisma } from "@/lib/prisma-client";

export async function GET(req) {

    const data = await prisma.documents.findMany({
        where: {
            category: 'pendidikan'
        }
    })

    console.log(data)

    
  
    return Response.json({data});
  }
  