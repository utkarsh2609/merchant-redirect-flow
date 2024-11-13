import axios from "axios";
import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { apiCall } from "../utils/utilities";

export const homeLoader = async({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const searchParams = new URLSearchParams(url.search);
    const queryParams:any = Object.fromEntries(searchParams.entries());

    if(queryParams['id']) {
        const orderDetails = await fetchOrderDetails(queryParams['id']);
        console.log('orderDetails', orderDetails);
        if (!orderDetails.authDetails) {
            return redirect("/login");
        } else {
            return redirect("/payment");
        }
    } else {
        console.log('SPW');
    }

    return true
}

const fetchOrderDetails = async(id: string) => {
    const response = await apiCall('POST', '/walletapis/redirectflow/fetch-order-details', {data: id});
    console.log('FOD res', response.data);
    return response.data;
}

const signInPowerWallet = async(urlParams: any) => {
    const response = await apiCall('POST', '/walletapis/signInPW', {data: urlParams});
    console.log('signInPowerWallet res', response.data);
    return response.data;
}

const initiatePowerWalletFlow = () => {

}