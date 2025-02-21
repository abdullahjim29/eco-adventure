import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../layouts/AuthProvider";
import LoadingSpinner from "../components/loadingSpinner";
import userImg from "../assets/user.png";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, setUser, loading, loginWithGoogle} =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  // handle login form
  const handleLoginForm = (e) => {
    e.preventDefault();

    // get user input value
    const email = e.target.email.value;
    const password = e.target.password.value;

    // login user
    loginUser(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(`${location.state ? location.state : "/"}`);
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
		navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center py-10 gap-0 md:gap-20">
      <div>
        <img src={userImg} alt="" />
      </div>

      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 border border-gray-300 ">
        <h1 className="text-3xl font-bold text-center">Login Your Account!</h1>
		
		
		<div className="flex justify-center space-x-4 mt-10">
		  <button onClick={handleGoogleLogin} aria-label="Login with Google" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 btn py-6 hover:bg-[#F9FAFB]">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
        </div>
		<div className="flex items-center w-full my-4">
		<hr  className="w-full dark:text-gray-600" />
		<p className="px-3 dark:text-gray-600">OR</p>
		<hr  className="w-full dark:text-gray-600" />
	</div>
        <form onSubmit={handleLoginForm} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block dark:text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <div className="flex justify-end text-xs dark:text-gray-600">
              <Link to="">Forgot Password?</Link>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white font-semibold bg-[#583CEA]">
            Login
          </button>
        </form>
        
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Don't have an account?
          <Link to="/auth/register" className="underline text-[#583CEA]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
