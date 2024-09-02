const SubmitPage = () => {
  return (
    <div className="h-1/2 flex items-center justify-center bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl">
      <div className="max-w-md w-full bg-gray-900 bg-opacity-50 p-6 md:p-8 rounded-2xl shadow-xl text-center text-white">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-transparent bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text">
          Thank You!
        </h1>
        <p className="text-gray-300">
          Thank you for submitting your details. We will get in touch with you shortly.
        </p>
      </div>
    </div>
  );
};

export default SubmitPage;
