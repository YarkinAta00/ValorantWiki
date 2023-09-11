import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import {Signin} from '../services/AuthService';
import { Link, useNavigate } from 'react-router-dom';

const onFinish = (values) => {
  console.log('Success:', values);

};

const onFinishFailed = (errorInfo, e) => {
  console.log('Failed:', errorInfo);
  e.preventDefault();
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); //
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='w-11/12 md:w-2/5'>
        <div className='text-center mb-10'>
          <h1 className='text-sky-500 text-5xl'>Login</h1>
          <p className='text-base pt-5 pb-6'>Please sign in to see Home Page</p>

          <Form
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please enter your username!',
                },
              ]}
            >
              <Input value={username} placeholder='Please enter your username' onChange={(e) => setUsername(e.target.value)} />
            </Form.Item>

            <Form.Item
              className='pt-4'
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please enter your password!',
                  min: 4,
                },
              ]}
            >
              <Input.Password value={password} placeholder='Please enter your password!' onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item>
              <Form.Item
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot text-sky-500" href="">
                Forgot password
              </a>
            </Form.Item>
            <Button block htmlType="submit" onClick={() => Signin(username, password,navigate)} size='large' type="primary" className='bg-sky-500/100 mt-0'>Login</Button>
            <p className='text-base pt-5 pb-6'>Don't have an account? <Link to={"/register"} className="login-form-forgot text-sky-500" href="">Sign Up</Link></p>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
