import { IUserBasic } from "../Pages/Home";

interface HomeSideBarProps {
  user: IUserBasic
}

const HomeSideBar = ({user}: HomeSideBarProps) => {
  const formatNumber = (num: Number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <div className="md:col-span-1">
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 h-24"></div>
          <div className="px-6 py-4 flex flex-col items-center -mt-12">
            <img
              src={user.profile_picture_url as string}
              alt={`${user.username}'s profile`}
              className="h-24 w-24 rounded-full border-4 border-gray-800 bg-gray-700 object-cover"
            />
            <h2 className="mt-4 text-2xl font-bold">{user.name as string}</h2>
            <p className="text-gray-400">@{user.username as string}</p>

            <div className="w-full mt-6 pt-6 border-t border-gray-700">
              <div className="flex justify-between text-center divide-x divide-gray-700">
                <div className="w-1/3 p-2">
                  <div className="text-xl font-bold text-pink-500">
                    {formatNumber(user.media_count)}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Posts</div>
                </div>
                <div className="w-1/3 p-2">
                  <div className="text-xl font-bold text-pink-500">
                    {formatNumber(user.followers_count)}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Followers</div>
                </div>
                <div className="w-1/3 p-2">
                  <div className="text-xl font-bold text-pink-500">
                    {formatNumber(user.follows_count)}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Following</div>
                </div>
              </div>
            </div>

            <div className="w-full mt-6">
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
                Get Analytics
              </button>
            </div>
          </div>
        </div>

        {/* Account Details Card */}
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 mt-6">
          <div className="px-6 py-4">
            <h3 className="text-lg font-bold mb-4">Account Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Account ID</span>
                <span className="font-mono text-sm bg-gray-700 px-2 py-1 rounded">
                  {user.id}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Account Type</span>
                <span className="bg-blue-900 text-blue-300 px-2 py-1 text-xs rounded-full">
                  Business
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Connected</span>
                <span className="text-green-400 flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSideBar;
