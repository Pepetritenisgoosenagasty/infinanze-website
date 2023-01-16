import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { assetIndex } from "public/assets";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

const WhoWeAreSection = () => {
  return (
    <div>
      <SimpleGrid cols={3} spacing="lg">
        <div>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={assetIndex.Image.explore1}
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={600} color="#9320CC" fz="lg">
                Software Development
              </Text>
            </Group>

            <Text size="md" color="dimmed">
              We can develop reliable, scalable and secure <br /> software
              solutions for any OS, browser and <br /> device.
            </Text>

            <div className="text-[#9320CC] flex items-center cursor-pointer mt-2">
              <Text size="xs" weight={600} mr="sm">
                READ MORE
              </Text>
              <BsChevronRight fontSize={12} />
            </div>
          </Card>
        </div>
        <div>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={assetIndex.Image.explore2}
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={600} color="#9320CC" fz="lg">
              IT Consulting
              </Text>
            </Group>

            <Text size="md" color="dimmed">
            Our team can help to develop and implement an effective IT strategy, assist in smooth digital transformation and system integration. 
            </Text>

            <div className="text-[#9320CC] flex items-center cursor-pointer mt-2">
              <Text size="xs" weight={600} mr="sm">
                READ MORE
              </Text>
              <BsChevronRight fontSize={12} />
            </div>
          </Card>
        </div>
        <div>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={assetIndex.Image.explore3}
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={600} color="#9320CC" fz="lg">
              Web Development
              </Text>
            </Group>

            <Text size="md" color="dimmed">
            We have expert who are willing to develop a good interactive & responsive website to meet your specifications.
            </Text>

            <div className="text-[#9320CC] flex items-center cursor-pointer mt-2">
              <Text size="xs" weight={600} mr="sm">
                READ MORE
              </Text>
              <BsChevronRight fontSize={12} />
            </div>
          </Card>
        </div>
        <div>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={assetIndex.Image.explore4}
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={600} color="#9320CC" fz="lg">
              Mobile Application Development
              </Text>
            </Group>

            <Text size="md" color="dimmed">
            We create a responsive mobile application that fits your brand and can beat your competitors in the IT industry 
            </Text>

            <div className="text-[#9320CC] flex items-center cursor-pointer mt-2">
              <Text size="xs" weight={600} mr="sm">
                READ MORE
              </Text>
              <BsChevronRight fontSize={12} />
            </div>
          </Card>
        </div>
        <div>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={assetIndex.Image.explore5}
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={600} color="#9320CC" fz="lg">
              IOS Application Development
              </Text>
            </Group>

            <Text size="md" color="dimmed">
            We create a responsive IOS application that fits your brand and can beat your competitors in the IT industry 
            </Text>

            <div className="text-[#9320CC] flex items-center cursor-pointer mt-2">
              <Text size="xs" weight={600} mr="sm">
                READ MORE
              </Text>
              <BsChevronRight fontSize={12} />
            </div>
          </Card>
        </div>
        <div>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={assetIndex.Image.explore6}
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={600} color="#9320CC" fz="lg">
              UI/UX Design
              </Text>
            </Group>

            <Text size="md" color="dimmed">
            We can develop reliable, scalable and secure software solutions for any OS, browser and device.
            </Text>

            <div className="text-[#9320CC] flex items-center cursor-pointer mt-2">
              <Text size="xs" weight={600} mr="sm">
                READ MORE
              </Text>
              <BsChevronRight fontSize={12} />
            </div>
          </Card>
        </div>
      </SimpleGrid>
    </div>
  );
};

export default WhoWeAreSection;
