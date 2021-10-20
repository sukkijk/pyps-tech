
import React, { Component } from "react";
import '../App.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import { Card ,message} from 'antd';
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render(){
const onFinish = (values) => {

const datatosend={
  Projectname:values.Projectname,
  ProjectID:values.ProjectID
}
console.log('Success:', datatosend);
message.success("Project created successfully")

};

const onFinishFailed = (errorInfo) => {
console.log('Failed:', errorInfo);
};

return (
  
    <div className="App">
       <Row justify="center" style={{marginTop:'50px'}}>
        <Col span={2}></Col>
        <Col span={8}>
          
        <Card title="Create Project" type="inner">
    
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
        label="Project Name"
        name="Projectname"
        rules={[
          {
            required: true,
            message: 'Please input your Project Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Project ID"
        name="ProjectID"
        rules={[
          {
            required: true,
            message: 'Please input your Project ID!',
          },
        ]}
      >
        <Input />
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
    </div>
  );
      }
}

export default Admin;