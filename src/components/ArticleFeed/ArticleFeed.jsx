import style from "./style.module.css";

import { FeedAltB } from "../FeedAltB/FeedAltB";
import { ArticleCardAltB as ArticleCard } from "../ArticleCardAltB/ArticleCardAltB";
import {
  getArticleSlice,
  getArticleCount,
} from "../../data/articles/articlesHandlers";

// You'll likely want to take any generic component
// and create a specific implementation
// tailored for this project.
// Done here by creating a thin wrapper around
// the component, passing in the values
// we want and forwarding the rest.
// Limiting the options for the end user
// (saving some of their mental capacity).

/**
 * A feed for articles
 */
export function ArticleFeed(props) {
  // Here we are using the destructuring syntaxt
  // to create a new object without the
  // named keys. This is done immutably, ie without
  // changing the orignial object.

  // Performance Caveat!
  // Creating new objects, copying, ++, is expensive
  // which is what the spread operator does.
  // Be mindful of this if you do something
  // 100-1000++ of times per second.
  const {
    className,
    feedCard,
    getFeedLength,
    getFeedPage,
    // Any remaining fields gets copied into
    // this object. You can change the name if you want.
    ...rest
  } = props;

  return (
    <FeedAltB
      className={className + " " + style["article-feed"]}
      feedCard={ArticleCard}
      getFeedLength={getArticleCount}
      getFeedPage={getArticleSlice}
      {...rest}
    />
  );
}