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

const MobileDevelopment = () => {
  return (
    <>
      <PageTitle title="Infinanze | Mobile App Development" />
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
            Mobile App Development
            </h1>
            <h5 className="text-[#fff] text-[22px] font-medium mt-4">
            We help global brands design and build superior digital products, enabling seamless user experiences across all modern platforms and devices
            </h5>
            <div className="mt-16 nav-btn w-full">
            <AvatarComponent />
            </div>
          </div>

          <div className="absolute bottom-0 w-full">
            <GradientBg />
          </div>
        </section>
        <section className={`pt-20 px-[50px] min-h-[200px] container mx-auto `}>
            <div className="text-center">
                <p className="font-[14px]">We offer a full cycle of application design, integration and management services. Whether it is a <br /> consumer oriented app or a transformative enterprise-class solution, the company leads <br /> the entire mobile app development process from ideation and concept to delivery, and to ongoing <br /> ongoing support</p>
            </div>
        </section>
        <section className={` px-[50px] min-h-[600px] container mx-auto `}>
          {/* <div  className="flex items-center justify-center space-x-8">
            <div>
              <Software />
            </div>
            <div>
            <h1 className="text-[30px] font-bold mb-4 text-[#121212B2]" >What to expect</h1>
                 <List spacing="sm" size="sm" center>
                <List.Item
                  icon={
                    <ThemeIcon bg="#fff" c="#0E7CFF">
                      <GoPrimitiveDot size={20} />
                    </ThemeIcon>
                  }
                  fz="md"
                  fw="medium"
                  c="#666666"
                >
                  Designing and installing IT systems.
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon bg="#fff" c="#0E7CFF">
                      <GoPrimitiveDot size={20} />
                    </ThemeIcon>
                  }
                  fz="md"
                  fw="medium"
                  c="#666666"
                >
                  Analyzing company&apos;s IT system and infrastructure.
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon bg="#fff" c="#0E7CFF">
                      <GoPrimitiveDot size={20} />
                    </ThemeIcon>
                  }
                  fz="md"
                  fw="medium"
                  c="#666666"
                >
                  Writing reports and documentation.
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon bg="#fff" c="#0E7CFF">
                      <GoPrimitiveDot size={20} />
                    </ThemeIcon>
                  }
                  fz="md"
                  fw="medium"
                  c="#666666"
                >
                  Training users and consulting staff.
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon bg="#fff" c="#0E7CFF">
                      <GoPrimitiveDot size={20} />
                    </ThemeIcon>
                  }
                  fz="md"
                  fw="medium"
                  c="#666666"
                >
                  Compiling and presenting information.
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon bg="#fff" c="#0E7CFF">
                      <GoPrimitiveDot size={20} />
                    </ThemeIcon>
                  }
                  fz="md"
                  fw="medium"
                  c="#666666"
                >
                  Planning a timeline for completion of projects.
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon bg="#fff" c="#0E7CFF">
                      <GoPrimitiveDot size={20} />
                    </ThemeIcon>
                  }
                  fz="md"
                  fw="medium"
                  c="#666666"
                >
                 Monitoring the success of IT solutions.
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon bg="#fff" c="#0E7CFF">
                      <GoPrimitiveDot size={20} />
                    </ThemeIcon>
                  }
                  fz="md"
                  fw="medium"
                  c="#666666"
                >
                 Providing advice on technology best practices.
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon bg="#fff" c="#0E7CFF">
                      <GoPrimitiveDot size={20} />
                    </ThemeIcon>
                  }
                  fz="md"
                  fw="medium"
                  c="#666666"
                >
                  Analyzing and determining security threats.
                </List.Item>
              </List>
                
            </div>
          </div> */}
        </section>
        <section className={` py-[50px] min-h-[700px] relative`}>
          <div className="absolute -top-[10px] left-0 z-10">
            <Image className="z-10" src={assetIndex.Image.pattern} alt="" width={450} height={500}/>
          </div>
          <div>
            <h1 className="text-[#000] text-[30px] font-bold text-center">
            Mobile Application Development Services For <br /> various Platforms
            </h1>
            <p className="my-4 text-center">Our mobile app developers have over a decade-long expertise in building <br /> solutions that meet market needs, empower companies’ brand identity, and <br /> encourage business growth and expansion</p>
          </div>
          <div className="min-h-[600px] mx-auto px-[180px] z-10 my-10  py-20 relative bg-no-repeat bg-cover bg-center process">
          
        </div>
        
        </section>
        
        <section className={`px-[50px] py-[50px] min-h-[700px] container mx-auto relative`}>
        <div className="absolute -top-[100px] right-0">
            <Image src={assetIndex.Image.pattern2} alt="" width={300} height={500}/>
          </div>
          <div>
            <h1 className="text-[#000] text-[30px] font-bold text-center">
            Our Expertise With major Mobile App <br /> Development Technologies
            </h1>
            <p className="my-4 text-center">Delight your users with expressive and feature-rich native iOS / Android, cross-platform or <br /> Progressive Web Apps leveraging our extensive experience of working with all major <br /> technologies</p>
          </div>
          <div className="px-10 my-20">
            <ApproachContent />   
          </div>
          <div className="absolute top-[50%] left-0">
            <Image src={assetIndex.Image.pattern3} alt="" width={300} height={500}/>
          </div>
        </section>

        <section className={`px-[50px] pb-[50px] min-h-[700px] container mx-auto relative`}>
        <div>
            <h1 className="text-[#000] text-[30px] font-bold text-center">
            EMERGING TECH TO DRIVE MORE VALUE <br /> ALONG YOUR DIGITAL JOURNEY
            </h1>
            <p className="my-4 text-center">We always keeps track of emerging technologies to deliver forward-thinking solutions. From the highest <br /> level of security with blockchain to reliable automation with AI/ML — use every benefit for your solution</p>
          </div>
          <div className="max-w-[1000px] m-auto py-12">
            <TechContent />
          </div>
        </section>
        <section className="min-h-[600px] mx-auto px-[180px] relative bg-[url('/assets/svg/banner.svg')] bg-no-repeat bg-cover bg-center flex items-center">
          <ExpertSection />
        </section>
        <section className="min-h-[600px] mx-auto px-[180px] relative bg-[#F5F5F5] py-10">
        <div>
              <h1 className="text-[#000] text-[28px] font-bold text-center">
              Our Frequently asked Questions
              </h1>
            </div>
            
            <div className=" my-12">
            <AccordionContent />
          </div>
        </section> 
      </main>
      <Footer />
    </>
  );
};

export default MobileDevelopment;