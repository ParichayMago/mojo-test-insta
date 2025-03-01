const RecomCard = () => {
  return (
    <>
      {/* Recommendations Card */}
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700">
        <div className="px-6 py-4">
          <h3 className="text-lg font-bold mb-4">Recommendations</h3>
          <div className="space-y-3">
            <div className="bg-gray-700 p-3 rounded-lg flex items-center">
              <div className="mr-3 text-yellow-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <p>Post more consistently to increase engagement</p>
                <div className="w-full bg-gray-600 rounded-full h-1.5 mt-2">
                  <div
                    className="bg-yellow-400 h-1.5 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 p-3 rounded-lg flex items-center">
              <div className="mr-3 text-pink-400">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 8 11.293 4.707a1 1 0 011.414-1.414zm-7 4a1 1 0 01.707.293L10 10.586 13.293 7.293a1 1 0 011.414 1.414L11.414 12l3.293 3.293a1 1 0 01-1.414 1.414L10 13.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 12 5.293 8.707a1 1 0 011.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p>Complete your profile to improve discoverability</p>
                <div className="w-full bg-gray-600 rounded-full h-1.5 mt-2">
                  <div
                    className="bg-pink-400 h-1.5 rounded-full"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default RecomCard;