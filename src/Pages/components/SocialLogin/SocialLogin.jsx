import { FaGoogle } from "react-icons/fa6";

import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

import useAuth from "../../../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err);
      });
  };

  return (
    <div className="py-6 text-center">
      <div>
        <button onClick={handleGoogleSignIn} className="btn btn-primary">
          <FaGoogle className="mr-1"></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
