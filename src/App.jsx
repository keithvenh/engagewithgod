import {BrowserRouter as Router} from 'react-router-dom';
import PageRoutes from './pages/PageRoutes';
import {useEffect} from 'react';

import Header from './components/header/Header';
import ColorPallette from './helpers/ColorPallette';

function App() {

  useEffect(() => {
    const offset = 64; // Adjust this to match your header height

    const handleAnchorClick = (event) => {
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault(); // Prevent the default anchor behavior
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    // Attach click event to all anchor links with a hash (#)
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    // Cleanup function to remove the event listeners
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <PageRoutes />
      </div>
    </Router>
  );
}

export default App;
