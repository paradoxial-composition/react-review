import React from 'react'
import { Card,Avatar } from 'antd';
import './LoginInfo.css';

const loginInfo = props => (
    <div className="LoginInfo__items">
        <div>
            <label>EL BANI Othman</label>
            <br></br>
            <label>Intern</label>
        </div>
        <div className="LoginInfo__avatar">
            <Avatar icon="user" />
        </div>
    </div>
);

export default loginInfo;