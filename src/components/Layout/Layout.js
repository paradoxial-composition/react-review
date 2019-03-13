import React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import SideMenu from '../SideMenu';
import LayoutContent from '../LayoutContent';

class Layout extends React.Component {
  
  constructor() {
    super();
    this.state = {
      option: ""
    };
}

  render() {

    console.log(this.state.openKeys);
    return (
      <div>
        <Toolbar />
        <main style={{marginTop: '64px'}}>
          <div style={{display: 'flex'}}>
            <SideMenu data={this.state.option}/>
            <LayoutContent data={this.state.option}/>
          </div>
          
        </main>
      </div>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);

export default Layout;