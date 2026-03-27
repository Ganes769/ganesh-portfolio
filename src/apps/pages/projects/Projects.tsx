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
      title: "DevPilot Repository Assistant",
      description:
        "FastAPI-based repository assistant that scans source files, chunks content, generates embeddings, stores vectors in Qdrant, and answers natural-language codebase questions using Ollama.",
      technologies: [
        "FastAPI",
        "Pydantic",
        "Qdrant",
        "sentence-transformers",
        "Ollama",
        "AI",
        "LLM",
      ],
      highlights: [
        "Built end-to-end indexing flow for scanning, safe file reading, chunking, embedding, and vector storage",
        "Implemented semantic retrieval with score filtering and contextual answering through Ollama",
        "Created CLI commands to index repositories and ask questions directly from terminal",
        "Added source-aware responses that return answer text with relevant file references",
      ],
    },
    {
      title: "Cloudinary-like Image Processing Backend",
      description:
        "Backend service for authenticated image upload, transformation, and retrieval with metadata, pagination, and multi-format delivery.",
      technologies: [
        "Node.js",
        "Express",
        "JWT",
        "Image Processing",
        "Cloud Storage",
        "REST API",
      ],
      highlights: [
        "Implemented secure user authentication with sign-up, login, and JWT-protected endpoints",
        "Built upload and list APIs with image metadata and paginated responses",
        "Supported transformations including resize, crop, rotate, watermark, filters, and format conversion",
        "Improved reliability with validation, error handling, caching, and rate limiting",
      ],
    },
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
