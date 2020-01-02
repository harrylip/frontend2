import React from 'react'

import { Table, Input, Button, Popconfirm, Form,message } from 'antd';
var AdminCss =require("./admin.css")
const columns = [
  {
    title: '管理员ID',
    dataIndex: '管理员ID',
    width: 150,
  },
  {
    title: '管理员名',
    dataIndex: '管理员名',
    width: 150,
  },
  {
    title: '电话号码',
    dataIndex: '电话号码',
    width: 150,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    管理员ID: `8888888 ${i}`,
    管理员名: `管理员 ${i}`,
    电话号码: `1354653256 ${i}`,
  });
}

export default class Admin extends React.Component{

  constructor(props){
    super(props);
    this.state={}
}
  changeValue=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
 register = () =>{
   var data={
     "username":this.state.username,
     "password":this.state.password
   }
   fetch("/user/login",{
     method:"post",
     headers:{
       "Content-Type":"application/json"
     },
     body:JSON.stringify(data)
   }).then(response=>response.json())
   .then(result=>{
     if (result.state==1) {
       message.info("管理员不存在")
     } else if(result.state==2){
      message.info("管理员已存在")

     }
   })
 } 

 render(){
        
  return(
      <div className={AdminCss.div}>
          <Button onClick={this.register}>管理员查询：</Button>
          <br></br>
          <Input placeholder="username" type="text" name="username" value={this.state.username} onChange={e=>this.changeValue(e)}  />
          <br></br>
          <Input placeholder="password" type="text" name="password" value={this.state.password} onChange={e=>this.changeValue(e)}  />
          <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 590 }} />,
      </div>
  )
}
}
// const EditableContext = React.createContext();
// const EditableRow = ({ form, index, ...props }) => (
//   <EditableContext.Provider value={form}>
//     <tr {...props} />
//   </EditableContext.Provider>
// );
// const EditableFormRow = Form.create()(EditableRow);

// class EditableCell extends React.Component {
//   state = {
//     editing: false,
//   };

//   toggleEdit = () => {
//     const editing = !this.state.editing;
//     this.setState({ editing }, () => {
//       if (editing) {
//         this.input.focus();
//       }
//     });
//   };

//   save = e => {
//     const { record, handleSave } = this.props;
//     this.form.validateFields((error, values) => {
//       if (error && error[e.currentTarget.id]) {
//         return;
//       }
//       this.toggleEdit();
//       handleSave({ ...record, ...values });
//     });
//   };

//   renderCell = form => {
//     this.form = form;
//     const { children, dataIndex, record, title } = this.props;
//     const { editing } = this.state;
//     return editing ? (
//       <Form.Item style={{ margin: 0 }}>
//         {form.getFieldDecorator(dataIndex, {
//           rules: [
//             {
//               required: true,
//               message: `${title} is required.`,
//             },
//           ],
//           initialValue: record[dataIndex],
//         })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
//       </Form.Item>
//     ) : (
//       <div className={AdminCss.cell} style={{ paddingRight: 24 }} onClick={this.toggleEdit} >
//         {children}
//       </div> 
//     );
//   };


//   constructor(props){
//     super(props);
//     this.state={}
// }
//   changeValue=(e)=>{
//     this.setState({
//       [e.target.name]:e.target.value
//     })
//   }
//  find = () =>{
//    var data={
//      "admin_name":this.state.admin_name
//    }
//    fetch("/user/admin_login",{
//      method:"post",
//      headers:{
//        "Content-Type":"application/json"
//      },
//      body:JSON.stringify(data)
//    }).then(response=>response.json())
//    .then(result=>{
//      if (result.state==1) {
//        message.info("管理员不存在")
//      } else if(result.state==2){
//       message.info("管理员存在")

//      }
//    })
//  } 


//   render() {
//     const {editable, dataIndex, title, record, index, handleSave, children, ...restProps} = this.props;
//     return (
//       <td {...restProps}>
//         {editable ? (
//           <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
//         ) : (
//           children
//         )}
//       </td>
//     );
//   }
// }
// export default class Admin extends React.Component{
//     constructor(props) {
//         super(props);
//         this.columns = [
//           {
//             title: '管理员ID',
//             dataIndex: '管理员ID',
//             width: '20%',
//             editable: true,
//           },
//           {
//             title: '管理员名',
//             dataIndex: '管理员名',
//             width: '20%',
//             editable: true,
//           },
//           {
//             title: '电话号码',
//             dataIndex: '电话号码',
//             width: '20%',
//             editable: true,
//           },
//           {
//             title: '删除',
//             dataIndex: '删除',
//             render: (text, record) =>
//               this.state.dataSource.length >= 1 ? (
//                 <Popconfirm title="确定删除吗?" onConfirm={() => this.handleDelete(record.key)}>
//                   <a href="javascript:;">Delete</a>
//                 </Popconfirm>
//               ) : null,
//           },
//         ];
    
//         this.state = {
//           dataSource: [
//             {
//               key: '0',
//               管理员ID: '100000',
//               管理员名: '王五',
//               电话号码: '15629865414',
//             },
//             {
//               key: '1',
//               管理员ID: '100001',
//               管理员名: '李六',
//               电话号码: '15629865852',
//             },
//             {
//               key: '2',
//               管理员ID: '......',
//               管理员名: '......',
//               电话号码: '...........',
//             },
//           ],
//           count: 2,
//         };
//       }
    
//       handleDelete = key => {
//         const dataSource = [...this.state.dataSource];
//         this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
//       };
    
//       handleAdd = () => {
//         const { count, dataSource } = this.state;
//         const newData = {
//           key: count,
//           管理员ID: `10000 ${count}`,
//           管理员名: `管理员 ${count}`,
//           电话号码: `1518346395${count}`,
//         };
//         this.setState({
//           dataSource: [...dataSource, newData],
//           count: count + 1,
//         });
//       };
    
//       handleSave = row => {
//         const newData = [...this.state.dataSource];
//         const index = newData.findIndex(item => row.key === item.key);
//         const item = newData[index];
//         newData.splice(index, 1, {
//           ...item,
//           ...row,
//         });
//         this.setState({ dataSource: newData });
//       };
    
//     render(){
//         const { dataSource } = this.state;
//     const components = {
//       body: {
//         row: EditableFormRow,
//         cell: EditableCell,
//       },
//     };
//     const columns = this.columns.map(col => {
//       if (!col.editable) {
//         return col;
//       }
//       return {
//         ...col,
//         onCell: record => ({
//           record,
//           editable: col.editable,
//           dataIndex: col.dataIndex,
//           title: col.title,
//           handleSave: this.handleSave,
//         }),
//       };
//     });
//         return(
//             <div className={AdminCss.div}>
//               <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 10 }}>
//                   增加信息
//               </Button>
//               <div className={AdminCss.div1}> 
//               <Button onClick={this.find}>管理员查询：</Button>
//               <Input placeholder="admin_name" type="text" name="admin_name" value={this.state.admin_name} onChange={e=>this.changeValue(e)}  /> 
//               </div>
//         <Table  components={components}  rowClassName={() => 'editable-row'}  bordered  dataSource={dataSource}  columns={columns}/>
//             </div>
//         )
//     }
// }