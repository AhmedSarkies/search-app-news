import NewsItem from "./NewsItem";

const NewsList = ({ news }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {news?.map((article) => (
        <NewsItem key={article._id} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
