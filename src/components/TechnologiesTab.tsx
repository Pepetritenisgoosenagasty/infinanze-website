import { Group, Tabs, TabsProps } from '@mantine/core';
import Image from 'next/image';
import { assetIndex } from 'public/assets';
import React from 'react'
import CSS from './Svg/CSS';
import Html from './Svg/Html';
import JavaScript from './Svg/JavaScript';
import ReactIcon from './Svg/ReactIcon';

function StyledTabs(props: TabsProps) {
    return (
      <Tabs
        unstyled
        defaultValue="web"
        styles={(theme) => ({
          tab: {
            ...theme.fn.focusStyles(),
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
            color:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[0]
                : theme.colors.gray[9],
            border: `1px solid ${
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[4]
            }`,
            paddingInline: "0px !important",
            marginInline: "20px !important",
            // padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
            cursor: 'pointer',
            fontSize: theme.fontSizes.sm,
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
  
            '&:disabled': {
              opacity: 0.5,
              cursor: 'not-allowed',
            },
  
            '&:not(:first-of-type)': {
              borderLeft: 0,
            },
  
            '&[data-active]': {
              backgroundColor: '#fff',
              borderColor: '#006691',
              color: '#1974FB',
              borderBottom: '3px solid #1974FB'
            },
          },
  
          tabsList: {
            display: 'flex',
          },
        })}
        {...props}
      />
    );
  }

const TechnologiesTab = () => {
    const Styles = {
        border: 'none',
        height: '50px',
        color: '#1212124D',
        fontSize: '14px',
        fontWeight: 700,
        borderRadius: 'none',
      };
  return (
    <div>
        <StyledTabs unstyled>
          <div className="rounded-lg min-h-[80px] service-card p-5 mt-8">
          <Tabs.List>
                <Tabs.Tab value="web" sx={Styles}>
                Web
                </Tabs.Tab>
                <Tabs.Tab value="mobile" sx={Styles}>
                Mobile
                </Tabs.Tab>
              <Tabs.Tab value="desktop" sx={Styles}>
              Desktop
                </Tabs.Tab>
                <Tabs.Tab value="platform" sx={Styles}>
                Platform
                </Tabs.Tab>
                <Tabs.Tab value="big_data" sx={Styles}>
                Big Data
                </Tabs.Tab>
                <Tabs.Tab value="machine_learning" sx={Styles}>
                Machine Learning
                </Tabs.Tab>
                <Tabs.Tab value="devops" sx={Styles}>
                DevOPs
                </Tabs.Tab>
                <Tabs.Tab value="cloud" sx={Styles}>
                Cloud
                </Tabs.Tab>
                <Tabs.Tab value="test" sx={Styles}>
                Test Automation tool
                </Tabs.Tab>
              </Tabs.List>
          </div>
          <div className="rounded-lg min-h-[500px] service-card my-6 px-20 py-20">
          <Tabs.Panel value="web">
              <div className='text-left'>
              <h1 className='font-bold text-[20px]'>Front End</h1>

              <div className='my-6'>
                <Group spacing="xl">
                  <Html />
                    <CSS />
                    <JavaScript />
                  <ReactIcon />
                </Group>
              </div>
              </div>
              <div className='text-left mt-12'>
              <h1 className='font-bold text-[20px]'>Backend End</h1>

              <div className='my-6'>
                <Group spacing="xl">
                 <Image src={assetIndex.SVG.nodejs} alt=''width={100} height={100}/>
                </Group>
              </div>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="mobile">
            <div className='text-left'>
              <h1 className='font-bold text-[20px]'>Android and IOS</h1>

              <div className='my-6'>
                <Group spacing="xl">
                 <Image src={assetIndex.SVG.react_native} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.flutter} alt=''width={100} height={100}/>
                </Group>
              </div>
              </div>
            </Tabs.Panel>
          </div>
        </StyledTabs>
    </div>
  )
}

export default TechnologiesTab