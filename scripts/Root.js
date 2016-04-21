import React, {PropTypes, Component} from 'react';
import {Router, Route} from 'react-router';

import App from './App';
import Button from './pages/button/index';
import SignUp from './pages/signup/index';

import {queryString} from './utils/SearchQuery';

export default class Root extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired
    };

    // componentWillMount() {
    //     queryString(location.search, (err, query) => {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             console.log(query);
    //         }
    //     })
    // }

    requireWechat(nextState, replace) {
        queryString(location.search, (err, query) => {
            if (err) {
                console.log(err);
            } else {
                console.log(query);
            }
        });
        replace({pathname: '/signup'});
    }

    render() {
        const {history} = this.props;
        return (
            <Router history={history}>
                <Route onEnter={this.requireWechat} name='explore' path='/' component={App}>
                    <Route path="button" name="button" component={Button}/>
                </Route>
                <Route path="/signup" name="button" component={SignUp}/>
            </Router>
        );
    }
}