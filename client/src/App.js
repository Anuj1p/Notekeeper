import './App.css';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import SignupScreen from './screens/SignupScreen/SignupScreen';
import MyNotes from './screens/MyNotes/MyNotes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} exact />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<SignupScreen />} />
        <Route path='/notes' element={<MyNotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
