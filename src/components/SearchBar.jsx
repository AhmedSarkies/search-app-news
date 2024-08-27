// eslint-disable-next-line react/prop-types
const SearchBar = ({ setQuery, setPage, page }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    setQuery(query);
    if (page !== 1) {
      setPage(1);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="mb-4 flex justify-center items-center gap-2"
    >
      <input
        type="text"
        name="query"
        placeholder="Search for news..."
        className="border border-gray-300 p-2 rounded-lg w-full outline-none"
      />
      <button
        type="submit"
        className="bg-green-700 hover:opacity-85 active:opacity-75 text-white py-2 px-4 rounded"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
