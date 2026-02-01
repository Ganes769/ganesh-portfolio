import Profile from "@assets/profile.jpg";
import Container from "@components/container";
import GridContainer from "@components/grid-container";
import TimeLine from "@components/timeline";
import { SocialLink } from "@components/social-links";
import ScrollFadeInUp from "@components/scroll-fade-in-up";
import {
  dataBase,
  otherTools,
  skills,
  versionControl,
  socialLinks,
  contactDetails,
} from "@constants/content";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const SECTION_IDS = {
  intro: "intro",
  about: "about",
  skills: "skills",
  experience: "experience",
  education: "education",
  projects: "projects",
  contact: "contact",
} as const;

const PROFESSIONAL_SUMMARY =
  "Early-Career Software Engineer with experience building web and mobile applications using React/Next.js and TypeScript. Seeking a graduate or junior role where I can contribute to reliable, user-focused software, integrate REST APIs, follow established engineering practices, and continue developing professional software development skills within a collaborative team.";

const workExperience = [
  {
    company: {
      name: "Skillrank.io",
      duration: "Dec 2024 – Present",
      role: "Software Engineer",
    },
    contribute: [
      "Developed a comprehensive web application for SkillRank, streamlining recruitment with automated candidate assessments using React and TypeScript.",
      "Contributed to the Redline Firewatch mobile application using React Native, delivering a seamless experience across iOS and Android.",
      "Designed and implemented RESTful APIs for user interactions and data processing, ensuring performance and scalability.",
      "Collaborated with cross-functional teams using Agile methodologies, daily stand-ups and sprint planning.",
      "Implemented testing strategies to ensure code quality and reliability.",
    ],
  },
  {
    company: {
      name: "LogicaBeans Pvt. Ltd.",
      duration: "May 2024 – Sept 2024",
      role: "Frontend Developer Intern",
    },
    contribute: [
      "Developed a Time Management System with a full-featured rich text editor using React and TypeScript.",
      "Built a multi-functional text editor with formatting, auto-save and content tagging.",
      "Gained hands-on experience with component-based architecture and state management.",
      "Worked with senior developers on code structure, documentation and Git version control.",
    ],
  },
];

type Project = {
  title: string;
  tagline: string;
  description: string;
  type: "Web App" | "Mobile App" | "Full-stack" | "Portfolio";
  technologies: string[];
  highlights: string[];
  metric?: string;
  githubUrl?: string;
  liveUrl?: string;
  accent: "indigo" | "emerald" | "amber" | "rose" | "sky" | "violet";
};

const projects: Project[] = [
  {
    title: "SkillRank Recruitment Platform",
    tagline: "Automating hiring from assessment to shortlist",
    description:
      "Comprehensive web application that streamlines the recruitment process by automating candidate assessments and evaluations. Built for cross-functional teams using Agile (Scrum, Kanban).",
    type: "Web App",
    technologies: [
      "React",
      "TypeScript",
      "REST API",
      "Node.js",
      "RESTful APIs",
    ],
    highlights: [
      "End-to-end automated candidate assessment workflows",
      "RESTful APIs for secure data processing and integrations",
      "Responsive UI with modern design patterns and accessibility",
      "Agile delivery with Scrum & Kanban; timely collaboration",
    ],
    accent: "indigo",
  },
  {
    title: "Firefighter Operations Mobile App",
    tagline: "Real-time job tracking & shift management",
    description:
      "Cross-platform mobile application for firefighter operations: real-time job tracking, automated shift management, and reliable offline functionality for iOS and Android.",
    type: "Mobile App",
    technologies: [
      "React Native",
      "TypeScript",
      "Offline-first",
      "iOS",
      "Android",
    ],
    highlights: [
      "Real-time job tracking and automated shift management",
      "Offline functionality for field use on iOS and Android",
      "Cross-platform codebase for faster feature parity",
      "Participated in Agile (Scrum/Kanban) with cross-functional teams",
    ],
    accent: "rose",
  },
  {
    title: "AI Gift Recommendation App",
    tagline: "Personalised suggestions via AI chatbot",
    description:
      "Intelligent gift recommendation mobile app integrating an AI chatbot for personalised suggestions. Implements a smart recommendation system to improve user discovery and conversion.",
    type: "Mobile App",
    technologies: [
      "React Native",
      "AI/LLM",
      "TypeScript",
      "Recommendation APIs",
    ],
    highlights: [
      "AI chatbot integration for personalised gift suggestions",
      "Smart recommendation system with ranking and filtering",
      "Mobile-first UX for discovery and checkout flows",
      "Collaborative development in an Agile team",
    ],
    accent: "violet",
  },
  {
    title: "Time Management System & Rich Text Editor",
    tagline: "Productivity and content creation in one place",
    description:
      "Full-featured time management platform with a robust, multi-functional rich text editor. Supports formatting, auto-save, and content tagging—improving user experience and data management.",
    type: "Web App",
    technologies: [
      "React",
      "TypeScript",
      "Rich Text Editor",
      "Auto-save",
      "State Management",
    ],
    highlights: [
      "Multi-functional text editor built from scratch",
      "Auto-save and content tagging to prevent data loss",
      "Improved UX and data management for teams",
      "Component-based architecture and Git version control",
    ],
    accent: "emerald",
  },
  {
    title: "Job Recommendation System",
    tagline: "Next.js + Reed API · 10% CTR improvement",
    description:
      "Personalised job recommendation system built with Next.js and the Reed API. Implements filtering, search, and ranking algorithms to deliver tailored job suggestions and boost engagement.",
    type: "Full-stack",
    technologies: ["Next.js", "Reed API", "JavaScript", "Search & Ranking"],
    highlights: [
      "Filtering, search, and ranking algorithms for tailored suggestions",
      "Integration with Reed API for UK job listings",
      "Improved user engagement with 10% increase in click-through rate (CTR)",
      "Academic project (BSc CS) demonstrating full-stack and API skills",
    ],
    metric: "10% CTR ↑",
    accent: "amber",
  },
  {
    title: "Personal Portfolio",
    tagline: "UK early-career focused · Single-page",
    description:
      "Responsive, single-page portfolio built with React and TypeScript, tailored for the UK job market. Modern UI, scroll-triggered animations, and SEO optimised for discoverability.",
    type: "Portfolio",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/Ganes769",
    liveUrl: "https://www.sagar41.com.np",
    highlights: [
      "Fully responsive single-page layout with smooth scroll",
      "Fade-in-up animations and UK-focused copy",
      "Performance and SEO optimised; deployed via GitHub Pages",
      "Clear sections: Intro, Skills, Experience, Projects, Contact",
    ],
    accent: "sky",
  },
];

