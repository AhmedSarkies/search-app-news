import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import NewsList from "../components/NewsList";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

const Home = () => {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const isAuthenticated = document.cookie.includes("isAuthenticated");

  useEffect(() => {
    if (isAuthenticated) {
      if (query === "") return;
      try {
        fetch(
          `${import.meta.env.VITE_BASE_URL}?q=${query}&page=${page}&api-key=${
            import.meta.env.VITE_API_KEY
          }`
        )
          .then((response) => response.json())
          .then((data) => {
            setNews(data.response?.docs);
            setError(null);
          });
      } catch (error) {
        console.log("Error fetching news: ", error);
        setError("Error fetching news");
      }
    }
  }, [query, page, isAuthenticated]);

  return (
    <div className="container mx-auto p-4">
      {/* if not login */}
      {isAuthenticated === true ? (
        <>
          <SearchBar setQuery={setQuery} setPage={setPage} page={page} />
          {news?.length > 0 && (
            <div className="text-center mt-5 text-xl text-gray-600 my-10">
              Showing {news?.length} results
            </div>
          )}
          {error && (
            <div className="text-center mt-5 text-xl text-red-600">
              Error fetching news
            </div>
          )}
          <NewsList news={news} />
          {news?.length === 0 && (
            <div className="text-center mt-5 text-xl text-gray-600 my-10">
              No news found
            </div>
          )}
          {news?.length > 0 && (
            <Pagination currentPage={page} setPage={setPage} />
          )}
        </>
      ) : (
        <div className="text-center mt-5 text-xl text-gray-600">
          You need to login to see the news{" "}
          <Link className="text-blue-500 hover:underline" to="/login">
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
