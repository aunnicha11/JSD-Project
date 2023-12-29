// Import necessary React components and styles
import React, { useState } from 'react';
import './App.css';

// Create the main App component
function App() {
  const [backgroundColor, setBackgroundColor] = useState('green');

  const toggleBackgroundColor = () => {
    setBackgroundColor((prevColor) => (prevColor === 'green' ? 'white' : 'green'));
  };

  return (
    <div style={{ backgroundColor }}>
      <header>
        <div className="logo">GreenSculpt</div>
        <nav>
          <ul>
            <li><a href="#" className="text-white">Home</a></li>
            <li><a href="#" className="text-white">About Us</a></li>
            <li><a href="#" className="text-white">Blog</a></li>
            <li><a href="#" className="text-white">Contact Us</a></li>
            <li><a href="#" className="text-white">Sign Up/Log In</a></li>
          </ul>
        </nav>
        <div className="motto">Your Fitness, Your Way</div>
        <button className="registerButton">Register</button>
      </header>

      <section>
        <div className="section2">
          <p>Start Your Fitness Journey Today</p>
        </div>
      </section>

      <section>
        <div className="featureContainer">

        </div>
      </section>

      <section>
        <div className="centerText">
          <p>
            Discover a healthier, happier you with GreenSculpt. We offer a variety of workouts,
            personalized plans, and expert guidance to help you achieve your fitness goals.
          </p>
        </div>
      </section>

      <section>
        <div className="centerText">
          <p>Join GreenSculpt Today</p>
          <p>
            Unlock exclusive access to premium features and personalized workout plans. Sign up now
            and take the first step towards a healthier lifestyle.
          </p>
          <button className="signUpButton">Sign Up</button>
        </div>
      </section>

      <footer>
        <nav className="footerNav">
          <span>| Home |</span>
          <span>About Us |</span>
          <span>Workouts |</span>
          <span>Membership |</span>
          <span>Blog |</span>
          <span>Contact Us |</span>
        </nav>
        <div className="socialIcons">

        </div>
        <p>© 2024 GreenSculpt. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
