import { Collapse, Grid, List, SimpleGrid, ThemeIcon } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import React from "react";
import { BsChevronDown, BsChevronUp, BsLaptop, BsUiRadios, BsUiRadiosGrid } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { FaAmazon, FaDatabase, FaJava, FaLaptopCode, FaMicrosoft, FaNodeJs, FaReact } from "react-icons/fa";
import { MdSettingsApplications } from "react-icons/md";
import { SiAdobe, SiCplusplus, SiMicrosoftexcel } from "react-icons/si";

export const ListMobileComponent = () => {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
    <a id="service" className="menu-item flex items-center" href="#" onClick={toggle}>Services {opened ? (<BsChevronUp/>) : (<BsChevronDown />)} </a>
        <Collapse in={opened} transitionDuration={500} transitionTimingFunction="linear">  
    <div>
      {/* <h1 className="text-lg font-bold">SOFTWARE TOOLS</h1> */}
      <div className="my-4">
        <List spacing="sm" size="sm" c="#fff" center>
          <List.Item
            sx={{ cursor: "pointer" }}
            icon={
              <ThemeIcon bg="#fff" c="blue">
                <MdSettingsApplications size={20} />
              </ThemeIcon>
            }
            onClick={() => router.push("/services/software-development")}
          >
            Software Development
          </List.Item>
          <List.Item
            sx={{ cursor: "pointer" }}
            icon={
              <ThemeIcon bg="#fff"  c="blue">
                <BsUiRadios size={20} />
              </ThemeIcon>
            }
            onClick={() => router.push("/services/ux-design")}
          >
            UI/UX Design
          </List.Item>
          <List.Item
            sx={{ cursor: "pointer" }}
            icon={
              <ThemeIcon bg="#fff"  c="blue">
                <BsLaptop size={20} />
              </ThemeIcon>
            }
            onClick={() => router.push("/services/it-consulting")}
          >
            IT Consulting
          </List.Item>
          <List.Item
            sx={{ cursor: "pointer" }}
            icon={
              <ThemeIcon bg="#fff"  c="blue">
                <FaLaptopCode size={20} />
              </ThemeIcon>
            }
            onClick={() => router.push("/services/web-development")}
          >
            Web Development
          </List.Item>
          <List.Item
            sx={{ cursor: "pointer" }}
            icon={
              <ThemeIcon bg="#fff" c="blue">
                <BsUiRadiosGrid size={20} />
              </ThemeIcon>
            }
            onClick={() => router.push("/services/mobile-app-development")}
          >
            Mobile App Development
          </List.Item>
        </List>
      </div>
    </div>
         </Collapse>
    </>
  );
};


