import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from './components/Navbar/Navbar.js';
import Landing from './components/Landing/Landing.js';
import About from './components/About/Aboute.js';
import Whyus from './components/About/Whyus.js';
import Courses from './components/CourseList/Courses.js';
import Process from './components/Process/Process.js';
// import Testimonials from './components/Testimonials/Testimonials.js';
import Contact from './components/Contact/Contact.js';
import Footer from './components/Footer/Footer.js';
import Whatsapp from './components/Footer/Whatsapp.js';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Landing />
        <About />
        <Whyus />
        <Courses />
        <Process />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
        <Whatsapp />
      </div>
  );
}

export default App;
