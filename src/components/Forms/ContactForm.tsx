import { Button, SimpleGrid, Textarea, TextInput } from "@mantine/core";
import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="my-10 ">
        <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl" breakpoints={[
        { maxWidth: 980, cols: 2, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}>
          <div>
            <TextInput placeholder="Full name" label="" />
          </div>
          <div>
            <TextInput placeholder="Company Name" label="" />
          </div>
          <div>
            {" "}
            <TextInput placeholder="Your work number" label="" />
          </div>
          <div>
            {" "}
            <TextInput placeholder="Your work Email" label="" />
          </div>
        </SimpleGrid>
        <div className="my-6 space-y-6 ">
          <p className="text-[14px] font-medium">
            Tell us all about your company, your project and we will get right
            back to you!
          </p>
          <Textarea placeholder="Your comment" label="" minRows={6} />
        </div>
        <div>
        <div className="text-right absolute bottom-4 md:bottom-10 right-6">
                <Button sx={{ background: "#1974FB", width: 100}}>Submit</Button>
                </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
