import { Card, SimpleGrid, Tabs, TabsProps } from "@mantine/core";
import React from "react";
import { BsArrowRight, BsArrowRightCircle } from "react-icons/bs";

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
              <div>
                <h4 className="text-[16px] font-[500]">
                  Consulting and implemetation
                </h4>
              </div>
              <div>
                <h4 className="text-[16px] font-[500]">
                  Support and Evolution
                </h4>
              </div>
              <div>
                <h4 className="text-[16px] font-[500]">Data security</h4>
              </div>
              <div>
                <h4 className="text-[16px] font-[500]">Data governance</h4>
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
            <h5 className="text-[20px] font-bold">Not Available</h5>
          </Tabs.Panel>
          <Tabs.Panel value="computer_vision">
          <h5 className="text-[20px] font-bold">Not Available</h5>
          </Tabs.Panel>
          <Tabs.Panel value="Internet_things">
          <h5 className="text-[20px] font-bold">Not Available</h5>
          </Tabs.Panel>
          <Tabs.Panel value="blockchain">
          <h5 className="text-[20px] font-bold">Not Available</h5>
          </Tabs.Panel>
          <Tabs.Panel value="mixed_reality">
          <h5 className="text-[20px] font-bold">Not Available</h5>
          </Tabs.Panel>
        </div>
      </div>
    </StyledTabs>
  );
};

export default ServicesSection;
