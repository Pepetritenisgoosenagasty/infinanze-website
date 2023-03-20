import { AccordionContent } from "@/components/AccordionContent";
import AppLayout from "@/components/AppLayout";
import { AvatarComponent } from "@/components/AvatarComponent";
import ConsultCarousel from "@/components/ConsultCarousel";
import ExpertSection from "@/components/ExpertSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import ProcessCarousel from "@/components/ProcessCarousel";
import GradientBg from "@/components/Svg/GradientBg";
import Pattern from "@/components/Svg/Pattern";
import Software from "@/components/Svg/software";
import { UIdesign } from "@/components/Svg/UIdesign";
import { Button, List, SimpleGrid, ThemeIcon } from "@mantine/core";
import { Raleway } from "@next/font/google";
import Image from "next/image";
import { assetIndex } from "public/assets";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

const raleway = Raleway({ subsets: ["latin"] });

const UxDesign = () => {
  return (
    <>
    <AppLayout>
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
          <div className="absolute top-[45%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-20 text-center ">
            <h1 className="text-[#fff] text-[20] md:text-[60px] font-bold leading-tight px-6 md:px-0">
              Software Development
            </h1>
            <h5 className="text-[#fff] text-[22px] font-medium mt-4 md:px-0">
              As a software company, we can provide dependable, scalable, and
              secure software solutions for any OS, browser, and device. To
              create unique products and solutions that properly suit the
              demands and behaviors of their users, we combine our extensive
              industry knowledge with the most recent IT innovations.
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
                rightIcon={<BsArrowRight style={{ marginLeft: 30 }} />}
              >
                Create a project with us today
              </Button>
            </div>
          </div>

          <div className="absolute bottom-0 w-full">
            <GradientBg />
          </div>
        </section>
        <section className={`pt-20 px-[50px] min-h-[200px] container mx-auto `}>
          <div className="text-center">
            <p className="font-[14px]">
              Utilize our extensive knowledge in consolidating app portfolios,
              modernizing outdated systems,
              <br /> and developing corporate software. By re-engineering
              solutions of various levels of complexity,
              <br /> we assist huge enterprises in becoming enduring successes
              on a worldwide scale.
            </p>
          </div>
        </section>
        <section className={` px-[50px] min-h-[600px] container mx-auto `}>
          <div className="flex items-center justify-center  flex-col md:flex-col lg:flex-row">
            <div className="hidden md:block ">
              <Software />
            </div>
            <div className="mt-20 md:mt-0">
              <h1 className="text-[30px] font-bold mb-4 text-[#121212B2]">
                What to expect
              </h1>
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
            <Image
              className="z-10"
              src={assetIndex.Image.pattern}
              alt=""
              width={450}
              height={500}
            />
          </div>
          <div>
            <h1 className="text-[#000] text-[30px] font-bold text-center">
              Our Consulting Process
            </h1>
            <p className="my-4 text-center hidden md:block">
              We have experience helping organizations envision, strategize and
              build process models that integrate <br /> their business goals
              with their people and processes. We identify critical and key
              processes for <br /> optimization and integrate technology with
              the process models to help you realize your returns faster <br />{" "}
              and more efficiently.
            </p>
            <p className="my-4 text-center block md:hidden px-6">
              We have experience helping organizations envision, strategize and
              build process models that integrate their business goals
              with their people and processes. We identify critical and key
              processes for optimization and integrate technology with
              the process models to help you realize your returns faster
              and more efficiently.
            </p>
          </div>
          <div className="min-h-[600px] mx-auto md:px-[180px] z-10 my-10 bg-[url('/assets/svg/banner.svg')] py-20 relative bg-no-repeat bg-cover bg-center process">
            <ProcessCarousel />
          </div>
        </section>

        <section
          className={`px-2 md:px-[50px] md:py-[50px] min-h-[700px] container mx-auto relative`}
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
            <h1 className="text-[#000] text-[30px] font-bold text-center">
              Our Approach to strategy Consulting the New <br /> Technology
            </h1>
            <p className="my-4 text-center">
              With expertise in both business and technology, our IT strategy
              consultants can facilitate <br /> development of an integrated IT
              strategy for the organization. We help companies improve <br />{" "}
              their technological processes by identifying areas for
              improvement.
            </p>
          </div>
          <div>
            <ConsultCarousel />
          </div>
          <div className="absolute -bottom-[100px] left-0">
            <Image
              src={assetIndex.Image.pattern3}
              alt=""
              width={300}
              height={500}
            />
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

export default UxDesign;
