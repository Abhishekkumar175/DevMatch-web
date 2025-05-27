import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import NavBar from "./NavBar";


const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  useEffect(() => {
    if (!userData) fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err?.response?.status === 401) navigate("/login");
      console.error(err);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex">
        <LeftSidebar user={userData} />
        <div className="flex-1">
          <Outlet />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Body;
