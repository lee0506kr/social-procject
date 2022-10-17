import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 예제
  const fetchUsers = async () => {
    
    try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        console.log(response);
        setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
  };

  /* 
    useEffect -> componentDidMount, componentDidUpdate
    와 비슷한 개념 
    , [] 빈값에 아무 것도 없으면 바로 호출?
    , [number] state값이 지정 되어 있으면 number 라는 state값이 변동이 
    있다면, 그때에 호출 하겠다 이러한 개념 입니다.
  */

  useEffect(() => {
    fetchUsers();
  }, []);

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
          <SocialButton size="lg" color={PALETTE.WHITE[0]} onClick={(e)=>{
            
            alert('카카오톡')
          
          
          
          
          
          }}>
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