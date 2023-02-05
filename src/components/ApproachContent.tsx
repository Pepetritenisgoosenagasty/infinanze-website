import { Group, List, SimpleGrid, ThemeIcon } from "@mantine/core";
import Image from "next/image";
import { assetIndex } from "public/assets";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const ApproachContent = () => {
  return (
    <div className="space-y-10">
    <div className="service-card border-t-2 border-[#0E7CFF] rounded-lg py-12 px-6 flex flex-col space-y-8 relative bg-white z-20 items-center">
      <div className="text-center">
        <h5 className="font-bold text-[20px]">IOS App Development</h5>
        <p className="my-4">
          We have all the expertise you need to produce fully-fledged, stable,
          and scalable mobile applications, including
        </p>
      </div>
      <div className="flex items-start justify-center">
        <div>
          <Group spacing="xl">
            <Image
              src={assetIndex.SVG.react_native}
              alt=""
              width={70}
              height={70}
            />
            <Image
              src={assetIndex.SVG.flutter}
              alt=""
              width={100}
              height={100}
            />
          </Group>
        </div>
        <div className="ml-8">
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
              iPhone App Development
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
              ipad App Development
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
              Apple watch App Development
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
              Apple TV App Development
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
              App Clips Development
            </List.Item>
          </List>
        </div>
      </div>
    </div>
    
    <div className="service-card border-t-2 border-[#0E7CFF] rounded-lg py-12 px-6 flex flex-col space-y-8 relative bg-white z-20 items-center">
      <div className="text-center">
        <h5 className="font-bold text-[20px]">Android App Development</h5>
        <p className="my-4">
        Using the latest technologies, we help businesses establish their presence on any modern device and platform, including
        </p>
      </div>
      <div className="flex items-start justify-center">
        <div>
          <Group spacing="xl">
            <Image
              src={assetIndex.SVG.react_native}
              alt=""
              width={70}
              height={70}
            />
            <Image
              src={assetIndex.SVG.flutter}
              alt=""
              width={70}
              height={70}
            />
          </Group>
        </div>
        <div className="ml-8">
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
              Android Mobile App Development
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
              Android TV App Development 
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
             Android Tablet App Development 
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
              Android Wear App Development
            </List.Item>
          </List>
        </div>
      </div>
    </div>

    <div className="service-card border-t-2 border-[#0E7CFF] rounded-lg py-12 px-6 flex flex-col space-y-8 relative bg-white z-20 items-center">
      <div className="text-center">
        <h5 className="font-bold text-[20px]">Cross-platform App Development</h5>
        <p className="my-4">
        Get top-notch mobile applications that run on multiple platforms costs while providing your users with an app that fits their <br /> OS. Use this alternative to reduce costs and time-to-market and to reach more users without loss of quality, including
        </p>
      </div>
      <div className="flex items-start justify-center">
        <div>
          <Group spacing="xl">
          <Image src={assetIndex.SVG.python} alt=''width={70} height={70}/>
                 <Image src={assetIndex.SVG.cplus} alt=''width={70} height={70}/>
                 <Image src={assetIndex.Image.electron} alt=''width={70} height={70}/>
          </Group>
        </div>
        <div className="ml-8">
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
              Android Mobile App Development
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
              Android TV App Development 
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
             Android Tablet App Development 
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
              Android Wear App Development
            </List.Item>
          </List>
        </div>
      </div>
    </div>

    <div className="service-card border-t-2 border-[#0E7CFF] rounded-lg py-12 px-6 flex flex-col space-y-8 relative bg-white z-20 items-center">
      <div className="text-center">
        <h5 className="font-bold text-[20px]">Progressive Web App Development</h5>
        <p className="my-4">
        Build Progressive Web Apps that combine the best technical solutions applied in mobile and web applications beneficial in terms of <br /> the ease of development and distribution, as well as a number of other advantages for your business. Talk to our experts to discuss
        </p>
      </div>
      <div className="flex items-start justify-center">
        <div>
          <Group spacing="xl">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt=''width={70} height={70}/>
                 <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt=''width={70} height={70}/>
                 <Image src={assetIndex.Image.electron} alt=''width={70} height={70}/>
          </Group>
        </div>
        <div className="ml-8">
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
              Android Mobile App Development
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
              Android TV App Development 
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
             Android Tablet App Development 
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
              Android Wear App Development
            </List.Item>
          </List>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ApproachContent;
