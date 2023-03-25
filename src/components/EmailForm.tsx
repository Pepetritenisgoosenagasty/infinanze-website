import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";

export function InputWithButton(props: TextInputProps) {
  const theme = useMantineTheme();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = async () => {
    setIsLoading(true);
    if (email) {
      try {
        const res = await fetch(`/api/newsletter`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        });

        setIsLoading(false);
        alert("Newsletter subscription successful");
        setEmail("");
      } catch (error) {
        console.log("Something went wrong");
        // setIsSent(false);
      }
    }
  };

  return (
    <TextInput
      radius="xl"
      size="md"
      value={email}
      required
      onChange={(e) => setEmail(e.target.value)}
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color={theme.primaryColor}
          bg="#052D92"
          variant="filled"
          onClick={onSubmitForm}
        >
          <FaRegPaperPlane fontSize={16} />
        </ActionIcon>
      }
      placeholder="your email address"
      rightSectionWidth={42}
      {...props}
    />
  );
}
