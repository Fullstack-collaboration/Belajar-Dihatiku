'use client'
import About from "@/components/About";
import CommunitySection from "@/components/CommunitySection";
import DocumentSection from "@/components/DocumentSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import ResearchSection from "@/components/ResearchSection";
import { useUser } from "@clerk/nextjs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Home() {
  
  // const user = useUser()

  // console.log({user})

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <HeroBanner />
      <DocumentSection  />
      <About />
      <EducationSection />
      <ResearchSection />
      <CommunitySection />
      {/* <Footer /> */}
    </>
  );
}
