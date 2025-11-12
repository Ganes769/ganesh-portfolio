import { FaReact, FaSass, FaAws } from "react-icons/fa";
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
import { MdEmail } from "react-icons/md";
export const dataBase = [
  {
    name: "MySql",
    icon: <SiMysql size={25} color="#4479A1" />,
  },
  {
    name: "Transact-SQL",
    icon: <BsFiletypeSql size={20} color="#CC2927" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql size={20} color="#336791" />,
  },
];
export const skills = [
  {
    name: "React JS",
    icon: <FaReact size={20} color="#61DAFB" />,
  },
  {
    name: "Next JS",
    icon: <TbBrandNextjs size={20} color="#000000" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine size={23} color="#F7DF1E" />,
  },
  {
    name: "TypeScript",
    icon: <TbBrandTypescript size={20} color="#3178C6" />,
  },
  {
    name: "Python",
    icon: <FaPython size={20} color="#3776AB" />,
  },
  {
    name: "FastAPI",
    icon: <SiFastapi size={20} color="#009688" />,
  },
  {
    name: "HTML, CSS",
    icon: <ImHtmlFive2 size={20} color="#E34F26" />,
  },
  {
    name: "SASS",
    icon: <FaSass size={22} color="#CC6699" />,
  },
  {
    name: "GraphQL",
    icon: <BiLogoGraphql size={20} color="#E10098" />,
  },
  {
    name: "Tailwind CSS",
    icon: <TbBrandTailwind size={22} color="#06B6D4" />,
  },
];

export const versionControl = [
  {
    name: "Git",
    icon: <FaGitAlt size={20} color="#F05032" />,
  },
  {
    name: "GitHub",
    icon: <LiaGithubSquare size={25} color="#181717" />,
  },
  {
    name: "GitLab",
    icon: <FiGitlab size={25} color="#FC6D26" />,
  },
  {
    name: "BitBucket",
    icon: <TbBrandBitbucket size={20} color="#0052CC" />,
  },
];
export const otherTools = [
  {
    name: "AWS",
    icon: <FaAws size={25} color="#FF9900" />,
  },
  {
    name: "AWS Lambda",
    icon: <SiAwslambda size={20} color="#FF9900" />,
  },
  {
    name: "AWS S3",
    icon: <FaAws size={20} color="#569A31" />,
  },
  {
    name: "AWS Cognito",
    icon: <FaAws size={20} color="#DD344C" />,
  },
  {
    name: "Step Functions",
    icon: <FaAws size={20} color="#FF4F8B" />,
  },
  {
    name: "AWS EC2",
    icon: <FaAws size={20} color="#FF9900" />,
  },
  {
    name: "AWS RDS",
    icon: <FaAws size={20} color="#527FFF" />,
  },
  {
    name: "DynamoDB",
    icon: <FaAws size={20} color="#4053D6" />,
  },
  {
    name: "CloudWatch",
    icon: <FaAws size={20} color="#FF4F8B" />,
  },
  {
    name: "API Gateway",
    icon: <FaAws size={20} color="#FF4F8B" />,
  },
  {
    name: "Serverless",
    icon: <SiServerless size={20} color="#FD5750" />,
  },
  {
    name: "Docker",
    icon: <LiaDocker size={25} color="#2496ED" />,
  },
  {
    name: "Postman",
    icon: <SiPostman size={20} color="#FF6C37" />,
  },
  {
    name: "Jira",
    icon: <SiJira size={20} color="#0052CC" />,
  },
  {
    name: "Confluence",
    icon: <LiaConfluence size={20} color="#172B4D" />,
  },
  {
    name: "ClickUp",
    icon: <SiClickup size={20} color="#7B68EE" />,
  },
  {
    name: "Zoho",
    icon: <SiZoho size={25} color="#C8202E" />,
  },
  {
    name: "Source Tree",
    icon: <LiaSourcetree size={25} color="#0052CC" />,
  },
];

export const socialLinks = [
  { icon: <MdEmail size={22} />, url: "mailto:ganeshsnawali@gmail.com" },
  { icon: <IoLogoGithub size={22} />, url: "https://github.com/Ganes769" },
  {
    icon: <IoLogoLinkedin size={22} />,
    url: "https://www.linkedin.com/in/ganesh-gnawali-5638181a0/",
  },
];
