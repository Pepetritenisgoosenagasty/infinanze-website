import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { assetIndex } from "public/assets";
import React from "react";
import { BsChevronRight } from "react-icons/bs";

const WhoWeAreSection = () => {
  const largeScreen = useMediaQuery('(min-width: 900px)');
  return (
    <div>
      <SimpleGrid cols={3} spacing="xl" breakpoints={[
        { maxWidth: 980, cols: 2, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}>
        <div>
          <Card shadow="sm" p="lg" radius="md" w="full" withBorder sx={{minHeight: 350}}>
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

            <Link href="/services/software-development" passHref>
            <div className="text-[#9320CC] flex items-center cursor-pointer mt-2">
              <Text size="xs" weight={600} mr="sm" mt="sm">
              FIND OUT MORE
              </Text>
              <div className="mt-3">
             <BsChevronRight fontSize={12} />
             </div>
            </div>
            </Link>
          </Card>
        </div>
        <div>
          <Card shadow="sm" p="lg" radius="md" withBorder sx={{minHeight: 350}}>
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

            <Link href="/services/it-consulting" passHref>
            <div className="text-[#9320CC] flex items-center cursor-pointer mt-2">
              <Text size="xs" weight={600} mr="sm" mt="sm">
              FIND OUT MORE
              </Text>
              <div className="mt-3">
             <BsChevronRight fontSize={12} />
             </div>
            </div>
            </Link>
          </Card>
        </div>
        <div>
          <Card shadow="sm" p="lg" radius="md" withBorder sx={{minHeight: 350}}>
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

            <Link href="/services/web-development" passHref>
            <div className="text-[#9320CC] flex items-center cursor-pointer mt-2">
              <Text size="xs" weight={600} mr="sm" mt="sm">
              FIND OUT MORE
              </Text>
              <div className="mt-3">
             <BsChevronRight fontSize={12} />
             </div>
            </div>
            </Link>
          </Card>
        </div>
        <div>
          <Card shadow="sm" p="lg" radius="md" withBorder sx={{minHeight: 350}}>
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

            <Link href="/services/mobile-app-development" passHref>
            <div className="text-[#9320CC] flex items-center cursor-pointer mt-2">
              <Text size="xs" weight={600} mr="sm" mt="sm">
              FIND OUT MORE
              </Text>
              <div className="mt-3">
             <BsChevronRight fontSize={12} />
             </div>
            </div>
            </Link>
          </Card>
        </div>
        <div>
          <Card shadow="sm" p="lg" radius="md" withBorder sx={{minHeight: 350}}>
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
            <Link href="/services/mobile-app-development" passHref>
            <div className="text-[#9320CC] flex items-center cursor-pointer mt-2">
              <Text size="xs" weight={600} mr="sm" mt="sm">
              FIND OUT MORE
              </Text>
              <div className="mt-3">
             <BsChevronRight fontSize={12} />
             </div>
            </div>
            </Link>
          </Card>
        </div>
        <div>
          <Card shadow="sm" p="lg" radius="md" withBorder sx={{minHeight: 350}}>
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
            We design your product with a team that follows a defined design process, fulfills deadlines, and produces a high-quality end result
            </Text>

              <Link href="/services/ux-design" passHref>
            <div className="text-[#9320CC] flex items-center cursor-pointer mt-2 h-full">
              
              <Text size="xs" weight={600} mr="sm" mt="sm">
              FIND OUT MORE
              </Text>
             <div className="mt-3">
             <BsChevronRight fontSize={12} />
             </div>
            </div>
              </Link>
          </Card>
        </div>
      </SimpleGrid>
    </div>
  );
};

export default WhoWeAreSection;
