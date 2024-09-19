import { prisma } from "@/lib/prisma-client";
import { R2Uploader } from "@/lib/s3-client";

export async function POST(req) {
    const formData = await req.formData()
    const name = formData.get('name')
    const uploader = formData.get('uploader')
    const myfile = formData.get('file')
    const category = formData.get('category')
    const year = formData.get('year')
    console.log(myfile);
    const buffer = Buffer.from(await myfile.arrayBuffer());
    
    const splitFileName = myfile.name.split('.')
    const fileExtension = splitFileName[splitFileName.length - 1]
    const nameFileWithoutSpace = splitFileName[0].split(' ').join('-')

    const file = {
        buffer: buffer,
        // Bucket: R2_BUCKET_NAME,
        name: myfile.name,
        type: myfile.type,
        extenstion: fileExtension,
        nameWithoutSpace: nameFileWithoutSpace
        // body: data
    }
    const link = await R2Uploader(file)

    try {
        const res = await prisma.documents.create({
            data: {
                title: name,
                link: link,
                category: category,
                author: uploader,
                year: year
            }
        })
        console.log(res)
        return Response.json({message: "Success", res, link})
    } catch (error) {
        console.log(error)
        return Response.json({error})
    }
}