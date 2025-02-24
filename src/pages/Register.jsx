import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../layouts/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, setUser, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");

  // handle submit form
  const handleSubmitForm = (e) => {
    e.preventDefault();

    // get user input value
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // clear error
    setError("");

    if (password.length < 6) {
      setError("Length must be at least 6 character");
      return;
    } else if (!/.*[A-Z].*/.test(password)) {
      setError("Must have an Uppercase letter in the password");
      return;
    } else if (!/.*[a-z].*/.test(password)) {
      setError("Must have a Lowercase letter in the password ");
      return;
    } else if (!/.*[0-9].*/.test(password)) {
      setError("Must have a number in the password");
      return;
    } else if (!/.*[@$!%*?&].*/.test(password)) {
      setError("Must have a Special Charecter in the password ");
      return;
    }

    const updateInfo = {
      displayName: name,
      photoURL: photoUrl,
    };

    // create user
    createUser(email, password)
      .then((res) => {
        setUser(res.user);
        navigate("/");

        // update user profile
        updateProfile(auth.currentUser, updateInfo)
          .then(() => {})
          .catch(() => {});
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        setUser(res.user);
        navigate('/')
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center py-10">
      <div className="w-full flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 border border-gray-300 ">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-5xl font-bold">Register</h1>
          <p className="text-sm dark:text-gray-600">Create your New account!</p>
        </div>
        <form onSubmit={handleSubmitForm} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">First Name</label>
              <input
                type="text"
                name="name"
                placeholder="First Name"
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
                
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                required
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm">Password</label>
              </div>
              <input
                type="password"
                name="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                required
              />
              {error && <p className="text-red-500">{error}</p>}
            </div>
            <div className="flex items-center w-full my-4">
              <hr className="w-full dark:text-gray-600" />
              <p className="px-3 dark:text-gray-600">OR</p>
              <hr className="w-full dark:text-gray-600" />
            </div>
            <div className="flex justify-center space-x-4">
              <button
              onClick={handleGoogleLogin}
                aria-label="Login with Google"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 btn py-6 hover:bg-[#F9FAFB]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
                <p>Register with Google</p>
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button className="w-full px-8 py-3 font-semibold rounded-md bg-[#583CEA] text-white -mt-10">
                Register
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Already have an account?
              <Link to="/auth/login" className="hover:underline text-[#583CEA]">
                Login
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
