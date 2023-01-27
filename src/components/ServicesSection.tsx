import { Card, SimpleGrid, Tabs, TabsProps } from "@mantine/core";
import React from "react";
import { BsArrowRight, BsArrowRightCircle } from "react-icons/bs";
import Check from "./Svg/Check";

function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      unstyled
      defaultValue="big_data"
      orientation="vertical"
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[6] : "#1974FB",
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.gray[9],
          border: `1px solid ${
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[4]
          }`,
          padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
          cursor: "pointer",
          fontSize: theme.fontSizes.sm,
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",

          "&:disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
          },

          "&:not(:first-of-type)": {
            borderLeft: 0,
          },

          "&[data-active]": {
            backgroundColor: "#fff",
            borderColor: "#1974FB",
            color: "#1974FB",
          },

          svg: {
            fill: "#1974FB",
          },
        },

        tabsList: {
          // display: 'flex',
        },
      })}
      {...props}
    />
  );
}

const ServicesSection = () => {
  const Styles = {
    border: "none",
    // height: '50px',
    color: "#fff",
    paddingInline: "20px",
    paddingBlock: "15px",
    marginBlock: "10px",
    borderRadius: "none",
    width: "100%",
  };
  return (
    <StyledTabs unstyled>
      <div className="flex items-center px-[100px] my-16 ">
        <div className="w-[280px] bg-[#1974FB] min-h-[500px] rounded-lg py-10">
          <div>
            <Tabs.List>
              <Tabs.Tab value="big_data" sx={Styles}>
                <div className="flex items-center text-left">
                  <div className="mx-4">
                    <BsArrowRight fontSize={23} />
                  </div>
                  Big Data
                </div>
              </Tabs.Tab>
              <Tabs.Tab value="artificial_intelligent" sx={Styles}>
                <div className="flex items-center ">
                  <div className="mx-4">
                    <BsArrowRight fontSize={23} />
                  </div>
                  Artificial intelligent
                </div>
              </Tabs.Tab>
              <Tabs.Tab value="computer_vision" sx={Styles}>
                <div className="flex items-center">
                  <div className="mx-4">
                    <BsArrowRight fontSize={23} />
                  </div>
                  Computer vision
                </div>
              </Tabs.Tab>
              <Tabs.Tab value="Internet_things" sx={Styles}>
                <div className="flex items-center justify-start">
                  <div className="mx-4">
                    <BsArrowRight fontSize={23} />
                  </div>
                  Internet of Things
                </div>
              </Tabs.Tab>
              <Tabs.Tab value="blockchain" sx={Styles}>
                <div className="flex items-center justify-start">
                  <div className="mx-4">
                    <BsArrowRight fontSize={23} />
                  </div>
                  Blockchain
                </div>
              </Tabs.Tab>
              <Tabs.Tab value="mixed_reality" sx={Styles}>
                <div className="flex items-center justify-start">
                  <div className="mx-4">
                    <BsArrowRight fontSize={23} />
                  </div>
                  Mixed reality
                </div>
              </Tabs.Tab>
            </Tabs.List>
          </div>
        </div>
        <div className="grow ml-10 text-left rounded-lg min-h-[500px] service-card p-20">
          <Tabs.Panel value="big_data">
            <h1 className="text-[26px] font-[600]">Services we offer</h1>
            <p className="my-8 text-sm">
              Tame your big data through robust solutions that empower data
              collection, storage, <br /> processing and analysis
            </p>
            <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl">
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                  Consulting and implemetation
                </h4>
              </div>
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                  Support and Evolution
                </h4>
              </div>
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">Data security</h4>
              </div>
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">Data governance</h4>
              </div>
            </SimpleGrid>
            <div className="pt-24 text-[#1974FB] flex items-center justify-end cursor-pointer">
              <h5 className="text-[#1974FB] font-bold text-[16px] mr-2">
                Find out more
              </h5>
              <BsArrowRightCircle />
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="artificial_intelligent">
            <h1 className="text-[26px] font-[600]">Services we offer</h1>
            <p className="my-8 text-sm">
              With AI and ML technologies that simulate human intelligence,
              decision-making, <br /> planning, and forecasting can be improved,
              and corporate processes can be overhauled.
            </p>
            <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl">
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">Robotics</h4>
              </div>
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                  Image recognition
                </h4>
              </div>
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                  Machine learning
                </h4>
              </div>
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                  Natural language processing{" "}
                </h4>
              </div>
            </SimpleGrid>
            <div className="pt-24 text-[#1974FB] flex items-center justify-end cursor-pointer">
              <h5 className="text-[#1974FB] font-bold text-[16px] mr-2">
                Find out more
              </h5>
              <BsArrowRightCircle />
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="computer_vision">
            <h1 className="text-[26px] font-[600]">Services we offer</h1>
            <p className="my-8 text-sm font-normal">
              Obtain useful information from photos and videos.
            </p>
            <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl">
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                  3D modelling and mapping
                </h4>
              </div>
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                  Barcode verification and validation.
                </h4>
              </div>
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                  Recognition of item location and positioning
                </h4>
              </div>
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                  Detection of visual defects and anomalies
                </h4>
              </div>
            </SimpleGrid>
            <div className="pt-24 text-[#1974FB] flex items-center justify-end cursor-pointer">
              <h5 className="text-[#1974FB] font-bold text-[16px] mr-2">
                Find out more
              </h5>
              <BsArrowRightCircle />
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="Internet_things">
          <h1 className="text-[26px] font-[600]">Services we offer</h1>
            <p className="my-8 text-sm">
            Create &quote;smart&quote; operations by gathering, storing, and analyzing sensor data.
            </p>
            <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl">
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                IOT solution development
                </h4>
              </div>
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                IoT Analytics
                </h4>
              </div>
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                IoT Consulting
                </h4>
              </div>
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                IoT Evolution
                </h4>
              </div>
            </SimpleGrid>
            <div className="pt-24 text-[#1974FB] flex items-center justify-end cursor-pointer">
              <h5 className="text-[#1974FB] font-bold text-[16px] mr-2">
                Find out more
              </h5>
              <BsArrowRightCircle />
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="blockchain">
            <h1 className="text-[26px] font-[600]">Services we offer</h1>
            <p className="my-8 text-sm">
              Find products that will improve transaction security,
              traceability, and processing speed.
            </p>
            <SimpleGrid cols={1} spacing="xl" verticalSpacing="xl">
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                  Blockchain-based product development for product companies
                </h4>
              </div>
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                  Blockchain consulting and implementation for non-IT
                  enterprises
                </h4>
              </div>
            </SimpleGrid>
            <div className="pt-24 text-[#1974FB] flex items-center justify-end cursor-pointer">
              <h5 className="text-[#1974FB] font-bold text-[16px] mr-2">
                Find out more
              </h5>
              <BsArrowRightCircle />
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="mixed_reality">
            <h1 className="text-[26px] font-[600]">Services we offer</h1>
            <p className="my-8 text-sm">
              To make routine jobs and activities easier, safer, and more
              entertaining, blur the <br /> boundaries between the real world
              and the digital world.
            </p>
            <SimpleGrid cols={1} spacing="xl" verticalSpacing="xl">
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                  Virtual reality development
                </h4>
              </div>
              <div className="flex items-center">
                <Check />
                <h4 className="text-[16px] font-[500] ml-2">
                  Argumented reality development
                </h4>
              </div>
            </SimpleGrid>
            <div className="pt-24 text-[#1974FB] flex items-center justify-end cursor-pointer">
              <h5 className="text-[#1974FB] font-bold text-[16px] mr-2">
                Find out more
              </h5>
              <BsArrowRightCircle />
            </div>
          </Tabs.Panel>
        </div>
      </div>
    </StyledTabs>
  );
};

export default ServicesSection;
