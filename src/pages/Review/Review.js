import React from 'react';
import { Card } from 'react-bootstrap';
import * as GoIcons from 'react-icons/go';
import * as RiIcons from 'react-icons/ri';
import './Review.css';

const Review = ({ review }) => {

  const { description, profession, img, ratings, name } = review;

  return (
      // <Container>
      <Card border="dark" style={{height:'360px'}}>
        <Card.Header className="cardHeader cs">
          <div>
          <Card.Img variant="top" src={img} className="image-revw" />
          <div className="cardTextBody">
            <Card.Title className="cardTitle robotoFont">{name}</Card.Title>
            <Card.Text className="cardText  ">
              {profession}
            </Card.Text>
          </div>
          </div>
        </Card.Header>
        <Card.Body>

          {
            ratings === "1" && <Card.Text className="rating-star text-yellow-300 my-0 d-flex">
              <GoIcons.GoStar />
            </Card.Text>
          }
          {
            ratings === "2" && <Card.Text className="rating-star text-yellow-300 my-0 d-flex">
              <GoIcons.GoStar />
              <GoIcons.GoStar />
            </Card.Text>
          }
          {
            ratings === "3" && <Card.Text className="rating-star text-yellow-300 my-0 d-flex">
              <GoIcons.GoStar />
              <GoIcons.GoStar />
              <GoIcons.GoStar />
            </Card.Text>
          }
          {
            ratings === "4" && <Card.Text className="rating-star text-yellow-300 my-0 d-flex">
              <GoIcons.GoStar />
              <GoIcons.GoStar />
              <GoIcons.GoStar />
              <GoIcons.GoStar />
            </Card.Text>
          }
          {
            ratings === "5" && <Card.Text className="rating-star text-yellow-300 my-0 d-flex">
              <GoIcons.GoStar />
              <GoIcons.GoStar />
              <GoIcons.GoStar />
              <GoIcons.GoStar />
              <GoIcons.GoStar />
            </Card.Text>
          }

          <Card.Text className="text-muted">
            <RiIcons.RiDoubleQuotesL className="quote" />{description?.slice(0, 120)}...<RiIcons.RiDoubleQuotesR className="quote" />
          </Card.Text>
        </Card.Body>
      </Card>
      // </Container>


  );
};

export default Review;