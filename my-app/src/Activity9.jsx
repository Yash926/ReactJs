import React, { useState } from 'react';
import './Activity9.css';

const AuthForms = () => {
  const [isLoginView, setIsLoginView] = useState(true);
  
  const toggleView = () => setIsLoginView(!isLoginView);

  const LoginForm = () => (
    <div className="form-container">
      <div className="tab-buttons">
        <button 
          className={`tab-button ${isLoginView ? 'active' : ''}`}
          onClick={() => setIsLoginView(true)}
        >
          Login
        </button>
        <button 
          className={`tab-button ${!isLoginView ? 'active' : ''}`}
          onClick={() => setIsLoginView(false)}
        >
          Signup
        </button>
      </div>
      
      <form className="auth-form">
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            placeholder="Password" 
            className="form-input"
          />
        </div>
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
      
      <div className="switch-form-text">
        Not a member? 
        <button 
          onClick={toggleView}
          className="switch-form-link"
        >
          Signup now
        </button>
      </div>
    </div>
  );

  const SignupForm = () => (
    <div className="form-container">
      <div className="tab-buttons">
        <button 
          className={`tab-button ${isLoginView ? 'active' : ''}`}
          onClick={() => setIsLoginView(true)}
        >
          Login
        </button>
        <button 
          className={`tab-button ${!isLoginView ? 'active' : ''}`}
          onClick={() => setIsLoginView(false)}
        >
          Signup
        </button>
      </div>
      
      <form className="auth-form">
        <div className="form-group">
          <input 
            type="email" 
            placeholder="Email Address" 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            placeholder="Password" 
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            placeholder="Confirm password" 
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Signup
        </button>
      </form>
      
      <div className="switch-form-text">
        Already a member? 
        <button 
          onClick={toggleView}
          className="switch-form-link"
        >
          Login now
        </button>
      </div>
    </div>
  );

  return (
    <div className="container"> 
      {isLoginView ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default AuthForms;