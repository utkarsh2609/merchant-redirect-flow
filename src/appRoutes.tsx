import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from './screens/Home';
import Login from './screens/Login';
import Kyc from './screens/Kyc';
import Payment from './screens/Payment';
import DebitHandler from "./screens/DebitHandler";
import { GlobalLoader } from "./UI/GlobalLoader";

import { homeLoader } from "./services/home.service";

const routes = createBrowserRouter([
    {path: '', element: (<Suspense fallback={<GlobalLoader />}><Home/></Suspense>), loader: homeLoader},
    {path: '/login', element: <Login/>},
    {path: '/kyc', element: <Kyc/>},
    {path: '/payment', element: <Payment/>},
    {path: '/debit-handler', element: <DebitHandler/>},
])

export default routes;