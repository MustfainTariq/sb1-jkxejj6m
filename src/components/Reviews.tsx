import { motion } from 'framer-motion';

const Reviews = () => {
  const reviews = [
    {
      name: 'aurorazz',
      country: 'Singapore',
      rating: 5,
      comment: 'Exceptional AI expert who knows what he is doing. Highly recommended for AI chat bot and tensorflow work. Did the project timely fashion and was very responsive and friendly. Will hire again and highly recommended! His RAG model is very good.',
      duration: '4 weeks',
      service: 'AI Chatbot Development',
    },
    {
      name: 'cornel_45',
      country: 'Ireland',
      rating: 5,
      comment: 'I would 100% recommend Mustafan for any and API integration projects!!! He is extremely professional and proactive with hot fixes. He also has extremly deep knowledge on API Intergation',
      duration: '6 days',
      service: 'API & Integrations',
    },
    {
      name: 'eli_aluko',
      country: 'Ireland',
      rating: 5,
      comment: 'Would highly recommend, work was done quickly and to a high standard. Mustafan was always readily available to talk and had very quick responses. Very happy!',
      duration: '9 days',
      service: 'Android App Development',
    },
    {
      name: 'rreda1420',
      country: 'Saudi Arabia',
      rating: 5,
      comment: 'Fast work, very reasonable prices compared to the work, attention to the smallest details, very cooperative in making adjustments, loyal and proficient in the work. I thank you from the bottom of my heart, my brother.',
      duration: '3 days',
      service: 'API & Integrations',
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-6 h-6 ${
          index < rating ? 'text-yellow-400' : 'text-gray-400'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Client Reviews
        </h2>
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-3">
            <span className="text-4xl font-bold text-gray-900 dark:text-gray-200">5.0</span>
            <div className="flex">{renderStars(5)}</div>
          </div>
          <p className="text-gray-700 dark:text-gray-400 mt-2 text-base">Based on 11 reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white shadow-lg dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">{review.name}</h3>
                  <p className="text-gray-700 dark:text-gray-400 text-base mt-1">{review.country}</p>
                </div>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base mb-4 leading-relaxed">{review.comment}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span>Duration: {review.duration}</span>
                <span>•</span>
                <span>{review.service}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Reviews; 