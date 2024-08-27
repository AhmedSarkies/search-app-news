import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Login from "./pages/Login";

const App = () => {
  const isAuthenticated = document.cookie.includes("isAuthenticated");

  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          {isAuthenticated ? (
            <Route path="/login" element={<Navigate to="/" />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
