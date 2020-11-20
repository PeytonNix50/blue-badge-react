import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from 'reactstrap';

function refreshPage() {
    window.location.reload(false);
  }

const ReviewsEdit = (props) => {

    const [trailName, setTrailName] = useState('');
    const [rating, setRating] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(''); 
    const history = useHistory()

    const [showEdit, setShowEdit] = useState(false);

    const toggle = () => setShowEdit(!showEdit);


    // const editReviews = (rev) => {
    //     fetch(`http://localhost:8080/reviews/${props.rev.id}`, {
    //         method: 'PUT',
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.token
    //         })
    //     })
    //     // .then(() => props.fetchReviews())
    // }

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
        fetch(`http://localhost:8080/reviews/${props.rev}`, {
            method: 'PUT',
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
              refreshPage();
          }) 
    
    }

    return (
    <div>
        <Button type="button" onClick={toggle}>Edit Review</Button>
        {showEdit?
            <form>
                <label htmlFor='trailName'>Trail Name:</label>
                <input id='trailName' value={trailName} onChange={e => setTrailName(e.target.value)} required />
                <br />
                <label htmlFor='rating'>Rating:</label>
                <input id='rating' value={rating} onChange={e => setRating(e.target.value)} required/>
                <br />
                <label htmlFor='location'>Location:</label>
                <input id='location' value={location} onChange={e => setLocation(e.target.value)} required/>
                <br />
                <label htmlFor='description'>Review:</label>
                <input id='description' value={description} onChange={e => setDescription(e.target.value)} required/>
                <br />
                <label htmlFor='date'>Date Attended:</label>
                <input id='date' value={date} onChange={e => setDate(e.target.value)} required/>
                <br />
                <button id='resetForm' onClick={resetForm} type='button'>Reset Review</button>
                <button id="submitReview" onClick={handleSubmit} type="button">Submit Review!</button>
            </form>
            : null}
    </div>
    );
    
}

export default ReviewsEdit;