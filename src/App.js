// import logo from './logo.svg';
// import './App.css';

import { Home, About, Qualification, Skills, Works, Contact } from  '../src/pages';
import { Footer, Navbar } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input type="radio" name='color' id="color-1" />
        <input type="radio" name='color' id="color-2" />
        <input type="radio" name='color' id="color-3" />
        <input type="radio" name='color' id="color-4" />
        <input type="radio" name='color' id="color-5" />
        <input type="radio" name='color' id="color-6" />
        <input type="radio" name='color' id="color-7" />
        <input type="radio" name='color' id="color-8" />
        <input type="radio" name='color' id="color-9" />
        <input type="radio" name='color' id="color-10" />

        <input type="checkbox" id="toggler" />
        <input type="checkbox" id="day-night" />

        <div className="style__switcher">
            <label htmlFor="toggler" className="style__switcher-toggler">
                <i className="fa-solid fa-gear fa-spin"></i>
            </label>

            <label htmlFor="day-night" className="style__switcher-theme">
                <i className="fa-solid fa-sun"></i>
                <i className="fa-solid fa-moon"></i>
            </label>

            <h3 className="style__switcher-title">theme colors</h3>
            <div className="style__switcher-colors">
                <label htmlFor="color-1" className="color-1 color"></label>
                <label htmlFor="color-2" className="color-2 color"></label>
                <label htmlFor="color-3" className="color-3 color"></label>
                <label htmlFor="color-4" className="color-4 color"></label>
                <label htmlFor="color-5" className="color-5 color"></label>
                <label htmlFor="color-6" className="color-6 color"></label>
                <label htmlFor="color-7" className="color-7 color"></label>
                <label htmlFor="color-8" className="color-8 color"></label>
                <label htmlFor="color-9" className="color-9 color"></label>
                <label htmlFor="color-10" className="color-10 color"></label>
            </div>
        </div>
      <Navbar />
      <main className='main'>
      <Home />
      <About />
      <Qualification />
      {/* <Services /> */}
      <Works />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      </main>
      <Footer />
      </header>
    </div>
  );
}

export default App;
