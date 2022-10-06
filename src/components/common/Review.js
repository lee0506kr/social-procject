import React from 'react';
import styled from 'styled-components';
import violin from '../../assets/images/violin.svg';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { dateFormat } from 'utils/datetime';
import dayjs from 'dayjs';
const Container = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
`;
const UserProfile = styled.div`
  border-radius: 50%;
  width: 34px;
  height: 34px;
  margin-top: 5px;
  margin-right: 10px;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
const ReviewWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
`;
const Name = styled.div`
  font-size: 22px;
  font-weight: 600;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Date = styled.span`
  font-size: 16px;
  color: gray;
`;
const UserReview = styled.p`
  padding-top: 5px;
  margin-top: 5px;
`;
const StarRating = ({ rating, color = '#FBBE47' }) => {
  return (
    <>
      {Array(parseInt(rating))
        .fill(2)
        .map((el, i) => (
          <BsStarFill key={i} size="13" color={color} />
        ))}
      {rating % 1 !== 0 && <BsStarHalf size="13" color={color} />}
      {Array(Math.floor(5 - rating))
        .fill(2)
        .map((el, i) => (
          <BsStarFill key={i} size="13" color="#E3E3E3" />
        ))}
    </>
  );
};
const Review = ({ review }) => {
  return (
    <Container>
      <UserProfile>
        <img src={review.userProfileImgPath} alt="profile" />
      </UserProfile>
      <ReviewWrapper>
        <Name>
          {review.userName} <Date>{dateFormat(dayjs(review.registDate))}</Date>
        </Name>
        <StarRating rating={review.starRate} />
        <UserReview>{review.review}</UserReview>
      </ReviewWrapper>
    </Container>
  );
};

export default Review;
