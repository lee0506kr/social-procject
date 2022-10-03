import React from 'react';
import styled from 'styled-components';
import violin from 'assets/images/violin.svg';
import PALETTE from 'constants/palette';
import dayjs from 'dayjs';
import { dateFormat, dateWithOnlyHour } from 'utils/datetime';
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 0.1;
  padding: 5px;
  margin-bottom: 8px;
`;
const ImgWrapper = styled.div``;
const ContentWrapper = styled.div`
  padding: 8px;
  margin-left: 3px;
`;
const ContentDate = styled.div`
  color: ${PALETTE.BLUE[1]};
  font-size: 14px;
  font-weight: 600;
  padding: 3px;
`;
const ContentTitle = styled.div`
  padding: 5px;
  font-weight: 600;
  font-size: 20px;
`;

const EventCard = ({ event }) => {
  return (
    <CardContainer>
      <ImgWrapper>
        <img src={event.img} alt="card" />
      </ImgWrapper>
      <ContentWrapper>
        <ContentDate>{dateWithOnlyHour(dayjs(event.time))}</ContentDate>
        <ContentTitle>{event.title}</ContentTitle>
      </ContentWrapper>
    </CardContainer>
  );
};

export default EventCard;
