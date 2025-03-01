import { useEffect, useState } from "react";
import NavigationBar from "../Components/NavigationBar";
import HomeSideBar from "../Components/HomeSide";
import ActivityComp from "../Components/ActivityCard";
import RecomCard from "../Components/RecomCard";
import EngagementCard from "../Components/Engagement";
import ConnectInsta from "../Components/ConnectInsta";
import Loading from "../Components/Loading";
import Cookies from "js-cookie";

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

const dummyData: IUserBasic = {
  id: "8904215789704180",
  username: "parichay_cms",
  name: "Parichay Mago",
  profile_picture_url:
    "https://scontent.cdninstagram.com/v/t51.2885-19/473802842_1149982930032697_3935180279868744849_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=3WvY3BX6awYQ7kNvgE81o1-&_nc_oc=Adjt_p1Y4l9egynJ-imBHwjXGHxhxZAQ28y3qiqW9rHJ1xG4PvqIUmqTngm6B6EPAyEASYBt-wL5xiURFZCwX_LI&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYAjB-enmOebDhlbrpfls5AD4L6rIcwaBMBl4j4rQjfI2A&oe=67C78FAA",
  followers_count: 31,
  follows_count: 30,
  media_count: 0,
};

const Home = () => {
  const [user, setUser] = useState<IUserBasic | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const token_basic_insta = async (
    token: String
  ): Promise<IApiiCall | null> => {
    const response = await fetch(`http://localhost:4000/api/user/${token}`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    return await response.json();
  };

  const basic_insta = async (code: string): Promise<IApiiCall | null> => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/user/handleAuth",
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
      let token = Cookies.get("token");

      console.log("BEFORE token ", token);
      const code = localStorage.getItem("code");

      console.log("this is the code in home ", code);
      // if (token) {
      //   console.log("found token ", token);
      //   const userData = await token_basic_insta(token);
      //   setUser(userData!.user_basic);
      // } else {
      if (code) {
        console.log("found code but not token");
        const userData = await basic_insta(code);
        console.log(userData);
        setUser(userData!.user_basic);
        localStorage.setItem("accessToken", userData!.access_token);
      } else {
        console.log("could not found token or code");
      }
      // }

      token = Cookies.get("token");
      console.log("AFTER token ", token);

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
