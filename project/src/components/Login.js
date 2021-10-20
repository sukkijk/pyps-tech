import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';
class Login extends Component {
        constructor(props) {
          super(props);
          this.state = {

          }
        }
        render(){
  const onFinish = (values) => {
    console.log('Success:', values);
    if(values.username != "" && values.username == "admin"){
            if(values.password != "" && values.password == "admin")
        window.location.pathname="/Admin"
    }
   else if(values.username != "" && values.username == "manager"){
        if(values.password != "" && values.password == "manager")
    window.location.pathname="/Manager"
}
else if(values.username != "" && values.username == "developer"){
        if(values.password != "" && values.password == "developer")
    window.location.pathname="/Developer"
}
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
        <Row justify="center" style={{marginTop:'50px'}}>
        <Col span={2}></Col>
        <Col span={8}>
          
        <Card title="Login" type="inner">
    
    <Form
      name="basic"
     
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

   
      <Form.Item
        
      >
       <center> <Button type="primary" htmlType="submit">
          Submit
        </Button></center>
      </Form.Item>
    </Form>
    </Card>
    </Col>
        <Col span={2}>
          
        </Col>
      </Row>
  )
}
};
export default Login;