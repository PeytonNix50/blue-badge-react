// import React, { useState, useEffect } from 'react';
// import ReviewsList from './ReviewsList';
// import API_URL from '../../env';



// const Reviews = (props) => {
//     const [reviews, setReviews] = useState([])
    

//     useEffect(
//         () => {
//             fetchReviews()
//         }, []
//     )

//     const fetchReviews = () => {
//         fetch(`${API_URL}/reviews`, {
//             method: 'GET'
//         }).then(r => r.json())
//           .then(rArr => setReviews(rArr))
//     }

//     return(
//         <div>
//             <ReviewsList reviews={reviews} fetchReviews={fetchReviews} />
//         </div>
//     )
// }

// export default Reviews