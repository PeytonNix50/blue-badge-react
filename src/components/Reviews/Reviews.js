import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList';



const Reviews = (props) => {
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
            <ReviewsList reviews={reviews} fetchReviews={fetchReviews} />
        </div>
    )
}

export default Reviews