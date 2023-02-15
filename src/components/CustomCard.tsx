import { Card, Group, Image, Text } from '@mantine/core'
import { assetIndex } from 'public/assets'
import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

const CustomCard = ({data}: any) => {
  return (
    <Card shadow="sm" p="lg" radius="md" w="full" withBorder>
              <Card.Section>
                <Image
                  src={assetIndex.Image.explore1}
                  height={160}
                  alt="Norway"
                />
              </Card.Section>
  
              <Group position="apart" mt="md" mb="xs">
                <Text weight={600} fz="lg">
                  {data.title}
                </Text>
              </Group>
  
              <Text size="md" color="dimmed">
                {data?.description}
              </Text>
  
              <div className="text-[#9320CC] flex items-center cursor-pointer mt-2">
                <Text size="xs" weight={600} mr="sm" mt="sm">
                  READ MORE
                </Text>
                <BsChevronRight fontSize={12} />
              </div>
            </Card>
  )
}

export default CustomCard

