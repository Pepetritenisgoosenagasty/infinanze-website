import {
  ActionIcon,
  Button,
  Group,
  List,
  SimpleGrid,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BiEnvelope, BiMap, BiTimeFive } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTelephoneX } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { InputWithButton } from "./EmailForm";

const Footer = () => {
  const router = useRouter()

  const largeScreen = useMediaQuery('(min-width: 900px)');

  return (
    <footer className={`min-h-[300px] bg-[#052D92] text-white py-12  ${largeScreen ? "px-[150px]" : "px-6"}`}>
      <div className="container mx-auto">
        <SimpleGrid cols={4} breakpoints={[
        { maxWidth: 980, cols: 2, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}>
          <div className={`${largeScreen ? "mt-12" : "mt-2"}`}>
            <p className="text-sm">
              We are a software and hardware <br />
              company who help individuals and <br />
              businesses to develop and deploy <br />
              systems to meet their needs
            </p>
            <div className="mt-6">
              <Group>
                <ActionIcon
                  radius="lg"
                  bg="white"
                  color="blue"
                  variant="default"
                >
                  <FaFacebookF size={16} />
                </ActionIcon>
                <ActionIcon
                  radius="lg"
                  bg="white"
                  color="blue"
                  variant="default"
                >
                  <BsInstagram size={16} />
                </ActionIcon>
                <ActionIcon
                  radius="lg"
                  bg="white"
                  color="blue"
                  variant="default"
                >
                  <FaTwitter size={16} />
                </ActionIcon>
              </Group>
            </div>
          </div>
          <div className={`${largeScreen ? "mx-12" : "my-6"}`}>
            <h1 className="text-[18px] font-[600]">Quick Links</h1>
            <ul className="text-sm space-y-4 mt-6">
              <li>
              <Link href="/">
                <Text>Home</Text>
                </Link>
              </li>
              <li>
              <Link href="/about">
                <Text>About</Text>
                </Link>
              </li>
              {/* <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li> */}
              <li>
                {/* <a href="#" onClick={() => router.push('/contact')}>Contact</a> */}
                <Link href="/contact">
                <Text>Contact</Text>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[18px] font-[600]">Contact Info</h1>
            <div className="mt-6">
              <List spacing="sm" size="sm" c="white" center>
                <List.Item
                   sx={{lineHeight: 1.6}}
                  icon={
                    <ThemeIcon bg="#052D92">
                      <BiMap size={16} />
                    </ThemeIcon>
                  }
                >
                  7703 Kelburn lane, <br /> North Carolina 
Charlotte
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon bg="#052D92">
                      <BsTelephoneX size={16} />
                    </ThemeIcon>
                  }
                >
                   (+1) 9803611860
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon bg="#052D92">
                      <BiEnvelope size={16} />
                    </ThemeIcon>
                  }
                >
                  support@infinanze.com
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon bg="#052D92">
                      <BiTimeFive size={16} />
                    </ThemeIcon>
                  }
                >
                  Opening Hours: 10:00 - 18:00
                </List.Item>
              </List>
            </div>
          </div>
          <div className={` ${largeScreen ? "mt-0" : "mt-10"}`}>
            <h1 className="text-[18px] font-[600]">Newsletter</h1>
            <p className="text-sm mt-6">
              Stay in touch to keep up with the <br />
              latest offers from us
            </p>

            <div className="mt-12">
              <InputWithButton />
            </div>
          </div>
        </SimpleGrid>
      </div>
    </footer>
  );
};

export default Footer;
