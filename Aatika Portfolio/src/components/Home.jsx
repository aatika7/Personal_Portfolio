import { motion } from 'framer-motion';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center h-full"
        >
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Hello, I am Aatika
            </span>
          </h2>
          <div className="text-gray-300 py-4 max-w-md">
            
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'React Developer',
                2000,
                'C# Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl sm:text-3xl font-bold"
              repeat={Infinity}
            />
            <p className="text-gray-500 py-4">
              Passionate about creating beautiful and functional web applications.
              Specialized in React and modern web technologies.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer hover:scale-105 duration-200"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border border-purple-500 cursor-pointer hover:bg-purple-500/20 duration-200"
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full md:w-1/2 flex justify-center items-center"
        >
          <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] absolute">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow blur-3xl opacity-30"></div>
          </div>
          <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 relative z-10 flex items-center justify-center">
            <div className="w-[270px] h-[270px] sm:w-[370px] sm:h-[370px] rounded-full bg-gray-900 flex items-center justify-center">
              <span className="text-6xl">👩‍💻</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
