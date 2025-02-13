const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/mustfain',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/MustfainTariq',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/mustfain',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" />
        </svg>
      ),
    },
    {
      name: 'Fiverr',
      url: 'https://www.fiverr.com/mustafan02',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8" // match other icons
        >
          <circle cx="12" cy="12" r="12" fill="#000" />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dy=".36em"        // slightly higher for better vertical centering
            fontSize="12"
            fontWeight="bold"
            fill="#fff"
          >
            fi
          </text>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-white shadow-lg dark:bg-gray-900/50 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors ${
                  link.name === 'Fiverr' ? 'dark:invert dark:hover:invert-0' : ''
                }`}
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <div className="text-gray-700 dark:text-gray-400 text-xl">
            <a href="mailto:mustfain1234@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              mustfain1234@gmail.com
            </a>
            <span className="mx-4">|</span>
            <a href="tel:+923228922261" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              +92 3228922261
            </a>
          </div>
          <p className="text-gray-600 dark:text-gray-500 text-lg">
            © {new Date().getFullYear()} Mustfain Tariq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 