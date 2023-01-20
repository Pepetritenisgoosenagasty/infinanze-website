import { Accordion } from '@mantine/core';

export const AccordionContent = () => {
  return (
    <Accordion>
      <Accordion.Item value="customization">
        <Accordion.Control>Can you cover end-to-end software delivery?</Accordion.Control>
        <Accordion.Panel>Absolutely: this is our core service. We’ve built a strong team of 700+ IT professionals – consultants, architects, developers, data scientists, security, DevOps, and QA engineers – to take charge of everything from requirements elicitation and software design to coding, deployment, and support.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="cost">
        <Accordion.Control>How much does it cost?</Accordion.Control>
        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="policy">
        <Accordion.Control>What’s your post-launch policy?</Accordion.Control>
        <Accordion.Panel>Absolutely: this is our core service. We’ve built a strong team of 700+ IT professionals – consultants, architects, developers, data scientists, security, DevOps, and QA engineers – to take charge of everything from requirements elicitation and software design to coding, deployment, and support.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="methodology">
        <Accordion.Control>What is your preferred development methodology?</Accordion.Control>
        <Accordion.Panel>Absolutely: this is our core service. We’ve built a strong team of 700+ IT professionals – consultants, architects, developers, data scientists, security, DevOps, and QA engineers – to take charge of everything from requirements elicitation and software design to coding, deployment, and support.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="software">
        <Accordion.Control>How do you control the quality of the software you deliver?</Accordion.Control>
        <Accordion.Panel>Absolutely: this is our core service. We’ve built a strong team of 700+ IT professionals – consultants, architects, developers, data scientists, security, DevOps, and QA engineers – to take charge of everything from requirements elicitation and software design to coding, deployment, and support.</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}