import { FaReact, FaSass, FaAws, FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import {
  TbBrandBitbucket,
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
} from "react-icons/tb";
import {
  LiaGithubSquare,
  LiaConfluence,
  LiaSourcetree,
  LiaDocker,
} from "react-icons/lia";
import {
  SiZoho,
  SiPostgresql,
  SiPostman,
  SiClickup,
  SiJira,
  SiMysql,
  SiServerless,
  SiAwslambda,
  SiFastapi,
} from "react-icons/si";

import { ImHtmlFive2 } from "react-icons/im";
import { RiJavascriptLine } from "react-icons/ri";
import { BsFiletypeSql } from "react-icons/bs";
import { FiGitlab } from "react-icons/fi";
import { BiLogoGraphql } from "react-icons/bi";
import { FaPython } from "react-icons/fa";

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
export const dataBase = [
  {
    name: "MySql",
    icon: <SiMysql size={25} color="#000000" />,
  },
  {
    name: "Transact-SQL",
    icon: <BsFiletypeSql size={20} color="#000000" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={20} color="#000000" />,
  },
];
export const skills = [
  {
    name: "React JS",
    icon: <FaReact size={20} color="#000000" />,
  },
  {
    name: "Next JS",
    icon: <TbBrandNextjs size={20} color="#000000" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine size={23} color="#000000" />,
  },
  {
    name: "TypeScript",
    icon: <TbBrandTypescript size={20} color="#000000" />,
  },
  {
    name: "Python",
    icon: <FaPython size={20} color="#000000" />,
  },
  {
    name: "FastAPI",
    icon: <SiFastapi size={20} color="#000000" />,
  },
  {
    name: "HTML, CSS",
    icon: <ImHtmlFive2 size={20} color="#000000" />,
  },
  {
    name: "SASS",
    icon: <FaSass size={22} color="#000000" />,
  },
  {
    name: "GraphQL",
    icon: <BiLogoGraphql size={20} color="#000000" />,
  },
  {
    name: "Tailwind CSS",
    icon: <TbBrandTailwind size={22} color="#000000" />,
  },
];

export const versionControl = [
  {
    name: "Git",
    icon: <FaGitAlt size={20} color="#000000" />,
  },
  {
    name: "GitHub",
    icon: <LiaGithubSquare size={25} color="#000000" />,
  },
  {
    name: "GitLab",
    icon: <FiGitlab size={25} color="#000000" />,
  },
  {
    name: "BitBucket",
    icon: <TbBrandBitbucket size={20} color="#000000" />,
  },
];
export const otherTools = [
  {
    name: "AWS",
    icon: <FaAws size={25} color="#000000" />,
  },
  {
    name: "AWS Lambda",
    icon: <SiAwslambda size={20} color="#000000" />,
  },
  {
    name: "AWS S3",
    icon: <FaAws size={20} color="#000000" />,
  },
  {
    name: "AWS Cognito",
    icon: <FaAws size={20} color="#000000" />,
  },
  {
    name: "Step Functions",
    icon: <FaAws size={20} color="#000000" />,
  },
  {
    name: "AWS EC2",
    icon: <FaAws size={20} color="#000000" />,
  },
  {
    name: "AWS RDS",
    icon: <FaAws size={20} color="#000000" />,
  },
  {
    name: "DynamoDB",
    icon: <FaAws size={20} color="#000000" />,
  },
  {
    name: "CloudWatch",
    icon: <FaAws size={20} color="#000000" />,
  },
  {
    name: "API Gateway",
    icon: <FaAws size={20} color="#000000" />,
  },
  {
    name: "Serverless",
    icon: <SiServerless size={20} color="#000000" />,
  },
  {
    name: "Docker",
    icon: <LiaDocker size={25} color="#000000" />,
  },
  {
    name: "Postman",
    icon: <SiPostman size={20} color="#000000" />,
  },
  {
    name: "Jira",
    icon: <SiJira size={20} color="#000000" />,
  },
  {
    name: "Confluence",
    icon: <LiaConfluence size={20} color="#000000" />,
  },
  {
    name: "ClickUp",
    icon: <SiClickup size={20} color="#000000" />,
  },
  {
    name: "Zoho",
    icon: <SiZoho size={25} color="#000000" />,
  },
  {
    name: "Source Tree",
    icon: <LiaSourcetree size={25} color="#000000" />,
  },
];

export const socialLinks = [
  {
    icon: <MdEmail size={22} color="#000000" />,
    url: "mailto:ganeshsnawali@gmail.com",
  },
  {
    icon: <IoLogoGithub size={22} color="#000000" />,
    url: "https://github.com/Ganes769",
  },
  {
    icon: <IoLogoLinkedin size={22} color="#000000" />,
    url: "https://www.linkedin.com/in/ganesh-gnawali-5638181a0/",
  },
];

export const contactDetails = [
  {
    label: "Email",
    value: "ganeshsnawali@gmail.com",
    href: "mailto:ganeshsnawali@gmail.com",
    icon: <MdEmail size={24} color="#000000" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ganesh-gnawali-5638181a0",
    href: "https://www.linkedin.com/in/ganesh-gnawali-5638181a0/",
    icon: <IoLogoLinkedin size={24} color="#000000" />,
  },
  {
    label: "Phone",
    value: "+44 7350142084",
    href: "tel:+447350142084",
    icon: <MdPhone size={24} color="#000000" />,
  },
  {
    label: "Github",
    value: "+44 7350142084",
    href: "https://github.com/Ganes769",
    icon: <FaGithub size={24} color="#000000" />,
  },
];
