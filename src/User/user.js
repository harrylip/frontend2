import React from 'react'

import { Table, Input, Button, Popconfirm, Form,message } from 'antd';
var UserCss =require("./user.css")
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
//       <div className={UserCss.cell} style={{ paddingRight: 24 }} onClick={this.toggleEdit} >
//         {children}
//       </div> 
//     );
//   };
const columns = [
  {
    title: '用户ID',
    dataIndex: '用户ID',
    width: 150,
  },
  {
    title: '用户名',
    dataIndex: '用户名',
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
    用户ID: `6666666 ${i}`,
    用户名: `用户 ${i}`,
    电话号码: `1354653256 ${i}`,
  });
}

export default class User extends React.Component{

  constructor(props){
    super(props);
    this.state={}
}
  changeValue=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
 find = () =>{
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
       message.info("用户不存在")
     } else if(result.state==2){
      message.info("用户存在")

     }
   })
 } 

 render(){
        
  return(
      <div className={UserCss.div}>
        <Button onClick={this.find}>用户查询：</Button><br></br>
            <Input placeholder="username" type="text" name="username" value={this.state.username} onChange={e=>this.changeValue(e)}  />
              <br></br>
              <Input placeholder="password" type="text" name="password" value={this.state.password} onChange={e=>this.changeValue(e)}  />
              
          <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 590 }} />,
      </div>
  )
}
}
  // render() {
    // const {editable, dataIndex, title, record, index, handleSave, children, ...restProps} = this.props;
    // return (
      // <td {...restProps}>
      //   {editable ? (
      //     <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
      //   ) : (
      //     children
      //   )}
      // </td>
    // )
//   }
// }
// export default class User extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.columns = [
    //       {
    //         title: '用户ID',
    //         dataIndex: '用户ID',
    //         width: '20%',
    //         editable: true,
    //       },
    //       {
    //         title: '用户名',
    //         dataIndex: '用户名',
    //         width: '20%',
    //         editable: true,
    //       },
    //       {
    //         title: '电话号码',
    //         dataIndex: '电话号码',
    //         width: '20%',
    //         editable: true,
    //       },
    //       {
    //         title: '删除',
    //         dataIndex: '删除',
    //         render: (text, record) =>
    //           this.state.dataSource.length >= 1 ? (
    //             <Popconfirm title="确定删除吗?" onConfirm={() => this.handleDelete(record.key)}>
    //               <a href="javascript:;">Delete</a>
    //             </Popconfirm>
    //           ) : null,
    //       },
    //     ];
    
    //     this.state = {
    //       dataSource: [
    //         {
    //           key: '0',
    //           用户ID: '100000',
    //           用户名: '张三',
    //           电话号码: '15629865414',
    //         },
    //         {
    //           key: '1',
    //           用户ID: '100001',
    //           用户名: '李四',
    //           电话号码: '15629865852',
    //         },
    //         {
    //           key: '2',
    //           用户ID: '......',
    //           用户名: '......',
    //           电话号码: '...........',
    //         },
    //       ],
    //       count: 2,
    //     };
    //   }
    
    //   handleDelete = key => {
    //     const dataSource = [...this.state.dataSource];
    //     this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    //   };
    
    //   handleAdd = () => {
    //     const { count, dataSource } = this.state;
    //     const newData = {
    //       key: count,
    //       用户ID: `10000 ${count}`,
    //       用户名: `用户 ${count}`,
    //       电话号码: `1518346395${count}`,
    //     };
    //     this.setState({
    //       dataSource: [...dataSource, newData],
    //       count: count + 1,
    //     });
    //   };
    
    //   handleSave = row => {
    //     const newData = [...this.state.dataSource];
    //     const index = newData.findIndex(item => row.key === item.key);
    //     const item = newData[index];
    //     newData.splice(index, 1, {
    //       ...item,
    //       ...row,
    //     });
    //     this.setState({ dataSource: newData });
    //   };
    
    // render(){
    //     const { dataSource } = this.state;
    // const components = {
    //   body: {
    //     row: EditableFormRow,
    //     cell: EditableCell,
    //   },
    // };
    // const columns = this.columns.map(col => {
    //   if (!col.editable) {
    //     return col;
    //   }
    //   return {
    //     ...col,
    //     onCell: record => ({
    //       record,
    //       editable: col.editable,
    //       dataIndex: col.dataIndex,
    //       title: col.title,
    //       handleSave: this.handleSave,
    //     }),
    //   };
    // });
        // return(
        //     <div className={UserCss.div}>
        //       <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 10 }}>
        //           增加信息
        //       </Button>
        //       <div className={UserCss.div1}> 
        //       <Button onClick={this.find}>用户查询：</Button>
        //       <Input placeholder="username" type="text" name="username" value={this.state.username} onChange={e=>this.changeValue(e)}  /> 
        //       </div>
        // <Table  components={components}  rowClassName={() => 'editable-row'}  bordered  dataSource={dataSource}  columns={columns}/>
        //     </div>
        // )
//     }
// }