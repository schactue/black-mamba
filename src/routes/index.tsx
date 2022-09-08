import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export const AppRoutes=()=> {
    return useRoutes([MainRoutes]);
}
