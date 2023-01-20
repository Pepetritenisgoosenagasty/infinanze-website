import { Button, Image, Text } from "@mantine/core";
import Link from "next/link";
import { assetIndex } from "public/assets";
import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  {
    name: "HOME",
    hasArrow: false,
  },
  {
    name: "SERVICES",
    hasArrow: true,
  },
  {
    name: "ABOUT",
    hasArrow: false,
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

  return (
    <div
      className={`fixed top-0 w-[100%] h-[80px]  z-40 flex items-center justify-between px-16 ${
        show ? " bg-white text-[#000] border-b" : " bg-transparent text-[#fff]"
      }`}
    >
      <div>
        <Link href="/">
         <Image src={assetIndex.Image.logo} alt="logo" width={150}/>
        </Link>
      </div>
      <div>
        <ul className="flex items-center space-x-6">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <li
                className={`text-[14px] cursor-pointer font-bold ${
                  item.hasArrow && "flex items-center"
                }`}
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
      <div className={`${show ? 'contact' : 'nav-btn'}`}>
      <Button>Let`s Talk</Button>
      </div>
    </div>
  );
};

export default Header;
