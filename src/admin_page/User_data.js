import Cookies from 'js-cookie';

let username_1 = Cookies.get('username_data');
const user_attributes=JSON.parse(username_1);

export default user_attributes
