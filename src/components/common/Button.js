import styled, { css } from 'styled-components';
import PALETTE from '../../constants/palette';
import React from 'react';
export const StyledButton = styled.button`
  border: none;
  background-color: ${props => props.backcolor};
  color: ${props => props.color};
  //width를 다르게
  ${props => {
    if (props.size === 'lg') {
      return css`
        padding: 10px 50px;
        width: 85%;
        height: 58px;
      `;
    } else if (props.size === 'md') {
      return css`
        padding: 15px 20px;
        width: 154px;
        height: 50px;
      `;
    } else {
      return css`
        padding: 5px 10px;
        width: 95px;
        height: 36px;
      `;
    }
  }}
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s all ease-out;
  &:hover {
    background-color: #0050a7;
  }
`;

export const SubmitButton = styled(StyledButton)`
  //color: #ffffff;
`;
export const EditButton = styled(StyledButton)`
  border: 1px solid ${PALETTE.BLUE[1]};
  display: flex;
  gap: 7px;
  img {
    margin-right: 5px;
  }
  span {
    margin-top: 3px;
    font-size: 15px;
    font-weight: 600;
  }
`;
export const SocialButton = styled(StyledButton)`
  color: #120d26;
`;
