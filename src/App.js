import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import NavBar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Anime from './components/Anime';
import Note from './components/Note';
import { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [load,upadateLoad] = useState(true)
  const [currPage,setCurrPage] = useState('Home')
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
      <Router>
        <div className="App">
          <header className="App-header"/>
          <div id={load? "preload":"preload-non"}/>
          <NavBar currPage={currPage} setCurrPage={setCurrPage}/>
          <Routes>
            <Route path='/' element={<Note/>}/>
            <Route path='/myNoteViewer/' element={<Note/>}/>
            {/* <Route path='/myNoteViwer/' element={<Home/>}/>
            <Route path='/myNoteViwer/Projects' element={<Projects/>}/> */}
            {/* <Route path='/myTestSite/Anime' element={<Anime/>} /> */}
            {/* // <Route path='/myNoteViwer/Note' element={<Note/>} />  */}
          </Routes>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
