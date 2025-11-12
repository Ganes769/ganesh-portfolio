import Container from "@components/container";
import GridContainer from "@components/grid-container";
import {
  dataBase,
  otherTools,
  skills,
  versionControl,
} from "@constants/content";

export default function Skills() {
  return (
    <Container>
      <div className="">
        <p className="text-4xl leading-1 mb-3">Technical Skills</p>
        <p className="leading-1">
          Experienced software engineer specialising in frontend development with React
          and TypeScript. Passionate about building scalable, maintainable applications
          that deliver exceptional user experiences. Strong problem-solving abilities
          combined with a commitment to writing clean, efficient code and following
          industry best practices.
        </p>
        <p className="leading-1 mt-2">
          My technical expertise spans the full development lifecycle, from initial
          design to deployment and maintenance. I stay current with emerging technologies
          and continuously refine my skills through hands-on projects and professional
          development.
        </p>

        {/* Core Technologies */}
        <div className="mt-8">
          <p className="font-semibold text-xl mb-4">Core Technologies</p>
          <div className="px-1">
            <GridContainer GridData={skills} />
          </div>
        </div>

        {/* Version Control*/}
        <div className="mt-6">
          <p className="font-semibold text-xl mb-4">Version Control & Collaboration</p>
          <div className="px-1">
            <GridContainer GridData={versionControl} />
          </div>
        </div>

        {/* DataBase */}
        <div className="mt-6">
          <p className="font-semibold text-xl mb-4">Database Management</p>
          <div className="px-1">
            <GridContainer GridData={dataBase} />
          </div>
        </div>

        {/* Other Tools */}
        <div className="mt-6">
          <p className="font-semibold text-xl mb-4">Development Tools</p>
          <div className="px-1">
            <GridContainer GridData={otherTools} />
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-8">
          <p className="font-semibold text-xl mb-4">Professional Skills</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Problem Solving</h4>
              <p className="text-sm text-gray-600">
                Analytical approach to debugging and optimising code performance,
                with experience tackling complex technical challenges.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Team Collaboration</h4>
              <p className="text-sm text-gray-600">
                Strong communication skills with experience working in Agile teams,
                participating in code reviews, and pair programming sessions.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Continuous Learning</h4>
              <p className="text-sm text-gray-600">
                Committed to professional development through technical reading,
                online courses, and staying updated with industry trends.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Attention to Detail</h4>
              <p className="text-sm text-gray-600">
                Meticulous approach to code quality, testing, and documentation,
                ensuring robust and maintainable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
