import { useEffect, useState } from "react";

const ArticleDetails = ({ id }) => {
  const isAuthenticated = document.cookie.includes("isAuthenticated");
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch and display article details using the ID
  useEffect(() => {
    if (isAuthenticated) {
      try {
        fetch(
          `${
            import.meta.env.VITE_BASE_URL
          }?fq=uri:"nyt://article/${id}"&api-key=${
            import.meta.env.VITE_API_KEY
          }`
        )
          .then((res) => res.json())
          .then((data) => {
            setArticle(data.response.docs[0]);
            setLoading(false);
            setError(null);
          });
      } catch (error) {
        console.log("Error fetching article details: ", error);
        setError("Error fetching article details");
        setLoading(false);
      }
    }
  }, [id, isAuthenticated]);

  const date = new Date(article?.pub_date);

  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    // timeZoneName: 'short'
  });

  return !loading && !error ? (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        {article?.headline?.main}
      </h1>
      <img
        src={`https://www.nytimes.com/${article?.multimedia[0]?.url}`}
        alt={article?.headline?.main}
        className="w-full h-full object-cover mb-4"
      />
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600 text-1xl">{article?.byline?.original}</p>
        <p className="text-gray-600 text-1xl">{formattedDate}</p>
      </div>
      <p className="text-gray-600 mb-4 text-2xl">{article?.lead_paragraph}</p>
      <p className="text-gray-800 text-2xl">{article?.abstract}</p>
    </div>
  ) : error ? (
    <div className="text-red-500 text-center text-2xl mt-4">{error}</div>
  ) : (
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
  );
};

export default ArticleDetails;
