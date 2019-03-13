import React from 'react';
import axios from 'axios';
import './MakePassword.css';
import {
    Card, Form, Icon, Input, Button, Checkbox,
  } from 'antd';
//import auth from './auth/auth';
import { Redirect, withRouter } from "react-router-dom";
import { request } from 'https';

  class LoginForm extends React.Component {
    state = {
      password:'',
      
  }

    handleClick = event => {
      event.preventDefault();
      const UserID = this.props.location.pathname.split('/');

      // const user = {
      //   id: UserID,
      //   password: this.state.password,
      // };
        //console.log(user);

      axios.patch(`http://localhost:5000/validatePassword/` + UserID[2] ,  this.state.password )
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }


    render() {
     

      const { getFieldDecorator } = this.props.form;

            //Password Form
            return (
              <div className="centered">
                <Card style={{ width: 300 }}>
                <Form onSubmit={this.handleSubmit} className="login-form">

                  <label>please type in your pwd:</label>
                  <Form.Item>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: 'Please input your password' }],
                    })(
                      <Input type="password"  prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" onChange={(event) => this.setState({password:event.target.value} )} />
                    )}
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button"
                    onClick={this.handleClick}
                    >
                      Confirm
                    </Button>
                  </Form.Item>
            </Form>
              </Card>
              </div>
              
            );
    }
  }
  
  const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

  export default WrappedLoginForm;