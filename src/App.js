import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import React, { useState } from 'react';
import Alert from './Alert';
import About from './About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); // shows whether dark mode is enable or not//

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.background = 'gray';
      showAlert("Dark Mode has been enabled", "success");
      // document.title = 'Textutils-Dark Mode'; //for changing the title if dark mode is enable//
      //  setInterval(() => {
      //   document.title = 'Textutils is amazing';
      //  },2000) // titles chaning every 2 second
    }

    else {
      setmode('light');
      document.body.style.background = 'white';
      showAlert("Light Mode has been enabled", "success"); // /for changing the title if light mode is enable//
      //document.title = 'Textutils-Light Mode'
    }

  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils1" mode={mode} toggleMode={toggleMode} aboutText="aboutTextUtils" />
        <div className="container my-3">
          <Alert alert={alert} />
          <Routes>
            {/* users --> component 1
            /users/home --> component 2*/}
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
      {/*< About/> */}
    </>
  );
}

export default App;
