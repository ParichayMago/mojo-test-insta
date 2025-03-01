import { useState } from "react";
import { instaLogo, tickMark } from "../assets/icons";

const Auth = () => {
  const [hover, setHover] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if token exists in localStorage
  //   const token = localStorage.getItem("accessToken");
    
  //   console.log("Token status:", token ? "Found" : "Not found");
    
  //   if (token) {
  //     console.log("Token found, navigating to home");
  //     navigate("/home");
  //   }
  // }, [navigate]);

  const handleLogin = () => {
    location.href =
      "https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=1169547817377137&redirect_uri=https://localhost:5173/auth/token/&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish%2Cinstagram_business_manage_insights";
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full transform transition-all duration-500 hover:scale-105">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-transparent bg-clip-text">
            Instagram Connect
          </h1>
          {/* <p className="text-gray-500">Unlock the power of your Instagram account</p> */}
        </div>

        <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 h-32 flex items-center justify-center">
            {instaLogo}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-700">Connect to access:</h3>
            <ul className="mt-2 text-sm text-gray-600">
              <li className="flex items-center">
                {tickMark}
                Manage business messages
              </li>
              <li className="flex items-center">
                {tickMark}
                Publish content
              </li>
              <li className="flex items-center">
                {tickMark}
                Access business insights
              </li>
            </ul>
          </div>

          <button
            className={`w-full py-3 px-4 rounded-lg font-bold text-white transition-all duration-300 ${
              hover
                ? "bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg"
                : "bg-gradient-to-r from-purple-500 to-pink-500"
            }`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handleLogin}
          >
            <div className="flex items-center justify-center space-x-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
              </svg>
              <span>Connect with Instagram</span>
            </div>
          </button>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          By connecting, you agree to Instagram's Terms of Service and Privacy
          Policy
        </div>
      </div>
    </div>
  );
};

export default Auth;
