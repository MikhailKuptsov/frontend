import axios from "axios";
import Cookies from 'js-cookie';
import user_attributes from './User_data'

const FISRT_API_URL="https://9l1rs9ln-8000.euw.devtunnels.ms";

const api_key=user_attributes.api_session_key;

// export const getPosts=axios({url: `${FISRT_API_URL}/users/`,method:'GET', headers:{'api-session-key':api_key}})
export const getPosts=async()=>{
    try {
        const res = await axios({
            url: `${FISRT_API_URL}/users/`,
            method:'GET', 
            headers:{'api-session-key':api_key},
            onDownloadProgress: function(progressEvent){
                console.log('first')
            }
        })
        console.log(res.data)
        return(res.data)
    } catch (error) {
        console.log(error,'error')
    }
}