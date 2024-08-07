import {BrowserRouter as Router} from 'react-router-dom';
import PageRoutes from './pages/PageRoutes';

import Header from './components/header/Header';

function App() {
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
