import { Link } from "react-router-dom";

const UpdateProfile = () => {
    return (
        <div>
           <div className="flex justify-center py-10">
      <div className="w-full flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 border border-gray-300 ">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-3xl font-bold">Update Your Profile</h1>
        </div>
        <form className="space-y-12">
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