import React, {PropTypes, Component} from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import App from './App';
import SignUp from './pages/signup/index';
import Table from './pages/table/index';
import Button from './pages/button/index';

import {queryString} from './utils/SearchQuery';

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
                console.log(err);
            } else {
                console.log(query);
            }
        })
    }

    requireWechat(nextState, replace) {
        // queryString(location.search, (err, query) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(query);
        //     }
        // });
        console.log('onEnter call...');
        replace({pathname: '/signup'});
    }

    render() {
        const {history} = this.props;
        return (
            <Router history={history}>
                <Route name='explore' path='/' component={App}>
                    <IndexRoute onEnter={this.requireWechat} component={Button}/>
                    <Route path="table" name="table" component={Table}/>
                </Route>
                <Route path="/signup" name="button" component={SignUp}/>
            </Router>
        );
    }
}