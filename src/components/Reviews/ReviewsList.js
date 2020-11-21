import React, { useState, useEffect } from 'react';
import ReviewsItem from './ReviewsItem';
import './ReviewsList.css';


const ReviewsList = (props) => {

    const [reviews, setReviews] = useState([])
    

    useEffect(
        () => {
            fetchReviews()
        }, []
    )

    const fetchReviews = () => {
        fetch('http://localhost:8080/reviews', {
            method: 'GET'
        }).then(r => r.json())
          .then(rArr => setReviews(rArr))
    }

    // const deleteReviews = (reviews) => {
    //     fetch(`http://localhost:8080/reviews/${reviews.id}`, {
    //         method: 'DELETE',
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': props.token
    //         })
    //     })
    //     .then(() => fetchReviews())
    // }

    return(
        <div className="cardDiv">
            {reviews.map((revObj, i) => <ReviewsItem fetchReviews={props.fetchReviews} rev={revObj} key={i} userId={props.userId} />)}
        </div>
    )
}

export default ReviewsList