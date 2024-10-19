import { createBrowserRouter } from "react-router-dom";

import Home from './screens/Home';
import Login from './screens/Login';
import Kyc from './screens/Kyc';
import Payment from './screens/Payment';
import DebitHandler from "./screens/DebitHandler";

const routes = createBrowserRouter([
    {path: '', element: <Home/>},
    {path: '/login', element: <Login/>},
    {path: '/kyc', element: <Kyc/>},
    {path: '/payment', element: <Payment/>},
    {path: '/debit-handler', element: <DebitHandler/>},
])

export default routes;