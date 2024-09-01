import { motion } from "framer-motion";

const ProfileForm = ({ name, setName, email, setEmail }) => (
  <motion.div
    className="p-4 sm:p-6 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-3">
      Profile Information
    </h3>

    <div className="mb-4">
      <label className="block text-gray-300 mb-2">Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-gray-700 text-white rounded-lg p-2"
        placeholder="Enter your name"
        required
      />
    </div>

    <div className="mb-4">
      <label className="block text-gray-300 mb-2">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-gray-700 text-white rounded-lg p-2"
        placeholder="Enter your email"
        required
      />
    </div>
  </motion.div>
);

export default ProfileForm;
