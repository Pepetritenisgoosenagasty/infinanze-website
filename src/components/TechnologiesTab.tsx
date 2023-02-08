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
              <h5 className='font-bold text-[16px]'>Front End</h5>

              <div className='my-6'>
                <Group spacing="xl">
                  <Html />
                    <CSS />
                    <JavaScript />
                  <ReactIcon />
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt='' width={100} height={100}/>
                </Group>
              </div>
              </div>
              <div className='text-left mt-12'>
              <h5 className='font-bold text-[16px]'>Backend End</h5>

              <div className='my-6'>
                <Group spacing="xl">
                 <Image src={assetIndex.SVG.nodejs} alt='' width={100} height={100}/>
                 <Image src="https://upload.wikimedia.org/wikipedia/commons/3/36/Logo.min.svg" alt=''width={100} height={100}/>
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
            <Tabs.Panel value="desktop">
              <div className='text-left'>
              <Group spacing="xl">
                 <Image src={assetIndex.SVG.python} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.cplus} alt=''width={100} height={100}/>
                 <Image src={assetIndex.Image.electron} alt=''width={100} height={100}/>
                </Group>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="platform">
              <div className='text-left'>
              {/* <h1 className='font-bold text-[20px]'>Platforms we work with</h1> */}
              <div className='text-left'>
              <Group spacing="xl">
                 <Image src={assetIndex.SVG.adobe_commercean} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.salesforce} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.sap} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.powerBi} alt=''width={100} height={100}/>
                </Group>
              </div>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="big_data">
              <div className='text-left'>
              <Group spacing="xl">
                 <Image src={assetIndex.SVG.mongoDB} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.amazonDB} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.amazonShift} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.amazonDynamo} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.azureBlob} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.azureCosmos} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.azureData} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.apacheBase} alt=''width={100} height={100}/>
                </Group>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="machine_learning">
              <div className='text-left'>
             
              <div className='text-left'>
              <h5 className='font-bold text-[16px]'>Programming Languages</h5>

              <div className='my-6'>
                <Group spacing="xl">
                <Image src={assetIndex.SVG.octave} alt=''width={100} height={100}/>
                <Image src={assetIndex.SVG.r} alt=''width={100} height={100}/>
                </Group>
              </div>
              </div>
              <div className='text-left mt-12'>
              <h5 className='font-bold text-[16px]'>Frameworks</h5>

              <div className='my-6'>
                <Group spacing="xl">
                 <Image src={assetIndex.SVG.opencv} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.tensorFlow} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.touch} alt=''width={100} height={100}/>
                </Group>
              </div>
              </div>
              <div className='text-left mt-12'>
              <h5 className='font-bold text-[16px]'>Libraries</h5>

              <div className='my-6'>
                <Group spacing="xl">
                 <Image src={assetIndex.SVG.sci} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.spacy} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.spark} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.gensim} alt=''width={100} height={100}/>
                </Group>
              </div>
              </div>
             
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="devops">
              <div className='text-left'>
              <div className='text-left '>
              <h5 className='font-bold text-[16px]'>Containerization</h5>
              <div className='my-6'>
                <Group spacing="xl">
                 <Image src={assetIndex.SVG.k8} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.docker} alt=''width={100} height={100}/>
                </Group>
              </div>
              </div>

              <div className='text-left mt-12'>
              <h5 className='font-bold text-[16px]'>Automation</h5>
              <div className='my-6'>
                <Group spacing="xl">
                 <Image src={assetIndex.SVG.terraform} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.anisble} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.packer} alt=''width={100} height={100}/>
             
                </Group>
              </div>
              </div>
              
              <div className='text-left mt-12'>
              <h5 className='font-bold text-[16px]'>CI/CD Tools</h5>
              <div className='my-6'>
                <Group spacing="xl">
                 <Image src={assetIndex.SVG.jenkins} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.gitlab} alt=''width={100} height={100}/>
                </Group>
              </div>
              </div>

              <div className='text-left mt-12'>
              <h5 className='font-bold text-[16px]'>Monitoring</h5>
              <div className='my-6'>
                <Group spacing="xl">
                 <Image src={assetIndex.SVG.grafana} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.prometheous} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.datadog} alt=''width={100} height={100}/>
                </Group>
              </div>
              </div>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="cloud">
              <div className='text-left'>
              <Group spacing="xl">
                 <Image src={assetIndex.SVG.digitalOcean} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.goggle} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.aws} alt=''width={100} height={100}/>
                </Group>
              </div>
            </Tabs.Panel>
            <Tabs.Panel value="test">
              <div className='text-left'>
              <Group spacing="xl">
                 <Image src={assetIndex.SVG.appium} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.selenium} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.fmbt} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.xct} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.postman} alt=''width={100} height={100}/>
                 <Image src={assetIndex.SVG.vs} alt=''width={100} height={100}/>
                </Group>
              </div>
            </Tabs.Panel>
          </div>
        </StyledTabs>
    </div>
  )
}

export default TechnologiesTab