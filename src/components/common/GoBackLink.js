import React from 'react';
import styled from 'styled-components';
import gobackArrow from '../../assets/images/gobackIcon.svg';
const GoBackButton = styled.div`
  width: 100%;
  padding: 15px 0px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  img {
    width: 22px;
    height: 22px;
  }
  h2 {
    margin-left: 10px;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    margin-top: 2px;
  }
`;

const GoBackLink = ({ children }) => {
  return (
    <GoBackButton>
      <img src={gobackArrow} alt="arrow" />
      <h2>{children}</h2>
    </GoBackButton>
  );
};

export default GoBackLink;
