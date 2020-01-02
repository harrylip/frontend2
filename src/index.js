import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Route,Switch,Redirect,withRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Homepage from './Homepage/homepage'
import Sign from './Sign/sign'

//导入

class IndexPage extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter> 
                <Switch>
                    <Route path="/homepage" component={Homepage}></Route>
                    <Route path="/sign" component={Sign} history={this.props.history}></Route>
                    <Redirect to="/sign"></Redirect>
                </Switch>
                </BrowserRouter>
            </div>
            
            
            
        )
    }
}

export default withRouter(IndexPage)
ReactDOM.render(<IndexPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

