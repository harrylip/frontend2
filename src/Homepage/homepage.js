import React from 'react'
import { NavLink, Route, BrowserRouter, Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon, Button, Switch } from 'antd';
import Order from './../Order/order'
import Opinion from './../Opinion/opinion'
import Donation from './../Donation/donation'
import User from './../User/user'
import Admin from './../Admin/admin'

var HomepageCss = require('./homepage.css')
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: window.localStorage.getItem("username")
        }
    }
    logout = e => {
        window.localStorage.removeItem("username")
        window.localStorage.removeItem("token")
        this.setState({
            username: null
        })
    }
    render() {
        let userProfile = null;

        if (this.state.username != null) {
            userProfile =
                <div className={HomepageCss.logout}>
                    <NavLink to="/profile" className={HomepageCss.navlink}>{this.state.username}</NavLink>
                    <Button type="primary" onClick={this.logout}    style={{fontSize:"200px" ,float:"right"}} >登出</Button>
                </div>

        } else {
            userProfile = <NavLink to={{ pathname: "/sign", state: { message: "hello react" } }}>登出</NavLink>
        }
        return (
            <div>

                <Layout className={HomepageCss.homepage}>
                    <Header className={HomepageCss.logo}>
                        <div />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '100px' }} >
                            <Menu.Item key="1">管理模块</Menu.Item>
                            <div className={HomepageCss.cc}>{userProfile}</div>
                        </Menu>
                    </Header>

                    <Layout>
                        <BrowserRouter basename="homepage">
                            <Sider width={300} style={{ background: '#fff' }}>
                                <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }} >
                                    <SubMenu key="sub1" title={<span><Icon type="user" /><Link to="/user">用户管理</Link></span>}>
                                        {/* <Menu.Item key="1">用户查询：<input ></input></Menu.Item>
                                        <Menu.Item key="2">张三</Menu.Item>
                                        <Menu.Item key="3">李四</Menu.Item>
                                        <Menu.Item key="4">.........</Menu.Item> */}
                                    </SubMenu>
                                    <SubMenu key="sub2" title={<span><Icon type="team" /><Link to="/admin">管理员管理</Link></span>}>
                                        {/* <Menu.Item key="1">管理查询：<input ></input></Menu.Item>
                                        <Menu.Item key="2">王五</Menu.Item>
                                        <Menu.Item key="3">李六</Menu.Item>
                                        <Menu.Item key="4">.........</Menu.Item> */}
                                    </SubMenu>
                                    <SubMenu key="sub3" title={<span><Icon type="car" /><Link to="/order">订单管理</Link></span>} >
                                        {/* <Menu.Item key="1">订单查询：<input ></input></Menu.Item>
                                        <Menu.Item key="2">龙井</Menu.Item>
                                        <Menu.Item key="3">花茶</Menu.Item>
                                        <Menu.Item key="4">.........</Menu.Item> */}
                                    </SubMenu>
                                    <SubMenu key="sub4" title={<span><Icon type="laptop" /><Link to="/opinion">商品管理</Link></span>}>
                                        {/* <Menu.Item key="1">商品查询：<input ></input></Menu.Item>
                                        <Menu.Item key="2">龙井</Menu.Item>
                                        <Menu.Item key="3">花茶</Menu.Item>
                                        <Menu.Item key="4">.........</Menu.Item> */}
                                    </SubMenu>
                                    <SubMenu key="sub5" title={<span><Icon type="notification" /><Link to="/donation">帖子管理</Link></span>}>
                                        {/* <Menu.Item key="1">帖子查询：<input ></input></Menu.Item>
                                        <Menu.Item key="2">龙井与铁观音</Menu.Item>
                                        <Menu.Item key="3">花茶与清茶</Menu.Item>
                                        <Menu.Item key="4">.........</Menu.Item> */}
                                    </SubMenu>

                                </Menu>
                            </Sider>
                            <Layout style={{ padding: '0 24px 24px' }} >
                                
                                <Content style={{ padding: 24, margin: 0, minHeight: 280, }} className={HomepageCss.img} >

                                </Content>
                            </Layout>
                            <Route path="/opinion" component={Opinion}></Route>
                            <Route path="/order" component={Order}></Route>
                            <Route path="/donation" component={Donation}></Route>
                            <Route path="/user" component={User}></Route>
                            <Route path="/admin" component={Admin}></Route>
                        </BrowserRouter>
                    </Layout>


                </Layout>

            </div>

        )
    }
}