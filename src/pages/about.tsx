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
import { useMediaQuery } from "@mantine/hooks";

const raleway = Raleway({ subsets: ["latin"] });

const About = () => {
  const largeScreen = useMediaQuery('(min-width: 900px)');
  return (
    <>
      <PageTitle title="Infinanze | About" />
      <main className={`min-h-full z-10 ${raleway.className}`}>
        <section className="w-full max-h-[900px] relative hero-section">
          <Header />
          <Image
            className="w-screen h-[900px] bg-cover bg-center banner"
            width={900}
            height={900}
            src={assetIndex.Image.banner3}
            alt="banner"
          />
          <div className="absolute top-[45%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-20 text-center w-full">
            <h1 className="text-[#fff] text-[60px] font-bold leading-tight">
              About Infinanze Technologies
            </h1>
            <h5 className="text-[#fff] text-[22px] font-medium mt-4 text-section">
              We are a global software development company that delivers cutting
              edge <br /> solutions for global organizations and technology
              startups
            </h5>
          </div>
          <div className="absolute bottom-0 w-full svg-area">
            <GradientBg />
          </div>
        </section>
        <section className={`py-20 px-[50px] min-h-[600px] container mx-auto `}>
          <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl" breakpoints={[
        { maxWidth: 980, cols: 2, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}>
            <div>
              <Image
                src={assetIndex.Image.aboutUser}
                width={500}
                height={500}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-[#121212B2] text-[25px] md:text-[36px] text-center md:text-left font-[600] leading-tight text-left">
                We create world-class software applications
              </h1>
              <p className="font-medium text-[16px] text-center md:text-justify text-[#514F4F] mt-6">
                Here at infinanze Technology, we are passionate about
                technology. Our clients come to us seeking customized,
                skillfully crafted business softwares. Our longevity is due to
                the skill and efficiency of our team of senior software
                engineers, project managers, and devops staff
              </p>
              <p className="font-medium text-[16px] text-[#514F4F] text-center md:text-justify my-4">
                We specialize in enterprise business applications that optimize
                business processes and handle large amounts of data and traffic.
                We only produce modern software with a focus on quality,
                usability, and scalability.
              </p>
              <p className="font-medium text-[16px] text-[#514F4F] text-center md:text-justify">
                All of our engineers are onshore salaried staff. We do not
                believe in mitigating cost at the risk of quality.
              </p>
            </div>
          </SimpleGrid>
        </section>
        <section className={`px-[50px] min-h-[700px] container mx-auto`}>
          <div>
            <h1 className="text-[#000] text-[25px] md:text-[38px] font-bold text-center">
              Why Choose us
            </h1>
          </div>
          <div className="my-10">
            <SimpleGrid cols={3} spacing="xl" verticalSpacing="xl" breakpoints={[
        { maxWidth: 980, cols: 2, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}>
              {choices.map((solution, i) => (
                <>
                  <div className="p-10 choice-card">
                    <Image src={solution.icon} alt="" width={50} height={50} />
                    <h5 className="my-4 text-[20px] font-[600]">
                      {solution.title}
                    </h5>
                    <p className="text-md">{solution.description}</p>
                  </div>
                </>
              ))}
            </SimpleGrid>
          </div>
        </section>
        <section className={`px-[50px] min-h-[760px] container mx-auto`}>
          <SimpleGrid
            cols={2}
            spacing="xl"
            verticalSpacing="xl"
            sx={{ alignItems: "center" }}
            breakpoints={[
              { maxWidth: 980, cols: 2, spacing: 'md' },
              { maxWidth: 755, cols: 2, spacing: 'sm' },
              { maxWidth: 600, cols: 1, spacing: 'sm' },
            ]}
          >
            <div>
              <Image
                className="bg-cover bg-center"
                width={600}
                height={600}
                src={assetIndex.Image.value}
                alt="banner"
              />
            </div>
            <div className="my-12">
              <h5 className="my-4 text-[25px] md:text-[38px] font-[600]">Our Core Values</h5>
              <div>
                <div className="flex items-center">
                  <Dot />
                  <h5 className="ml-4 text-[18px] md:text-[25px] text-[#1974FB] font-bold">
                    Result Driven
                  </h5>
                </div>
                <p className="mt-4 text-[16px]">
                  We create an actionable strategy with specific deliverables to
                  ensure our client success. It’s imperative to work with a
                  software consultant who truly delivers measurable results
                </p>
              </div>
              <div className="my-8">
                <div className="flex items-center">
                  <Dot />
                  <h5 className="ml-4 text-[18px] md:text-[25px] text-[#1974FB] font-bold">
                    Client Sucess
                  </h5>
                </div>
                <p className="mt-4 text-[16px]">
                  here at Infinanze, we take time to get to know our clients,
                  their company, and how we can turn their problem into a
                  solution
                </p>
              </div>
              <div>
                <div className="flex items-center">
                  <Dot />
                  <h5 className="ml-4 text-[18px] md:text-[25px] text-[#1974FB] font-bold">
                    Innovation
                  </h5>
                </div>
                <p className="mt-4 text-[16px]">
                  We don’t come up with standard solutions. Our clients work
                  with us to find creative, original ideas that can be
                  successfully
                </p>
              </div>
            </div>
          </SimpleGrid>
        </section>
        <section className={` mx-auto  relative bg-[url('/assets/svg/banner.svg')] bg-no-repeat bg-cover bg-center flex items-center ${largeScreen ? "min-h-[600px] px-[180px]" : "min-h-full px-10 py-10"}`}>
          <ExpertSection />
        </section>
        <section className={`min-h-[400px] mx-auto hidden  md:flex items-center justify-center ${largeScreen ? "px-[180px]" : "px-10"}`}>
         <div className="p-10 choice-card w-full">
         <div>
            <h1 className="text-[#666666] text-[29px] font-[600] text-center">
            Join Our Growing Community Today
            </h1>
          </div>
          <div className="about my-8 px-20">
            <EmailInput />
          </div>
         </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
