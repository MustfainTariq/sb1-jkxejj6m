import { motion } from 'framer-motion';
import userData from '../data/userData';

export function Resume() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {userData.email} | {userData.phone}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {userData.location}
            </p>
          </div>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Summary
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{userData.summaryAI}</p>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {userData.technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Work Experience
            </h2>
            {userData.workExperience.map((exp) => (
              <div key={exp.role} className="mb-6">
                <h3 className="font-semibold">{exp.role}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.company} | {exp.duration}
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Education
            </h2>
            <div>
              <h3 className="font-semibold">{userData.education.degree}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {userData.education.institution} | {userData.education.timeline}
              </p>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Certifications
            </h2>
            {userData.certifications.map((cert) => (
              <div key={cert.title}>
                <p className="font-semibold">{cert.title}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Issued: {cert.issued}
                </p>
              </div>
            ))}
          </section>
        </motion.div>
      </div>
    </div>
  );
}