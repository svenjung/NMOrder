import React, {PropTypes} from 'react';
import DocumentTitle from 'react-document-title';
import 'weui';
import './style/app.less';

import Image from './view/image/index';

export default class App extends React.Component {
    static propTypes = {
        children: PropTypes.object
    };

    render() {
        return (
            <DocumentTitle title='柠檬点餐'>
                <div className='app'>
                    <Image src="http://img3.3lian.com/2006/012/05/005.jpg" circle />
                    {this.props.children}
                </div>
            </DocumentTitle>
        );
    }
}