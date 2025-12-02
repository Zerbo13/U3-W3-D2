import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";


const HomePage = () => {
const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
const fetchArticles = async () => {
const res = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
const data = await res.json();
setArticles(data.results);
setLoading(false);
};
fetchArticles();
}, []);


return (
<div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
{loading ? (
<p>Caricamento...</p>
) : (
articles.map((article) => <ArticleCard key={article.id} article={article} />)
)}
</div>
);
};


export default HomePage;