import CustomCard from "@/components/CustomCard";
import ExpertSection from "@/components/ExpertSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import GradientBg from "@/components/Svg/GradientBg";
import TechContent from "@/components/TechContent";
import { solutions2 } from "@/data/Solutions";
import { developers, fullScaleData, pricing } from "@/data/tech";
import { Button, List, SimpleGrid, ThemeIcon } from "@mantine/core";
import { Raleway } from "@next/font/google";
import Image from "next/image";
import { assetIndex } from "public/assets";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const raleway = Raleway({ subsets: ["latin"] });

const WebDevelopment = () => {
  return (
    <>
      <PageTitle title="Infinanze | Web Development" />
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
          <div className="absolute top-[50%] md:top-[45%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-20 text-center w-full md:w-[700px] px-6 md:px-6">
            <h1 className="text-[#fff] text-[60px] font-bold leading-tight">
              Web Development
            </h1>
            <h5 className="text-[#fff] text-[22px] font-medium mt-4">
              We help global brands design and build superior website, enabling 
              seamless user experiences across all modern platforms and devices
            </h5>
            <div className="mt-16 nav-btn w-full hidden md:block">
              <Button
                px={4}
                py={8}
                sx={{
                  width: "400px !important",
                  height: 50,
                  background: "#F4ECEC",
                  color: "#1974FB",
                }}
                fz="lg"
                rightIcon={<BsArrowRight style={{ marginLeft: 10 }} />}
              >
                Ask for our web development service
              </Button>
            </div>
          </div>

          <div className="absolute bottom-0 w-full">
            <GradientBg />
          </div>
        </section>
        <section className={`pt-20 px-[50px] min-h-[200px] container mx-auto `}>
          <div className="text-center w-full">
            <p className="text-[14px] hidden lg:block">
              Web development services help create all types of web-based
              software and ensure great <br /> experience for web users. Here at
              Infinanze, we professionally design, redesign and continuously{" "}
              <br /> support customer-facing and enterprise web apps to achieve
              high conversion and adoption rates
            </p>
            <p className="text-[14px] block lg:hidden">
              Web development services help create all types of web-based
              software and ensure great experience for web users. Here at
              Infinanze, we professionally design, redesign and continuously{" "}
               support customer-facing and enterprise web apps to achieve
              high conversion and adoption rates
            </p>
          </div>
        </section>
        <section className={` px-[50px] min-h-[500px] container mx-auto mt-10`}>
          <div>
            <h1 className="text-[#000] text-[25px] md:text-[30px] font-bold text-center">
              Web Solution We Create
            </h1>
            <div className="max-w-[1170px] m-auto mt-10">
              <SimpleGrid cols={3}  breakpoints={[
        { maxWidth: 980, cols: 2, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]} spacing="xl">
                {solutions2?.map((item, i) => (
                  <div key={i}>
                    <CustomCard data={item} />
                  </div>
                ))}
              </SimpleGrid>
            </div>
          </div>
        </section>

        <section className={`py-[50px] min-h-[780px] relative`}>
          <div className="absolute top-[80px] left-0 z-10">
            <Image
              className="z-10"
              src={assetIndex.Image.pattern}
              alt=""
              width={450}
              height={500}
            />
          </div>
          <div>
            <h1 className="text-[#000] text-[25px] md:text-[30px] px-6 md:px-0 font-bold text-center">
              Full-Scale Web Development by Infinanze
            </h1>
          </div>
          <div className="max-w-[1170px] m-auto mt-10 px-6 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8">
              {fullScaleData?.map((item, i) => (
                <div
                  key={i}
                  className="service-card px-4 py-6 relative bg-white z-20"
                >
                  {item.icon}
                  <div className="px-4">
                    <h1 className="text-[#000] text-[18px] font-bold text-left">
                      {item?.title}
                    </h1>
                    <p className="my-4 text-left text-sm">
                      {item?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`px-[50px] py-[50px] min-h-[100px] container mx-auto relative`}
        >
          <div className="absolute -top-[100px] right-0">
            <Image
              src={assetIndex.Image.pattern2}
              alt=""
              width={300}
              height={500}
            />
          </div>
          <div>
            <h1 className="text-[#000] text-[25px] md:text-[30px] font-bold text-center hidden lg:block">
              Partner With Infinanze For Your <br /> Web Development project
            </h1>
            <h1 className="text-[#000] text-[25px] md:text-[30px] font-bold text-center block lg:hidden">
              Partner With Infinanze For Your Web Development project
            </h1>
            <p className="my-4 text-center hidden lg:block">
              We can staff a full team for a custom web development project with
              our 100+ people on board, <br /> or we can provide experts with
              the knowledge and abilities your current personnel lack. <br />{" "}
              The group roles we discuss
            </p>
            <p className="my-4 text-center block lg:hidden">
              We can staff a full team for a custom web development project with
              our 100+ people on board, or we can provide experts with
              the knowledge and abilities your current personnel lack.
              The group roles we discuss
            </p>
          </div>
          <div className="my-20 max-w-[1170px] m-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4">
              {developers?.map((item, i) => (
                <div
                  key={i}
                  className="service-card px-4 py-6 bg-white w-[150px] h-[150px] rounded-full text-center flex items-center justify-center text-md font-[600] text-[#1974FB] hover:bg-[#1974FB] hover:text-white"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`px-[50px] pb-[50px] min-h-[400px] container mx-auto relative`}
        >
          <div className="absolute -top-[100px] right-0">
            <Image
              src={assetIndex.Image.pattern2}
              alt=""
              width={300}
              height={500}
            />
          </div>
          <div>
            <h1 className="text-[#000] text-[25px] md:text-[30px] font-bold text-center ">
              Our Pricing Method
            </h1>
          </div>
          <div className="my-20 max-w-[1170px] m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
              {pricing?.map((item, i) => (
                <div
                  key={i}
                  className="service-card px-4 py-6 bg-white border-l-4 border-[#1974FB]"
                >
                  <h1 className="text-[#000] text-[18px] font-bold text-center py-4">
                    {item?.title}
                  </h1>
                  <p className="my-4 text-left text-sm px-6">
                    {item?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className=" min-h-full px-10 py-10 md:min-h-[600px] mx-auto md:px-[180px] relative bg-[url('/assets/svg/banner.svg')] bg-no-repeat bg-cover bg-center flex items-center">
          <ExpertSection />
        </section>
        <section
          className={`px-[50px] py-[70px] min-h-[700px] container mx-auto relative`}
        >
          <div>
            <h1 className="text-[#000] text-[25px] md:text-[30px] font-bold text-center capital">
              Emerging Tech To Drive More Value <br /> Along Your Digital
              Journey
            </h1>
            <p className="my-4 text-center hidden lg:block">
              We always keeps track of emerging technologies to deliver
              forward-thinking solutions. From the highest <br /> level of
              security with blockchain to reliable automation with AI/ML — use
              every benefit for your solution
            </p>
            <p className="my-4 text-center block lg:hidden">
              We always keeps track of emerging technologies to deliver
              forward-thinking solutions. From the highest level of
              security with blockchain to reliable automation with AI/ML — use
              every benefit for your solution
            </p>
          </div>
          <div className="max-w-[1000px] m-auto py-12">
            <TechContent />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WebDevelopment;
