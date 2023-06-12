import style from "./style.module.css";

import { useMemo, useState } from "react";

/**
 * @description A generic paginated feed component
 *
 * @param {{
 *  className?: string
 *  feedCard: React.JSX.Element
 *  feedSize?: number
 *  getFeedLength: () => number
 *  getFeedPage: (currentSlice: number, sliceSize: number) => any[]
 * }} props
 * @property props.className CSS classes for container element
 * @property props.feedCard The component used for displaying items
 * @property props.feedSize number of elements to display at once in feed
 * @property props.getFeedLength number of elements to display at once in feed
 * @property props.getFeedPage number of elements to display at once in feed
 */
export function FeedAltB(props) {
  // The properties (props) we are using in this component
  const {
    className,
    feedCard,
    feedSize = 10,
    getFeedLength,
    getFeedPage,
  } = props;

  // React Hooks see link for full list
  // https://react.dev/reference/react
  const itemCount = useMemo(getFeedLength, [getFeedLength]);
  const [currentPage, setCurrentPage] = useState(0);

  // Computed / Derived information
  const currentArticles = getFeedPage(currentPage, feedSize);

  // Event Handlers
  function nextPage() {
    setCurrentPage((currentPage) => {
      // Handle overflow
      if (currentPage * feedSize >= itemCount - feedSize) {
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

  // The HTML (JSX)
  return (
    <div className={style["container"] + " " + className}>
      <header className={style["active-filter"]}>
        <h1>Current filter</h1>
      </header>

      <ul className={style["feed"]}>
        {currentArticles.map((article) => {
          return <li key={article.slug}>{feedCard({ ...article })}</li>;
        })}
      </ul>

      <nav className={style["controls"]}>
        <button onClick={previousPage}>Previous</button>
        <button onClick={nextPage}>Next</button>
      </nav>
    </div>
  );
}
