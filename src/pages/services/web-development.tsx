import { AccordionContent } from "@/components/AccordionContent";
import ApproachContent from "@/components/ApproachContent";
import { AvatarComponent } from "@/components/AvatarComponent";
import ConsultCarousel, { CarouselCard } from "@/components/ConsultCarousel";
import ExpertSection from "@/components/ExpertSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import ProcessCarousel from "@/components/ProcessCarousel";
import GradientBg from "@/components/Svg/GradientBg";
import Pattern from "@/components/Svg/Pattern";
import Software from "@/components/Svg/software";
import { UIdesign } from "@/components/Svg/UIdesign";
import TechContent from "@/components/TechContent";
import { Button, List, SimpleGrid, ThemeIcon } from "@mantine/core";
import { Raleway } from "@next/font/google";
import Image from "next/image";
import { assetIndex } from "public/assets";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import {GoPrimitiveDot} from "react-icons/go"

const raleway = Raleway({ subsets: ["latin"] });

const WebDevelopment = () => {
  return (
    <>
      <PageTitle title="Infinanze | Web Development" />
      <main className={`min-h-full z-10 ${raleway.className}`}>
        <section className="w-full max-h-[900px] relative">
          <Header />
          <Image
            className="w-screen h-[900px] bg-cover bg-center"
            width={900}
            height={900}
            src={assetIndex.Image.banner4}
            alt="banner"
          />
          <div className="absolute top-[45%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-20 text-center">
            <h1 className="text-[#fff] text-[60px] font-bold leading-tight">
            Web Development
            </h1>
            <h5 className="text-[#fff] text-[22px] font-medium mt-4">
            We help global brands design and build superior website, enabling seamless user experiences across all modern platforms and devices
            </h5>
            <div className="mt-16 nav-btn w-full">
            <Button px={4} py={8} sx={{width: '400px !important', height: 50, background: '#F4ECEC', color: '#1974FB'}} fz="lg" rightIcon={<BsArrowRight style={{marginLeft: 10}}/>}>Ask for our web development service</Button>
            </div>
          </div>

          <div className="absolute bottom-0 w-full">
            <GradientBg />
          </div>
        </section>
        <section className={`pt-20 px-[50px] min-h-[200px] container mx-auto `}>
            <div className="text-center">
                <p className="font-[14px]">Web development services help create all types of web-based software and ensure great <br /> experience for web users. Here at Infinanze, we professionally design, redesign and continuously <br /> support customer-facing and enterprise web apps to achieve high conversion and adoption rates</p>
            </div>
        </section>
       
    
        
   

        
        <section className="min-h-[600px] mx-auto px-[180px] relative bg-[url('/assets/svg/banner.svg')] bg-no-repeat bg-cover bg-center flex items-center">
          <ExpertSection />
        </section>
       
      </main>
      <Footer />
    </>
  );
};

export default WebDevelopment;