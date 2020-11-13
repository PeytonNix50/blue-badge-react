import React, { useState, useEffect } from 'react';
import ReviewsItem from './ReviewsItem';

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

    return(
        <div>
            {reviews.map((revObj, i) => <ReviewsItem rev={revObj} key={i} />)}
        </div>
    )
}

export default ReviewsList