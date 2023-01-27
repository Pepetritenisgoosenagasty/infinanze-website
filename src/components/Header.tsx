import { Button, Image, Text } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { assetIndex } from "public/assets";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import BlueLogo from "./Svg/BlueLogo";

const data = [
  {
    name: "HOME",
    hasArrow: false,
    path: '/'
  },
  {
    name: "SERVICES",
    hasArrow: true,
  },
  {
    name: "ABOUT",
    hasArrow: false,
    path: "/about",
  },
  {
    name: "TECHNOLOGIES",
    hasArrow: true,
  },
  {
    name: "WHY US",
    hasArrow: false,
  },
];

const Header = () => {
  const [show, setShow] = useState(false);

  const router = useRouter()

  // Header Animation
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        console.log("Removed");
      });
    };
  }, []);


  const handleClick = () => {
    console.log('Clicked')
  }

  return (
    <div
      className={`fixed top-0 w-[100%] h-[80px]  z-40 flex items-center justify-between px-[120px] ${
        show ? " bg-white text-[#000] border-b" : " bg-transparent text-[#fff]"
      }`}
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
                className={`text-[14px] cursor-pointer font-bold ${
                  item.hasArrow && "flex items-center"
                }`}
                onClick={item.path ? () => router.push(item.path) : handleClick}
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
        <Button>Let`s Talk</Button>
      </div>
    </div>
  );
};

export default Header;
