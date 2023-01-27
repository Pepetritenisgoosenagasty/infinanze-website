import { TextInput, TextInputProps, ActionIcon, useMantineTheme, Button } from '@mantine/core';


export function EmailInput(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      radius="xs"
      size="xl"
      rightSection={
        <Button color={theme.primaryColor} size="lg" variant="filled">
          Lets Trade
        </Button>
      }
      placeholder="Enter your email address"
      rightSectionWidth={42}
      {...props}
    />
  );
}