const LeftSidebar = ({ user }) => {
  if (!user) return null;

  return (
    <div className="w-1/5 p-4 hidden md:block">
      <div className="bg-base-200 p-4 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <img
            src={user.photoUrl}
            alt="profile"
            className="w-20 h-20 rounded-full mb-4"
          />
          <h2 className="font-semibold text-lg">{user.firstName}</h2>
          <p className="text-sm text-gray-500">{user.about || "About me..."}</p>
        </div>
      </div>
    </div>
  );
};
export default LeftSidebar;
