"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const EditPage = () => {
  const { user } = useUser();
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [uploader, setUploader] = useState(user?.fullName || "unauthorized");
  const [isLoading, setIsLoading] = useState(false);
  const [documentId, setDocumentId] = useState(null); 
  const [previewUrl, setPreviewUrl] = useState(""); 
  const [newPreviewUrl, setNewPreviewUrl] = useState(""); 
  const [percentage, setPercentage] = useState(0);
  const { toast } = useToast();
  const params = useParams(); 

  useEffect(() => {
    const id = params.id; 
    if (id) {
      const fetchDocument = async () => {
        try {
          const response = await fetch(`/api/documents?filter=berkas/${id}`);
          const data = await response.json();
          if (data.error) throw new Error(data.message);
          
          if (data.data) {
            const document = data.data; 
            setDocumentId(document.id);
            setName(document.title);
            setYear(document.year);
            setCategory(document.category);
            setUploader(document.author);
            setPreviewUrl(document.link); 
          } else {
            throw new Error("Dokumen tidak ditemukan");
          }
        } catch (error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        }
      };

      fetchDocument();
    }
  }, [params.id, toast]);

  const handlePostData = async () => {
    const formData = new FormData();
    if (documentId) formData.append("id", documentId); 
    if (name) formData.append("name", name);
    if (year) formData.append("year", year);
    if (category) formData.append("category", category);
    if (file) formData.append("file", file);

    setIsLoading(true);
    setPercentage(0);
    handlePercentage();

    if (!name && !year && !category && !file) {
      setIsLoading(false);
      return toast({
        title: "Data tidak lengkap",
        description: "Setidaknya satu field harus diisi!",
        variant: "destructive",
      });
    }

    try {
      const response = await axios.post(`/api/documents`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast({
        title: "Success",
        description: "Dokumen berhasil diperbarui!",
      });

      if (file) {
        const objectUrl = URL.createObjectURL(file);
        setNewPreviewUrl(objectUrl); 
      }

      setPercentage(100);
      setInterval(() => {
        setIsLoading(false);
      }, 200);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (file) => {
    if (file) {
      setFile(file);
      const objectUrl = URL.createObjectURL(file); 
      setNewPreviewUrl(objectUrl); 
    } else {
      setNewPreviewUrl("");
    }
  };

  const handleYear = (e) => {
    if (year.length <= 4) {
      setYear(e.target.value);
    }
    if (year.length > 4) {
      toast({
        title: "Tahun tidak valid!",
        variant: "destructive",
      });
      setYear(year.slice(0, 4));
    }
  };

  const handlePercentage = () => {
    setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 96) return 100;
        return prev + 1;
      });
    }, 100);
  };

  const handleDeleteFile = () => {
    setFile(null);
    setNewPreviewUrl(""); 
  };

  return (
    <main className="my-10 w-11/12 md:w-6/12 lg:w-5/12 mx-auto rounded border-2 border-slate-100 shadow-lg p-5">
      <h1 className="font-semibold md:font-bold text-center text-xl">Edit Document</h1>
      <div className="pt-5 flex flex-col gap-4">
        <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
          <Label htmlFor="title">Nama Berkas</Label>
          <Input
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="title"
            placeholder="Masukkan nama berkas"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
          <Label htmlFor="year">Tahun</Label>
          <Input
            onChange={handleYear}
            value={year}
            type="number"
            min={1900}
            max={new Date().getFullYear()}
            id="year"
            placeholder="Masukkan tahun berkas"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
          <Label htmlFor="file">Upload berkas (ukuran unlimited)</Label>
          <FileUploader handleChange={handleFileChange} name="file" types={["JPG", "PNG", "PDF", "JPEG"]} />
        </div>

        {/* Preview dari dokumen yang diambil dari API */}
        {previewUrl && (
          <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
            <Label>Preview Dokumen Saat Ini</Label>
            <div className="relative">
              {previewUrl.endsWith(".pdf") ? (
                <embed src={previewUrl} type="application/pdf" width="100%" height="200px" />
              ) : (
                <Image height={700} width={700} src={previewUrl} alt="Preview Document" className="w-24 h-24 object-contain" />
              )}
            </div>
          </div>
        )}

        {/* Preview dari file baru yang diupload */}
        {newPreviewUrl && (
          <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
            <Label>Preview Dokumen Baru</Label>
            <div className="relative" onClick={handleDeleteFile} style={{ cursor: 'pointer' }}>
              <div className="flex items-center justify-center">
                {newPreviewUrl.endsWith(".pdf") ? (
                  <embed src={newPreviewUrl} type="application/pdf" width="100%" height="200px" />
                ) : (
                  <Image height={700} width={700} src={newPreviewUrl} alt="New Preview Document" className="w-25 h-25 object-contain" />
                )}
              </div>
            </div>
          </div>
        )}

        <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
          {isLoading ? (
            <div className="bg-blue-600 h-6 rounded-full transition-all duration-500 ease-in-out text-center text-white" style={{ width: `${percentage}%` }}>
              {percentage}%
            </div>
          ) : null}
          <Button onClick={handlePostData} disabled={isLoading} variant="primary">
            {isLoading ? <Loader2 className="animate-spin text-white" /> : "Update"}
          </Button>
        </div>
      </div>
    </main>
  );
};

export default EditPage;
