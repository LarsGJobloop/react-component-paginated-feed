import style from "./style.module.css";

import { useMemo, useState } from "react";

import { ArticleCard } from "../ArticleCard/ArticleCard";
import {
  getArticleCount,
  getArticleSlice,
} from "../../data/articles/articlesHandlers";

/**
 * @description A paginated feed of articles
 *
 * @param {{
 *  className?: string,
 *  feedSize?: number
 * }} props
 * @property {string} className CSS classes for container element
 * @property {number} feedSize number of elements to display at once in feed
 */
export function Feed(props) {
  // The properties (props) we are using in this component
  const { className, feedSize = 10 } = props;

  // React Hooks see link for full list
  // https://react.dev/reference/react
  const articleCount = useMemo(getArticleCount, []);
  const [currentPage, setCurrentPage] = useState(0);
  const currentArticles = useMemo(
    () => getArticleSlice(currentPage, feedSize),
    [currentPage]
  );

  // Computed / Derived variables
  const totalPages = (articleCount - feedSize) / feedSize;

  // Event Handlers
  function nextPage() {
    setCurrentPage((currentPage) => {
      // Handle overflow
      if (currentPage * feedSize >= articleCount - feedSize) {
        return currentPage;
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

  function firstPage() {
    setCurrentPage(0);
  }

  function lastPage() {
    setCurrentPage(totalPages);
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
        <button onClick={firstPage}>First</button>
        <button onClick={previousPage}>Previous</button>
        <PageDisplay
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
        <button onClick={nextPage}>Next</button>
        <button onClick={lastPage}>Last</button>
      </nav>
    </div>
  );
}

function PageDisplay(props) {
  const { totalPages, currentPage, setCurrentPage } = props;
  const pages = Array.from(Array(totalPages + 1).keys());

  function handleClick(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <ul className={style["pages"]}>
      {pages.map((pageNumber) => {
        return (
          <li
            className={pageNumber === currentPage ? style["current-page"] : ""}
            key={pageNumber}
          >
            <button onClick={() => handleClick(pageNumber)}>
              {pageNumber + 1}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
