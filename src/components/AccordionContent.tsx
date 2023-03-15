import { Accordion } from '@mantine/core';

export const AccordionContent = () => {
  return (
    <Accordion>
      <Accordion.Item value="customization">
        <Accordion.Control>How much does it cost?</Accordion.Control>
        <Accordion.Panel>Software development costs for a medium/large application may range from $50K to $1M. The total amount mainly depends on the number and complexity of software features, the number of platforms supported (web, mobile, desktop), and the type of development (custom, low-code, or platform-based). The UI design uniqueness and complexity, the number of integrations with other software systems, as well as availability, security, and performance requirements also play an important part.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="cost">
        <Accordion.Control>what is your preferred software development methodology?</Accordion.Control>
        <Accordion.Panel>We use Scrum with 2-3 week iterations for the majority of our software engineering projects. Waterfall can be used for small and midsize projects with well defined and unchanging requirements, projects requiring formal approvals (government projects and projects for large enterprises), and projects with strong compliance requirements.</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="policy">
        <Accordion.Control>Whats your post launch policy?</Accordion.Control>
        <Accordion.Panel>Within the first 1-3 months following the software&apos;s release, our team: <br />

Handles your and other users&apos; queries and resolves user problems (if any).
In charge of incident management, configuration changes, and updates.
We are ready to give continuous maintenance and evolution of your software, as well as L1-L3 support, after 3 months, upon agreement (if required). We understand how to cultivate long-term relationships and keep our clients satisfied in the long run: Customers we have served for more than two years account for 62% of our revenue.</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="methodology">
        <Accordion.Control>How do you control the quality of software you deliver?</Accordion.Control>
        <Accordion.Panel>We employ a shift-left approach to quality assurance, adhere to international coding standards, and maintain an ISO 9001-compliant quality management system.</Accordion.Panel>
      </Accordion.Item>
      {/* <Accordion.Item value="software">
        <Accordion.Control>How do you control the quality of the software you deliver?</Accordion.Control>
        <Accordion.Panel>Absolutely: this is our core service. We’ve built a strong team of 700+ IT professionals – consultants, architects, developers, data scientists, security, DevOps, and QA engineers – to take charge of everything from requirements elicitation and software design to coding, deployment, and support.</Accordion.Panel>
      </Accordion.Item> */}
    </Accordion>
  );
}