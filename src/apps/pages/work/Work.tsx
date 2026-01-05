import Container from "@components/container";
import TimeLine from "@components/timeline";
export default function Work() {
  const workExperience = [
    {
      company: {
        name: "Skillrank.io",
        duration: "Dec 2024 - Present",
        role: "Software Engineer",
      },
      contribute: [
        "Developed a comprehensive web application for SkillRank, designed to streamline the recruitment process by automating candidate assessments and evaluations using React and TypeScript.",
        "Contributed to the development of the Redline Firewatch mobile application using React Native, focusing on delivering a seamless and responsive user experience across iOS and Android platforms.",
        "Designed and implemented RESTful APIs to handle user interactions and data processing efficiently, ensuring optimal performance and scalability.",
        "Collaborated with cross-functional teams using Agile methodologies, participating in daily stand-ups and sprint planning sessions.",
        "Implemented comprehensive testing strategies to ensure code quality and reliability.",
      ],
    },
    {
      company: {
        name: "LogicaBeans Pvt. Ltd.",
        duration: "May 2024 - Sept 2024",
        role: "Frontend Developer Intern",
      },
      contribute: [
        "Developed a Time Management System featuring a full-featured rich text editor using ReactJS and TypeScript, enhancing team productivity and collaboration.",
        "Built a robust, multi-functional text editor integrated within the time management platform, supporting advanced features including formatting, auto-save functionality, and content tagging.",
        "Gained hands-on experience with modern frontend development practices, including component-based architecture and state management.",
        "Worked closely with senior developers to implement best practices in code structure, documentation, and version control using Git.",
      ],
    },
  ];
  return (
    <Container>
      <div>
        <p className="text-2xl leading-1 mb-3 capitalize ml-1">
          Work Experience
        </p>
        <p className="mb-6 text-gray-600">
          Professional experience building scalable web applications and mobile
          solutions.
        </p>
        {workExperience.map((it, index) => (
          <TimeLine
            key={index}
            company={it.company}
            contribute={it.contribute}
          />
        ))}
      </div>
    </Container>
  );
}
