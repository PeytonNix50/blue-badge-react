import React, {useState} from 'react';
import ReviewsEdit from './ReviewsEdit';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
  } from 'reactstrap';


const ReviewsItem = (props) => {

    const deleteReviews = (rev) => {
        fetch(`http://localhost:8080/reviews/${props.rev.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then(() => props.fetchReviews())
    }


    return (
        <div>
            <Row>
                <Col sm="3">
                <Card body inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
                    <CardBody body className="text-center">
                    <CardTitle tag='h5'>{props.rev.trailName}</CardTitle>
                    <br />
                    <CardSubtitle tag="h6">Rating: {props.rev.rating}</CardSubtitle>
                    <br />
                    <CardSubtitle tag="h6">Location: {props.rev.location}</CardSubtitle>
                    <br />
                    <CardText>{props.rev.description}</CardText>
                    <br />
                    <CardSubtitle tag="h6">Date: {props.rev.date}</CardSubtitle>
                    <br />
                    {props.rev.owner ===  props.userId ? <Button color= "danger" id='deleteReview' onClick={() => {deleteReviews(props.rev)}} type='button'>Delete Review</Button>  : <div></div>}
                    <br />
                    <br />
                    {props.rev.owner ===  props.userId ? <ReviewsEdit fetchReviews={props.fetchReviews} rev={props.rev.id} /> : <div></div>}
                    </CardBody>
                </Card>
            </Col>
            </Row>
            <br />
        </div>
    )
}

export default ReviewsItem