import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { userSignOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error tracked in the interceptor: ", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("logOut the user");
          userSignOut().then(() => {
            navigate("/login");
          });
        }
      }
    );
  }, [navigate, userSignOut]);

  return axiosSecure;
};

export default useAxiosSecure;
