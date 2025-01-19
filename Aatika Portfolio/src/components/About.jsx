import { motion } from 'framer-motion';
import { FaUserGraduate, FaLaptopCode, FaPaintBrush } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: FaUserGraduate,
      title: "Education",
      description: "Computer Science Graduate with focus on Web Technologies"
    },
    {
      icon: FaLaptopCode,
      title: "Development",
      description: "Specialized in React and Modern Frontend Development"
    },
    {
      icon: FaPaintBrush,
      title: "Design",
      description: "Passionate about creating beautiful user interfaces"
    }
  ];

  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-purple-500">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-300 text-lg"
          >
            <p className="mb-4">
              Hello! I am Aatika, a passionate frontend developer with a keen eye for creating beautiful and functional web applications. 
              My journey in web development started with a curiosity for creating engaging user experiences.
            </p>
            <p>
              I specialize in building responsive web applications using modern technologies like React, 
              and Tailwind CSS. 
              I am also a ASP.Net Developer.
              I am constantly learning and staying updated with the latest trends 
              in web development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-lg backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <item.icon className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 italic">
            &ldquo;Striving to create web experiences that make a difference&rdquo;
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
