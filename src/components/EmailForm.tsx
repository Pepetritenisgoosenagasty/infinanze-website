import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { BsArrowRight } from 'react-icons/bs';
import { FaRegPaperPlane } from 'react-icons/fa';


export function InputWithButton(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} bg="#052D92" variant="filled">
         <FaRegPaperPlane fontSize={16} />
        </ActionIcon>
      }
      placeholder="your email address"
      rightSectionWidth={42}
      {...props}
    />
  );
}