export default function SinglePage() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/ganesh-gnawali.pdf";
    link.download = "Ganesh-Gnawali-CV.pdf";
    link.click();
  };

  return (
    <main className="flex flex-col">
      {/* Intro */}
      <section
        id={SECTION_IDS.intro}
        className="min-h-[90vh] flex items-center justify-center px-4 pt-6 pb-12 sm:pt-8 sm:pb-16 bg-white border-b border-gray-200"
      >
        <Container className="!m-0 !p-4 sm:!p-6 md:!mx-auto max-w-4xl !pt-2 sm:!pt-4">
          <div className="flex flex-col items-center text-center -mt-4 sm:-mt-6">
            <ScrollFadeInUp duration={0.7} offsetY={20}>
              <div className="w-full flex justify-center mb-6">
                <img
                  src={Profile}
                  alt="Ganesh Gnawali"
                  className="w-40 h-40 sm:w-52 sm:h-52 object-cover object-center rounded-full border-4 border-black shadow-lg"
                />
              </div>
            </ScrollFadeInUp>
            <ScrollFadeInUp delay={0.1} duration={0.6} offsetY={16}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black">
                Ganesh Gnawali
                <br />
                <span className="text-gray-600 font-normal text-2xl sm:text-3xl md:text-4xl mt-2 block">
                  Software Engineer
                </span>
              </h1>
            </ScrollFadeInUp>
            <ScrollFadeInUp delay={0.15} duration={0.6} offsetY={16}>
              <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl">
                {PROFESSIONAL_SUMMARY}
              </p>
            </ScrollFadeInUp>
            <ScrollFadeInUp delay={0.2} duration={0.6} offsetY={16}>
              <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl">
                Building scalable web & mobile solutions · Based in the UK ·
                Seeking early-career and graduate roles
              </p>
            </ScrollFadeInUp>
            <ScrollFadeInUp delay={0.3} duration={0.5}>
              <div className="mt-2 mb-4">
                <SocialLink SocialData={socialLinks} />
              </div>
            </ScrollFadeInUp>
            <div className="flex flex-nowrap justify-center items-center gap-3 sm:gap-4">
              <a
                href={`#${SECTION_IDS.contact}`}
                className="shrink-0 px-5 py-2.5 rounded-lg bg-black text-white font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors"
              >
                Get in touch
              </a>
              <button
                onClick={handleDownloadCV}
                className="shrink-0 px-5 py-2.5 rounded-lg border-2 border-gray-300 text-black font-medium hover:border-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors"
              >
                Download CV
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* About */}

      {/* Skills */}
      <section
        id={SECTION_IDS.skills}
        className="py-12 sm:py-16 bg-white border-b border-gray-200"
      >
        <Container>
          <ScrollFadeInUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
              Technical skills
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl">
              Frontend-focused with React and TypeScript, plus experience across
              the stack. Relevant for UK graduate and junior roles.
            </p>
          </ScrollFadeInUp>
          <ScrollFadeInUp delay={0.05}>
            <h3 className="font-bold text-black mb-3">Core technologies</h3>
            <div className="px-0 mb-8">
              <GridContainer GridData={skills} />
            </div>
          </ScrollFadeInUp>
          <ScrollFadeInUp delay={0.1}>
            <h3 className="font-bold text-black mb-3">Version control</h3>
            <div className="px-0 mb-8">
              <GridContainer GridData={versionControl} />
            </div>
          </ScrollFadeInUp>
          <ScrollFadeInUp delay={0.1}>
            <h3 className="font-bold text-black mb-3">Database</h3>
            <div className="px-0 mb-8">
              <GridContainer GridData={dataBase} />
            </div>
          </ScrollFadeInUp>
          <ScrollFadeInUp delay={0.15}>
            <h3 className="font-bold text-black mb-3">Tools & cloud</h3>
            <div className="px-0 mb-8">
              <GridContainer GridData={otherTools} />
            </div>
          </ScrollFadeInUp>
          <ScrollFadeInUp delay={0.2}>
            <h3 className="font-bold text-black mt-8 mb-4">
              Professional skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Problem solving",
                  desc: "Analytical debugging and performance optimisation.",
                },
                {
                  title: "Team collaboration",
                  desc: "Agile teams, code reviews and pair programming.",
                },
                {
                  title: "Continuous learning",
                  desc: "Keeping up with industry trends and best practices.",
                },
                {
                  title: "Attention to detail",
                  desc: "Code quality, testing and documentation.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg border border-gray-200"
                >
                  <h4 className="font-bold text-black mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollFadeInUp>
        </Container>
      </section>

      {/* Experience & Education */}
      <section
        id={SECTION_IDS.experience}
        className="py-12 sm:py-16 bg-white border-b border-gray-200"
      >
        <Container>
          <ScrollFadeInUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
              Experience
            </h2>
            <p className="text-gray-600 mb-8">
              Professional experience building scalable web and mobile
              applications.
            </p>
          </ScrollFadeInUp>
          <div className="space-y-0">
            {workExperience.map((it, index) => (
              <ScrollFadeInUp key={index} delay={index * 0.06}>
                <TimeLine company={it.company} contribute={it.contribute} />
              </ScrollFadeInUp>
            ))}
          </div>
          <ScrollFadeInUp delay={0.15}>
            <div id={SECTION_IDS.education}>
              <h3 className="font-bold text-black mt-12 mb-6">Education</h3>
              {/* <EducationTimeLine /> */}
            </div>
          </ScrollFadeInUp>
        </Container>
      </section>

      {/* Projects */}
      <section
        id={SECTION_IDS.projects}
        className="py-14 sm:py-20 bg-white border-b border-gray-200 overflow-hidden"
      >
        <Container className="max-w-5xl">
          <ScrollFadeInUp>
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                Projects
              </h2>
              <p className="text-gray-600 max-w-xl text-sm sm:text-base leading-relaxed">
                Hands-on work across web, mobile, and full-stack.
              </p>
            </div>
          </ScrollFadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <ScrollFadeInUp key={index} delay={index * 0.06}>
                <article className="group h-full flex flex-col bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col h-full p-5 sm:p-6 border-l-4 border-l-black">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-500 border border-gray-200 rounded px-2 py-1">
                        {project.type}
                      </span>
                      <div className="flex items-center gap-1 shrink-0">
                        {project.metric && (
                          <span className="text-xs font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded">
                            {project.metric}
                          </span>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
                            aria-label="GitHub"
                          >
                            <FaGithub size={16} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
                            aria-label="Live site"
                          >
                            <FaExternalLinkAlt size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="font-bold text-black text-lg sm:text-xl leading-snug mb-1 group-hover:text-gray-800 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm font-medium mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>
                    {project.highlights.length > 0 && (
                      <ul className="space-y-1.5 mb-4">
                        {project.highlights.slice(0, 2).map((h, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-xs sm:text-sm text-gray-600"
                          >
                            <span
                              className="text-black shrink-0 mt-0.5"
                              aria-hidden
                            >
                              ✓
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-800 border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollFadeInUp>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section
        id={SECTION_IDS.contact}
        className="py-12 sm:py-16 bg-white border-b border-gray-200"
      >
        <Container>
          <ScrollFadeInUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
              Get in touch
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl">
              I'm open to early-career and graduate software engineering roles
              in the UK. Reach out via email or LinkedIn.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {contactDetails.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={
                    item.href.startsWith("mailto") ||
                    item.href.startsWith("tel")
                      ? "_self"
                      : "_blank"
                  }
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 sm:p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 group"
                >
                  <span className="shrink-0 p-2 rounded-lg bg-gray-100 text-black group-hover:bg-gray-200 transition-colors">
                    {item.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-black break-all">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <SocialLink SocialData={socialLinks} />
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                UK-based · Right to work in the UK · Available for remote and
                hybrid roles
              </p>
            </div>
          </ScrollFadeInUp>
        </Container>
      </section>
    </main>
  );
}

export { SECTION_IDS };
