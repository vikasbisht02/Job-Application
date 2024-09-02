import { Navigate, Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";

import SignUpPage from "./pages/SignUpPage";

import DashboardPage from "./pages/DashboardPage";

import { Toaster } from "react-hot-toast";
import SubmitPage from "./pages/SubmitPage";

function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br
    from-gray-900 via-green-900 to-emerald-900 flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-8 lg:px-16"
    >
      <FloatingShape
        color="bg-green-500"
        size="w-48 h-48 md:w-64 md:h-64"
        top="-10%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-emerald-500"
        size="w-32 h-32 md:w-48 md:h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-lime-500"
        size="w-24 h-24 md:w-32 md:h-32"
        top="40%"
        left="-10%"
        delay={2}
      />

      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/submit" element={<SubmitPage />} />
        <Route path="/" element={<SignUpPage />} />
        {/* catch all routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
