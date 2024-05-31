import axios from "axios";

class RestClient{
    static postRequest = (url="",data={},config = {})=>{
        return axios.post(url,data,{
            "Content-Type" : "application/json",
            ...config
        }).then((res)=>{
            return res;
        }).catch((err)=>{
            return err.response;
        })
    }
}

export default RestClient;
