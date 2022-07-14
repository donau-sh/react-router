import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './Pages/About';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Post from './Pages/Post';
import Profile from './Pages/Profile';

function App() {
  const [login, setLogin] = useState(false);

  return (
    // basename='/tutorial' -> http://localhost:3000/tutorial/
    // forceRefresch
    /*
       getUserConfirmation={
      (message, callback) => {
        callback(window.confirm())
      }
    }
    */
    <BrowserRouter>
      <div className="App">
        <Header />
        <button onClick={() => setLogin(!login)}>
          {login?"logout":"login"}
        </button>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          
          {/*<Route path='/profile' element={<Profile />} />*/}

          {/* if login -> Profil; else -> Home */}
          {/*<Route path='/profile/*'
            element= {login ? <Profile login={login}/> : <Navigate to="/" replace />}
          />*/}
          <Route path='/profile/*' element={<Profile login={login}/>} />
          

          <Route path='/post' element={<Post />} />
          <Route path='/post/:postId' element={<Post />} />
          
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
