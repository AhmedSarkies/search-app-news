const Pagination = ({ currentPage, setPage }) => {
  const handlePrev = () => {
    if (currentPage > 1) setPage(currentPage - 1);
  };

  const handleNext = () => {
    setPage(currentPage + 1);
  };

  

  return (
    <div className="flex justify-between items-center mt-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="bg-gray-500 text-white py-2 px-4 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
