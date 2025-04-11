import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCode,
  FiServer,
  FiDatabase,
  FiFile,
  FiShield,
  FiLayers,
  FiMail
} from "react-icons/fi";
import profile from "../assets/BibinBenny.jpg";

const Home = () => {
  const [visibleText, setVisibleText] = useState("");
  const fullText = "Full Stack Blockchain Developer";
  const keywords = ["Open","Transparent", "Trustless", "Decentralized"]
  const [index, setIndex] = useState(0);

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

  // Skills list
  const skills = [
    { name: "Smart Contract Development", icon: <FiFile size={24} /> },
    { name: "Web3 Integration", icon: <FiLayers size={24} /> },
    { name: "Smart Contract Testing", icon: <FiShield size={24} /> },
    { name: "Frontend Development", icon: <FiCode size={24} /> },
    { name: "Backend Development", icon: <FiServer size={24} /> },
    { name: "Database Management", icon: <FiDatabase size={24} /> }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
    <div className="hero-section min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b to-portfolio-teal/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              >
                Building the {" "} 
                <span className="text-portfolio-teal brightness-125">Decentralized</span>{" "}
                Future
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl font-medium text-portfolio-light h-8"
              >
                <span className="text-portfolio-purple">{visibleText}</span>
                <span className="animate-pulse">|</span>
              </motion.div>

            </div>

            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-64 h-64 md:w-80 md:h-80 relative"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolio-teal to-portfolio-purple/50 opacity-20 blur-xl"></div>
                <div className="absolute inset-4 rounded-full flex items-center justify-center">
                  <span className="text-8xl font-bold bg-clip-text bg-gradient-to-r from-portfolio-teal to-portfolio-purple">
                    <img className="rounded-full" src={profile} alt="Bibin Benny"/>
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        <div className="md:flex justify-between">
          <motion.div
          className="md:w-1/2"
          >
          <span className="text-l">
            Hi! I'm{" "}<span className="text-portfolio-teal font-bold">Bibin Benny</span>.<br/> With over a year of experience in web development and a strong interest in blockchain technologies and DeFi, I enjoy working on projects that blend practical utility with emerging technologies.
          </span>
          </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="flex justify-center  max-sm:mt-4  md:w-1/2 items-center md:text-portfolio-teal"

              >
                <Link to={"https://bibinbennypeter.github.io/BibinBenny.pdf"} target="_blank" className="flex justify-center items-center max-sm:py-1 btn-primary max-sm:text-white max-sm:bg-portfolio-teal/45 w-35 rounded-2xl">
                  Get my resume <FiArrowRight className="max-sm:hidden  inline ml-2" />
                </Link>

                {/*  */}
              </motion.div>

        </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gradient-to-b from-portfolio-teal/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-white">
<span className="text-portfolio-teal">Expertise</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-lg text-portfolio-teal group-hover:text-portfolio-purple transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-portfolio-light">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-portfolio-light opacity-80">
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-t from-portfolio-teal/15">
        <div className="flex justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a href={"mailto:bibinbennypeter@gmail.com"} className="btn-primary text-lg">
              <span className="text-l md:text-3xl font-bold mb-6 text-white hover:text-shadow-portfolio-purple">
              Let's Build Together <span className="text-sm flex justify-center items-center"><FiMail/>bibinbennypeter@gmail</span>
            </span>
            </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
