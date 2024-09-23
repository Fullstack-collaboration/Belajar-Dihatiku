"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { set } from "date-fns";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const UploadPage = () => {
  const { user } = useUser();
  const [file, setFile] = useState(null);

  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [uploader, setUploader] = useState(user?.fullName || "unauthorized");
  const [isLoading, setIsloading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [error, setError] = useState(false);

  const { toast } = useToast();

  const params = useParams();

  // console.log(user)
  // console.log({uploader})

  useEffect(() => {
    setCategory(params.category);
    setUploader(user?.fullName);
  }, [params]);

  const handlePostData = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("year", year);
    formData.append("category", category);
    formData.append("uploader", uploader);
    setIsloading(true);
    setPercentage(0);

    handlePercentace()

    if (!file || !name || !year || !category) {
      return toast({
        title: "Data tidak lengkap",
        description: "Data harus di isi semua!",
        variant: "destructive",
      });
    }

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);

      toast({
        title: "Success",
        description: `Berkas Berhasil di upload! dan data berhasil di simpan`,
      });
      setPercentage(100)
      setInterval(() => {
        setIsloading(false)
      }, 200)
      setName("");
      setYear("");
      setFile(null);
      
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: error?.message,
        variant: "destructive",
      });
      setIsloading(false);
    }
    // console.log(data)
  };

  // console.log(category)
  const fileTypes = ["JPG", "PNG", "PDF", "JPEG", "SVG"];

  const handleFileChange = (file) => {
    setFile(file);
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

  // Animasi progress
  // useEffect(() => {
  //     const interval = setInterval(() => {
  //     setPercentage((prev) => {
  //         if (prev >= 100) return 100; // Berhenti saat mencapai 100%
  //         return prev + 1; // Tambahkan 1% setiap interval
  //     });
  //     }, 100); // Kecepatan animasi 100ms

  //     return () => clearInterval(interval);
  // }, []);

  const handlePercentace = () => {
    // setPercentage(0)
    setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 96) return 100;
        return prev + 1;
      });
    }, 100);
  };

  useEffect(() => {
    if (!name || !year) {
      setError(true);
    } else {
      setError(false);
    }
  }, [name, year, category, uploader]);

  return (
    <>
      <main className="my-10 w-11/12 md:w-6/12 lg:w-5/12 mx-auto rounded border-2 border-slate-100 shadow-lg p-5">
        <h1 className="font-semibold md:font-bold text-center text-xl">Upload Document</h1>
        <div className="pt-5 flex flex-col gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
            <Label htmlFor="title">Nama Berkas</Label>
            <Input required onChange={(e) => setName(e.target.value)} value={name} type="text" id="title" name="year" placeholder="Masukkan nama berkas" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
            <Label htmlFor="year">Tahun</Label>
            <Input required onChange={handleYear} value={year} type="number" min={1900} max={new Date().getFullYear()} name="year" id="year" placeholder="Masukkan tahun berkas" />
          </div>
          {/* <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
                        <Label htmlFor="title">Nama Berkas</Label>
                        <Input type="text" id="title" placeholder="Masukkan nama berkas" />
                    </div> */}
          <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
            <Label htmlFor="file">Upload berkas (ukuran unlimited)</Label>
            <FileUploader className="hover:shadow hover:scale-105" label="Silahkan seret atau upload berkas" handleChange={handleFileChange} name="file" types={fileTypes} />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
            {isLoading ? <div className="bg-blue-600 h-6 rounded-full transition-all duration-500 ease-in-out text-center text-white" style={{ width: `${percentage}%` }}>{percentage}%</div> : null}
            <Button onClick={handlePostData} disabled={error} variant="primary">
              {isLoading ? <Loader2 className="text-center animate-spin text-white" />  : "Upload"}
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default UploadPage;
