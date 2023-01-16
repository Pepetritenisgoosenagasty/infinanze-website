import PageTitle from "@/components/PageTitle";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { Raleway } from "@next/font/google";
import { assetIndex } from "public/assets";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import { AvatarComponent } from "@/components/AvatarComponent";
import Header from "@/components/Header";
import WhoWeAreSection from "@/components/WhoWeAreSection";

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
      <Image className="carousel-img " sx={{height: "1000px !important"}} src={url} alt="" />
      <div className="absolute top-[40%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-40 text-center">
        <h1 className="text-[#fff] text-[60px] font-bold ">{text}</h1>
        <h1 className="text-[#fff] text-[60px] font-bold -mt-4">{text2}</h1>
        <h5 className="text-[#fff] text-[22px] font-medium px-10 mt-4">{description}</h5>
      </div>
    </Carousel.Slide>
  ));

  return (
    <>
      <PageTitle title="Infinanze | Home" />
      <main className={`min-h-full ${raleway.className}`}>
        <section className="w-full max-h-[1000px] relative">
          <Header />
          <Carousel
            sx={{ width: "100%", height: 1000 }}
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
          <div className="absolute -bottom-12 w-full">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#fff"
                fill-opacity="1"
                d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,74.7C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg> */}
            <svg className="w-full" viewBox="0 0 1512 158" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M943.123 97.6643C1112.3 65.7424 1289.69 32.272 1512 50.5V65C1511 64.9443 1510 64.8894 1509 64.8354V64C1286.69 45.772 1109.3 79.2424 940.123 111.164C659.855 164.047 402.114 212.679 0 14.9783V0C403.834 199.42 662.159 150.678 943.123 97.6643Z" fill="white"/>
</svg>
<svg className="w-full -mt-[160px]" viewBox="0 0 1512 178" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V42.2016C403.834 228.915 662.159 183.279 943.123 133.643C1112.3 103.755 1289.69 72.4172 1512 89.4839V50.5C1289.69 32.2719 1112.3 65.7425 943.123 97.6644C662.159 150.678 403.834 199.42 0 0Z" fill="url(#paint0_linear_1139_233)"/>
<defs>
<linearGradient id="paint0_linear_1139_233" x1="631.744" y1="-75.9725" x2="632.289" y2="214.982" gradientUnits="userSpaceOnUse">
<stop offset="0.240716" stop-color="#0E7CFF"/>
<stop offset="0.425446" stop-color="#4059EC"/>
<stop offset="0.894675" stop-color="#9320CC"/>
</linearGradient>
</defs>
</svg>
          </div>
        </section>
        {/* <section className="-mt-[130px]">
          <Image src={assetIndex.Image.curve} alt="" />
         
        </section> */}
        <section className="py-10 mt-[182px] container mx-auto flex flex-col items-center justify-center">
            <div>
            <h1 className="text-[#000] text-[40px] font-bold text-center">Who We are</h1>
            </div>
            <div className="w-[1000px] text-center py-4">
            <p className="font-medium text-[16px] text-[#514F4F]">We are a software development company that provides software engineering solutions, helping Fortune 500 companies and enterprise clients untangle complex issues that always emerge during their digital evolution journey. </p>
            </div>
            <div className="mt-6">
            <h5 className="text-[#000] text-[25px] font-bold text-center">Explore Our Services</h5>
            </div>
            <div className="w-full mt-8">
              <WhoWeAreSection />
            </div>
        </section>
      </main>
    </>
  );
}
