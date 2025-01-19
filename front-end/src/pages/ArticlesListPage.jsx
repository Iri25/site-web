import ArticleList from "../ArticlesList";
import articles from "../article-content";
import "../styles.css";

export default function ArticlesListPage() {
  return (
    <div className="page-container">
      <h1>Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
}
