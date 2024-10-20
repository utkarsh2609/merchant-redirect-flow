import axios from "axios";

export const fetchOrderDetails = async(id: string) => {
    try {
       const res = await axios.post('FOD', {data: id});
       return res;
    } catch (error) {
        console.log('error');
    }
}