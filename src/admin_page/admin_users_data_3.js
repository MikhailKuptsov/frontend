import axios from "axios";
import user_attributes from './User_data'

const api_key=user_attributes.api_session_key;

export const getUsers = async () => {
    try {
        const response = await axios.get("https://9l1rs9ln-8000.euw.devtunnels.ms/users/",
            {headers:{'api-session-key':api_key}})
        // console.log(response.data)
        return(response.data)
        
    } catch (error) {
        console.error("Ошибка при получении пользователей:", error);
        return "данных нет";
    }
}