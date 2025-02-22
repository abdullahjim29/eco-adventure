import { useLocation } from "react-router-dom";

const UserProfile = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            User Profile
        </div>
    );
};

export default UserProfile;