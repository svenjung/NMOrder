import React, {PropTypes} from 'react';
import DocumentTitle from 'react-document-title';
import 'weui';
import './style/app.less';

import User from './component/User';

export default class App extends React.Component {
    static propTypes = {
        children: PropTypes.object
    };

    render() {
        var user = {profileUrl:"http://www.1tong.com/uploads/wallpaper/anime/209-3-1920x1200.jpg", nickName:"猩猩队长", rate:"8折会员"};
        return (
            <DocumentTitle title='柠檬点餐'>
                <div className='app'>
                    <User user={user} />
                    {this.props.children}
                </div>
            </DocumentTitle>
        );
    }
}