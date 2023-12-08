
import { useAuth0 } from '@auth0/auth0-vue';

class UserService {
    auth0 = useAuth0()
    userLogin() {
        // this.auth0.loginWithPopup()
    }


}
const userService = new UserService
export default userService