import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Donate } from "./components/Donate";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Projects } from "./components/Projects";
import { Report } from "./components/Reports";
import ScrollToTopButton from "./components/ScrollToTopButton";



function App() {


  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Report />
      <Donate />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App
