import { EmailInput } from "@/components/EmailInput";
import ExpertSection from "@/components/ExpertSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import Dot from "@/components/Svg/Dot";
import GradientBg from "@/components/Svg/GradientBg";
import { choices } from "@/data/choices";
import { Avatar, SimpleGrid } from "@mantine/core";
import Image from "next/image";

import { assetIndex } from "public/assets";
import { Raleway } from '@next/font/google';
import React from "react";
import { AccordionContent } from "@/components/AccordionContent";
import ContactForm from "@/components/Forms/ContactForm";

const raleway = Raleway({ subsets: ["latin"] });

const Contact = () => {
  return (
    <>
      <PageTitle title="Infinanze | Contact" />
      <main className={`min-h-full z-10 ${raleway.className}`}>
        <section className="w-full max-h-[900px] relative">
          <Header />
          <Image
            className="w-screen h-[900px] bg-cover bg-center"
            width={900}
            height={900}
            src={assetIndex.Image.banner1}
            alt="banner"
          />
          <div className="absolute top-[70%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-20 text-center">
          <div className="choice-card  min-w-[800px] min-h-[600px] rounded-lg flex overflow-hidden relative">
          <div className="w-1/3 contact-left text-white flex">
           <div className="m-auto p-8 text-left">
           <h1 className="text-[33px] font-[700] leading-tight">Grow your business with us</h1>
            <p className="text-14px mt-6">Get your project estimations for well-informed business decisions and top-notch digital outcomes</p>
           </div>
          </div>
  <div className="w-2/3 p-6 text-left h-full ">
  <h5 className="text-[#1974FB] text-lg font-bold">Talk to our expert</h5>
  <ContactForm />
  </div>
          </div>
          </div>
          <div className="absolute bottom-0 w-full">
            <GradientBg />
          </div>
        </section>
      

        <section className="min-h-[200px] mx-auto px-[180px] py-12 mt-16 text-center">
        <div>
            <h1 className="text-[#000] text-[38px] font-bold text-center">
              Who We are
            </h1>
          </div>
          <div className=" text-center py-4">
            <p className="font-medium text-[16px] text-[#514F4F]">
            We are a software development company that provides software engineering <br /> solutions, helping Fortune 500 companies and enterprise clients untangle complex <br /> issues that always emerge during their digital evolution journey. 
            </p>
          </div>
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

export default Contact;

