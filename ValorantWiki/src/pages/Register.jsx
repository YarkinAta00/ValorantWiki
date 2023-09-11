import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUp } from '../services/AuthService';

const onFinish = (values) => {
    console.log('Success:', values);
  
  };
  
  const onFinishFailed = (errorInfo, e) => {
    console.log('Failed:', errorInfo);
    e.preventDefault();
  };
  
  
const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='w-11/12 md:w-2/5'>
          <div className='text-center mb-10'>
            <h1 className='text-sky-500 text-5xl pb-10'>Register</h1>
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
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter your email!',
                  },
                ]}
              >
                <Input value={email} placeholder='Please enter your email' onChange={(e) => setEmail(e.target.value)} />
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
              <Button block htmlType="submit" onClick={() => SignUp(username,email,password,navigate)} size='large' type="primary" className='bg-sky-500/100 mt-3'>Register</Button>
            </Form>
          </div>
        </div>
      </div>
    );
}

export default Register