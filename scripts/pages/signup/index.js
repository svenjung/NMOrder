"use strict";

import React from 'react';
import DocumentTitle from 'react-document-title';
import {Button} from 'react-weui';

export default class SignUp extends React.Component {

    render() {
        return (
            <DocumentTitle title="用户注册">
                <div className="button">
                    <Button>按钮</Button>
                </div>
            </DocumentTitle>
        );
    }
};