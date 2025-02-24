import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  document.title = "Update Profile";

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photoUrl.value;

    const letestInfo = {
      displayName: name,
      photoURL: photo,
    };

    if (user) {
      updateProfile(auth.currentUser, letestInfo)
        .then(() => {
          navigate("/user-profile");
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }
  };
  return (
    <div>
      <div className="flex justify-center py-10 w-11/12 mx-auto">
        <div className="w-full flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 border border-gray-300 ">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-3xl font-bold">Update Your Profile</h1>
          </div>
          <form onSubmit={handleUpdate} className="space-y-12">
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Photo URL</label>
                <input
                  type="url"
                  name="photoUrl"
                  placeholder="Photo URL"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button className="w-full px-8 py-3 font-semibold rounded-md bg-[#583CEA] text-white -mt-10">
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
