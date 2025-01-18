import { motion } from 'framer-motion';
import { Brain, Smartphone, Cloud, Code, Bot, Database } from 'lucide-react';

const services = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: "AI & Machine Learning",
    description: "Custom AI solutions including deep learning models, computer vision systems, and NLP applications."
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications using React Native and modern mobile technologies."
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: "Web Development",
    description: "Full-stack web applications with modern frameworks and responsive design principles."
  },
  {
    icon: <Bot className="w-12 h-12" />,
    title: "Chatbots & AI Assistants",
    description: "Intelligent chatbots and virtual assistants powered by advanced NLP and machine learning."
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "Custom SaaS Solutions",
    description: "Scalable software-as-a-service applications tailored to your business needs."
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    title: "Cloud Solutions",
    description: "Cloud infrastructure setup, deployment, and maintenance using AWS and other cloud platforms."
  }
];

export function Services() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive solutions for your technical needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}