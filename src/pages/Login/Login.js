import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  Card as AntCard,
  Form,
  Col,
  Input,
  Row,
  message,
  Button,
} from "antd";
import { api, Status } from '@api';
import { localStorage } from '@utils';
import { saveToken } from '@store/auth/authSlice';
import { PRIVATE_ROUTE } from '../../route.constants';

const {
  HOME,
  DASHBOARD,
} = PRIVATE_ROUTE;

const Container = styled.div`
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

const Card = styled(AntCard)`
width: 100%;
`;

const Title = styled.h1`
font-size: 36px;
font-weight: bold;
text-align: center;
`;

const SubTitle = styled.div`
font-size: 16px;
padding-bottom: 25px;
text-align: center;
`;

const FormItem = styled(Form.Item)`
text-align: center;
`;


const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.token);
  const [apiStatus, setApiStatus] = useState(Status.DEFAULT);

  if (isLoggedIn) {
    return <Navigate to={`/${HOME}/${DASHBOARD}`} />
  }

  const onFinish = (values) => {
    if (apiStatus !== Status.LOADING) {
      setApiStatus(Status.LOADING);
      api
        .login(values)
        .then(response => {
          const { token } = response;
          setApiStatus(Status.SUCCESS);
          message.success('Login Success!');

          // save token to redux
          dispatch(saveToken(token));
          // save token to localstorage
          localStorage.setToken(token);
          // set token to request obj
          api.setSessionToken(token);

        })
        .catch(error => {
          setApiStatus(Status.ERROR);
          message.error(error);
        });
    }
  }

  return (
    <Row>
      <Col xs={2} sm={4} md={8} />
      <Col xs={20} sm={16} md={8}>
        <Container>
          <Card>
            <Title>Login</Title>
            <SubTitle>Hello! Log in with your username.</SubTitle>
            <Form
              layout='vertical'
              requiredMark={false}
              initialValues={{
                username: 'kminchelle',
                password: '0lelplR',
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: '',
                  },
                ]}
              >
                <Input
                  size='large'
                  placeholder='Username'
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '',
                  },
                ]}
              >
                <Input.Password
                  size='large'
                  placeholder='Password'
                />
              </Form.Item>

              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={apiStatus === Status.LOADING}
                >
                  LOG IN
                </Button>
              </FormItem>
            </Form>
          </Card>
        </Container>
      </Col>
      <Col xs={2} sm={4} md={8} />
    </Row>
  );
}

export default Login;