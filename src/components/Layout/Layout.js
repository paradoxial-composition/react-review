import React from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Toolbar/Toolbar';

class Layout extends React.Component {
  

  render() {
    return (
      <Aux>
        <Toolbar />
        <main style={{marginTop: '64px'}}>
          <p>Layout Content</p>
        </main>
      </Aux>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);

export default Layout;