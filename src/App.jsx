import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import DealPage from './components/DealPage';
import ErrorPage from './components/ErrorPage';

function App() { 

  return (
    <Router>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
      path="/deal/:id"
      element={<DealPage/>}
    />
  <Route path="*" element={<ErrorPage />} />
</Routes>
</Router>
  );
}

export default App;
