import { Button, Grid, Image, List, Text, ThemeIcon } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { assetIndex } from "public/assets";
import React, { useEffect, useState } from "react";
import { BsChevronDown, BsLaptop, BsUiRadios, BsUiRadiosGrid } from "react-icons/bs";
import BlueLogo from "./Svg/BlueLogo";
import {TfiClose} from 'react-icons/tfi'
import { MdSettingsApplications } from "react-icons/md";
import { FaAmazon, FaDatabase, FaJava, FaLaptopCode, FaMicrosoft, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {SiAdobe, SiCplusplus, SiMicrosoftexcel} from "react-icons/si"
import { DiJavascript1 } from "react-icons/di"

const data = [
  {
    name: "HOME",
    hasArrow: false,
    path: '/',
    alias: "/",
  },
  {
    name: "SERVICES",
    hasArrow: true,
    alias: "/services",
  },
  {
    name: "ABOUT",
    hasArrow: false,
    path: "/about",
    alias: "/about",
  },
  {
    name: "TECHNOLOGIES",
    hasArrow: true,
    alias: "technologies",
  },
  // {
  //   name: "WHY US",
  //   hasArrow: false,
  // },
];

const Header = () => {
  
  const [show, setShow] = useState(false);

  const [nav, setNav] = useState(false);

  const [navContent, setNavContent] = useState<string>('')

  const router = useRouter()


  // Header Animation
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
        setNav(false)
        
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        console.log("Removed");
      });
    };
  }, []);


  const handleClick = (name: string) => {
    setNav(true)
    setShow(true)
    setNavContent(name)
  }

  return (
  <div className="fixed top-0 z-40 w-[100%] ">
      <div
      className={` h-[80px]   flex items-center justify-between px-[120px] ${
        show ? " bg-white text-[#000] border-b" : " bg-transparent text-[#fff]"
      }
      `}
    >
      <div>
        <Link href="/">
          {show ? (
            <BlueLogo />
          ) : (
            <Image src={assetIndex.Image.logo} alt="logo" width={150} />
          )}
        </Link>
      </div>
      <div>
        <ul className="flex items-center space-x-6 z-40">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <li
                className={`text-[14px] cursor-pointer font-bold py-2 ${
                  item.hasArrow && "flex items-center"
                } ${router.asPath === item.alias && 'text-[#1974FB] border-b-2 border-[#1974FB]'} `}
                onClick={item.path ? () => router.push(item.path) : () => handleClick(item.name)}
              >
                {item.name}{" "}
                {item.hasArrow && (
                  <a href="#" className="ml-2">
                    <BsChevronDown />
                  </a>
                )}
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
      <div className={`${show ? "contact" : "nav-btn"}`}>
        <Button onClick={() => router.push('/contact')}>Let`s Talk</Button>
      </div>
    </div>
    {nav && (
      <div className="min-h-[400px] bg-white z-40 px-[120px] relative border-b">
       <div className="absolute top-6 right-[130px] cursor-pointer" onClick={() => setNav(false)}>
        <TfiClose />
       </div>
       {navContent === 'SERVICES' && (
        <>
         <Grid columns={12}>
      
      <Grid.Col span={4}>
        <div className="py-8">
        <div style={{ width: 350}}>
      <Image
        radius="md"
        src={assetIndex.Image.laptop}
        alt="Random unsplash image"
        height="200px"
      />

      <p className="mt-6 text-sm">Our team can help to develop and implement an effective IT strategy, assist in smooth digital transformation and system integration. </p>
    </div>
        </div>
      </Grid.Col>
      <Grid.Col span={8} >
        <div className="py-8 ml-4">
        <h1 className="text-lg font-bold">SOFTWARE TOOLS</h1>

        <div className="mt-6">
              <List spacing="sm" size="sm" c="black" center>
                <List.Item
                sx={{cursor: "pointer"}}
                  icon={
                    <ThemeIcon bg="#fff" c="dark">
                      <MdSettingsApplications size={20} />
                    </ThemeIcon>
                  }
                >
                  Softwarre Development 
                </List.Item>
                <List.Item
                sx={{cursor: "pointer"}}
                  icon={
                    <ThemeIcon bg="#fff" c="dark">
                      <BsLaptop size={20} />
                    </ThemeIcon>
                  }
                >
                  IT Consulting
                </List.Item>
                <List.Item
                sx={{cursor: "pointer"}}
                  icon={
                    <ThemeIcon bg="#fff" c="dark">
                      <FaLaptopCode size={20} />
                    </ThemeIcon>
                  }
                >
                  Web Development
                </List.Item>
                <List.Item
                sx={{cursor: "pointer"}}
                  icon={
                    <ThemeIcon bg="#fff" c="dark">
                      <BsUiRadiosGrid size={20} />
                    </ThemeIcon>
                  }
                >
                  IOS Development
                </List.Item>
                <List.Item
                sx={{cursor: "pointer"}}
                  icon={
                    <ThemeIcon bg="#fff" c="dark">
                      <BsUiRadios size={20} />
                    </ThemeIcon>
                  }
                >
                  UI/UX Design
                </List.Item>
              </List>
            </div>
        </div>
      </Grid.Col>
    </Grid>
        </>
       )}
       {navContent === 'TECHNOLOGIES' && (
        <>
        <div className="py-12 px-[170px]">
        <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
       
      <Grid.Col span={4}>
      <h5 className="text-[16px] font-bold">PROGRAMMING</h5>

<div className="mt-6">
      <List spacing="sm" size="sm" c="black" center>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <FaJava size={20} />
            </ThemeIcon>
          }
        >
          Java
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <BsLaptop size={20} />
            </ThemeIcon>
          }
        >
         Python
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <SiCplusplus size={20} />
            </ThemeIcon>
          }
        >
         C++
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <FaNodeJs size={20} />
            </ThemeIcon>
          }
        >
         Node js 
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <DiJavascript1 size={20} />
            </ThemeIcon>
          }
        >
          javascript
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <FaReact size={20} />
            </ThemeIcon>
          }
        >
          React
        </List.Item>
      </List>
    </div>
      </Grid.Col>
      <Grid.Col span={4}>
      <h1 className="text-lg font-bold">SOFTWARE TOOLS</h1>

<div className="mt-6">
      <List spacing="sm" size="sm" c="black" center>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <MdSettingsApplications size={20} />
            </ThemeIcon>
          }
        >
          Softwarre Development 
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <BsLaptop size={20} />
            </ThemeIcon>
          }
        >
          IT Consulting
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <FaLaptopCode size={20} />
            </ThemeIcon>
          }
        >
          Web Development
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <BsUiRadiosGrid size={20} />
            </ThemeIcon>
          }
        >
          IOS Development
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <BsUiRadios size={20} />
            </ThemeIcon>
          }
        >
          UI/UX Design
        </List.Item>
      </List>
    </div>
      </Grid.Col>
      <Grid.Col span={4}>
      <h1 className="text-lg font-bold">PLATFORMS</h1>

<div className="mt-6">
      <List spacing="sm" size="sm" c="black" center>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <FaMicrosoft size={20} />
            </ThemeIcon>
          }
        >
         Azure
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <FaMicrosoft size={20} />
            </ThemeIcon>
          }
        >
          Microsoft
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <SiMicrosoftexcel size={20} />
            </ThemeIcon>
          }
        >
          Power Apps
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <FaDatabase size={20} />
            </ThemeIcon>
          }
        >
          Power BI 
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <FaAmazon size={20} />
            </ThemeIcon>
          }
        >
         Amazon web services
        </List.Item>
        <List.Item
        sx={{cursor: "pointer"}}
          icon={
            <ThemeIcon bg="#fff" c="dark">
              <SiAdobe size={20} />
            </ThemeIcon>
          }
        >
         Adobe Commerce
        </List.Item>
      </List>
    </div>
      </Grid.Col>
    </Grid>
        </div>
        </>
       )}
      </div>
    )}
  </div>
  );
};

export default Header;
