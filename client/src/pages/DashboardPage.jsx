import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import ProfileForm from "../components/ProfileForm";
import FileUpload from "../components/FileUpload";

const DashboardPage = () => {
  const { user } = useAuthStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");

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
        console.log(result.data);
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
            <ProfileForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
            />
          </div>

          <FileUpload setFile={setFile} submitData={submitData} />
        </form>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
