"use strict";

import React from 'react';
import DocumentTitle from 'react-document-title';
import {Button} from 'react-weui';
import './button.less';

export default class ButtonDemo extends React.Component {

    render() {
        return (
            <DocumentTitle title="Button">
                <div className="button">
                    <Button>按钮</Button>
                    <Button disabled>按钮</Button>

                    <Button type="warn">按钮</Button>
                    <Button type="warn" disabled>按钮</Button>

                    <Button type="default">按钮</Button>
                    <Button type="default" disabled>按钮</Button>

                    <div className="button_sp_area">
                        <Button type="primary" plain>按钮</Button>
                        <Button type="default" plain>按钮</Button>

                        <Button size="small">按钮</Button>
                        <Button type="default" size="small">按钮</Button>
                    </div>
                </div>
            </DocumentTitle>
        );
    }
};