import React, { useState } from 'react';
import './App.css';

function App() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="App">
      <header className="Navbar">
        <nav>
          <ul>
            <li><a href="#">Typology</a></li>
            <li
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className="dropdown"
            >
              <a href="#" style={{ marginLeft: '600px' }}>HOME</a>
              {showDropdown && (
                <div style={{ marginLeft: '600px' }} className="dropdown-content">
                  <a href="#">DEFAULT</a>
                  <a href="#">EXAMPLE1</a>
                  <a href="#">EXAMPLE2</a>
                  <a href="#">EXAMPLE3</a>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className="dropdown"
            >
              <a href="#">LAYOUTS</a>
              {showDropdown && (
                <div  className="dropdown-content">
                  <a href="#">DEFAULT</a>
                  <a href="#">EXAMPLE1</a>
                  <a href="#">EXAMPLE2</a>
                  <a href="#">EXAMPLE3</a>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className="dropdown"
            >
              <a href="#">POST</a>
              {showDropdown && (
                <div  className="dropdown-content">
                  <a href="#">DEFAULT</a>
                  <a href="#">EXAMPLE1</a>
                  <a href="#">EXAMPLE2</a>
                  <a href="#">EXAMPLE3</a>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className="dropdown"
            >
              <a href="#">PAGE</a>
              {showDropdown && (
                <div  className="dropdown-content">
                  <a href="#">DEFAULT</a>
                  <a href="#">EXAMPLE1</a>
                  <a href="#">EXAMPLE2</a>
                  <a href="#">EXAMPLE3</a>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className="dropdown"
            >
              <a href="#">ARCHIVES</a>
              {showDropdown && (
                <div  className="dropdown-content">
                  <a href="#">DEFAULT</a>
                  <a href="#">EXAMPLE1</a>
                  <a href="#">EXAMPLE2</a>
                  <a href="#">EXAMPLE3</a>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className="dropdown"
            >
              <a href="#">FEATURES</a>
              {showDropdown && (
                <div  className="dropdown-content">
                  <a href="#">DEFAULT</a>
                  <a href="#">EXAMPLE1</a>
                  <a href="#">EXAMPLE2</a>
                  <a href="#">EXAMPLE3</a>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
