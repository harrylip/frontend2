import React from 'react'
import { Form, Icon, Input, Button,message } from 'antd';
import {NavLink,Link} from 'react-router-dom'
import Password from 'antd/lib/input/Password';
var SignCss=require('./sign.css')

 export  default  class Sign extends React.Component{
      constructor(props){
        super(props);
        this.state={}
  }
      changeValue=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
      }
     login = () =>{
       var data={
         "admin_name":this.state.admin_name,
         "admin_password":this.state.admin_password
       }
       fetch("/user/admin_login",{
         method:"post",
         headers:{
           "Content-Type":"application/json"
         },
         body:JSON.stringify(data)
       }).then(response=>response.json())
       .then(result=>{
         if (result.state==1) {
           message.info("登陆失败，请重试")
         } else if(result.state==2){
          message.info("登陆成功，欢迎回来")
          this.props.history.push('/homepage')
         }
       })
     } 


    render(){
        return(
            <div className={SignCss.background}>
                <div className={SignCss.top}>
                        <img className={SignCss.top2} src="logo.png" width="270px" height="140px"></img>
                        <div className={SignCss.p1}>管理员入口</div>
                        <img className={SignCss.top3} src="ph1.png" width="200px" height="140px"></img>
                    </div>
                <div className={SignCss.form1}>
                          <p className={SignCss.p}>登录</p>
                          <div className={SignCss.form2}>
                            <Form.Item>
                                <Input type="admin_name" name="admin_name" value={this.state.admin_name} onChange={e=>this.changeValue(e)}  placeholder="用户名" style={{ height: '40px' ,width:'280px'}} />
                            </Form.Item>
                            <Form.Item>
                                <Input.Password type="admin_password" name="admin_password" value={this.state.admin_password} onChange={e=>this.changeValue(e)} placeholder="密码" style={{ height: '40px' ,width:'280px'}} />
                            </Form.Item>
                            <Button className={SignCss.bu2} onClick={this.login} style={{ background:'rgb(141, 182, 230)', height: '40px' ,width:'200px',fontSize:'20px'}}>登录</Button>
                          </div>
                        </div>
            </div>
            
        )
    }
}