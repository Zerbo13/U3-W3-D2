import React from "react";
import { Link } from "react-router-dom";


const ArticleCard = ({ article }) => {
return (
<Link
to={`/articles/${article.id}`}
className="block rounded-2xl shadow p-4 hover:shadow-lg transition"
>
<img
src={article.image_url}
alt={article.title}
className="w-full max-w-xs h-40 object-cover rounded-xl mb-3"
/>
<h2 className="text-lg font-semibold mb-1">{article.title}</h2>
<p className="text-sm text-gray-500">
{new Date(article.published_at).toLocaleDateString()}
</p>
</Link>
);
};


export default ArticleCard;