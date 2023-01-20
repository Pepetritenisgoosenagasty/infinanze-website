import {
  ActionIcon,
  Button,
  Group,
  List,
  SimpleGrid,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import React from "react";
import { BiEnvelope, BiMap, BiTimeFive } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTelephoneX } from "react-icons/bs";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { InputWithButton } from "./EmailForm";

const Footer = () => {
  return (
    <footer className="min-h-[300px] bg-[#052D92] text-white px-20 py-12">
      <div className="container mx-auto">
        <SimpleGrid cols={4}>
          <div className="mt-12">
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
          <div className="mx-12">
            <h1 className="text-[18px] font-[600]">Quick Links</h1>
            <ul className="text-sm space-y-4 mt-6">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[18px] font-[600]">Contact Info</h1>
            <div className="mt-6">
              <List spacing="sm" size="sm" c="white" center>
                <List.Item
                  icon={
                    <ThemeIcon bg="#052D92">
                      <BiMap size={16} />
                    </ThemeIcon>
                  }
                >
                  Kufsteiner Strasse 84, 10825
                </List.Item>
                <List.Item
                  icon={
                    <ThemeIcon bg="#052D92">
                      <BsTelephoneX size={16} />
                    </ThemeIcon>
                  }
                >
                  (+49) 15123172822
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
          <div>
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
