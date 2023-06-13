import "./styles/normalize.css";
import "./index.css";
import "./App.css";

import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";

// Our basic Feed
import { Feed } from "./components/Feed/Feed";

// Our Article (tailored generic) Feed
import { ArticleFeed } from "./components/ArticleFeed/ArticleFeed";

/**
 * The main application component
 */
function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <Banner className="banner" />

      <main>
        {/* <Feed /> */}
        <ArticleFeed />
      </main>

      <Footer className="footer" />
    </div>
  );
}

export default App;
