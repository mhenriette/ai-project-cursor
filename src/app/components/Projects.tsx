"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Project One",
    description: "A cool project using React and Tailwind CSS. 🌟",
  },
  {
    title: "Project Two",
    description: "An amazing project with Next.js and Framer Motion. 🚀",
  },
  {
    title: "Project Three",
    description: "A fantastic project with TypeScript and GraphQL. 💻",
  },
  {
    title: "Project Four",
    description: "An innovative project with Vue.js and Vuex. 🔥",
  },
  {
    title: "Project Five",
    description: "A responsive web app using Angular and RxJS. 📱",
  },
  {
    title: "Project Six",
    description: "A performant application with Svelte and Sapper. ⚡",
  },
];

const Projects: React.FC = () => {
  const [commits, setCommits] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/mhenriette/events')
      .then(response => response.json())
      .then(data => {
        const pushEvents = data.filter((event: any) => event.type === 'PushEvent');
        setCommits(pushEvents.slice(0, 5)); // Get the latest 5 commits
      })
      .catch(error => console.error('Error fetching commits:', error));
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="text-center py-16 bg-black"
    >
      <h2 className="text-4xl font-bold text-green-400">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(34, 197, 94)",
              transition: { duration: 0.2 }
            }}
            className="bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-green-400">
              {project.title}
            </h3>
            <p className="text-gray-300 mt-4">{project.description}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-green-400 mb-8">Recent GitHub Activity</h3>
        <div className="max-w-3xl mx-auto relative">
          {commits.map((commit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100, rotateY: -90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{
                delay: 0.2 * index,
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 15px rgba(34, 197, 94, 0.5)",
              }}
              className="bg-gray-800 p-6 rounded-lg shadow-md mb-6 text-left relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 w-2 h-full bg-green-400"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.2 * index + 0.4, duration: 0.5 }}
              />
              <motion.h4 
                className="text-green-400 font-semibold text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index + 0.2, duration: 0.5 }}
              >
                {commit.repo.name}
              </motion.h4>
              <motion.p 
                className="text-gray-300 mt-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index + 0.3, duration: 0.5 }}
              >
                {commit.payload.commits[0].message}
              </motion.p>
              <motion.p 
                className="text-gray-400 text-sm mt-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index + 0.4, duration: 0.5 }}
              >
                {new Date(commit.created_at).toLocaleDateString()}
              </motion.p>
              <motion.div
                className="absolute bottom-0 right-0 w-16 h-16 bg-green-400 rounded-tl-full opacity-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 * index + 0.5, duration: 0.5, type: "spring" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;