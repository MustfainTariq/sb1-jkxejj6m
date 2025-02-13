import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Backend Engineer',
      company: 'REVOT AI',
      location: 'Islamabad, Pakistan (Hybrid)',
      period: 'Nov 2024 - Present',
      description: [
        'Assisting in developing AI-driven backend systems and APIs.',
        'Working with AI agents and implementing FastAPI-based microservices.',
        'Integrating LangChain function calling for AI-driven workflows.',
        'Developing a Twilio-powered AI calling agent for automated communication.',
        'Designing data cleaning pipelines and automating workflow processes.',
      ],
    },
    {
      title: 'AI Engineer (RAG, LLM, NLP)',
      company: 'Evoke Valley',
      location: 'Lahore, Pakistan (Remote)',
      period: 'Jan 2025 - Present',
      description: [
        'Contributing to the development of an AI-based EdTech platform.',
        'Implementing and maintaining Python-based AI solutions to meet project requirements.',
        'Developing RAG pipelines and integrating LLMs into the system.',
        'Utilizing LangChain to enhance AI-driven applications and optimize chatbot workflows.',
        'Building and deploying FastAPI-based microservices for efficient backend processing.',
      ],
    },
    {
      title: 'Mobile Application Development Intern',
      company: 'DPL - Islamabad',
      location: 'Islamabad, Pakistan',
      period: 'July 2024 - October 2024',
      description: [
        'Developed mobile applications with React Native, utilizing Axios and RESTful APIs for seamless data interaction.',
        'Integrated Axios for efficient API requests within mobile applications.',
        'Built full-stack e-commerce and task manager (to-do) apps using Expo.',
      ],
    },
    {
      title: 'Teaching Assistant',
      company: 'NUCES-FAST',
      location: 'Islamabad, Pakistan',
      period: 'Aug 2023 - Jan 2024',
      description: [
        'Served as a teaching assistant for the course Theory of Automata for 80+ students.',
      ],
    },
  ];

  const education = {
    degree: 'Bachelor in Computer Science',
    institution: 'FAST-NUCES',
    location: 'Islamabad, Pakistan',
    period: 'Sept 2020 - Jan 2025',
  };

  const certifications = [
    {
      title: 'AWS Academy Graduate - AWS Academy Microservices and CI/CD Pipeline Builder',
      issueDate: '04/28/2024',
    },
  ];

  return (
    <div className="pt-24 pb-16 max-w-6xl mx-auto px-4">
      {/* Work Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-lg dark:bg-gray-800/50 p-10 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-wrap justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-200 mb-3">{exp.title}</h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 mb-2">{exp.company}</p>
                  <p className="text-lg text-gray-700 dark:text-gray-400">{exp.location}</p>
                </div>
                <span className="text-lg text-gray-600 dark:text-gray-400 font-medium">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="bg-white shadow-lg dark:bg-gray-800/50 p-10 rounded-xl border border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap justify-between items-start">
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-200 mb-3">{education.degree}</h3>
              <p className="text-xl text-blue-600 dark:text-blue-400 mb-2">{education.institution}</p>
              <p className="text-lg text-gray-700 dark:text-gray-400">{education.location}</p>
            </div>
            <span className="text-lg text-gray-600 dark:text-gray-400 font-medium">{education.period}</span>
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white shadow-lg dark:bg-gray-800/50 p-10 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-wrap justify-between items-start">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 flex-1 mr-4">{cert.title}</h3>
                <span className="text-lg text-gray-600 dark:text-gray-400">Issued on: {cert.issueDate}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Experience; 