import Container from "@components/container";
import TimeLine from "@components/timeline";
export default function Work() {
  const workExperience = [
    {
      company: {
        name: "SkillRank.io",
        duration: "Aug 2024 - Present",
        role: "Software Engineer",
      },
      contribute: [
        "Developed a comprehensive web application for SkillRank, designed to streamline the recruitment process by automating candidate assessments and evaluations.",
        "Contributed to the development of the Redline Firewatch application using React Native, focusing on delivering a seamless and responsive user experience across iOS and Android platforms.",
        "Designed and implemented RESTful APIs to handle user interactions and data processing efficiently",
      ],
    },
    {
      company: {
        name: "LogicaBeans Pvt. Ltd.",
        duration: "April 2024 - August 2024",
        role: "Forntend Developer Intern",
      },
      contribute: [
        "Worked on a Time Management System project for Logica Bean, focusing on developing a full-featured text editor using ReactJS and TypeScript",
        "Utilized ReactJS and TypeScript to build a robust, multi-functional text editor integrated within the time management platform, supporting features like formatting, auto-save, and content tagging.",
      ],
    },
  ];
  return (
    <Container>
      <div>
        <p className="text-2xl leading-1 mb-3 capitalize ml-1">experience</p>
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
