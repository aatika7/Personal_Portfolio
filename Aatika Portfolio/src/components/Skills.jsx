import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaGitAlt, 
  FaSass, 
  FaNode 
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { 
  SiTailwindcss, 
  SiRedux, 
  SiMongodb,
  SiDotnet
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: 'Core Technologies',
      description: 'Foundation of my development stack',
      technologies: [
      { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', proficiency: 95 },
      { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', proficiency: 90 },
      { name: 'JavaScript', icon: IoLogoJavascript, color: 'text-yellow-500', proficiency: 85 },
      { name: 'C#', icon: SiDotnet, color: 'text-blue-600', proficiency: 80 },
      ],
    },
    {
      id: 2,
      title: 'Frontend Frameworks',
      description: 'Modern web development tools',
      technologies: [
        { name: 'React', icon: FaReact, color: 'text-cyan-400', proficiency: 92 },
        { name: 'Redux', icon: SiRedux, color: 'text-purple-500', proficiency: 85 },
       
      ],
    },
    {
      id: 3,
      title: 'Styling',
      description: 'Creating beautiful user interfaces',
      technologies: [
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-400', proficiency: 88 },
        { name: 'SASS', icon: FaSass, color: 'text-pink-500', proficiency: 82 },
        
      ],
    },
    {
      id: 4,
      title: 'Backend & Tools',
      description: 'Development and deployment tools',
      technologies: [
        { name: 'Node.js', icon: FaNode, color: 'text-green-500', proficiency: 85 },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', proficiency: 75 },
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-600', proficiency: 88 },
        { name: 'VS Code', icon: TbBrandVscode, color: 'text-blue-500', proficiency: 90 },
      ],
    },
  ];

  return (
    <div name="skills" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 mt-6 text-lg">
            My technical skills and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-gray-700/20 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-200 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6">{category.description}</p>
              
              <div className="space-y-4">
                {category.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <tech.icon className={`text-2xl ${tech.color}`} />
                      <span className="text-gray-300">{tech.name}</span>
                      <span className="ml-auto text-sm text-gray-400">
                        {tech.proficiency}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.proficiency}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full ${tech.color} opacity-80`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
