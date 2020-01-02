import React from 'react'
import { Table, Button } from 'antd';
var DonationCss =require("./donation.css")
const data = [
    {
      key: '1',
      time: '6月 8日',
      money: '10000',
      pay:'张三',
    },
    {
      key: '2',
      time: '7月 22日',
      money: '10001',
      pay:'李四',
    },
    {
      key: '3',
      time: '7月 24号',
      money: '10002',
      pay:'张三',
    },
    {
      key: '4',
      time: '7月 30号',
      money: '10003',
      pay:'李四',
    },
    {
        key: '5',
        time: '8月 3号',
        money: '10004',
        pay:'张三',
      },
      {
        key: '6',
        time: '8月 15号',
        money: '10005',
        pay:'李四',
      },
      {
        key: '7',
        time: '8月 21号',
        money: '10006',
        pay:'张三',
      },

  ];
export default class Donation extends React.Component{
    state = {
        filteredInfo: null,
        sortedInfo: null,
      };
    
      handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
          filteredInfo: filters,
          sortedInfo: sorter,
        });
      };
    
      clearFilters = () => {
        this.setState({ filteredInfo: null });
      };
    
      clearAll = () => {
        this.setState({
          filteredInfo: null,
          sortedInfo: null,
        });
      };
    
      setAgeSort = () => {
        this.setState({
          sortedInfo: {
            order: 'descend',
            columnKey: 'goods',
          },
        });
      };
    render(){
        let { sortedInfo, filteredInfo } = this.state;
            sortedInfo = sortedInfo || {};
            filteredInfo = filteredInfo || {};
            const columns = [
            {
                title: '发帖日期',
                dataIndex: 'time',
                key: 'time',
                filters: [{ text: '6月', value: '6月' }, { text: '7月', value: '7月' },{ text: '8月', value: '8月' }],
                filteredValue: filteredInfo.time || null,
                onFilter: (value, record) => record.time.includes(value),
                sorter: (a, b) => a.time.length - b.time.length,
                sortOrder: sortedInfo.columnKey === 'time' && sortedInfo.order,
            },
            {
                title: '发帖编号',
                dataIndex: 'money',
                key: 'money',
                sorter: (a, b) => a.money - b.money,
                sortOrder: sortedInfo.columnKey === 'money' && sortedInfo.order,
            },
            {
                title: '发帖人',
                dataIndex: 'pay',
                key: 'pay',
                
                filters: [{ text: '张三', value: '张三' }, { text: '李四', value: '李四' }],
                filteredValue: filteredInfo.pay || null,
                onFilter: (value, record) => record.pay.includes(value),

                sorter: (a, b) => a.pay.length - b.pay.length,
                sortOrder: sortedInfo.columnKey === 'pay' && sortedInfo.order,
              },
            ];
        return(
            <div className={DonationCss.div}>
                <Table columns={columns} dataSource={data} onChange={this.handleChange} />
            </div>
        )
    }
} 
