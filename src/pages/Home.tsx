import { motion } from 'framer-motion';
import Reviews from '../components/Reviews';

const Home = () => {
  const skills = {
    languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
    ml_ai: [
      'TensorFlow',
      'PyTorch',
      'scikit-learn',
      'OpenAI API',
      'Hugging Face Transformers',
      'LangChain',
      'Generative AI',
      'LLMs',
      'RAG',
    ],
    frameworks: [
      'FastAPI',
      'Flask',
      'Streamlit',
      'Docker',
      'Kubernetes',
      'AWS',
      'GCP',
      'Git',
      'CI/CD',
    ],
    development: [
      'React',
      'Next.js',
      'React Native',
      'Vue.js',
      'Vite',
      'Node.js',
      'Express',
      'Tailwind CSS',
    ],
    databases: ['Redis', 'PostgreSQL', 'MongoDB', 'FAISS', 'Pinecone', 'Weaviate', 'ChromaDB'],
  };

  const services = [
    {
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions including deep learning models, computer vision systems, and NLP applications.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications using React Native and modern mobile technologies.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Web Development',
      description: 'Full-stack web applications with modern frameworks and responsive design principles.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: 'Chatbots & AI Assistants',
      description: 'Intelligent chatbots and virtual assistants powered by advanced NLP and machine learning.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: 'Custom SaaS Solutions',
      description: 'Scalable software-as-a-service applications tailored to your business needs.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure setup, deployment, and maintenance using AWS and other cloud platforms.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="pt-16 space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-[60vh] flex flex-col justify-center items-center text-center"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Mustfain Tariq
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          AI & Machine Learning Engineer
        </h2>
        <p className="max-w-3xl text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
          Focused on generative models and intelligent systems, I build AI solutions to enhance data access
          and decision-making, leveraging deep learning and NLP expertise to create efficient, impactful
          applications.
        </p>
      </motion.section>

      {/* Featured Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12"
      >
        <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Featured Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-lg dark:bg-gray-800/50 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-colors h-[280px] flex flex-col"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                <svg className="w-12 h-12" {...service.icon.props} />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-200">{service.title}</h3>
              <p className="text-lg text-gray-700 dark:text-gray-400 flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24"
      >
        <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-4">
          <SkillCategory title="Programming Languages" skills={skills.languages} />
          <SkillCategory title="Machine Learning / AI" skills={skills.ml_ai} />
          <SkillCategory title="Development" skills={skills.development} />
          <SkillCategory title="DevOps & Cloud" skills={skills.frameworks} />
          <SkillCategory title="Databases" skills={skills.databases} />
        </div>
      </motion.section>

      {/* Reviews Section */}
      <Reviews />

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center py-20"
      >
        <h2 className="text-4xl font-bold mb-10">Let's Work Together</h2>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-full text-xl font-medium hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </a>
      </motion.section>
    </div>
  );
};

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-white shadow-lg dark:bg-gray-800/50 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
    <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-200">{title}</h3>
    <ul className="space-y-3">
      {skills.map((skill) => (
        <li
          key={skill}
          className="text-lg text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default Home;
