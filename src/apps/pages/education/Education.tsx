import Container from "@components/container";

export default function Education() {
  return (
    <Container>
      <div>
        <p className="text-2xl leading-1 mb-3 capitalize ml-1">
          Education & Certifications
        </p>
        <p className="mb-6 text-gray-600">
          Academic background and continuous learning journey in software
          development.
        </p>

        {/* Certifications & Learning */}
        <div className="mt-8">
          <p className="font-semibold text-xl mb-4 capitalize">
            Continuous Learning
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h4 className="font-semibold text-gray-800">
                Frontend Development
              </h4>
              <p className="text-gray-600 text-sm">
                Advanced React patterns, TypeScript best practices, modern CSS
                techniques, and responsive design principles.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h4 className="font-semibold text-gray-800">
                Backend Technologies
              </h4>
              <p className="text-gray-600 text-sm">
                RESTful API design, database management (MySQL, PostgreSQL), and
                server-side development fundamentals.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h4 className="font-semibold text-gray-800">
                Development Practices
              </h4>
              <p className="text-gray-600 text-sm">
                Agile methodologies, version control with Git, code review
                practices, and collaborative development workflows.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 py-2">
              <h4 className="font-semibold text-gray-800">
                Tools & Technologies
              </h4>
              <p className="text-gray-600 text-sm">
                Docker containerisation, CI/CD pipelines, project management
                tools (Jira, ClickUp), and API testing with Postman.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Reading & Resources */}
        <div className="mt-8">
          <p className="font-semibold text-xl mb-4 capitalize">
            Learning Resources
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 mb-2">
              I actively engage with the tech community through:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                Reading technical books and documentation (1+ book per month)
              </li>
              <li>Following industry best practices and design patterns</li>
              <li>Contributing to open-source projects on GitHub</li>
              <li>
                Staying updated with latest web development trends and
                technologies
              </li>
              <li>
                Participating in code reviews and knowledge sharing sessions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
