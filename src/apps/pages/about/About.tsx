import Container from "@components/container";
import GridContainer from "@components/grid-container";
import { EducationTimeLine } from "@components/education-timeline";
import {
  dataBase,
  otherTools,
  skills,
  versionControl,
} from "@constants/content";

export default function About() {
  return (
    <Container>
      <div>
        <div className="mb-5">
          <p className="text-3xl leading-1">Hi, I'm Ganesh Gnawali</p>
          <span className="font-light text-gray-600">
            Software Engineering Intern | Building Scalable Web Applications
          </span>
          🇳🇵 🇬🇧
        </div>
        <p className="leading-1">
          Aspiring software engineer with hands-on experience in full-stack development,
          actively seeking opportunities in the UK tech industry. With over a year of
          professional experience building production-ready applications using React,
          TypeScript, and modern web technologies, I'm passionate about writing clean,
          maintainable code and solving complex technical challenges.
        </p>
        <p className="leading-1 mt-2">
          Throughout my internship and work experience, I've contributed to real-world projects
          including recruitment platforms and time management systems. I specialise in frontend
          development whilst maintaining a strong understanding of backend technologies, RESTful
          APIs, and database management. I'm particularly interested in working with companies
          that value innovation, continuous learning, and best coding practices.
        </p>
        <p className="leading-1 mt-2">
          Beyond coding, I'm an avid reader who aims to finish at least one book per month to
          broaden my perspectives. I also enjoy trekking and photography, which you can view on
          my{" "}
          <a
            className="text-blue-600 hover:underline"
            href="https://www.pexels.com/@lostsoul16/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pexels profile
          </a>
          . These hobbies help me maintain a healthy work-life balance and bring fresh
          perspectives to problem-solving.
        </p>
      </div>
      {/* Skills Section */}
      <div>
        <p className="font-semibold  mt-10 capitalize">Skills</p>
        <div className="px-1">
          <GridContainer GridData={skills} />
        </div>
      </div>

      {/* Version Control*/}
      <div>
        <p className="font-semibold  mt-4 capitalize">Version Control</p>
        <div className="px-1">
          <GridContainer GridData={versionControl} />
        </div>
      </div>

      {/* DataBase */}
      <div>
        <p className="font-semibold  mt-4 capitalize">DataBase</p>
        <div className="px-1">
          <GridContainer GridData={dataBase} />
        </div>
      </div>
      {/* Other Tools */}
      <div>
        <p className="font-semibold  mt-4 capitalize">Tools</p>
        <div className="px-1">
          <GridContainer GridData={otherTools} />
        </div>
      </div>
      <div className="mt-5">
        <EducationTimeLine />
      </div>
    </Container>
  );
}
