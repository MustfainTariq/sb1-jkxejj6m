import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Generative AI-Enhanced Journaling App',
      category: 'Software Development Project',
      tech: ['React Native', 'Firebase', 'NLP', 'GenAI', 'AWS EC2'],
      url: 'https://visual-thoughts.vercel.app/',
      description: [
        'Developed an innovative Android journaling app leveraging Generative AI to transform traditional journaling by capturing user experiences through images, using features like image captioning, OCR, and emotion recognition.',
        'Fine-tuned LLaMA 3.1 on real datasets using Unsloth AI, achieving a 0.903 Avg Sentence Similarity on the test dataset, and utilized Groq for multi-model image captioning and Whisper for speech-to-text conversion.',
        'Integrated personalized journal entries with voice and image-based emotion detection, offering user-driven customization for journal type and style.',
        'Implemented key features such as Image Feature Extraction, Journal Draft Generation, Prompt Optimization, and LLM Fine-tuning for enhanced journal personalization.',
        'Deployed backend on AWS EC2 g4nxd large, ensuring scalability and performance.',
      ],
    },
    {
      title: 'MLOps Pipeline Integration and Deployment',
      category: 'DevOps & MLOps Project',
      tech: ['MLFlow', 'Airflow', 'DVC', 'Docker', 'Kubernetes', 'CI/CD', 'AI Integration'],
      url: 'https://github.com/MustfainTariq/weather-prediction-mlflow-dvc',
      description: [
        'Designed and deployed a weather forecasting pipeline leveraging AI and modern tools, documented in a professional Medium blog.',
        'Integrated advanced MLOps tools such as MLFlow for model versioning, Airflow for workflow automation, and DVC for managing datasets and models.',
        'Developed a React-based frontend for user-friendly weather input and a Flask API backend to serve AI-powered predictions.',
        'Utilized AI algorithms for temperature prediction, incorporating data preprocessing, feature engineering, and model monitoring.',
        'Implemented GitHub Actions CI/CD workflows, ensuring seamless deployment via Docker images and Kubernetes-based orchestration on Minikube.',
        'Highlighted the role of AI in predictive modeling and software automation, streamlining the end-to-end deployment process.',
      ],
    },
    {
      title: 'E-Commerce RAG-based Chatbot',
      category: 'Software Development Project',
      tech: ['GPT-4', 'Firebase Firestore', 'Pinecone', 'RESTful APIs', 'Ngrok'],
      url: 'https://kachiing.com/',
      description: [
        'Developed a scalable e-commerce chatbot using GPT-4, integrated with Firebase Firestore and Pinecone for managing chat histories, embeddings, and product details.',
        'Implemented RESTful APIs and Ngrok for global access, enabling tailored real-time responses for personalized customer support.',
        'Enhanced response accuracy through efficient text embedding retrieval, improving user experience and engagement.',
      ],
    },
    {
      title: 'Advanced Neural Network Models',
      category: 'Machine Learning Project',
      tech: ['CNN', 'RowLSTM', 'DiagonalBiLSTM', 'PixelCNN'],
      url: 'https://github.com/MustfainTariq/Contrastive-Learning-s-Role-in-Enhancing-Anomaly-Detection-in-Multivariate-Time-Series-Data',
      description: [
        'Optimized CNN, RowLSTM, and DiagonalBiLSTM models for high accuracy in image classification and generation on CIFAR-10.',
        'Utilized hyperparameter tuning, advanced preprocessing, and PixelCNN variations to enhance accuracy and computational efficiency.',
        'Conducted rigorous validation and testing, achieving superior model performance.',
      ],
    },
    {
      title: 'Kitchen Safety Detection System',
      category: 'AI & Computer Vision Project',
      tech: ['Flutter', 'FastAPI', 'PyTorch', 'Computer Vision', 'Firebase'],
      url: 'https://github.com/MustfainTariq/Kitchen-Safety-Detection-System',
      description: [
        'Developed a Kitchen Safety Detection System to monitor safety compliance using computer vision, ensuring workers wear masks, hair nets, and gloves.',
        'Utilized Flutter for the mobile interface and FastAPI as the backend, with Firebase for data storage and PyTorch models for image recognition.',
        'Implemented real-time image processing to detect compliance, enhancing workplace safety and monitoring efficiency.',
        'Deployed on a mobile platform, enabling flexible and accessible safety monitoring in kitchen environments.',
      ],
    },
  ];

  return (
    <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h1>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white shadow-lg dark:bg-gray-800/50 rounded-xl p-10 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-colors"
          >
            <div className="mb-6">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group"
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-200 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                  <svg
                    className="w-6 h-6 inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </h2>
              </a>
              <p className="text-xl text-blue-600 dark:text-blue-400 mb-4">{project.category}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-base bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <ul className="list-disc list-inside space-y-4">
              {project.description.map((item, i) => (
                <li key={i} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;