/* eslint-disable @next/next/no-img-element */
import { AccordionContent } from "@/components/AccordionContent";
import AppLayout from "@/components/AppLayout";
import ApproachContent from "@/components/ApproachContent";
import { AvatarComponent } from "@/components/AvatarComponent";
import ExpertSection from "@/components/ExpertSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import GradientBg from "@/components/Svg/GradientBg";
import Learning from "@/components/Svg/Learning";
import Mobile from "@/components/Svg/Mobile";
import TechContent from "@/components/TechContent";
import { List, SimpleGrid, ThemeIcon } from "@mantine/core";
import { Raleway } from "@next/font/google";
import Image from "next/image";
import { assetIndex } from "public/assets";
import React from "react";
import {GoPrimitiveDot} from "react-icons/go"

const raleway = Raleway({ subsets: ["latin"] });

const MobileDevelopment = () => {
  return (
    <>
    <AppLayout>
      <PageTitle title="Infinanze | Mobile App Development" />
      <main className={`min-h-full z-10 ${raleway.className}`}>
        <section className="w-full max-h-[900px] relative  hero-section">
          <Header />
          <Image
            className="w-screen h-[900px] bg-cover bg-center banner"
            width={900}
            height={900}
            src={assetIndex.Image.banner4}
            alt="banner"
          />
          <div className="absolute top-[50%] md:top-[45%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-20 text-center w-full md:w-[700px] px-6">
            <h1 className="text-[#fff] text-[60px] font-bold leading-tight">
            Mobile App Development
            </h1>
            <h5 className="text-[#fff] text-[22px] font-medium mt-4">
            We help global brands design and build superior digital products, enabling seamless user experiences across all modern platforms and devices
            </h5>
            <div className=" mt-6 md:mt-16 nav-btn w-full avatars">
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
        <section className={` px-[50px] min-h-[600px] container mx-auto mt-10`}>
          <div  className="flex items-center flex-col lg:flex-row justify-between space-x-8 max-w-[1000px] m-auto">
            <div className="ui my-6 md:my-0">
              <Mobile />
            </div>
            <div>
            <h1 className="text-[25px] md:text-[30px] font-bold mb-4 text-[#121212B2]" >Benefits</h1>
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
                  Custom iOS and Android apps development
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
                  Native and cross-platform solutions
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
                  Second platform app development
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
                  UI/UX design
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
                  Consulting and prototyping
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
                  Automated QA and testing
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
                 Power management, notification and geofencing
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
                Embedded Android & AOSP customizations
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
                  Maintenance and post-warranty support
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
            <h1 className="text-[#000] text-[20px] md:text-[30px] font-bold text-center">
            Mobile Application Development Services For <br /> various Platforms
            </h1>
            <p className="my-4 text-center">Our mobile app developers have over a decade-long expertise in building <br /> solutions that meet market needs, empower companies’ brand identity, and <br /> encourage business growth and expansion</p>
          </div>
          <div className="min-h-[400px] bg-[#1974FB57] mx-auto px-6 md:px-[180px] z-10 mt-16 pt-16 pb-6 relative grid grid-cols-1 md:grid-cols-2 gap-4  process">
          <div>
            <SimpleGrid cols={2} breakpoints={[
        { maxWidth: 980, cols: 2, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]} spacing="lg">
               <div>
                <div className="-ml-[18px]">
                <Learning />
                </div>
                <h4 className="text-md font-bold">Native Mobile App <br /> Development</h4>
                <p className="text-sm mt-2 pr-10">Our mobile app developers can build high-quality native apps for both Android and iOS systems aligned with your business and security requirements</p>
               </div>
               <div>
                <div className="-ml-[18px]">
                <Learning />
                </div>
                <h4 className="text-md font-bold">Hybrid Mobile App <br /> Development</h4>
                <p className="text-sm mt-2 pr-10">Cross-platform apps that can work in different environments thanks to a unique blend of native and web app technologies</p>
               </div>
               <div>
                <div className="-ml-[18px]">
                <Learning />
                </div>
                <h4 className="text-md font-bold">Progressive Web App <br /> Development</h4>
                <p className="text-sm mt-2 pr-10">With Progressive Web Apps, we deliver native-like capabilities and installability while reaching anyone, anywhere, on any device with a single codebase.</p>
               </div>
               <div>
                <div className="-ml-[18px]">
                <Learning />
                </div>
                <h4 className="text-md font-bold">Wearables and <br /> Embedded Software</h4>
                <p className="text-sm mt-2 pr-10">We can create companion apps for a number of wearable devices, integrate with smart devices or proprietary peripheral</p>
               </div>
            </SimpleGrid>
          </div>
          <div>
          <img className="" src={assetIndex.Image.andriod} alt="" width="100%" height="100%"/>
          </div>
        </div>
        
        </section>
        
        <section className={`px-[50px] py-[30px] min-h-[700px] container mx-auto relative`}>
        <div className="absolute -top-[100px] right-0">
            <Image src={assetIndex.Image.pattern2} alt="" width={300} height={500}/>
          </div>
          <div>
            <h1 className="text-[#000] text-[30px] font-bold text-center ">
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

        <section className={`md:px-[50px] pb-[70px] min-h-[700px] container mx-auto relative w-full`}>
        <div>
            <h1 className="text-[#000] text-[20px] md:text-[30px] font-bold text-center capital">
            Emerging Tech To Drive More Value <br /> Along Your Digital Journey
            </h1>
            <p className="my-4 text-center">We always keeps track of emerging technologies to deliver forward-thinking solutions. From the highest <br /> level of security with blockchain to reliable automation with AI/ML — use every benefit for your solution</p>
          </div>
          <div className="max-w-[1000px] m-auto py-12">
            <TechContent />
          </div>
        </section>
        <section className=" min-h-full px-10 py-10 md:min-h-[600px] mx-auto md:px-[180px] relative bg-[url('/assets/svg/banner.svg')] bg-no-repeat bg-cover bg-center flex items-center">
          <ExpertSection />
        </section>
        <section className="min-h-[600px] mx-auto px-6 md:px-[180px] relative bg-[#F5F5F5] py-10">
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
      </AppLayout>
    </>
  );
};

export default MobileDevelopment;