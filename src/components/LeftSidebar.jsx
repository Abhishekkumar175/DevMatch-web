import { motion } from 'framer-motion';
import { Users, Bookmark, Star, Zap, Crown, Code, Rocket } from 'lucide-react';

const LeftSidebar = ({ user }) => {
  if (!user) return null;
  return (
    <div className="w-55 mr-4 ml-3 flex-shrink-0 mt-20 hidden lg:block">
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900 rounded-xl overflow-hidden mb-4 border border-gray-800"
      >
        <div className="h-14 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
        <div className="p-2 -mt-8">
          <div className="w-20 h-20 rounded-full border-4 border-white/20 overflow-hidden mx-auto mb-4">
            <img
              src={user.photoUrl}
              alt="Profile"
              className="w-20 h-20 rounded-full mb-4"
            />
          </div>
          <h2 className="font-semibold  text-lg">{user.firstName +" "+ user.lastName}</h2>
          <p className="text-sm text-gray-500">{user.about || "About me..."}</p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center text-gray-300">
              <Code size={16} className="mr-2 text-purple-400" />
              React, Node.js, TypeScript
            </div>
          </div>
        </div>
      </motion.div>

       <div className="bg-gray-900 rounded-lg shadow h-80 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 h-20 text-white">
          <div className="flex items-center">
            <Crown className="h-5 w-5 mr-1" />
            <h3 className="text-md font-semibold">DevLinker Premium</h3>
          </div>
          <p className="mt-1 ml-4 text-sm text-purple-100">Unlock the full potential of developer collaboration</p>
        </div>
        
        <div className="p-2">
          <div className="space-y-2">
            <PremiumFeature
              icon={<Zap className="h-4 w-4  text-yellow-500" />}
              title="Advanced Project Matching"
              description="Get matched with projects that perfectly align with your skills"
            />
            <PremiumFeature
              icon={<Code className="h-4 w-4 text-blue-500" />}
              title="Code Review Priority"
              description="Get faster feedback on your code from expert developers"
            />
            <PremiumFeature
              icon={<Rocket className="h-4 w-4 text-purple-500" />}
              title="Exclusive Workshops"
              description="Access to premium developer workshops and webinars"
            />
          </div>
          
          <button className="mt-2 w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};
const PremiumFeature = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="mt-1">{icon}</div>
      <div className="ml-2">
        <h4 className="textarea-md font-medium text-gray-300">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default LeftSidebar;
