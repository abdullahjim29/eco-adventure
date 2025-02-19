import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../layouts/AuthProvider";

const Register = () => {

  const {createUser} = useContext(AuthContext);

  // handle submit form
  const handleSubmitForm = e => {
    e.preventDefault();

    // get user input value
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confrimPassword = e.target.confrimPassword.value;

    // create user
    createUser(email, password)
    .then(res => {
      console.log(res.user);
    })
    .catch(err => {
      console.log(err.message);
    })
  }
  return (
    <div className="flex justify-center py-10">
        <div className="w-full flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 border border-gray-300">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Register</h1>
        <p className="text-sm dark:text-gray-600">
          Create your New account!
        </p>
      </div>
      <form onSubmit={handleSubmitForm} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm">
              First Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="First Name"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">
              Photo URL
            </label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Photo URL"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">
              Email address
            </label>
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
              <label className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              required
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm">
               Confrim Password
              </label>
            </div>
            <input
              type="password"
              name="confrimPassword"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              className="w-full px-8 py-3 font-semibold rounded-md bg-[#583CEA] text-white"
            >
              Register
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
           Already have an account?
            <Link to='/auth/login'
              className="hover:underline text-[#583CEA]"
            >
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
