import { SiBlockchaindotcom, SiRobotframework } from "react-icons/si";
import { GiRobberMask } from "react-icons/gi";
import { AiOutlineCloudServer } from "react-icons/ai";
import { GiRiotShield } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa";

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
]