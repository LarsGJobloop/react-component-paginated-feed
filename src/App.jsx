import "./styles/normalize.css";
import "./index.css";
import "./App.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";

// Dependencies of our basic Feed
import { Feed } from "./components/Feed/Feed";

// Dependencies of Feed alternative B
import { FeedAltB } from "./components/FeedAltB/FeedAltB";
import { ArticleCard } from "./components/ArticleCard/ArticleCard";
import {
  getArticleSlice,
  getArticleCount,
} from "./data/articles/articlesHandlers";

/**
 * You'll likely want to take any generic component
 * and create a specific implementation
 * tailored for this project.
 *
 * Done here by creating a thin wrapper around
 * the component and passing in the values
 * we want, limiting the options for the end user
 * (saving their mental capacity).
 */

/**
 * A feed for articles
 */
function ArticleFeed(props) {
  const { className } = props;
  return (
    <FeedAltB
      className={className}
      feedCard={ArticleCard}
      getFeedLength={getArticleCount}
      getFeedPage={getArticleSlice}
    />
  );
}

/**
 * The main application component
 */
function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <Banner className="banner" />

      <main>
        <Feed />
        <ArticleFeed />
      </main>

      <Footer className="footer" />
    </div>
  );
}

export default App;
