import React from 'react'

import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

class sideMenu extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {

    console.log(this.state);
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
      >

        <Menu.Item key="1">
            <Icon type="home" />
            <span>Tableau de bord</span>
        </Menu.Item>
        <Menu.Item key="2">
            <Icon type="team" />
            <span>Gestion des utilisateurs</span>
          </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Estimations géneriques</span></span>}>
          <Menu.Item key="1">Générer une éstimation</Menu.Item>
          <Menu.Item key="2">Paramétrage</Menu.Item>
          <Menu.Item key="3">Archive</Menu.Item>
        </SubMenu>
        <Menu.Item key="4">
            <Icon type="schedule" />
            <span>Agenda de production</span>
        </Menu.Item>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Gestion RH</span></span>}>
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        
        <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <Menu.Item key="6">
            <Icon type="user" />
            <span>Gestion de projet</span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="user" />
            <span>Gestion des clients</span>
          </Menu.Item>
          <Menu.Item key="8">
            <Icon type="user" />
            <span>Facturation</span>
          </Menu.Item>
      </Menu>
    );
  }
}

export default sideMenu;