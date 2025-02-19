import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center py-10">
        <div className="w-full flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 border border-gray-300">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Register</h1>
        <p className="text-sm dark:text-gray-600">
          Create your New account!
        </p>
      </div>
      <form className="space-y-12">
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm">
              First Name
            </label>
            <input
              type="text"
              name="first-name"
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
              name="photo"
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
              name="-confrim-password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="button"
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
