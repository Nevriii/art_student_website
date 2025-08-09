import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import EducationalBackground from './components/EducationalBackground';
import Expertise from './components/Expertise';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Introduction />
      <AboutMe />
      <EducationalBackground />
      <Expertise />
      <Footer />
    </div>
  );
}

export default App;
