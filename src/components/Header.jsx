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
        <Link to="/" className="text-2xl font-bold">
          Search App News
        </Link>
        <nav>
          <Link to="/" className="mr-4">
            Home
          </Link>
          {isAuthenticated ? (
            <Link onClick={logout}>Logout</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
