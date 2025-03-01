import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Components/Loading";

const AuthCallback = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();
  const navigate = useNavigate();
  
  loading;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    let code = params.get("code");
    if (!code) {
      // navigate("/auth");
    }
    code = code!.split("#")[0];
    console.log("This is the code ", code);
    localStorage.setItem("code", code);
    setLoading(false);
    navigate("/home");
  }, []);
  return (
    <>
      <div className="w-screen">
        <Loading />
      </div>
    </>
  );
};

export default AuthCallback;
