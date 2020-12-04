import React, { useEffect } from 'react';
import ReviewsItem from './ReviewsItem';
import './ReviewsList.css';


const ReviewsList = (props) => {

    // const [reviews, setReviews] = useState([])
    

    useEffect(
        () => {
            props.fetchReviews()
        }, []
    )

    // const fetchReviews = () => {
    //     fetch('http://localhost:8080/reviews', {
    //         method: 'GET'
    //     }).then(r => r.json())
    //       .then(rArr => setReviews(rArr))
    // }

    return(
        <div className="cardDiv">
            {props.reviews.map((revObj, i) => <ReviewsItem fetchReviews={props.fetchReviews} rev={revObj} key={i} userId={props.userId} />)}
        </div>
    )
}

export default ReviewsList