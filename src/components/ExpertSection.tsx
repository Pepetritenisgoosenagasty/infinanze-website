import { Button, List, SimpleGrid, Textarea, TextInput, ThemeIcon } from '@mantine/core'
import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { FiPhoneMissed } from 'react-icons/fi'
import { MdOutlineMail } from 'react-icons/md'

const ExpertSection = () => {
  return (
    <>
 <div className="bg-white min-h-[400px] w-full p-20">
            <SimpleGrid cols={2} spacing="xl">
              <div>
                <h5 className="text-[#0959B8] text-[14px]">CONTACT US</h5>
                <h1 className="text-[#0959B8] text-[30px] my-2 font-bold leading-10">
                  Speak To Our Expert <br /> Today
                </h1>
                <p className="text-[14px]">
                  We help reach out to your customers by providing digital{" "}
                  <br /> solutions to your products by offering the following
                  services
                </p>
                <h4 className="text-[#0959B8] text-[14px] font-bold my-6">
                  Our contact details
                </h4>
                <div>
                  <List spacing="xs" size="sm" center>
                    <List.Item
                      icon={
                        <ThemeIcon bg="#0959B8">
                          <FiPhoneMissed size={16} />
                        </ThemeIcon>
                      }
                    >
                      (+49) 15123172822
                    </List.Item>
                    <List.Item
                      icon={
                        <ThemeIcon bg="#0959B8">
                          <MdOutlineMail size={16} />
                        </ThemeIcon>
                      }
                    >
                      support@infinanze.com
                    </List.Item>
                    <List.Item
                      icon={
                        <ThemeIcon bg="#0959B8">
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
                <SimpleGrid cols={2}>
                  <div>
                    <TextInput placeholder="Full name" label="" />
                  </div>
                  <div>
                    <TextInput placeholder="Company Name" label="" />
                  </div>
                  <div>
                    <TextInput placeholder="Your work number" label="" />
                  </div>
                  <div>
                    <TextInput placeholder="Your work Email" label="" />
                  </div>
                </SimpleGrid>
                <div className="mt-6">
                  <Textarea
                    placeholder="Send Message"
                    label=""
                    autosize
                    minRows={6}
                  />
                </div>
                <div className="text-right mt-6 contact">
                <Button>Send</Button>
                </div>
              </div>
            </SimpleGrid>
          </div>
    </>
  )
}

export default ExpertSection