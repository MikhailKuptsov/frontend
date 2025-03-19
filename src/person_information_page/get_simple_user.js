import axios from 'axios';
import user_attributes from '../admin_page/User_data';

const API_ENDPOINT = 'https://9l1rs9ln-8000.euw.devtunnels.ms/users';
const api_key=user_attributes.api_session_key;

export const getSimpleUser = async(user_username)=>{
    try {
        const response= await axios.get(`https://9l1rs9ln-8000.euw.devtunnels.ms/users/@${user_username}`,
            {headers:{'api-session-key':api_key}})
            if (response.status === 200 && response.data && response.data.length > 0) {
                return response.data;
              } else {
                return "данных нет";
              }
        
    } catch (error) {
        console.error("Ошибка при получении пользователей:", error);
        return "данных нет";
    }
}