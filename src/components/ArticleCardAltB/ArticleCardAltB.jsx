import { useState } from "react";
import style from "./style.module.css";

/**
 *
 * @param {{
 *    slug: string
 *    title: string
 *    description: string
 *    body: string
 *    tagList: string[]
 *    createdAt: DateTime
 *    updatedAt: DateTime
 *    favorited: boolean
 *    favoritesCount: number
 *    author: {
 *      username: string
 *      bio: string
 *      image: URL,
 *      following: boolean
 *    }
 *  }} props
 */
export function ArticleCardAltB(props) {
  const {
    title,
    author,
    body,
    createdAt,
    description,
    favorited,
    favoritesCount,
    tagList,
    updatedAt,
  } = props;

  const [hideDetails, setHideDetails] = useState(true)

  function toggleDetails() {
    console.log("clicked")
    setHideDetails(
      (wasHidden) => !wasHidden
    )
  }

  return (
    <article
      className={style["article"]}
      onClick={toggleDetails}
    >
      <header className={style["header"]}>
        <div className={style["bio"]}>
          <img src={author.image} alt={`Avatar of ${author.username}`} />

          <div>
            <a href="">{author.username}</a>
            <span className={style["updatedAt"]}>
              {
                updatedAt
                ? formatDateUTC(updatedAt)
                : formatDateUTC(createdAt)
              }
            </span>
          </div>
        </div>

        <button className={style["favorites"]}>
          {!favorited && "💜"}
          <span>
            {favoritesCount}
          </span>
        </button>
      </header>

      <div
        className={style["main"]}>
        <h1>{trimString(title, 60)}</h1>
        {
          hideDetails
          ? <p>{description}</p>
          : <p>{body}</p>
        }
      </div>

      <footer className={style["footer"]}>
        <a href="">Read more..</a>

        <ul className={style["tag-box"]}>
          {
            tagList.map(
              (tag) => {
                return (
                  <li key={tag} className={style["tag-pill"]}>
                    <span>{tag}</span>
                  </li>
                )
              }
            )
          }
        </ul>
      </footer>
    </article>
  );
}


// Utility functions
function trimString(string, maxLength) {
  if (string.length <= maxLength) {
    return string
  } else {
    return string.slice(0, maxLength) + ".."
  }
}

function formatDateUTC(UTCString) {
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric"
  };
  return new Date(UTCString).toLocaleDateString("en-US", options);
}
