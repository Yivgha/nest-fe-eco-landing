import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import DealPage from './components/DealPage';
import ErrorPage from './components/ErrorPage';
import LoginPage from './components/LoginPage';
import SignUpPage from "./components/SignUpPage";

function App() { 

  return (
    <Router>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
      path="/deal/:id"
      element={<DealPage/>}
        />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage /> } />
  <Route path="*" element={<ErrorPage />} />
</Routes>
</Router>
  );
}

export default App;
