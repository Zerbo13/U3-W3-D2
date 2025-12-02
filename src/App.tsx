import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import ArticleDetail from "./components/ArticleDetail";


export default function App() {
return (
<>
<nav className="p-4 shadow mb-4 bg-white">
<Link to="/" className="text-xl font-bold">
Spaceflight News
</Link>
</nav>


<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/articles/:id" element={<ArticleDetail />} />
</Routes>
</>
);
}
