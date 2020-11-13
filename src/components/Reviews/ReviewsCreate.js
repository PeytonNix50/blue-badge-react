import React, { useState } from 'react';

const ReviewsCreate = (props) => {

    const [trailName, setTrailName] = useState('')
    const [rating, setRating] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    const resetForm = (e) => {
        setTrailName('')
        setRating('')
        setLocation('')
        setDescription('')
        setDate('')
    }

    const handleSubmit = (e) => {
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
            //   fetchReviews()
          })
    }

    return (
        <div>
            <form>
                <label htmlFor='trailName'>Trail Name:</label>
                <input id='trailName' value={trailName} onChange={e => setTrailName(e.target.value)} />
                <br />
                <label htmlFor='rating'>Rating:</label>
                <input id='rating' value={rating} onChange={e => setRating(e.target.value)} />
                <br />
                <label htmlFor='location'>Location:</label>
                <input id='location' value={location} onChange={e => setLocation(e.target.value)} />
                <br />
                <label htmlFor='description'>Review:</label>
                <input id='description' value={description} onChange={e => setDescription(e.target.value)} />
                <br />
                <label htmlFor='date'>Date Attended:</label>
                <input id='date' value={date} onChange={e => setDate(e.target.value)} />
                <br />
                <button id='resetForm' onClick={resetForm} type='button'>Reset Review</button>
                <button id="submitReview" onClick={handleSubmit} type="button">Submit Review!</button>
            </form>
        </div>
    )
}

export default ReviewsCreate