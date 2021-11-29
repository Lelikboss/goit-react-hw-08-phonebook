import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import { Form, Input, Button } from 'antd';
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
export default function LoginView() {
  const [form] = Form.useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        console.log(email);
        return setEmail(value);
      case 'password':
        console.log(password);
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    dispatch(authOperations.logIn({ email: e.email, password: e.password }));
    setEmail('');
    setPassword('');
  };
  return (
    <Form
      autoComplete="off"
      form={form}
      {...formItemLayout}
      onFinish={handleSubmit}
    >
      <Form.Item
        name="email"
        label="E-mail"
        value={email}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input onChange={handleChange} />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
        value={password}
      >
        <Input.Password onChange={handleChange} />
      </Form.Item>
      <Form.Item label="" className="btn-login">
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
}
