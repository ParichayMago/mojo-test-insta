import { useEffect, useState } from "react";
import NavigationBar from "../Components/NavigationBar";
import HomeSideBar from "../Components/HomeSide";
import ActivityComp from "../Components/ActivityCard";
import RecomCard from "../Components/RecomCard";
import EngagementCard from "../Components/Engagement";
import ConnectInsta from "../Components/ConnectInsta";
import Loading from "../Components/Loading";
import { useNavigate } from "react-router-dom";

export interface IUserBasic {
  id: String;
  username: String;
  name: String;
  profile_picture_url: String;
  followers_count: Number;
  follows_count: Number;
  media_count: Number;
}

export interface IApiiCall {
  success: boolean;
  user_basic: IUserBasic;
  access_token: string;
}

const Home = () => {
  const [user, setUser] = useState<IUserBasic | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  // const url = "localhost:"

  const navigate = useNavigate();

  // const token_basic_insta = async (
  //   token: String
  // ): Promise<IApiiCall | null> => {
  //   const response = await fetch(`http://localhost:4000/api/user/${token}`, {
  //     method: "GET",
  //     credentials: "include",
  //   });
  //   if (!response.ok) {
  //     throw new Error("Failed to fetch user data");
  //   }
  //   return await response.json();
  // };

  const basic_insta = async (code: string): Promise<IApiiCall | null> => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_url}/api/user/handleAuth`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      console.log(response);

      return await response.json();
    } catch (error) {
      console.error("Error fetching user:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      // let token = Cookies.get("token");
      // console.log("BEFORE token ", access_token);

      // let access_token = localStorage.getItem("accessToken");

      // if (access_token) {
      //   console.log("found token ", access_token);
      //   const userData = await token_basic_insta(access_token);
      //   setUser(userData!.user_basic);
      // } else {
        console.log("Token unidentifed or not workin");
        const code = localStorage.getItem("code");

        if (code) {
          console.log("found code but not token");
          const userData = await basic_insta(code);
          console.log(userData);
          setUser(userData!.user_basic);
          console.log(userData!.access_token);
          localStorage.setItem("accessToken", userData!.access_token);
        } else {
          console.log("could not found token or code");
          navigate("/");
        }
      // }

      // token = Cookies.get("token");
      // console.log("AFTER token ", token);
      console.log(localStorage.getItem("accessToken"));

      setIsLoading(false);
    };

    fetchUser();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-gray-900 text-gray-100">
      {/* Top navigation bar */}
      <NavigationBar />
      {/* Main content */}
      <main className="max-w-6xl mx-auto p-6">
        {isLoading ? (
          <Loading />
        ) : user ? (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Left column - Profile card */}
            <HomeSideBar user={user} />
            {/* Right column - Stats & Activity */}
            <div className="md:col-span-2 space-y-6">
              {/* Engagement Overview Card */}
              <EngagementCard />
              <ActivityComp />
              <RecomCard />
            </div>
          </div>
        ) : (
          <ConnectInsta />
        )}
      </main>
    </div>
  );
};

export default Home;
