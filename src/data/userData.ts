const userData = {
    name: "Mustfain Tariq",
    email: "mustfain1234@gmail.com",
    phone: "+92 3228922261",
    location: "Islamabad, Pakistan",
    linkedin: "linkedin.com/in/mustfain",
    github: "github.com/MustfainTariq",
    kaggle: "www.kaggle.com/mustfain",
    fiverr: "www.fiverr.com/mustafan02",
    summaryAI: `
      AI & Machine Learning Engineer with a focus on generative models and 
      intelligent systems, studied at FAST-NUCES. Skilled software developer 
      building AI solutions leveraging deep learning and NLP.
    `,
    summaryMobile: `
      Software Engineer specializing in mobile development, with expertise 
      in cloud solutions and software architecture. Skilled in creating 
      scalable software that enhances user experience and efficiency.
    `,
    technicalSkills: [
      "Python", "Java", "JavaScript", "TypeScript", "SQL", 
      "HTML/CSS", "TensorFlow", "PyTorch", "AWS", "React Native", 
      "FastAPI", "Git", "Docker", "Oracle Database", "Agile", 
      "Version Control", "Kotlin", "Android", "OpenCV", "Flask",
      "Firebase", "MySQL", "MLFlow", "Airflow", "DVC", "Kubernetes",
      "CI/CD", "Flutter"
    ],
    workExperience: [
      {
        role: "Mobile Application Development Intern",
        company: "DPL - Islamabad",
        duration: "July 2024 - October 2024",
        location: "Islamabad, Pakistan",
        responsibilities: [
          "Developed mobile applications using React Native, Axios, and REST APIs.",
          "Built an e-commerce app and task manager app using Expo."
        ]
      },
      {
        role: "Teaching Assistant",
        company: "NUCES-FAST",
        duration: "Aug 2023 - Jan 2024",
        location: "Islamabad, Pakistan",
        responsibilities: [
          "Served as a teaching assistant for the course Theory of Automata for 80+ students."
        ]
      }
    ],
    education: {
      degree: "BS in Computer Science",
      institution: "FAST-NUCES",
      location: "Islamabad, Pakistan",
      timeline: "Sept 2020 - Present"
    },
    certifications: [
      {
        title: "AWS Academy Graduate - AWS Academy Microservices and CI/CD Pipeline Builder",
        issued: "04/28/2024"
      }
    ],
    interests: [
      "Artificial Intelligence",
      "Deep Learning",
      "Computer Vision",
      "Software Engineering",
      "Cloud Computing",
      "Data Mining",
      "Mobile Development",
      "Software Architecture",
      "Web Development"
    ],
    projects: [
      {
        title: "Generative AI-Enhanced Journaling App",
        subtitle: "Software Development Project",
        techStack: ["React Native", "Firebase", "NLP", "GenAI", "AWS EC2"],
        description: [
          "Developed an innovative Android journaling app leveraging Generative AI to transform traditional journaling by capturing user experiences through images, using features like image captioning, OCR, and emotion recognition.",
          "Fine-tuned LLaMA 3.1 on real datasets using Unsloth AI, achieving a 0.903 Avg Sentence Similarity on the test dataset, and utilized Groq for multi-model image captioning and Whisper for speech-to-text conversion.",
          "Integrated personalized journal entries with voice and image-based emotion detection, offering user-driven customization for journal type and style.",
          "Implemented key features such as Image Feature Extraction, Journal Draft Generation, Prompt Optimization, and LLM Fine-tuning for enhanced journal personalization.",
          "Deployed backend on AWS EC2 g4nxd large, ensuring scalability and performance."
        ]
      },
      {
        title: "MLOps Pipeline Integration and Deployment",
        subtitle: "DevOps & MLOps Project",
        techStack: ["MLFlow", "Airflow", "DVC", "Docker", "Kubernetes", "CI/CD", "AI Integration"],
        description: [
          "Designed and deployed a weather forecasting pipeline leveraging AI and modern tools, documented in a professional Medium blog.",
          "Integrated advanced MLOps tools such as MLFlow for model versioning, Airflow for workflow automation, and DVC for managing datasets and models.",
          "Developed a React-based frontend for user-friendly weather input and a Flask API backend to serve AI-powered predictions.",
          "Utilized AI algorithms for temperature prediction, incorporating data preprocessing, feature engineering, and model monitoring.",
          "Implemented GitHub Actions CI/CD workflows, ensuring seamless deployment via Docker images and Kubernetes-based orchestration on Minikube.",
          "Highlighted the role of AI in predictive modeling and software automation, streamlining the end-to-end deployment process."
        ]
      },
      {
        title: "E-Commerce RAG-based Chatbot",
        subtitle: "Software Development Project",
        techStack: ["GPT-4", "Firebase Firestore", "Pinecone", "RESTful APIs", "Ngrok"],
        description: [
          "Developed a scalable e-commerce chatbot using GPT-4, integrated with Firebase Firestore and Pinecone for managing chat histories, embeddings, and product details.",
          "Implemented RESTful APIs and Ngrok for global access, enabling tailored real-time responses for personalized customer support.",
          "Enhanced response accuracy through efficient text embedding retrieval, improving user experience and engagement."
        ]
      },
      {
        title: "Advanced Neural Network Models for Image Classification",
        subtitle: "Machine Learning Project",
        techStack: ["CNN", "RowLSTM", "DiagonalBiLSTM", "PixelCNN"],
        description: [
          "Optimized CNN, RowLSTM, and DiagonalBiLSTM models for high accuracy in image classification and generation on CIFAR-10.",
          "Utilized hyperparameter tuning, advanced preprocessing, and PixelCNN variations to enhance accuracy and computational efficiency.",
          "Conducted rigorous validation and testing, achieving superior model performance."
        ]
      },
      {
        title: "Kitchen Safety Detection System",
        subtitle: "AI & Computer Vision Project",
        techStack: ["Flutter", "FastAPI", "PyTorch", "Computer Vision", "Firebase"],
        description: [
          "Developed a Kitchen Safety Detection System to monitor safety compliance using computer vision, ensuring workers wear masks, hair nets, and gloves.",
          "Utilized Flutter for the mobile interface and FastAPI as the backend, with Firebase for data storage and PyTorch models for image recognition.",
          "Implemented real-time image processing to detect compliance, enhancing workplace safety and monitoring efficiency.",
          "Deployed on a mobile platform, enabling flexible and accessible safety monitoring in kitchen environments."
        ]
      },
      {
        title: "Faculty Android Application Mobile Attendance System",
        subtitle: "Android Development Project",
        techStack: ["Java", "Firebase", "OpenCV", "Flask"],
        description: [
          "Utilizes biometric authentication methods like facial recognition and fingerprint scanning to streamline attendance recording on campus.",
          "Features AI-enhanced facial recognition, offline data synchronization, and secure encryption to ensure accurate and efficient attendance management.",
          "Integrates with calendars for alerts and reminders, improving the overall security and reliability of the attendance system using FCM."
        ]
      },
      {
        title: "Rental Android Application Chat Application",
        subtitle: "Android Development Project",
        techStack: ["Java", "Firebase", "MySQL"],
        description: [
          "Integrates web APIs and Firebase to support user authentication, profile management, ad operations, and multimedia chats.",
          "Features offline capabilities and push notifications, ensuring accessibility and connectivity in various network conditions.",
          "Includes real-time communication tools like voice and video calls, enhancing user experience in both online and offline modes."
        ]
      }
    ],
    reviews: [
      {
        reviewer: "ya_gao",
        country: "Hong Kong",
        rating: 5,
        date: "5 days ago",
        comment: "His code is beautiful and the work is done with high quality."
      },
      {
        reviewer: "lemonade82",
        country: "Sweden",
        rating: 5,
        date: "1 month ago",
        comment: "All right, I took a chance with a rather new guy and was happily surprised by the quality of his work."
      },
      {
        reviewer: "rreda1420",
        country: "Saudi Arabia",
        rating: 5,
        date: "5 months ago",
        comment: "Collaborative, hard-working, makes adjustments when asked, the best people I work with",
        price: "US$200-US$400",
        duration: "3 weeks",
        service: "Android App Development"
      },
      {
        reviewer: "aurorazz",
        country: "Singapore",
        rating: 5,
        date: "5 months ago",
        comment: "Exceptional AI expert who knows what he is doing. Highly recommended for AI chat bot and tensorflow work. Did the project timely fashion and was very responsive and friendly. Will hire again and highly recommended! His RAG model is very good."
      },
      {
        reviewer: "rreda1420",
        country: "Saudi Arabia",
        rating: 5,
        date: "8 months ago",
        comment: "Fast work, very reasonable prices compared to the work, attention to the smallest details, very cooperative in making adjustments, loyal and proficient in the work. I thank you from the bottom of my heart, my brother.",
        price: "US$50-US$100",
        duration: "3 days",
        service: "API & Integrations"
      },
      {
        reviewer: "cornel_45",
        country: "Ireland",
        rating: 5,
        date: "8 months ago",
        comment: "I would 100% recommend Mustafan for any and API integration projects!!! He is extremely professional and proactive with hot fixes. He also has extremly deep knowledge on API Intergation",
        price: "US$50-US$100",
        duration: "6 days",
        service: "API & Integrations"
      },
      {
        reviewer: "pauliusmart26",
        country: "Lithuania",
        rating: 5,
        date: "8 months ago",
        comment: "Very fast delivery, helpful, and kind. I would recommend him to everyone who needs help with their problems in parallel programming",
        price: "Up to US$50",
        duration: "1 day",
        service: "Desktop Applications"
      }
    ]
};

export default userData;