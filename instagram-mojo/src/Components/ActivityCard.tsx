const ActivityComp = () => {
  return (
    <>
      {/* Recent Activity Card */}
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Recent Activity</h3>
            <button className="text-sm text-pink-500 hover:text-pink-400">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {/* Activity items */}
            <div className="flex items-start p-3 rounded-lg bg-gray-700">
              <div className="bg-purple-900 p-2 rounded-md text-purple-300 mr-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p>
                  New post received{" "}
                  <span className="text-pink-400">1.2k likes</span> in 24 hours
                </p>
                <p className="text-sm text-gray-400 mt-1">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-start p-3 rounded-lg bg-gray-700">
              <div className="bg-blue-900 p-2 rounded-md text-blue-300 mr-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p>
                  You gained{" "}
                  <span className="text-blue-400">352 new followers</span> this
                  week
                </p>
                <p className="text-sm text-gray-400 mt-1">1 day ago</p>
              </div>
            </div>

            <div className="flex items-start p-3 rounded-lg bg-gray-700">
              <div className="bg-green-900 p-2 rounded-md text-green-300 mr-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p>
                  Your story reached{" "}
                  <span className="text-green-400">78% more accounts</span> than
                  last month
                </p>
                <p className="text-sm text-gray-400 mt-1">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default ActivityComp;