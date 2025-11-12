import Container from "@components/container";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "SkillRank Recruitment Platform",
      description:
        "Comprehensive web application designed to streamline the recruitment process by automating candidate assessments and evaluations.",
      technologies: ["React", "TypeScript", "REST API", "Node.js"],
      highlights: [
        "Implemented automated candidate assessment workflows",
        "Designed and integrated RESTful APIs for efficient data processing",
        "Built responsive UI components following modern design patterns",
        "Collaborated with cross-functional teams using Agile methodologies",
      ],
    },
    {
      title: "Redline Firewatch Mobile App",
      description:
        "React Native application for fire monitoring and alert systems, delivering seamless experience across iOS and Android platforms.",
      technologies: ["React Native", "TypeScript", "Mobile Development"],
      highlights: [
        "Developed cross-platform mobile application using React Native",
        "Implemented real-time alert and notification systems",
        "Ensured responsive design across various device sizes",
        "Optimised performance for smooth user experience",
      ],
    },
    {
      title: "Time Management System with Rich Text Editor",
      description:
        "Full-featured text editor integrated within a time management platform, supporting advanced formatting and collaboration features.",
      technologies: ["React", "TypeScript", "Rich Text Editor", "Auto-save"],
      highlights: [
        "Built robust multi-functional text editor from scratch",
        "Implemented auto-save functionality to prevent data loss",
        "Added content tagging and formatting features",
        "Integrated with time tracking and project management tools",
      ],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Modern, responsive portfolio website built with React and TypeScript, showcasing projects and technical skills.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/Ganes769",
      liveUrl: "https://www.sagar41.com.np",
      highlights: [
        "Designed and developed fully responsive portfolio from scratch",
        "Implemented modern UI/UX principles with Tailwind CSS",
        "Optimised for performance and SEO",
        "Deployed using GitHub Pages with CI/CD pipeline",
      ],
    },
  ];

  return (
    <Container>
      <div>
        <p className="text-2xl leading-1 mb-3 capitalize ml-1">Projects</p>
        <p className="mb-6 text-gray-600">
          A collection of projects I've worked on, demonstrating my technical
          skills and problem-solving abilities.
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-700 mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-3">
                <p className="font-semibold text-gray-700 mb-2">
                  Key Highlights:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-sm">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
