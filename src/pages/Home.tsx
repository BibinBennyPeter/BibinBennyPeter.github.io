import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Projects from "./Projects.tsx";
import profile from "../assets/BibinBenny.jpg";

import { 
  ArrowRight, 
  Code, 
  Database, 
  FileCode, 
  Shield, 
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo
} from "@phosphor-icons/react";

const Home = () => {
  const [visibleText, setVisibleText] = useState("");
  const fullText = "Full Stack Blockchain Developer";
  const [index, setIndex] = useState(0);
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const keywords = ["Open", "Transparent", "Trustless", "Decentralized"];

  // Typing animation effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setVisibleText((prevText) => prevText + fullText[index]);
        setIndex(index + 1);
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  // Keyword rotation effect
  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentKeywordIndex((prevIndex) => (prevIndex + 1) % keywords.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Skills list with improved descriptions
  const skills = [
    { 
      name: "Smart Contract Development", 
      icon: <FileCode size={28} weight="duotone" />,
      description: "Building secure and efficient smart contracts using Solidity."
    },
    { 
      name: "Web3 Integration", 
      icon: <FileCode size={28} weight="duotone" />,
      description: "Seamlessly connecting frontend applications with blockchain networks."
    },
    { 
      name: "Smart Contract Security", 
      icon: <Shield size={28} weight="duotone" />,
      description: "Implementing best practices for secure, auditable blockchain code."
    },
    { 
      name: "Frontend Development", 
      icon: <Code size={28} weight="duotone" />,
      description: "Creating responsive UI/UX with React and modern frameworks."
    },
    { 
      name: "Backend Development", 
      icon: <Database size={28} weight="duotone" />,
      description: "Building robust API services and server infrastructure."
    },
    { 
      name: "DeFi Protocol Design", 
      icon: <Database size={28} weight="duotone" />,
      description: "Architecting decentralized financial solutions and protocols."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="hero-section min-h-screen bg-gradient-to-br from-portfolio-black to-portfolio-dark/55">
      {/* Hero Section with Glass Effect */}
      <section className="relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-portfolio-purple/20 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-portfolio-teal/60 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:pt-32 pb-24 relative z-10 border-1">
          <div className="flex flex-col md:flex-row items-center border-1">
            <div className="md:w-1/2 mb-10 md:mb-0 border-1">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                Building the{" "}<br/>
                <span className="text-portfolio-teal brightness-125">
                  {keywords[currentKeywordIndex]}
                </span>{" "}<br/>
                Future
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl font-medium text-portfolio-light h-8 mb-6"
              >
                <span className="text-portfolio-purple">{visibleText}</span>
                <span className="animate-pulse">|</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-lg text-portfolio-light/90 mb-8 backdrop-blur-sm max-w-lg"
              >
                Hi! I'm{" "}
                <span className="text-portfolio-teal font-bold">Bibin Benny</span>.
                <br /> With over a year of experience in web development and a strong 
                interest in blockchain technologies and DeFi, I enjoy working on projects 
                that blend practical utility with emerging technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-wrap gap-4 border-1"
              >
                <Link 
                  to="https://bibinbennypeter.github.io/BibinBenny.pdf" 
                  target="_blank" 
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-portfolio-teal/75 to-portfolio-purple flex items-center text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-teal/20"
                >
                  Download Resume <ArrowRight weight="bold" className="ml-2" />
                </Link>

                <div className="flex gap-3 items-center">
                  <a 
                    href="https://github.com/BibinBennyPeter" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    <GithubLogo size={22} weight="fill" className="text-white" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/bibinbennypeter" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    <LinkedinLogo size={22} weight="fill" className="text-white" />
                  </a>
                  <a 
                    href="https://twitter.com/0xBbn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    <TwitterLogo size={22} weight="fill" className="text-white" />
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="md:w-1/2 flex justify-center border-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-64 h-64 md:w-80 md:h-80 relative"
              >
                {/* Animated backlight effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolio-teal to-portfolio-purple/50 opacity-30 blur-2xl animate-pulse"></div>
                
                {/* Glass container for profile image */}
                <div className="absolute inset-0 rounded-full p-2">
                  <div className="w-full h-full overflow-hidden rounded-full">
                    <img 
                      className="w-full h-full object-cover" 
                      src={profile} 
                      alt="Bibin Benny"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section with Glass Cards */}
      <section className="py-16 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-3/4 left-1/4 w-96 h-96 rounded-full bg-portfolio-teal/10 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-portfolio-purple/10 blur-3xl"></div>
        </div>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-3xl md:text-4xl font-bold mb-16 text-white"
          >
            My <span className="text-portfolio-teal">Expertise</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-teal/5"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-lg text-portfolio-teal">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-portfolio-light/80">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-portfolio-purple/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-portfolio-teal/10 blur-3xl"></div>
        </div>
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-3xl md:text-4xl font-bold mb-16 text-white"
          >
            Featured <span className="text-portfolio-teal">Projects</span>
          </motion.h2>
          
          <Projects />
        </div>
      </section>

      {/* CTA Section with Glass Effect */}
      <section className="py-24 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-portfolio-purple/20 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-portfolio-teal/20 blur-3xl"></div>
        </div>
      
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 p-10 text-center hover:shadow-xl hover:shadow-portfolio-teal/10 transition-all duration-500"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Let's Build <span className="text-portfolio-teal">Together</span>
            </h2>
            <p className="text-lg text-portfolio-light/80 mb-8">
              Have a project in mind or want to collaborate? 
              I'm always open to discussing new opportunities and challenges.
            </p>
            <a 
              href="mailto:bibinbennypeter@gmail.com" 
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-portfolio-teal to-portfolio-purple text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-teal/20"
            >
              <EnvelopeSimple weight="bold" className="mr-2" /> Get in Touch
            </a>
            <div className="mt-4 text-portfolio-light/50 text-sm">
              bibinbennypeter@gmail.com
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
