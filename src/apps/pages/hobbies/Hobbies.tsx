import Container from "@components/container";
import { FaBook, FaCamera, FaMountain, FaLaptopCode } from "react-icons/fa";

export default function Hobbies() {
  return (
    <Container>
      <div>
        <p className="text-2xl leading-1 mb-3 capitalize ml-1">Interests & Hobbies</p>
        <p className="mb-6 text-gray-600">
          Beyond coding, I maintain a balanced lifestyle through various interests
          that contribute to my creativity and problem-solving abilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Photography */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <FaCamera className="text-blue-600 text-3xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Photography</h3>
            </div>
            <p className="text-gray-700">
              Passionate photographer capturing landscapes and nature. My work is
              featured on{" "}
              <a
                href="https://www.pexels.com/@lostsoul16/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                Pexels
              </a>
              , where I share my perspective on the world. Photography enhances my
              attention to detail and compositional thinking, skills that translate
              well into UI/UX design.
            </p>
          </div>

          {/* Reading */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <FaBook className="text-orange-600 text-3xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Reading</h3>
            </div>
            <p className="text-gray-700">
              Committed to reading at least one book per month, covering topics from
              software engineering and technology to personal development and fiction.
              This habit helps me stay intellectually curious and brings fresh
              perspectives to problem-solving in software development.
            </p>
          </div>

          {/* Trekking */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <FaMountain className="text-green-600 text-3xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Trekking & Outdoors</h3>
            </div>
            <p className="text-gray-700">
              Exploring nature through trekking and outdoor adventures. These experiences
              teach resilience, planning, and adaptability - qualities essential in
              software engineering. The physical challenge provides a perfect balance
              to the mental demands of coding.
            </p>
          </div>

          {/* Tech Community */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <FaLaptopCode className="text-purple-600 text-3xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Tech Community</h3>
            </div>
            <p className="text-gray-700">
              Actively engaged with the developer community through GitHub, following
              tech blogs, and staying updated with the latest web development trends.
              I enjoy experimenting with new technologies and contributing to open-source
              projects when possible.
            </p>
          </div>
        </div>

        {/* Why These Matter */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Work-Life Balance
          </h3>
          <p className="text-gray-700">
            These hobbies aren't just pastimes - they're integral to maintaining creativity,
            mental clarity, and a healthy work-life balance. The discipline from regular
            reading, the patience from photography, and the resilience from trekking all
            contribute to making me a better software engineer. I believe that diverse
            interests lead to more innovative thinking and better problem-solving in
            professional contexts.
          </p>
        </div>
      </div>
    </Container>
  );
}
