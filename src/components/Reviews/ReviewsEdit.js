import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Button} from 'reactstrap';
import API_URL from '../../env';

const ReviewsEdit = (props) => {

    const [trailName, setTrailName] = useState(props.rev.trailName);
    const [rating, setRating] = useState(props.rev.rating);
    const [location, setLocation] = useState(props.rev.location);
    const [description, setDescription] = useState(props.rev.description);
    const [date, setDate] = useState(props.rev.date); 
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
            trailName: trailName || props.rev.trailName,
            rating: rating || props.rev.rating,
            location: location || props.rev.location,
            description: description || props.rev.description,
            date: date || props.rev.date
        }

        fetch(`${API_URL}/reviews/${props.rev.id}`, {
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
            //   refreshPage();
          }) 
    
    }

    return (
    <div>
        <Button color="warning" type="button" onClick={toggle}>Edit Review</Button>
        {showEdit?
            <form style={{textAlign:'left', marginLeft:'200px', marginTop:'25px'}}>
                <label style={{width:'125px'}} htmlFor='trailName'>Trail Name:</label>
                <input placeholder='Ex: Pacific Crest Trail' style={{borderRadius:'10px'}} id='trailName' value={trailName} onChange={e => setTrailName(e.target.value)} required />
                <br />
                <label style={{width:'125px'}} htmlFor='rating'>Rating:</label>
                <input style={{borderRadius:'10px', width:'185px'}} id='rating' value={rating} onChange={e => setRating(e.target.value)} type="number" min="1" max="5" placeholder='Give a Rating 1-5' required/>
                <br />
                <label style={{width:'125px'}} htmlFor='location'>Location:</label>
                <input placeholder='Ex: California' style={{borderRadius:'10px'}} id='location' value={location} onChange={e => setLocation(e.target.value)} required/>
                <br />
                <label style={{width:'125px'}} htmlFor='description'>Review:</label>
                <input placeholder='Type Your Review' style={{borderRadius:'10px'}} id='description' value={description} onChange={e => setDescription(e.target.value)} required/>
                <br />
                <label style={{width:'125px'}} htmlFor='date'>Date Attended:</label>
                <input placeholder='Ex: 01/01/2020' style={{borderRadius:'10px'}} id='date' value={date} onChange={e => setDate(e.target.value)} required/>
                <br />
                <Button color='secondary' style={{marginLeft: '10px', marginRight:'25px'}} id='resetForm' onClick={resetForm} type='button'>Reset Review</Button>
                <Button color='success' style={{}} id="submitReview" onClick={handleSubmit} type="button">Submit Review!</Button>
            </form>
            : null}
    </div>
    );
    
}

export default ReviewsEdit;