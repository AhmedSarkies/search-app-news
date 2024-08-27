import { useParams, Navigate } from "react-router-dom";
import ArticleDetails from "../components/ArticleDetails";

const Article = () => {
  const { id } = useParams();
  const isAuthenticated = document.cookie.includes("isAuthenticated");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto p-4 my-4">
      <ArticleDetails id={id} />
    </div>
  );
};

export default Article;
