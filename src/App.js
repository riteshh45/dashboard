import {Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Overview from './pages/Overview';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { useSelector } from 'react-redux';


function App() {
  const theme = useSelector((state) => state.ui.theme);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Sidebar />
      <div className="flex-1 md:ml-64 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
    </div>
  );
}


export default App;
