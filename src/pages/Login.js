import React from 'react';
import { SocialButton, SubmitButton } from '../components/common/Button';
import PALETTE from '../constants/palette';
import styled from 'styled-components';
import gobackIcon from '../assets/images/gobackIcon.svg';
import googleIcon from '../assets/images/googleIcon.svg';
import logoIcon from '../assets/images/mainLogo.svg';
import { Link } from 'react-router-dom';
import LoginForm from '../components/layout/LoginForm';

const Container = styled.div`
  padding: 0px 28px;
  height: 100vh;`;

const GoBackButton = styled.div`
  width: 100%;
  padding: 15px 10px;
  margin-top: 5px;
  img {
    width: 22px;
    height: 22px;
  }`;

const LogoContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;`;

const Label = styled.h2`
  padding: 10px;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;`;

const SocialContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  span {
    margin: auto;
    margin-bottom: 10px;
    margin-top: 5px;
    color: ${props => props.color};
    font-size: 18px;
    font-weight: 600;
  }
  button {
    margin: auto;
    font-size: 16px;
    img {
      width: 26px;
      height: 26px;
      margin-right: 12px;
    }
  }
  p {
    font-size: 18px;
    margin: 20px auto;
    a {
      color: #3d56f0;
    }
}`;


const Login = () => {
      return (
        <div style={{ paddingTop: '218px'}}>
        <GoBackButton>
          <img src={gobackIcon} alt ={gobackIcon}/>
        </GoBackButton>
        <LogoContainer>
          <img src={logoIcon} alt={logoIcon}/>
        </LogoContainer>
        <Label>로그인</Label>
        <LoginForm />
        <SocialContainer color={PALETTE.GRAY[0]}>
          <span>OR</span>
          <SocialButton size="lg" color={PALETTE.WHITE[0]}>
            <img src={googleIcon} alt={googleIcon}/> Login with KAKAO
          </SocialButton>
          <p>
            Don't hava an account? <Link to="/join">Sign up</Link>
          </p>
        </SocialContainer>
      </div>
      );
}

export default Login;