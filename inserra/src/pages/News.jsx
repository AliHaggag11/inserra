import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';

const News = () => {
  const [allNewsArticles, setAllNewsArticles] = useState([]);
  const [displayedNews, setDisplayedNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const articlesPerPage = 6;

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    // Simulating an API call to fetch news articles
    const fetchNews = async () => {
      // In a real application, you would fetch data from an API here
      const newsData = [
        {
          id: 1,
          title: "Insera Unveils Revolutionary Plastic Recycling Technology",
          date: "2024-03-15",
          excerpt: "Our latest innovation promises to transform the plastic recycling industry, making it more efficient and environmentally friendly.",
          image: "https://example.com/image1.jpg"
        },
        {
          id: 2,
          title: "Expansion into Asian Markets: New Partnerships Announced",
          date: "2024-03-10",
          excerpt: "Insera is proud to announce new strategic partnerships that will strengthen our presence in key Asian markets.",
          image: "https://example.com/image2.jpg"
        },
        {
          id: 3,
          title: "Insera Wins Industry Award for Sustainable Practices",
          date: "2024-03-05",
          excerpt: "Our commitment to sustainability has been recognized with a prestigious industry award, highlighting our eco-friendly initiatives.",
          image: "https://example.com/image3.jpg"
        },
        {
          id: 4,
          title: "Q4 Financial Results Exceed Expectations",
          date: "2024-02-28",
          excerpt: "Insera's Q4 financial results show strong growth, surpassing market expectations and setting a positive tone for the year ahead.",
          image: "https://example.com/image4.jpg"
        },
        // Add more news articles as needed
      ];

      setAllNewsArticles(newsData);
      setDisplayedNews(newsData.slice(0, articlesPerPage));
    };

    fetchNews();
  }, []);

  const loadMoreNews = async () => {
    setIsLoading(true);
    // Simulating an API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const nextPage = page + 1;
    const startIndex = (nextPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const newArticles = allNewsArticles.slice(startIndex, endIndex);

    setDisplayedNews(prevNews => [...prevNews, ...newArticles]);
    setPage(nextPage);
    setIsLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-primary to-primary-dark min-h-screen text-white -mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
        >
          Latest News
        </motion.h1>
        
        {/* Featured Article */}
        {displayedNews.length > 0 && (
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img src={displayedNews[0].image} alt={displayedNews[0].title} className="w-full h-64 md:h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{displayedNews[0].title}</h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{new Date(displayedNews[0].date).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-600 mb-6">{displayedNews[0].excerpt}</p>
                <Link to={`/news/${displayedNews[0].id}`} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Read More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNews.slice(1).map((article, index) => (
            <motion.div
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{article.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link to={`/news/${article.id}`} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                  Read More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {displayedNews.length < allNewsArticles.length && (
          <div className="text-center mt-12">
            <button 
              className="bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300 flex items-center justify-center"
              onClick={loadMoreNews}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader className="animate-spin mr-2" size={20} />
                  Loading...
                </>
              ) : (
                'Load More News'
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;