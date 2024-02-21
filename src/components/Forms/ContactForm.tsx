import { Button, SimpleGrid, Textarea, TextInput } from "@mantine/core";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(name, companyName, email, message, phoneNumber)
    if (name   && email && message) {
      try {
         await fetch(`/api/contact`, {
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
      <div className="my-10 ">
        <form onSubmit={onSubmitForm}>
          <SimpleGrid
            cols={2}
            spacing="xl"
            verticalSpacing="xl"
            breakpoints={[
              { maxWidth: 980, cols: 2, spacing: "md" },
              { maxWidth: 755, cols: 2, spacing: "sm" },
              { maxWidth: 600, cols: 1, spacing: "sm" },
            ]}
          >
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
              {" "}
              <TextInput
                type="number"
                placeholder="Your work number"
                label=""
                value={phoneNumber}
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              {" "}
              <TextInput
                placeholder="Your work Email"
                label=""
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </SimpleGrid>
          <div className="my-6 space-y-6 ">
            <p className="text-[14px] font-medium">
              Tell us all about your company, your project and we will get right
              back to you!
            </p>
            <Textarea
              placeholder="Your comment"
              label=""
              minRows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="text-right absolute bottom-4 md:bottom-10 right-6">
              <Button
                type="submit"
                loading={isLoading}
                sx={{ background: "#1974FB", width: 130 }}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
