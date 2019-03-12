import React from 'react';
import { Tabs } from 'antd';

import UserTab from '../UserTab';
import DepartmentTab from '../DepartmentTab';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

const LayoutTabs = props => (
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Departments" key="1"><DepartmentTab /></TabPane>
    <TabPane tab="Users" key="2"><UserTab /></TabPane>
  </Tabs>
);

export default LayoutTabs;
