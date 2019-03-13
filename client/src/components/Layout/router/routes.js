import GE_Generate from '../../GE_Generate';
import GE_Params from '../../GE_Parameters';
import UsrMngmnt from '../../UserManagement';

export const routes = [
    {
        exact: true,
        path: '/welcom/d',
        component: UsrMngmnt
    },
    {
        exact: false,
        path: '/login',
        component: GE_Generate
    },
    {
        exact: false,
        path: '/welcome',
        component: GE_Params
    }
];

