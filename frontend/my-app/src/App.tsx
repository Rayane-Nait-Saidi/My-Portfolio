import {Routes, Route} from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ExperiencePage from './Experience';
import ContactPage from './ContactPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ExperiencePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;