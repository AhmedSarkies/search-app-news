import { Link } from "react-router-dom";

const Header = () => {
  const isAuthenticated = document.cookie.includes("isAuthenticated");

  const logout = () => {
    // Remove the token from the cookie
    document.cookie =
      "isAuthenticated=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Redirect to the home page
    window.location.href = "/";
  };

  return (
    <header className="bg-gray-900 text-white p-4 shadow-xl mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-200 via-fuchsia-300 to-indigo-700 inline-block text-transparent bg-clip-text"
        >
          Search App News
        </Link>
        <nav>
          <Link to="/" className="mr-4 hover:underline">
            Home
          </Link>
          {isAuthenticated ? (
            <Link onClick={logout}
            className="hover:underline"
            >Logout</Link>
          ) : (
            <Link to="/login"
            className="hover:underline"
            >Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
