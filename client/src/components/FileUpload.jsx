/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Loader } from "lucide-react"; // Import loader

const FileUpload = ({ setFile, submitData, isLoading }) => (
  <motion.div
    className="mt-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
  >
    <label className="block text-gray-300 mb-2">Upload PDF:</label>
    <input
      type="file"
      accept="application/pdf"
      required
      className="mb-4 w-full bg-gray-700 text-white rounded-lg p-2"
      onChange={(e) => setFile(e.target.files[0])}
      disabled={isLoading} // Disable input while loading
    />
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type="submit"
      className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      disabled={isLoading} // Disable button while loading
    >
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Loader className="animate-spin mx-auto" size={24} /> {/* Display loader */}
          <span className="ml-2">Uploading...</span>
        </div>
      ) : (
        "Upload Data"
      )}
    </motion.button>
  </motion.div>
);

export default FileUpload;
