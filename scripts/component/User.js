"use strict";

import React, {PropTypes} from 'react';

import Image from '../view/image/index';

export default class User extends React.Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    };

    render() {
        const {user} = this.props;
        return (
            <div>
                <Image src={user.profileUrl} circle/>
                <div>
                    <h2>{user.nickName}</h2>
                    <h3>{user.rate}</h3>
                </div>
            </div>
        );
    }
}