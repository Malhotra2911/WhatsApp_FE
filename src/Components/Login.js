import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import './CSS/Login.css';
const LoginPage = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
      navigate('/dashboard');
    };
  return (
    <Container>
      <LeftPanel>
        <Title>Send personalized campaigns on WhatsApp</Title>
        <Image src="https://via.placeholder.com/150" alt="Campaign" />
      </LeftPanel>
      <RightPanel>
        <LoginForm>
          <WelcomeBack>Welcome Back</WelcomeBack>
          <LoginTitle>Log in to AiSensy</LoginTitle>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <LoginButton onClick={handleContinue}>Continue</LoginButton>
          <ForgotPassword>Forgot Password?</ForgotPassword>
        </LoginForm>
      </RightPanel>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e0f7fa;
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Image = styled.img`
  margin-top: 20px;
`;

const LoginForm = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeBack = styled.h2`
  font-size: 18px;
  margin-bottom: 5px;
`;

const LoginTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 20px;
`;

const GoogleButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4285f4;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 10px;
`;

const GoogleIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const OrDivider = styled.div`
  margin: 20px 0;
  color: #aaa;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ForgotPassword = styled.div`
  color: #aaa;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
