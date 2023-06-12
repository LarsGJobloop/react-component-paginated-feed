import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import { Feed } from "./components/Feed/Feed";
import { Footer } from "./components/Footer/Footer";

import "./styles/normalize.css";
import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <Banner className="banner" />

      <main>
        <Feed />
      </main>

      <Footer className="footer" />
    </div>
  );
}

export default App;
