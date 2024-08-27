import { useState } from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ article }) => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return loading ? (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-700 h-10 w-10"></div>
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
    <div
      className="bg-white opacity-85 hover:opacity-100 p-4 rounded-xl shadow-xl
    transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105
    "
    >
      {article?.multimedia[0]?.url === undefined ? (
        <img
          src="https://via.placeholder.com/150"
          alt="Placeholder"
          className="w-full rounded-lg h-48 object-cover mb-4"
        />
      ) : (
        <img
          src={`https://www.nytimes.com/${article?.multimedia[0]?.url}`}
          alt={article?.headline?.main}
          className="w-full rounded-lg h-48 object-cover mb-4"
        />
      )}
      <h3 className="text-xl font-bold mb-2">{article?.headline?.main}</h3>
      <p className="text-gray-600 mb-4">{article?.snippet}</p>
      <Link
        to={`article/${article?._id?.split("nyt://article/")[1]}`}
        className="text-blue-500 hover:underline"
      >
        Read more
      </Link>
    </div>
  );
};

export default NewsItem;
