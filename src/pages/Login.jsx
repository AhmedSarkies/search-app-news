import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto my-20 shadow-2xl py-8 px-4 rounded-lg bg-slate-50 grid"
    >
      <h1 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-blue-950 via-green-400 to-indigo-300 inline-block text-transparent bg-clip-text">
        Login
      </h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block w-full mb-4 p-2 border border-gray-300 rounded-lg outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-4 p-2 border border-gray-300 rounded-lg outline-none"
      />
      <button
        type="submit"
        className="w-full bg-green-700 hover:opacity-85 active:opacity-75 text-white py-2 rounded-lg outline-none"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
