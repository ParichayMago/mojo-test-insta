const EngagementCard = () => {
  return (
    <>
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
        <div className="px-6 py-4">
          <h3 className="text-lg font-bold mb-4">Engagement Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">4.7%</div>
              <div className="text-xs text-gray-400 mt-1">Engagement Rate</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-400">87%</div>
              <div className="text-xs text-gray-400 mt-1">
                Profile Completion
              </div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-400">243</div>
              <div className="text-xs text-gray-400 mt-1">Avg. Likes</div>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <div className="text-2xl font-bold text-pink-400">35</div>
              <div className="text-xs text-gray-400 mt-1">Avg. Comments</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default EngagementCard;