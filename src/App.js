import React, { useState, useEffect } from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import ReviewsCreate from './components/Reviews/ReviewsCreate';
import NavFile from './components/Navbar/Navbar';
import ReviewsList from './components/Reviews/ReviewsList';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import ReviewsSearch from './components/Reviews/ReviewsSearch';
import { Button } from 'reactstrap';


function App() {

    const [sessionToken, setSessionToken] = useState(undefined);
    const [userId, setUserId] = useState(undefined);
    const [reviews, setReviews] = useState([])
    const [rev, setRev] = useState([])
    const [name, setName] = useState('')

    const handleSearch = () => {
      fetch(`http://localhost:8080/reviews/name/${name}`, {
          method: 'GET',
      }).then(r => r.json())
        .then(rArr => setRev(rArr))
  }


    const fetchReviews = () => {
      fetch('http://localhost:8080/reviews', {
          method: 'GET'
      }).then(r => r.json())
        .then(rArr => setReviews(rArr))
    }

    useEffect(
        () => {
          const token = localStorage.getItem('token')
          if (token) {
            setSessionToken(token)
            setUserId(parseInt(localStorage.getItem('id')))  //parseInt makes user id an integer
          }
          handleSearch()
        }, []
      )
    
      const updateToken = (newToken, id) => {
        setSessionToken(newToken)
        setUserId(id)
        localStorage.setItem('id', id)
        localStorage.setItem('token', newToken)
      }
    
      const clearToken = () => {
        setUserId(undefined)
        setSessionToken(undefined)
        localStorage.clear()
      }
      // create in ternary so user must have web token to create review but doesn't need to be logged in to see reviews
      return (
          <div className='appBody'>
            <Router>
              <NavFile clearToken={clearToken} />
              { !sessionToken ? <Auth updateToken={updateToken} /> :
              <Switch> 
                <Route path="/create"> 
                  <ReviewsCreate fetchReviews={fetchReviews} sessionToken={sessionToken} />
                </Route>
                <Route path="/">
                  {/* <ReviewsList userId={userId} fetchReviews={fetchReviews} /> */}
                </Route>
              </Switch> }
            <input placeholder='Ex: Pacific Crest Trail' style={{borderRadius: '10px', width:'300px', marginBottom:'20px', marginLeft:'385px', marginRight:'10px', fontFamily:'Roboto'}} id='name' onChange={e => setName(e.target.value)} />
            <Button style={{fontFamily:'Roboto'}} onClick={handleSearch}>Search</Button>
            <br />
            {!name === '' ? <ReviewsSearch rev={rev} /> : <ReviewsList userId={userId} fetchReviews={fetchReviews} reviews={reviews} />}
            </Router>
          </div>
      );

}

export default App;