import React from 'react';

const ReviewsItem = (props) => {
    return (
        <div>
            <h3>{props.rev.trailName}</h3>
            <p>{props.rev.rating}</p>
            <p>{props.rev.location}</p>
            <p>{props.rev.description}</p>
            <p>{props.rev.date}</p>
        </div>
    )
}

export default ReviewsItem