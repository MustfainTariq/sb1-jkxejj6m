import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Brain,
  Smartphone,
  Cloud,
  Code,
  Bot,
  Database,
} from 'lucide-react';
import userData from '../data/userData';

const services = [
  {
    icon: <Brain className="w-12 h-12" />,
    title: 'AI & Machine Learning',
    description:
      'Custom AI solutions including deep learning models, computer vision systems, and NLP applications.',
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile applications using React Native and modern mobile technologies.',
  },
  {
    icon: <Code className="w-12 h-12" />,
    title: 'Web Development',
    description:
      'Full-stack web applications with modern frameworks and responsive design principles.',
  },
];

function getRandomAvatarUrl(seed: string) {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
}

export function Home() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="text-blue-600 dark:text-blue-400">
              Mustfain Tariq
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Welcome! I'm Mustfain Tariq, a full-stack AI engineer with expertise
            in React Native cross-platform, Android (Java/Kotlin), and Flutter
            cross-platform development. I specialize in generative AI, utilizing
            advanced techniques like VAEs and GANs, and have built systems to
            enhance data-driven decision-making with TensorFlow and PyTorch. In
            mobile app development, I excel in Java, Kotlin, Flutter, and React
            Native, delivering high-performance solutions with comprehensive
            backend support.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a
              href={`https://${userData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={`https://${userData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.fiverr.com/mustafan02?public_mode=true"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 9.71V14h-2.29v-.06c-.05-2.71-1.45-4.94-4.13-4.94-2.68 0-4.93 2.15-4.93 5.06 0 2.91 2.25 5.06 4.93 5.06 1.45 0 2.69-.59 3.67-1.61l1.02 1.49c-1.34 1.34-3.03 2.12-4.69 2.12-3.89 0-7.06-3.17-7.06-7.06s3.17-7.06 7.06-7.06c1.66 0 3.35.78 4.69 2.12L20.25 11h2.75zM4.63 15.9c-1.12 0-2.03-.91-2.03-2.03V4.63c0-1.12.91-2.03 2.03-2.03h9.25c1.12 0 2.03.91 2.03 2.03v2.84h-2v-2.5c0-.28-.22-.5-.5-.5H5.13c-.28 0-.5.22-.5.5v8.75c0 .28.22.5.5.5h2.5v2h-3z" />
              </svg>
            </a>
            <a
              href={`mailto:${userData.email}`}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          <motion.img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Modern coding workspace"
            className="rounded-lg shadow-xl mx-auto max-w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          />
        </motion.div>

        {/* Featured Services Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </motion.div>

        {/* Client Reviews Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Client Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userData.reviews.slice(0, 6).map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={getRandomAvatarUrl(review.reviewer)}
                    alt={review.reviewer}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {review.reviewer}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {review.country}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <div className="flex items-center">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {review.comment}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {review.date}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
