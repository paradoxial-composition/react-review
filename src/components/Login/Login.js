import React from 'react';

import LoginForm from '../LoginForm';
import { Card } from 'antd';

const Login = props => (
    <div>
        <Card style={{ width: 300 }}>
            <LoginForm />
        </Card>
    </div>
);
  
  export default Login;