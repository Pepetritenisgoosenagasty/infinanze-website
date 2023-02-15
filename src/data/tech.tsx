import { SiBlockchaindotcom, SiRobotframework } from "react-icons/si";
import { GiRobberMask } from "react-icons/gi";
import { AiOutlineCloudServer } from "react-icons/ai";
import { GiRiotShield } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa";
import Learning from "@/components/Svg/Learning";

interface TechiesProps {
    id: number;
    name: string;
    icon: any,
    description: string
}


export const techies: TechiesProps[] = [
    {
        id: 1,
        name: 'Artificial intelligence',
        icon: <SiRobotframework size={50} color="#1974FB"/>,
        description: 'Use AI-based algorithms like a machine and deep learning to automate any operation, gain insights from Big Data, ensure fail-safe decisions of your employees, and more'
    },
    {
        id: 2,
        name: 'Big Data',
        icon: <FaDatabase size={50} color="#1974FB"/>,
        description: 'Effective storing, processing, and analysis of voluminous data.'
    },
    {
        id: 3,
        name: 'Cloud Computing',
        icon:  <AiOutlineCloudServer size={50} color="#1974FB"/>,
        description: 'Optimized cost of IT infrastructure maintenance, on-demand resource scalability, data security. Quick cloud app deployment and smooth app migration to the cloud.'
    },
    {
        id: 4,
        name: 'Blockchain',
        icon: <SiBlockchaindotcom size={50} color="#1974FB"/>,
        description: 'Solutions for transparent supply chain management, financial data recording, NFT trading, cryptocurrency mining, clinical trial tracking, and more.'
    },
    {
        id: 5,
        name: 'Internet of Things',
        icon: <GiRiotShield size={50} color="#1974FB"/>,
        description: 'Solutions for preventive machinery maintenance, optimization of energy consumption, environmental monitoring, remote medical diagnostics and treatment, smart factories, and more.'
    },
    {
        id: 6,
        name: 'Augmented Reality',
        icon: <GiRobberMask size={50} color="#1974FB"/>,
        description: 'Integrating virtual objects into real-world environment. Used extensively for marketing and educational purposes.'
    },
];

export const fullScaleData = [
    {
        id: 1,
        icon: <Learning />,
        title: 'Business Analysis',
        description: 'Our analysts do requirements engineering and define the scope of the solution with a focus on the requirements of your target audience. Additionally, they serve as a link between business stakeholders and an IT team to maintain coordination among all parties.',
    },
    {
        id: 2,
        icon: <Learning />,
        title: 'Frontend Development',
        description: 'To comprehend their needs and incorporate these insights into UI design, our web designers carefully examine the user audience. With project stakeholders, we determine the appearance and feel of a web application before using front-end coding to make it functional.',
    },
    {
        id: 3,
        icon: <Learning />,
        title: 'Backend Development',
        description: 'On the back end, our experts precisely implement the business logic of your web application. To ensure quick and high-quality coding, we rely on tested frameworks.',
    },
    {
        id: 4,
        icon: <Learning />,
        title: 'Integration',
        description: 'To interface your web application with company or outside systems and services, we set up APIs. Integrating an app allows seamless data synchronization between platforms.',
    },
    {
        id: 5,
        icon: <Learning />,
        title: 'Help Desk',
        description: 'We deploy hot-fixes within 24 hours to avoid or fix any usage, technological, and code issues that may develop, and we offer L1, L2, and L3 support services. We assist you in making your web application highly available and functionally error-free.',
    },
    {
        id: 6,
        icon: <Learning />,
        title: 'Support and evolution',
        description: 'We make improvements to your web-based software to keep it effective, marketable, and compliant with all of your changing company needs. We can deploy urgent upgrades in 1-2 days thanks to our proven DevOps procedure.',
    },
]


export const developers = [
    {
        id: 1,
        name: "UI Designers"
    },
    {
        id: 2,
        name: "UX Designers"
    },
    {
        id: 3,
        name: "100+ frontend developers"
    },
    {
        id: 4,
        name: "100+ Backend developers"
    },
    {
        id: 5,
        name: "100+ Web Architects"
    },
    {
        id: 6,
        name: "100+ Testing Engineers"
    },
]

export const pricing = [
    {
        id: 1,
        title: 'Fixed Price',
        description: "Best suited for somewhat small and brief projects with clearly specified needs that won't change (websites with fewer than 50 pages; small company web portals; MVPs for simple web solutions)."
    },
    {
        id: 2,
        title: 'Time And Material',
        description: "Best suited for somewhat small and brief projects with clearly specified needs that won't change (websites with fewer than 50 pages; small company web portals; MVPs for simple web solutions)."
    },
    {
        id: 3,
        title: 'T&M with Cap',
        description: "Best suited for somewhat small and brief projects with clearly specified needs that won't change (websites with fewer than 50 pages; small company web portals; MVPs for simple web solutions)."
    },
]