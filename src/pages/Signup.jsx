// import { Form, Input, Button } from 'antd';

// export default function Login() {
//   const handleSignup = ({ email, password }) => {
//     // post request to api/users
//     fetch("http://localhost:4440/users", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email:email, password:password })
//     })
//       .then(response => response.json())
//       .then(data => {
//         setToken(data.token);
//         localStorage.setItem('token', data.token);
//       })
//       .catch(err => alert(err.message))
//     // setToken
//   }
//   return (
//     <>
//       <h2>Login</h2>
//       <Form onFinish={handleSignup} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
//         <Form.Item label="Email" name="email" rules={[{
//           required: true,
//           message: 'Please enter a valid email'
//         }]}>
//           <Input />
//         </Form.Item>
//         <Form.Item label="Password" name="password" rules={[{
//           required: true,
//           message: 'Please enter a password'
//         }]}>
//           <Input.Password />
//         </Form.Item>
//         <Button type="primary" htmlType='submit'>Submit</Button>
//       </Form>
//     </>
//   )
// }
