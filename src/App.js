import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';


const App = () => (
  <body className="landing">
    <Header />
    <Banner />
    <About />
    <Projects />
    <Footer />
  </body>
)

export default App;
