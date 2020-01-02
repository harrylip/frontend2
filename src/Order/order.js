import React from 'react'
import { Table, Button,Input,message } from 'antd';
var OrderCss =require("./order.css")
const columns = [
  {
    title: '购买物品',
    dataIndex: '购买物品',
    width: 150,
  },
  {
    title: '购买时间',
    dataIndex: '购买时间',
    width: 150,
  },
  {
    title: '库存',
    dataIndex: '库存',
    width: 150,
  },
  {
    title: '购买地址',
    dataIndex: '购买地址',
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    购买物品: `奶茶 ${i}`,
    购买时间: `666666 ${i}`,
    库存: ` ${i}`,
    购买地址: `文理学院 no. ${i}`,
  });
}
export default class Order extends React.Component{
  constructor(props){
    super(props);
    this.state={}
}
      changeValue=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
      }
      add = () =>{
        var data={
          "name":this.state.name,
          "picture":this.state.picture,
          "text":this.state.text,
          "type":this.state.type
        }
        fetch("/type/insert_type",{
          method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(data)
        }).then(response=>response.json())
        .then(result=>{
          if (result.state==1) {
            message.info("添加成功")
          } else if(result.state==0){
           message.info("添加失败")
          }
        })
      } 
     
         render(){
             
             return(
                 <div className={OrderCss.div}>
                   <Input placeholder="name" type="text" name="name" value={this.state.name} onChange={e=>this.changeValue(e)} style={{width:'400px'}}  />  
                         <br></br>
                         <Input placeholder="picture" type="text" name="picture" value={this.state.picture} onChange={e=>this.changeValue(e)}  style={{width:'400px'}}   />      
                         <br/>
                         <Input placeholder="text" type="text" name="text" value={this.state.text} onChange={e=>this.changeValue(e)} style={{width:'400px'}}  />  
                         <br></br>
                         <Input placeholder="type" type="text" name="type" value={this.state.type} onChange={e=>this.changeValue(e)} style={{width:'400px'}}  />  
                         <br></br>
                         <Button   onClick={this.add}>  添加订单  </Button>
                     <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 590 }} />,
                 </div>
             )
         }
     }