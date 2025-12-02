import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ArticleDetail = () => {
const { id } = useParams();
const [article, setArticle] = useState(null);
const [loading, setLoading] = useState(true);


useEffect(() => {
const fetchArticle = async () => {
const res = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
const data = await res.json();
setArticle(data);
setLoading(false);
};
fetchArticle();
}, [id]);


if (loading) return <p className="p-6">Caricamento...</p>;
if (!article) return <p className="p-6">Articolo non trovato.</p>;


return (
<div className="p-6 max-w-3xl mx-auto">
<img
src={article.image_url}
alt={article.title}
className="w-full max-w-3xl h-auto object-cover rounded-2xl mb-4"
/>


<h1 className="text-2xl font-bold mb-2">{article.title}</h1>
<p className="text-gray-500 mb-4">
Pubblicato il: {new Date(article.published_at).toLocaleString()}
</p>


<p className="mb-4">{article.summary}</p>


<a
href={article.url}
target="_blank"
className="text-blue-600 underline"
>
Leggi l'articolo originale
</a>
</div>
);
};


export default ArticleDetail;