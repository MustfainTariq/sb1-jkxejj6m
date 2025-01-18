import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import userData from '../data/userData';

const pricingPlans = [
  {
    title: "Basic",
    price: 499,
    features: [
      "Custom Web Development",
      "Basic Mobile App Development",
      "Simple Chatbot Integration",
      "3 Revisions",
      "14 Days Delivery",
      "24/7 Support"
    ]
  },
  {
    title: "Professional",
    price: 999,
    features: [
      "Advanced Web Development",
      "Full Mobile App Development",
      "AI-Powered Chatbot",
      "Custom ML Models",
      "Unlimited Revisions",
      "7 Days Delivery",
      "24/7 Priority Support",
      "Source Code Included"
    ],
    recommended: true
  },
  {
    title: "Enterprise",
    price: 1999,
    features: [
      "Full-Stack Development",
      "Complex AI Solutions",
      "Custom SaaS Development",
      "Advanced ML Models",
      "Cloud Infrastructure Setup",
      "Unlimited Revisions",
      "5 Days Delivery",
      "24/7 VIP Support",
      "Source Code & Documentation"
    ]
  }
];

export function Pricing() {
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
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ${
                plan.recommended
                  ? 'ring-2 ring-blue-500 transform scale-105'
                  : ''
              }`}
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-300">/project</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-6 px-4 py-2 rounded-lg font-semibold ${
                    plan.recommended
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                  } transition-colors`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
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
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{review.reviewer}</h3>
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
                <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
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