import React from 'react';
import styled from 'styled-components';
import passwordIcon from '../../assets/images/passwordIcon.svg';
import emailIcon from '../../assets/images/emailIcon.svg';
import submitArrow from '../../assets/images/submitArrowIcon.svg';
import PALETTE from '../../constants/palette';
import StyledInput from '../../components/common/Input';
import { SubmitButton } from '../../components/common/Button';
import { Link } from 'react-router-dom';
import useInput from '../../customHooks/useInput'


const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  position: relative;
  img {
    position: absolute;
    right: 50px;
    top: 29px;
    transform: translateY(-50%);
  }`;

const RemembermeCheckbox = styled.input`
  position: relative;
  width: 32px;
  height: 19px;
  -webkit-appearance: none;
  background: ${PALETTE.GRAY[0]};
  outline: none;
  border-radius: 20px;
  transition: 0.5s ease;

  &:checked {
    background: ${PALETTE.BLUE[1]};
  }
  &:before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    top: 2px;
    left: 1px;
    background-color: #ffffff;
    transition: 0.5s ease;
  }
  &:checked:before {
    left: 15px;
  }`;

const ForgotLinkContainer = styled.div`
  a {
    color: ${props => props.color};
    font-size: 17px;
  }`;

const CheckWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;`;

const SlidingCheckbox = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 8px;
    font-size: 17px;
  }`;



const LoginForm = () => {
    const [{ email, password }, onChange] = useInput({
        email: '',
        password: '',
      });


      return (
        <form>
          <StyledInput
            type="email"
            placeholder="abc@email.com"
            icon={emailIcon}
            onChange={onChange}
            value={email}
            name="email"
          />
          <StyledInput
            type="password"
            placeholder="Your Password"
            icon={passwordIcon}
            onChange={onChange}
            value={password}
            name="password"
          />
          <CheckWrapper>
            <SlidingCheckbox>
              <RemembermeCheckbox type="checkbox" name="" />
              <p>Remember Me</p>
            </SlidingCheckbox>
            <ForgotLinkContainer color={PALETTE.BLUE[1]}>
              <Link to="/">Forgot Password?</Link>
            </ForgotLinkContainer>
          </CheckWrapper>
          <ButtonContainer>
            <SubmitButton size="lg" color={PALETTE.BLUE[1]} backcolor="white">
              로그인 <img src={submitArrow} alt={submitArrow}/ >
            </SubmitButton>
          </ButtonContainer>
        </form>
      );
}

export default LoginForm;