import './App.css';
// import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alerts from './components/Alerts';
// import { animate } from 'animejs';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode
  const [alert, setAlert] = useState(null); 

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggalmode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showalert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  // return (
  //   <Router>
  //     <Navbar title="TextUtils" mode={mode} toggalmode={toggalmode} />
  //     <Alerts alert={alert} />
  //     <div className="container my-3">
  //   <Routes>
  //         <Route exact path="/about"
  //          element={<About />} />
  //         <Route
  //           exact path="/"
  //           element={
  //           <TextForm showalert={showalert} heading="Enter the text to analyse" mode={mode} />
  //         }
  //         />
  //       </Routes>
  //     </div>
  //   </Router>
  // );
// }


  return (
   <>
      <Navbar title="TextUtils" mode={mode} toggalmode={toggalmode} />
      <Alerts alert={alert} />
      <div className="container my-3">

      <TextForm showalert={showalert} heading="Enter the text to analyse" mode={mode} />
        
      </div>
  </>
  );
}

export default App;
