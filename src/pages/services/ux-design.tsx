import { AccordionContent } from "@/components/AccordionContent";
import { AvatarComponent } from "@/components/AvatarComponent";
import ExpertSection from "@/components/ExpertSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import GradientBg from "@/components/Svg/GradientBg";
import { UIdesign } from "@/components/Svg/UIdesign";
import { List, SimpleGrid, ThemeIcon } from "@mantine/core";
import { Raleway } from "@next/font/google";
import Image from "next/image";
import { assetIndex } from "public/assets";
import React from "react";
import {GoPrimitiveDot} from "react-icons/go"

const raleway = Raleway({ subsets: ["latin"] });

const UxDesign = () => {
  return (
    <>
      <PageTitle title="Infinanze | ui/ux Design" />
      <main className={`min-h-full z-10 ${raleway.className}`}>
        <section className="w-full max-h-[900px] relative hero-section">
          <Header />
          <Image
            className="w-screen h-[900px] bg-cover bg-center banner"
            width={900}
            height={900}
            src={assetIndex.Image.banner4}
            alt="banner"
          />
          <div className="absolute top-[40%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-20 text-center w-full">
            <h1 className="text-[#fff] text-[60px] font-bold leading-tight">
              UI/UX Design
            </h1>
            <h5 className="text-[#fff] text-[22px] font-medium mt-4 hidden md:block">
              Get your project estimations for well-informed business <br />{" "}
              decisions and top-notch digital outcomes
            </h5>
            <h5 className="text-[#fff] text-[22px] font-medium mt-4 block md:hidden px-4">
              Get your project estimations for well-informed business
              decisions and top-notch digital outcomes
            </h5>
          </div>
          <div className="absolute top-[68%] left-[50%] -translate-y-[50%] -translate-x-[50%] avatars">
            <AvatarComponent />
          </div>
          <div className="absolute bottom-0 w-full">
            <GradientBg />
          </div>
        </section>
        <section className={`py-20 px-10 md:px-[50px] min-h-[300px] container mx-auto `}>
            <div className="text-center">
                <p className="font-[14px] hidden md:block">We are a software development company that provides software engineering <br /> solutions, helping Fortune 500 companies and enterprise clients untangle complex <br /> issues that always emerge during their digital evolution journey. </p>
                <p className="font-[14px] block md:hidden">We are a software development company that provides software engineering solutions, helping Fortune 500 companies and enterprise clients untangle complex  issues that always emerge during their digital evolution journey. </p>
            </div>
        </section>
        <section className={` px-[50px] min-h-[600px] container mx-auto `}>
          <SimpleGrid  breakpoints={[
        { minWidth: 'sm', cols: 1 },
        { minWidth: 'md', cols: 1 },
        { minWidth: 1200, cols: 2 },
      ]} spacing="xl" verticalSpacing="xl">
            <div>
            <Image
                src={assetIndex.Image.ux}
                width={600}
                height={500}
                alt=""
              />
            </div>
            <div>
                <div className="min-w-[300px] min-h-[500px] ux-card px-12 py-8">
                 <h1 className="text-[20px] md:text-[30px] font-medium">UI/UX Design</h1>
                 <p className="py-2 text-[12px] md:font-[14px]">User experience and user interface design for all types of <br /> websites, SaaS, and web/mobile apps. We combine <br /> the latest UI/UX trends with our customers’ individual goals <br /> and needs to deliver intuitive, vibrant, and impactful designs that <br /> power up businesses </p>
                 <h1 className="text-[20px] md:text-[30px] font-medium mb-4">Benefits</h1>
                 <List spacing="sm" size="sm" center>
                <List.Item
                  icon={
                    <ThemeIcon bg="#fff" c="#0E7CFF">
                      <GoPrimitiveDot size={16} />
                    </ThemeIcon>
                  }
                >
                  These systems are highly stable and reliable
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon bg="#fff" c="#0E7CFF">
                      <GoPrimitiveDot size={16} />
                    </ThemeIcon>
                  }
                >
                  They are convenient for mass production
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon bg="#fff" c="#0E7CFF">
                      <GoPrimitiveDot size={16} />
                    </ThemeIcon>
                  }
                >
                  Perform Specific Task
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon bg="#fff" c="#0E7CFF">
                      <GoPrimitiveDot size={16} />
                    </ThemeIcon>
                  }
                >
                  It is built for User friendly 
                </List.Item>
              </List>
                </div>
            </div>
          </SimpleGrid>
        </section>
        <section className={`px-[50px] py-[50px] md:min-h-[700px] container mx-auto`}>
          <div>
            <h1 className="text-[#000] text-[25px] md:text-[30px] font-bold text-center">
            How we Deliver UI and UX Services
            </h1>

            <h5 className="text-sm font-medium text-center py-8">UX process</h5>
          </div>
          <div className="md:my-10 flex items-center justify-center ui">
            <UIdesign />
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
    </>
  );
};

export default UxDesign;

