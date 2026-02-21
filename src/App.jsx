import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 px-6 py-3 border-b border-neutral-200 bg-white sticky top-0 z-10">
        <Link
          to="/"
          className="text-sm font-medium text-neutral-700 hover:text-rose-600 transition-colors"
        >
          Home
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}