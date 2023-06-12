import style from "./style.module.css";

import { ArticleCard } from "../ArticleCard/ArticleCard";
import { getFeedPage } from "../../data/articles/articlesHandlers";
import { useState } from "react";

export function Feed(props) {
  const { className } = props;

  const [currentPage, setCurrentPage] = useState(0)
  const currentArticles = getFeedPage(currentPage);

  function nextPage() {
    setCurrentPage(
      (currentPage) => currentPage + 1
    )
  }

  function previousPage() {
    setCurrentPage(
      (currentPage) => currentPage - 1
    )
  }

  return (
    <div className={style["container"] + " " + className}>
      <header className={style["active-filter"]}>
        <h1>Current filter</h1>
      </header>

      <ul className={style["feed"]}>
        {currentArticles.map((article) => {
          return (
            <li key={article.slug}>
              <ArticleCard {...article} />
            </li>
          );
        })}
      </ul>

      <nav className={style["controls"]}>
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </nav>
    </div>
  );
}
