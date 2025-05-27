const RightSidebar = () => {
  return (
    <div className="w-1/5 p-4 hidden lg:block">
      <div className="bg-base-200 p-4 rounded-lg shadow-md">
        <h3 className="font-bold mb-2">Messaging</h3>
        <p className="text-sm text-gray-600">Click a profile to start chat (connections)</p>
        {/* Later: Add list of connected profiles */}
      </div>
    </div>
  );
};
export default RightSidebar;
