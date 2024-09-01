import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const DashboardPage = () => {
  const { user } = useAuthStore(); // Assuming this fetches user info correctly

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");

  // Update name and email when user is available
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const submitData = async (e) => {
    e.preventDefault();
    if (name && email && file) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("avatar", file);
  
      try {
        const result = await axios.post(
          "http://localhost:5000/upload-files",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        
        toast.success("File uploaded successfully!");
        console.log(result.data); // Log the server response
      } catch (error) {
        toast.error("File upload failed");
        console.error("File upload failed", error);
      }
    } else {
      toast.error("Please fill all fields before submitting");
      console.error("Please fill all fields before submitting");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800 p-6 sm:p-8 mt-10 sm:mt-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
          Dashboard
        </h2>

        <form onSubmit={submitData}>
          <div className="space-y-6">
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
          </div>

          <div>
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
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Upload Data
              </motion.button>
            </motion.div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
