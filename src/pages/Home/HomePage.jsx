
import { About, Coach, Footer, Home, Navbar, Services } from "../../components/exports";


// import Blogs from "./components/Blogs";
// import withSplashScreen from './components/withSplashScreen';

const HomePage = () => {
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

export default HomePage;
