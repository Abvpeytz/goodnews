import ArticleCard from "./ArticleCard";

export default function ArticleCardList({ articles = [] }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {articles.map((article) => (
        <ArticleCard key={article.uuid} article={article} />
      ))}
    </div>
  );
}
