import "./App.css";
// import Clock from "./components/Clock";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  let apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        {/* <News setProgress={setProgress} apiKey={apiKey} pageSize={15} country="us" category="technology" /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={15}
                country="us"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={15}
                country="us"
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={15}
                country="us"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={15}
                country="us"
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={15}
                country="us"
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={15}
                country="us"
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={15}
                country="us"
                category="technology"
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={15}
                country="us"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/about"
            element={<About apiKey={apiKey} key="About" />}
          ></Route>
        </Routes>

        <Footer />
      </Router>
      {/* <Clock /> */}
    </>
  );
}

export default App;