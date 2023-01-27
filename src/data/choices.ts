import { assetIndex } from "public/assets";

interface ChoicesProps {
    id: number;
    icon: any;
    title: string;
    description: string;
}

export const choices: ChoicesProps[] = [
    {
        id: 1,
        icon: assetIndex.SVG.personal,
        title: 'Personal Touch',
        description: "We involve our clients at every stage of the development process. We give them control over their specifications while also being clear about deliverables."
    },
    {
        id: 2,
        icon: assetIndex.SVG.quality,
        title: 'Top Quality',
        description: "Our team of designers, developers and engineers are elite industry professionals with vast experience developing applications in a vast amount of industries. "
    },
    {
        id: 3,
        icon: assetIndex.SVG.solution,
        title: 'Tailored Solutions',
        description: "We involve our clients at every stage of the development process. We give them control over their specifications while also being clear about deliverables."
    },
    {
        id: 4,
        icon: assetIndex.SVG.consult,
        title: 'Consulting Expertise',
        description: "We recommend working with software consulting companies with a solid track record. Our portfolio is one of the most extensive in the market."
    },
    {
        id: 5,
        icon: assetIndex.SVG.business,
        title: 'Improve Business Growth',
        description: "Our team of designers, developers and engineers are elite industry professionals with vast experience developing applications in a vast amount of industries. "
    },
    {
        id: 6,
        icon: assetIndex.SVG.success,
        title: 'Proven Sucess',
        description: "When working with a vendor, always choose the developer who can offer detailed examples or case studies. We have an extensive portfolio of successful software applications that produce specific deliverables"
    },
]