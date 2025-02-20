import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate} from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    // const navigate = useNavigate()

    if(user){
        return children;
    }

    return (
        <Navigate to='/auth/login'/>
    );
};

export default PrivateRoute;