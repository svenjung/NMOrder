import React, {PropTypes, Component} from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from './App';
import SignUp from './pages/signup/index';
import Table from './pages/table/index';
import Button from './pages/button/index';

import {queryString} from './utils/SearchQuery';

/**
 * 根目录接收code，tableId（可选）参数
 */
export default class Root extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    };

    /**
     * 根目录进入时，需要检测参数
     */
    componentWillMount() {
        queryString(location.search, (err, query) => {
            if (err) {
                // TODO 处理错误信息
                console.log(err);
            } else {
                // TODO 缓存桌台编码
                console.log(query);
                if (query.code) {
                    console.log(query.code);
                } else {
                    console.log("Missing code from wechat");
                }
            }
        })
    }

    requireSignUp(nextState, replace) {
        queryString(location.search, (err, query) => {
            if (err) {
                console.log(err);
            } else {
                console.log(query);
            }
        });
        console.log('onEnter call...');
        // replace({pathname: '/signup'});
    }

    render() {
        const {history} = this.props;
        return (
            <Router history={history}>
                <Route onEnter={this.requireSignUp} name='explore' path='/' component={App}>
                    <IndexRoute component={Button}/>
                    // 桌台状态信息，只能匹配/table/id 这种形式
                    <Route path="table/:id" name="table" component={Table}/>
                </Route>
                <Route path="/signup" name="button" component={SignUp}/>
            </Router>
        );
    }
}