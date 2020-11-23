import React from 'react';
import ReviewsItem from './ReviewsItem';

const ReviewsSearch = (props) => {

    return (
        <div>
            {props.rev.map((revObj, i) => <ReviewsItem rev={revObj} key={i} userId={props.userId} />)}
        </div>
    )


}

export default ReviewsSearch