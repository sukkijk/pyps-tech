import React, { Component } from "react";
import '../App.css';
import { Form, Input, Button, message } from 'antd';
import { Row, Col, Select } from 'antd';
import { Card } from 'antd';

const { Option } = Select;

class MAnager extends Component {
        constructor(props) {
          super(props);
          this.state = {
            projectlist:[{ProjectID:1,Projectname:"one"},
            {ProjectID:2,Projectname:"two"},
            {ProjectID:3,Projectname:"three"}],

            tasklist:[{TaskID:1,Taskname:"onetask"},
            {TaskID:2,Taskname:"twotask"},
            {TaskID:3,Taskname:"threetask"}],
            Userlist:[{
                    id:1,
                    name:"user1",
                    userType:"Developer"
            },
            {
                id:2,
                name:"user2",
                userType:"Developer"
        },
        {
                id:3,
                name:"user3",
                userType:"Admin"
        }],
        assignedlist:[],
        reviewlist:[
                {
                ProjectID:1,
                Projectname:"one",
                tasks:[{
                        TaskID:1,
                        Taskname:"onetask",
                        assignedTo:[{
                                id:1,
                                name:"user1",
                                userType:"Developer"
                        },
                        {
                            id:2,
                            name:"user2",
                            userType:"Developer"
                    },
                    {
                            id:3,
                            name:"user3",
                            userType:"Admin"
                    }],
                    status:""
                },
                {
                        TaskID:3,
                        Taskname:"newtask",
                        assignedTo:[{
                                id:3,
                                name:"user1",
                                userType:"Developer"
                        },
                        {
                            id:2,
                            name:"user2",
                            userType:"Developer"
                    }],
                    status:""
                }],
               
        },
        {
                ProjectID:2,
                Projectname:"two",
                tasks:[{
                TaskID:2,
                Taskname:"twotask",
                assignedTo:[{
                        id:1,
                        name:"user1",
                        userType:"Developer"
                },
                {
                    id:2,
                    name:"user2",
                    userType:"Developer"
            }],
            status:""
              }]
        }]
            
          }
        }
        render(){
               const handleChange = (value) => {
                        console.log(`selected ${value}`);
                        this.setState({
                                assignedlist:value
                        })
                      }
      const onFinish = (values) => {
      
      const dataTosend={
              ProjectID:this.state.projectlist[values.ProjectName].ProjectID,
              Projectname:this.state.projectlist[values.ProjectName].Projectname,
              TaskID:parseInt(values.TaskID),
              Taskname:values.Taskname
      }
      console.log('Success:', dataTosend);
      message.success("Task created successfully")
      };
      
      const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
      };
      const onFinishtask = (values) => {
              let memberslist=[]
      for(let i=0;i<this.state.assignedlist.length;i++){
        memberslist.push({
                id:this.state.Userlist[this.state.assignedlist[i]].id,
                
                name:this.state.Userlist[this.state.assignedlist[i]].name,
                
                userType:this.state.Userlist[this.state.assignedlist[i]].userType
        })
      }
      let tasks={
        TaskID:this.state.tasklist[values.Taskname].TaskID,
        Taskname:this.state.tasklist[values.Taskname].Taskname,
        assignedTo:memberslist
      }
        const dataTosend={
                ProjectID:this.state.projectlist[values.ProjectName].ProjectID,
                Projectname:this.state.projectlist[values.ProjectName].Projectname,
                tasks:tasks
        }
        console.log('Success:', dataTosend);
        message.success("Task Assigned successfully")
        };
        
        const onFinishFailedtask = (errorInfo) => {
        console.log('Failed:', errorInfo);
        };

        const onFinishreview = (e,i,k) => {
      
               
               
let overalldata=this.state.reviewlist[i]
overalldata.tasks[k].status=e


console.log('Success:', e,i,k,overalldata);
                
                message.success("Status Changed successfully")
                };
               
      return (
    <div className="App">
       <Row justify="center" style={{marginTop:'50px'}}>
       <Col span={8}>
          
          <Card title="Create Task" type="inner">
      
      <Form
        name="basic"
       
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
                <Form.Item name="ProjectName"   label="Project Name">
        <Select >
                {this.state.projectlist.map((q,i)=>(
    <Option value={i} >{q.Projectname}</Option>
    
                ))}
        
        </Select>
      </Form.Item>
        <Form.Item
          label="Task Name"
          name="Taskname"
          rules={[
            {
              required: true,
              message: 'Please input your Task Name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Task ID"
          name="TaskID"
          rules={[
            {
              required: true,
              message: 'Please input your Task ID!',
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
      <Col span={1}></Col>
      <Col span={8}>
          
          <Card title="Assign Task" type="inner">
      
      <Form
        name="basic"
       
        initialValues={{
          remember: true,
        }}
        onFinish={onFinishtask}
        onFinishFailed={onFinishFailedtask}
        autoComplete="off"
      >
                <Form.Item name="ProjectName"   label="Project Name">
        <Select >
                {this.state.projectlist.map((q,i)=>(
    <Option value={i} >{q.Projectname}</Option>
    
                ))}
        
        </Select>
      </Form.Item>
      <Form.Item name="Taskname"   label="Task Name">
        <Select >
                {this.state.tasklist.map((q,i)=>(
    <Option value={i} >{q.Taskname}</Option>
    
                ))}
        
        </Select>
      </Form.Item>
      <Form.Item name="assignTo"   label="Assign">
      
      <Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="select"
//     defaultValue={['']}
    onChange={handleChange}
    optionLabelProp="label"
  >
          {this.state.Userlist.map((m,j)=>(
                  <Option value={j} label={m.name}>{m.name}
                  </Option> 
          ))}
  
 </Select>
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
        
      </Row>
      <Row justify="center" style={{marginTop:'50px'}}>
      <Col span={24}>
          
          <Card title="Review Task" type="inner">
          <table>
  <tr>
    <th>Project Name</th>
    <th>Task Name</th>
    
    <th>Assigned To</th>
    <th>Status</th>
  </tr>
  {this.state.reviewlist.map(({Projectname,tasks},i)=>(
   <tr>
   <td>{Projectname}</td>
   <td>
   {tasks.map(({Taskname},k)=>(
            <tr>
        {Taskname}
       
        </tr>
   ))}
   </td>
   <td>
   {tasks.map(({assignedTo},k)=>(
  <tr>
          <td>
   {assignedTo.map((w,j)=>(
           <tr>
       {w.name} - {w.userType}
       </tr>
      
   ))}
   </td>
</tr>
   ))}
      </td>
   
    <td>
    {tasks.map((n,k)=>(
             
   <Form
        name="basic"
       
        initialValues={{
          remember: true,
        }}
       
        autoComplete="off"
      >
                <Form.Item name={n.status} label="Status">
        <Select onChange={(e)=>onFinishreview(e,i,k)}>
      
    <Option value="Completed" >Completed</Option>
    <Option value="NotCompleted" >NotCompleted</Option>
    
              
        
        </Select>
      </Form.Item>
      </Form> 
     
    ))}
   </td>
  
 </tr>       
  ))}
  </table>

      </Card>
      </Col>
              </Row>
    </div>
  );
}
}

export default MAnager;