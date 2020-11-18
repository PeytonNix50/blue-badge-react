import React, {useState} from 'react';
import ReviewsEdit from './ReviewsEdit';

const ReviewsItem = (props) => {

    const deleteReviews = (rev) => {
        fetch(`http://localhost:8080/reviews/${props.rev.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        // .then(() => props.fetchReviews())
    }


    return (
        <div>
            <h3>{props.rev.trailName}</h3>
            <p>{props.rev.rating}</p>
            <p>{props.rev.location}</p>
            <p>{props.rev.description}</p>
            <p>{props.rev.date}</p>
            {/* <button id='deleteReview' onClick={() => {deleteReviews(props.rev)}} type='button'>Delete Review</button> */}
            {props.rev.owner ===  props.userId ? <button id='deleteReview' onClick={() => {deleteReviews(props.rev)}} type='button'>Delete Review</button> : <div></div>}
            {props.rev.owner ===  props.userId ? <ReviewsEdit fetchReviews={props.fetchReviews} rev={props.rev.id} /> : <div></div>}
        </div>
    )
}

export default ReviewsItem