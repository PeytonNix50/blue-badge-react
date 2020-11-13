import React, { useState, useEffect } from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import ReviewsCreate from './components/Reviews/ReviewsCreate';
import Navbar from './components/Navbar/Navbar';
import ReviewsList from './components/Reviews/ReviewsList';


function App() {

    const [sessionToken, setSessionToken] = useState(undefined);


    useEffect(
        () => {
          const token = localStorage.getItem('token')
          if (token) {
            setSessionToken(token)
          }
        }, []
      )
    
      const updateToken = (newToken) => {
        setSessionToken(newToken)
        localStorage.setItem('token', newToken)
      }
    
      const clearToken = () => {
        setSessionToken(undefined)
        localStorage.clear()
      }
      // create in ternary so user must have web token to create review but doesn't need to be logged in to see reviews
      return (
          <div>
              <Navbar clearToken={clearToken} />
              { !sessionToken ? <Auth updateToken={updateToken} /> : <ReviewsCreate sessionToken={sessionToken} /> }
              <ReviewsList />
          </div>
      );

}

export default App;