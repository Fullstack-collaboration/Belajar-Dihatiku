import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const SignInPage = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-screen">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl text-center font-bold mb-4 flex items-center gap-2">Welcome to <Image src="/navhatiku.svg"  width={250} height={50} alt="belajardihatiku.com" /> </h1> 
                    <ClerkLoaded>
                        <SignIn path="/sign-in" />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="animate-spin size-10" />
                    </ClerkLoading>
                </div>
                <div className="hidden lg:flex flex-row px-5 gap-3 items-center justify-around bg-cyan-600">
                    <Image src={"/footerhatiku.svg"} alt="belajardihatiku.com" width={350} height={200} />
                    <Image src={"/herodihatiku.svg"} alt="belajardihatiku.com" width={400} height={200} />
                </div>
            </div>
        </>
    );
}

    export default SignInPage;