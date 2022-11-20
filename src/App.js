import React from 'react';
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Home from "./components/Indexpage";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
      <main className="app">
        <ScrollToTop height='20' smooth="true" color="var(--primary-500)" style={{marginBottom: "-1rem"}} top="500"/>
        <div className="container">
          <ToastContainer/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </main>
  );
}

export default App;
