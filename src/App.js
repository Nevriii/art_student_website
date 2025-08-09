import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import EducationalBackground from './components/EducationalBackground';
import Expertise from './components/Expertise';

function App() {
  return (
    <div className="App">
      <Introduction />
      <AboutMe />
      <EducationalBackground />
      <Expertise />
    </div>
  );
}

export default App;
