import { useContext } from "react";
import { AuthContext } from "../layouts/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";

const ForgetPassword = () => {
    const {user} = useContext(AuthContext);

    const handleForgetPassword = (e) => {
        e.preventDefault();

        const email = e.target.email.value;

        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success('Password rese email sent!')
            window.open('https://mail.google.com/', '_blank')
        })
        .catch((err) => {
            toast.error(err.message)
        })

    }

    return (
        <div>
            <div className="flex justify-center py-10">
      <div className="w-full flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 border border-gray-300 ">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-3xl font-bold">Reset Your Password</h1>
        </div>
        <form onSubmit={handleForgetPassword} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={user?.email}
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                required
              />
            </div>

          </div>
          <div className="space-y-2">
            <div>
              <button className="w-full px-8 py-3 font-semibold rounded-md bg-[#583CEA] text-white -mt-10">
                Reset Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
        </div>
    );
};

export default ForgetPassword;