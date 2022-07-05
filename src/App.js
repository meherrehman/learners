import './App.css';
import AllCourses from './Components/AllCourses';
import Contact from './Components/Contact';
import Faqs from './Components/Faqs';
import Footer from './Components/Footer';
import MainArea from './Components/MainArea';
import Navbar from './Components/Navbar';
import PopularCourses from './Components/PopularCourses';
import Services from './Components/Services';

function App() {
  return (
    <>
      <Navbar />
      <MainArea />
      <Services />
      <PopularCourses />
      <AllCourses />
      <Faqs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
