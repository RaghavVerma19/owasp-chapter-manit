"use client";
import React, { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "translateY(0)" : "translateY(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        {children}
      </div>
    </section>
  );
}

var requestOptions = {
  method: "GET",
};

var query_params = {
  q: "Cyber security",
  lang: "en",
  apikey: "3b4daf8d9ff0e2df9c8ce52ab2211357",
};

var esc = encodeURIComponent;
var query = Object.keys(query_params)
  .map(function (k) {
    return esc(k) + "=" + esc(query_params[k]);
  })
  .join("&");

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;
    const handleFetchNewsData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://gnews.io/api/v4/search?" + query,
          requestOptions
        );
        const data = await response.json();
        console.log(data);
        const articles = Array.isArray(data.articles)
  ? data.articles?.map(({ title, description, source, url, content, publishedAt, image }) => ({ title, description, source, url, content, publishedAt, image }))
  : [];
setNewsData(articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    handleFetchNewsData();
  }, [query]);

  const pathname = usePathname();
  
  return (
    <div
      className={
        pathname === "/"
          ? "news-container w-full h-auto flex justify-center py-12"
          : "news-container w-full min-h-screen flex justify-center py-12"
      }
      style={{ background: 'transparent' }}
    >
      <div
        className={
          pathname === "/"
            ? "w-[95%] max-w-6xl p-8 border-none bg-transparent"
            : "w-[95%] max-w-6xl p-8 border-none bg-transparent overflow-y-auto custom-scrollbar"
        }
      >
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          newsData && newsData.map((item, index) => (
            <Section key={index}>
              <div className="news mb-16">
                <div className="relative">
                  {/* Unified layout for both desktop and mobile - using mobile design */}
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden h-48 md:h-64">
                      <img 
                        src={item.image || '/images/big-data-resized.jpg'} 
                        alt={item.title} 
                        className="w-full h-full object-cover" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/big-data-resized.jpg';
                        }}
                      />
                    </div>
                    
                    <div className="pt-2">
                      <span className="text-sky-400 text-sm md:text-base font-medium mb-2 block">
                        {item.source?.name || "Cybersecurity News"} • {new Date(item.publishedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-300 text-base md:text-lg mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-400 hover:text-sky-300 font-medium flex items-center w-fit transition-colors text-base md:text-lg"
                      >
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
          ))
        )}
        
        {!loading && newsData.length === 0 && (
          <div className="bg-transparent rounded-xl p-6 text-center">
            <p className="text-slate-300">No news articles available at the moment. Please check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;