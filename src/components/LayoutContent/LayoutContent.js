import React from 'react';
import UserManagement from '../UserManagement';
import GE_Parameters from '../GE_Parameters';
import GE_Generate from '../GE_Generate'

class LayoutTabs extends React.Component {

    render () {
      /*  let Content = null;
        let demo = 'usrmngmnt';
    switch( demo) {*/
        /**TODO: Option Routing and navigation */
        /*case ('usrmngmnt'):
            Content = <div> <UserManagement /></div>;
            break;
        
        case ('estimation-generique-generer'):
            Content = <div> <GeneralEstimation /></div>;
            break;
        
        default:
            Content= null;

        return <div> <UserManagement /></div>;//Content;
    }*/
        return (
            //<div> <GE_Parameters /></div>
            <div> <UserManagement /></div>
            //<div> <GE_Generate /></div>
        );
};
}


export default LayoutTabs;
