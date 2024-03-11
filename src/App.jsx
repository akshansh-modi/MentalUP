import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Coach from "./components/Coach";

// import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
// import withSplashScreen from './components/withSplashScreen';

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="doctors">
          <Coach/>
        </div>

        {/* <div id="blog">
          <Blogs />
        </div> */}
      </main>

      <Footer />
    </div>
  );
};

export default App;
