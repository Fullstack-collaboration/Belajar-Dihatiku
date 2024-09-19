import {
    S3Client,
    ListBucketsCommand,
    ListObjectsV2Command,
    GetObjectCommand,
    PutObjectCommand,
  } from "@aws-sdk/client-s3";

const {R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_KEY_ID, R2_BUCKET_NAME } = process.env

export const R2 = new S3Client({
    region: "auto",
    endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID,
        secretAccessKey: R2_SECRET_KEY_ID
    }
})

export const R2Uploader = async (file) => {
    try {
        const publicBucketUrl = "https://pub-916d3e435d984d21b48d68a4d3145728.r2.dev/";
            let randomKey = Math.round(Math.random() * 9999999999);
            let stringRandomKey = `${randomKey}-belajardihatiku.com-${file.nameWithoutSpace}.${file.extenstion}`;
            const fileUrl = `${publicBucketUrl}${stringRandomKey}`;
            const receiptUrl = fileUrl
        await R2.send(
            new PutObjectCommand({
                Body: file.buffer,
                Bucket: R2_BUCKET_NAME,
                Key: stringRandomKey,
                ContentType: file.type,
            })
        )

        return receiptUrl
    } catch (error) {
        console.error(error)
        return error
    }

}
