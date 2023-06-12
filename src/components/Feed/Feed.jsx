import style from "./style.module.css";

import { useMemo, useState } from "react";

import { ArticleCard } from "../ArticleCard/ArticleCard";
import {
  getArticleCount,
  getArticleSlice,
} from "../../data/articles/articlesHandlers";

export function Feed(props) {
  // The properties (props) we are using in this component
  const {
    className,
    feedSize = 10,
  } = props;

  // React Hooks see link for full list
  // https://react.dev/reference/react
  const articleCount = useMemo(getArticleCount, []);
  const [currentPage, setCurrentPage] = useState(0);

  // Computed / Derived information
  const currentArticles = getArticleSlice(currentPage, feedSize);

  // Event Handlers
  function nextPage() {
    setCurrentPage((currentPage) => {
      // Handle overflow
      if (currentPage * feedSize >= articleCount - feedSize) {
        return currentPage
      } else {
        return currentPage + 1;
      }
    });
  }

  function previousPage() {
    setCurrentPage((currentPage) => {
      // Handle underflow
      if (currentPage <= 0) {
        return 0;
      } else {
        return currentPage - 1;
      }
    });
  }

  // The HTML (JSX)
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
