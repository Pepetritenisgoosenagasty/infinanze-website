/* eslint-disable @next/next/no-img-element */
import PageTitle from "@/components/PageTitle";
import { Carousel } from "@mantine/carousel";
import {
  Button,
  Image,
  List,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { Raleway } from "@next/font/google";
import { assetIndex } from "public/assets";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import { AvatarComponent } from "@/components/AvatarComponent";
import Header from "@/components/Header";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import Ladder from "@/components/Svg/Ladder";
import { BsArrowDownRight, BsArrowRightCircle, BsArrowUpLeft } from "react-icons/bs";
import ServicesSection from "@/components/ServicesSection";
import { solutions } from "@/data/Solutions";
import { Reviews } from "@/components/Reviews";
import { FiPhoneMissed } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { expertises } from "@/data/expertise";
import { AccordionContent } from "@/components/AccordionContent";
import Footer from "@/components/Footer";
import TechnologiesTab from "@/components/TechnologiesTab";
import ExpertsCard from "@/components/ExpertsCard";
import GradientBg from "@/components/Svg/GradientBg";
import ExpertSection from "@/components/ExpertSection";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const images = [
    {
      id: 1,
      url: assetIndex.Image.banner1,
      text: "Develop Powerful",
      text2: "Software For Your Users",
      description:
        "Get your project estimations for well-informed business decisions and top-notch digital outcomes",
    },
    {
      id: 2,
      url: assetIndex.Image.banner2,
      text: "Enterprise Software",
      text2: "Development",
      description:
        "We are a global software development company that delivers cutting edge solutions for global organizations and technology startups",
    },
    // {
    //   id: 3,
    //   url: assetIndex.Image.banner3,
    //   text: "About Infinanze Technologies",
    //   description:
    //     "Get your project estimations for well-informed business decisions and top-notch digital outcomes",
    // },
  ];

  const slides = images.map(({ url, text, text2, description, id }) => (
    <Carousel.Slide key={id}>
      <Image
        className="carousel-img "
        sx={{ height: "900px !important" }}
        src={url}
        alt=""
      />
      <div className="absolute top-[40%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-40 text-center">
        <h1 className="text-[#fff] text-[60px] font-bold ">{text}</h1>
        <h1 className="text-[#fff] text-[60px] font-bold -mt-4">{text2}</h1>
        <h5 className="text-[#fff] text-[22px] font-medium px-10 mt-4">
          {description}
        </h5>
      </div>
    </Carousel.Slide>
  ));



  return (
    <>
      <PageTitle title="Infinanze | Home" />
      <main className={`min-h-full ${raleway.className}`}>
        <section className="w-full max-h-[900px] relative home">
          <Header />
          <Carousel
            sx={{ width: "100%", height: 900 }}
            mx="auto"
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            nextControlIcon={<FaChevronRight size={30} />}
            previousControlIcon={<FaChevronLeft size={30} />}
          >
            {slides}
          </Carousel>
          <div className="absolute top-[70%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
            <AvatarComponent />
          </div>
          {/* <div className="absolute bottom-0 top-0 left-0 right-0 h-full w-screen bg-[#03123680]"></div> */}
          <div className="absolute -bottom-10 w-full">
            <GradientBg />
          </div>
        </section>
        <section
          className={`py-20 px-[50px] container mx-auto flex flex-col items-center justify-center ${raleway.className}`}
        >
          <div>
            <h1 className="text-[#000] text-[38px] font-bold text-center">
              Who We are
            </h1>
          </div>
          <div className="w-[1000px] text-center py-4">
            <p className="font-medium text-[16px] text-[#514F4F]">
              We are a software development company that provides software
              engineering solutions, helping Fortune 500 companies and
              enterprise clients untangle complex issues that always emerge
              during their digital evolution journey.{" "}
            </p>
          </div>
          <div className="my-6">
            <h5 className="text-[#000] text-[22px] font-bold text-center">
              Explore Our Services
            </h5>
          </div>
          <div className="w-full  mxcontainer">
            <WhoWeAreSection />
          </div>
        </section>
        <section className="container mx-auto  flex flex-col items-center justify-center min-h-[600px]">
          <div>
            <h1 className="text-[#000] text-[28px] font-bold text-center">
              Every Part of Your IT Solution are Taken Care Of
            </h1>
          </div>
          <div>
            <p className="font-medium text-[16px] text-[#514F4F] text-center">
              Comprehensive care of your cloud or on-premises <br />{" "}
              infrastructure and applications:
            </p>
          </div>
          <div className="my-12">
            <div className="flex items-center">
              <div>
                <Ladder />
                <div className="pt-24 ml-24 text-[#1974FB] flex items-center cursor-pointer">
                  <h5 className="text-[#1974FB] font-bold text-[16px] mr-2">
                    Find out more
                  </h5>
                  <BsArrowRightCircle />
                </div>
              </div>
              <div>
                <Image
                  className=""
                  // sx={{ height: "900px !important" }}
                  src={assetIndex.SVG.group}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="container min-h-[600px] mx-auto  flex flex-col text-center">
          <div>
            <h1 className="text-[#000] text-[28px] font-bold text-center">
              Improve and Innovate with the Tech Trends
            </h1>
          </div>
          <div>
            <p className="font-medium text-[16px] text-[#514F4F] text-center">
              Our expert are always ready to transform your business with the
              latest tech <br /> capabilities so as to stand a chance in the IT
              industry
            </p>
          </div>
          <div>
            <ServicesSection />
          </div>
        </section>
        <section className="container min-h-[600px] px-[100px] mx-auto  flex flex-col text-center my-10">
          <div>
            <h1 className="text-[#000] text-[28px] font-bold text-center">
              Solutions We Deliver
            </h1>
          </div>
          <div>
            <p className="font-medium text-[16px] text-[#514F4F] text-center">
              Because we are software company, we build the following B2B,B2C{" "}
              <br /> interaction and internal operation.
            </p>
          </div>
          <div className="rounded-lg min-h-[500px] service-card my-8 border-t-2 border-[#4059EC] p-20">
            <SimpleGrid cols={3} spacing="xl" verticalSpacing="xl">
              {solutions.map((solution, i) => (
                <>
                  <div className="bg-[url('/assets/images/solution.png')] bg-no-repeat bg-cover bg-center w-full h-[90px] rounded-[8px] text-white font-[700] text-[20px] flex items-center justify-center break-words px-10">
                    {solution.name}
                  </div>
                </>
              ))}
            </SimpleGrid>
          </div>
        </section>
        <section className="container min-h-[600px] mx-auto px-[100px]  flex flex-col text-center my-16">
          <div>
            <h1 className="text-[#000] text-[28px] font-bold text-center">
              Technologies and platform we work with
            </h1>
          </div>
          <TechnologiesTab />
        </section>
        <section className="min-h-[340px] mx-auto px-[100px] flex flex-col text-center pt-16 bg-[#F5F5F5]">
          <div className="px-20">
            <div>
              <h1 className="text-[#000] text-[28px] font-bold text-center">
                Some Sighted Reviews from our Clients
              </h1>
            </div>
            <div>
              <p className="font-medium text-[16px] text-[#514F4F] text-center">
                What our customers say about us matters a lot to us
              </p>
            </div>
            <div className="my-10 ">
              <Reviews />
            </div>
          </div>
        </section>
        <section className="min-h-[600px] mx-auto px-[180px] relative bg-[url('/assets/svg/banner.svg')] bg-no-repeat bg-cover bg-center flex items-center">
         <ExpertSection />
        </section>
        <section className="min-h-[950px] mx-auto px-[180px] bg-[#F5F5F5] relative pt-20">
        <div>
              <h1 className="text-[#000] text-[28px] font-bold text-center">
              Our Expertise
              </h1>
            </div>
            <div>
              <p className="font-medium text-[16px] text-[#514F4F] text-center">
              We have excelled in different branches of sofware development and other necessary skills that helps us provide <br /> our users with the best solutions and user experience.
              </p>
            </div>
            <div className=" my-16">
            <SimpleGrid cols={4} spacing="xl" verticalSpacing="xl">
              {expertises.map((solution, i) => (
                <>
                  <ExpertsCard name={solution.name} />
                </>
              ))}
            </SimpleGrid>
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
}
