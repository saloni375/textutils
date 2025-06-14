import './App.css';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alerts from './components/Alerts';



function App() {
  const [mode, setMode] = useState('light'); 
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
      document.body.style.backgroundColor = '#192734';
      showalert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };


  return (
   <>
      <Navbar title="TextUtils" mode={mode} toggalmode={toggalmode}
     
      />
      
      <Alerts alert={alert} />
      <div className="container my-3">
    <TextForm showalert={showalert} heading="Enter the text to analyse" mode={mode} />
    <br></br>
    <br></br>
    <br></br>
    <About  title="About"/>
        
      </div>
  </>
  );
}

export default App;
