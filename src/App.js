import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/Projects/Projects';
import Qualification from './components/qualifications/Qualification';
import Footer from './components/footer/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';


function App() {
  return (
    <>
    <Header />
    
    <main className='main'>
      <Home />
      <About />
      <Projects />
      <Qualification />
      <Footer />
    </main>
    </>
  );
}

export default App;
