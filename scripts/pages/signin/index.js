"use strict";

import React from 'react';
import DocumentTitle from 'react-document-title';
import {Button} from 'react-weui';

export default class SignIn extends React.Component {

    render() {
        return (
            <DocumentTitle title="登录界面">
                <div className="button">
                    <Button>按钮</Button>
                </div>
            </DocumentTitle>
        );
    }
};