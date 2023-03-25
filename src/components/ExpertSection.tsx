import {
  Button,
  List,
  SimpleGrid,
  Textarea,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { FiPhoneMissed } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const ExpertSection = () => {
  const largeScreen = useMediaQuery("(min-width: 900px)");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    if (name && email && message) {
      try {
        const res = await fetch(`/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            companyName,
            phoneNumber,
          }),
        });

        setIsLoading(false);
        alert("Message sent successfully");
        setName("");
        setCompanyName("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");
      } catch (error) {
        console.log("Something went wrong");
        // setIsSent(false);
      }
    }
  };
  return (
    <>
      <div
        className={`bg-white min-h-[400px] w-full ${
          largeScreen ? "p-20" : "p-6"
        }`}
      >
        <SimpleGrid cols={largeScreen ? 2 : 1} spacing="xl">
          <div>
            <h5 className="text-[#0959B8] text-[14px]">CONTACT US</h5>
            <h1 className="text-[#0959B8] text-[30px] my-2 font-bold leading-10">
              Speak To Our Expert <br /> Today
            </h1>
            <p className="text-[14px]">
              We help reach out to your customers by providing digital <br />{" "}
              solutions to your products by offering the following services
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
                  (+1) 9803611860
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
            <form onSubmit={onSubmitForm}>
              <SimpleGrid cols={largeScreen ? 2 : 1}>
                <div>
                  <TextInput
                    placeholder="Full name"
                    label=""
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <TextInput
                    placeholder="Company Name"
                    label=""
                    value={companyName}
                    required
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div>
                  <TextInput
                    placeholder="Your work number"
                    label=""
                    value={phoneNumber}
                    required
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div>
                  <TextInput
                    placeholder="Your work Email"
                    label=""
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </SimpleGrid>
              <div className="mt-6">
                <Textarea
                  placeholder="Send Message"
                  label=""
                  autosize
                  minRows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="text-right mt-6 contact">
                <Button type="submit" loading={isLoading}>
                  Send
                </Button>
              </div>
            </form>
          </div>
        </SimpleGrid>
      </div>
    </>
  );
};

export default ExpertSection;
