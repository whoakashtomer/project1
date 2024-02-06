import React from "react";
import "./Login.css";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, GoogleOutlined, FacebookFilled, TwitterCircleFilled } from '@ant-design/icons';

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export default function Login() {
  return (
    <div className="main_wrapper">
      <h1 className="welcome_wrapper">Welcome to the Login page</h1>
      <div className="login_wrapper">
        <h2>Login </h2>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Username" className="username">
            <Input
              placeholder="Please enter username"
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              />
          </Form.Item>

          <Form.Item label="Password" className="password">
            <Input.Password 
            size="large"
            placeholder="Please enter your password" 
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="componentDisabled">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div className="social_login_wrapper">
        <h5>You can also login using</h5>
        <div className="socialmedia-icons">
        <GoogleOutlined className="google"/>
        <FacebookFilled className="facebook"/>
        <TwitterCircleFilled className="twitter"/>
        </div>
      </div>
      </div>
    </div>
  );
}