export const TechMobileComponent = () => {
    const router = useRouter();
    return(
        <>
        <div className="">
            <SimpleGrid cols={1}>
            <div className="mt-6">
            <h5 className="text-[16px] font-bold mb-4">PROGRAMMING</h5>
                      <List spacing="sm" size="sm" c="#fff" center>
                        <List.Item
                          sx={{ cursor: "pointer" }}
                          icon={
                            <ThemeIcon bg="#fff" c="blue">
                              <FaJava size={20} />
                            </ThemeIcon>
                          }
                        >
                          Java
                        </List.Item>
                        <List.Item
                          sx={{ cursor: "pointer" }}
                          icon={
                            <ThemeIcon bg="#fff" c="blue">
                              <BsLaptop size={20} />
                            </ThemeIcon>
                          }
                        >
                          Python
                        </List.Item>
                        <List.Item
                          sx={{ cursor: "pointer" }}
                          icon={
                            <ThemeIcon bg="#fff" c="blue">
                              <SiCplusplus size={20} />
                            </ThemeIcon>
                          }
                        >
                          C++
                        </List.Item>
                        <List.Item
                          sx={{ cursor: "pointer" }}
                          icon={
                            <ThemeIcon bg="#fff" c="blue">
                              <FaNodeJs size={20} />
                            </ThemeIcon>
                          }
                        >
                          Node js
                        </List.Item>
                        <List.Item
                          sx={{ cursor: "pointer" }}
                          icon={
                            <ThemeIcon bg="#fff" c="blue">
                              <DiJavascript1 size={20} />
                            </ThemeIcon>
                          }
                        >
                          javascript
                        </List.Item>
                        <List.Item
                          sx={{ cursor: "pointer" }}
                          icon={
                            <ThemeIcon bg="#fff" c="blue">
                              <FaReact size={20} />
                            </ThemeIcon>
                          }
                        >
                          React
                        </List.Item>
                      </List>
                    </div>
                    <div className="mt-6">
                    <h1 className="text-lg font-bold mb-4">SOFTWARE TOOLS</h1>
                    <div className="my-4">
        <List spacing="sm" size="sm" c="#fff" center>
          <List.Item
            sx={{ cursor: "pointer" }}
            icon={
              <ThemeIcon bg="#fff" c="blue">
                <MdSettingsApplications size={20} />
              </ThemeIcon>
            }
            onClick={() => router.push("/services/software-development")}
          >
            Software Development
          </List.Item>
          <List.Item
            sx={{ cursor: "pointer" }}
            icon={
              <ThemeIcon bg="#fff"  c="blue">
                <BsUiRadios size={20} />
              </ThemeIcon>
            }
            onClick={() => router.push("/services/ux-design")}
          >
            UI/UX Design
          </List.Item>
          <List.Item
            sx={{ cursor: "pointer" }}
            icon={
              <ThemeIcon bg="#fff"  c="blue">
                <BsLaptop size={20} />
              </ThemeIcon>
            }
            onClick={() => router.push("/services/it-consulting")}
          >
            IT Consulting
          </List.Item>
          <List.Item
            sx={{ cursor: "pointer" }}
            icon={
              <ThemeIcon bg="#fff"  c="blue">
                <FaLaptopCode size={20} />
              </ThemeIcon>
            }
            onClick={() => router.push("/services/web-development")}
          >
            Web Development
          </List.Item>
          <List.Item
            sx={{ cursor: "pointer" }}
            icon={
              <ThemeIcon bg="#fff" c="blue">
                <BsUiRadiosGrid size={20} />
              </ThemeIcon>
            }
            onClick={() => router.push("/services/mobile-app-development")}
          >
            Mobile App Development
          </List.Item>
        </List>
      </div>
    
                    </div>
                    <div>
                    <div className="mt-6">
                    <h1 className="text-lg font-bold mb-4">PLATFORMS</h1>
                      <List spacing="sm" size="sm" c="#fff" center>
                        <List.Item
                          sx={{ cursor: "pointer" }}
                          icon={
                            <ThemeIcon bg="#fff" c="blue">
                              <FaMicrosoft size={20} />
                            </ThemeIcon>
                          }
                        >
                          Azure
                        </List.Item>
                        <List.Item
                          sx={{ cursor: "pointer" }}
                          icon={
                            <ThemeIcon bg="#fff" c="blue">
                              <FaMicrosoft size={20} />
                            </ThemeIcon>
                          }
                        >
                          Microsoft
                        </List.Item>
                        <List.Item
                          sx={{ cursor: "pointer" }}
                          icon={
                            <ThemeIcon bg="#fff" c="blue">
                              <SiMicrosoftexcel size={20} />
                            </ThemeIcon>
                          }
                        >
                          Power Apps
                        </List.Item>
                        <List.Item
                          sx={{ cursor: "pointer" }}
                          icon={
                            <ThemeIcon bg="#fff" c="blue">
                              <FaDatabase size={20} />
                            </ThemeIcon>
                          }
                        >
                          Power BI
                        </List.Item>
                        <List.Item
                          sx={{ cursor: "pointer" }}
                          icon={
                            <ThemeIcon bg="#fff" c="blue">
                              <FaAmazon size={20} />
                            </ThemeIcon>
                          }
                        >
                          Amazon web services
                        </List.Item>
                        <List.Item
                          sx={{ cursor: "pointer" }}
                          icon={
                            <ThemeIcon bg="#fff" c="blue">
                              <SiAdobe size={20} />
                            </ThemeIcon>
                          }
                        >
                          Adobe Commerce
                        </List.Item>
                      </List>
                    </div>
                    </div>
            </SimpleGrid>
             
              </div>
        </>
    )
}
