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

const UxDesign = () => {
  return (
    <>
      <PageTitle title="Infinanze | ui/ux Design" />
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
            IT Consulting
            </h1>
            <h5 className="text-[#fff] text-[22px] font-medium mt-4">
            With our indepth Knowledge in IT consulting, we can help transform your organization to suit your business needs by developing and implementing an effective IT strategy.
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
                <p className="font-[14px]">We offer IT consulting services that will help you improve your software architecture, create a <br /> tech-driven digital strategy, and improve operations by optimising your software portfolio, <br /> assisting  in smooth digital transformation and system integration</p>
            </div>
        </section>
        <section className={` px-[50px] min-h-[600px] container mx-auto `}>
          <div  className="flex items-center justify-center space-x-8">
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
          </div>
        </section>
        <section className={` py-[50px] min-h-[700px] relative`}>
          <div className="absolute -top-[10px] left-0 z-10">
            <Image className="z-10" src={assetIndex.Image.pattern} alt="" width={450} height={500}/>
          </div>
          <div>
            <h1 className="text-[#000] text-[30px] font-bold text-center">
            OUR IT CONSULTING PROCESS
            </h1>
            <p className="my-4 text-center">We have experience helping organizations envision, strategize and build process models that integrate <br /> their business goals with their people and processes. We identify critical and key processes for <br /> optimization and integrate technology with the process models to help you realize your returns faster <br /> and more efficiently.</p>
          </div>
          <div className="min-h-[600px] mx-auto px-[180px] z-10 my-10 bg-[url('/assets/svg/banner.svg')] py-20 relative bg-no-repeat bg-cover bg-center process">
          <ProcessCarousel />
        </div>
        
        </section>
        
        <section className={`px-[50px] py-[50px] min-h-[700px] container mx-auto relative`}>
        <div className="absolute -top-[100px] right-0">
            <Image src={assetIndex.Image.pattern2} alt="" width={300} height={500}/>
          </div>
          <div>
            <h1 className="text-[#000] text-[30px] font-bold text-center">
            OUR APPROOACH TO IT STRATEGY CONSULTING. <br /> THE NEW TECHNOLOGY
            </h1>
            <p className="my-4 text-center">With expertise in both business and technology, our IT strategy consultants can facilitate <br /> development of an integrated IT strategy for the organization. We help companies improve <br /> their technological processes by identifying areas for improvement.</p>
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

export default UxDesign;