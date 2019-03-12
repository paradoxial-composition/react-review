import React from 'react';

import Toolbar from '../Toolbar/Toolbar';
import SideMenu from '../SideMenu';
import LayoutTabs from '../LayoutTabs';

class Layout extends React.Component {
  

  render() {
    return (
      <div>
        <Toolbar />
        <main style={{marginTop: '64px'}}>
          <div style={{display: 'flex'}}>
            <SideMenu />
            <LayoutTabs />
          </div>
          
        </main>
      </div>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);

export default Layout;