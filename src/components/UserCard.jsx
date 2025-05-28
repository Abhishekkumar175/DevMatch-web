import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error("Failed to send request:", err);
    }
  };

  return (
    <div className="w-96 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl p-4 text-white transition-transform hover:scale-[1.01] duration-300">
      <div className="flex flex-col items-center text-center">
        <img
          src={photoUrl}
          alt="User"
          className="w-32 h-32 object-cover rounded-full border-4 border-white/20 shadow-md mb-4"
        />
        <h2 className="text-2xl font-semibold">{firstName + " " + lastName}</h2>
        {age && gender && (
          <p className="text-sm text-gray-300">{`${age}, ${gender}`}</p>
        )}
        <p className="mt-2 text-sm text-gray-200">{about}</p>
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => handleSendRequest("ignored", _id)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white font-medium shadow-lg transition duration-300"
          >
            Ignore
          </button>
          <button
            onClick={() => handleSendRequest("interested", _id)}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold shadow-lg transition duration-300"
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
