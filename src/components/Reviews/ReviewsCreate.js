import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import ReviewsList from './ReviewsList';
import { Button, Input, Label } from 'reactstrap';


const ReviewsCreate = (props) => {

    const [trailName, setTrailName] = useState('')
    const [rating, setRating] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const history = useHistory()

    const resetForm = (e) => {
        setTrailName('')
        setRating('')
        setLocation('')
        setDescription('')
        setDate('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            name: trailName,
            rating: rating,
            location: location,
            description: description,
            date: date
        }
        fetch('http://localhost:8080/reviews/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            },
            body: JSON.stringify(body)
        }).then(r => r.json())
          .then(rObj => {
              console.log(rObj)
              resetForm()
              history.push('/')
              props.fetchReviews()
          })
    }

    return (
        <div>
            <form style={{marginLeft: '450px'}}>
                <label style={{width:'125px'}} htmlFor='trailName'>Trail Name:</label>
                <input placeholder='Ex: Pacific Crest Trail' style={{borderRadius:'10px'}} id='trailName' value={trailName} onChange={e => setTrailName(e.target.value)} required/>
                <br />
                <label style={{width:'125px'}} htmlFor='rating'>Rating:</label>
                <input placeholder='Give a Rating 1-5' style={{borderRadius:'10px', width:'185px'}} id='rating' value={rating} onChange={e => setRating(e.target.value)} type="number" min="1" max="5" required/>
                <br />
                <label style={{width:'125px'}} htmlFor='location'>Location:</label>
                <input placeholder='Ex: California' style={{borderRadius:'10px'}} id='location' value={location} onChange={e => setLocation(e.target.value)} required/>
                <br />
                <label style={{width:'125px'}} htmlFor='description'>Review:</label>
                <input placeholder='Type Your Review' style={{borderRadius:'10px'}} id='description' value={description} onChange={e => setDescription(e.target.value)} />
                <br />
                <label style={{width:'125px'}} htmlFor='date'>Date Attended:</label>
                <input placeholder='Ex: 01/01/2020' style={{borderRadius:'10px'}} id='date' value={date} onChange={e => setDate(e.target.value)} required/>
                <br />
                <Button color='secondary' style={{marginLeft: '20px'}} id='resetForm' onClick={resetForm} type='button'>Reset Review</Button>
                <Button color='success' style={{marginLeft: '15px'}} id="submitReview" onClick={handleSubmit} type="submit">Submit Review!</Button>
            </form>
            <br />
            {/* <ReviewsList /> */}
        </div>
    )
}

export default ReviewsCreate