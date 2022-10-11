import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import './App.css';
import EditNote from './Components/EditNote';
import LandingPage from './Components/LandingPage';
import LoginScreen from './Components/LoginScreen';
import MyNotes from './Components/MyNotes';
import NewNote from './Components/NewNote';
import SignupScreen from './Components/SignupScreen';
import store from './Store/configureStore';
import Header from './Components/Header';

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} exact />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<SignupScreen />} />
          <Route path='/notes' element={<MyNotes />} />
          <Route path='/newNote' element={<NewNote />} />
          <Route path='/editNote/:id' element={<EditNote />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
