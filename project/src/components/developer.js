
import React, { Component } from "react";
import '../App.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col, Select } from 'antd';
import { Card ,message} from 'antd';
const { TextArea } = Input;
const { Option } = Select;
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        reviewlist:[
                {
                ProjectID:1,
                Projectname:"one",
                TaskID:1,
                Taskname:"onetask",
                taskdata:""
               
        },
        {
                ProjectID:2,
                Projectname:"two",
                TaskID:2,
                Taskname:"twotask",
                taskdata:""
               
        }]
    }
  }
  render(){
const onFinishtask = (values) => {

console.log('Success:', this.state.reviewlist);
message.success("Project Submitted successfully")

};

const onFinishFailedtask = (errorInfo) => {
console.log('Failed:', errorInfo);
};
const handlestarttask = (e,i) =>{
        let reviewlist=[...this.state.reviewlist]
        reviewlist[i].taskdata=e.target.value
        this.setState({
                reviewlist
        })
        console.log(i,"e")
}
return (
  
    <div className="App">
         <Row justify="center" style={{marginTop:'50px'}}>
      <Col span={24}>
          
          <Card title="Develop Task" type="inner">
          <Form
        name="basic"
       
        initialValues={{
          remember: true,
        }}
        onFinish={onFinishtask}
        onFinishFailed={onFinishFailedtask}
        autoComplete="off"
      >
          <table>
  <tr>
    <th>Project Name</th>
    <th>Task Name</th>
    
    <th>Start</th>
    <th>Submit</th>
  </tr>
  {this.state.reviewlist.map(({Projectname,Taskname,taskdata},i)=>(
   <tr key={i}>
   <td>{Projectname}</td>
   <td>{Taskname}</td>
   
              <>
   <td>
   <Form.Item label="Start">
   <TextArea rows={4} value={taskdata} onChange={(e)=>handlestarttask(e,i)}/>
   </Form.Item>
   {/* (OR)
   <input type="file" webkitdirectory mozdirectory /> */}
   </td>
   <td>
   <Form.Item
          
          >
           <center> <Button type="primary" htmlType="submit">
              Submit
            </Button></center>
          </Form.Item>
     
   </td>
   </>
  
 </tr>       
  ))}
  </table>
  </Form> 
      </Card>
      </Col>
              </Row>
   
    </div>
  );
      }
}

export default Admin;