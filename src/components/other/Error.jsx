
const ErrorPage = () => {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-800 text-center">
      <h1 className="text-9xl font-bold text-red-600 ">404</h1>
      <h2 className="text-4xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-600 mt-2">
        The page you're looking for might have been removed or is temporarily unavailable.
      </p>
      
      <div className="mt-8">
        <button
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md mr-4"
        >
          Go Back
        </button>
        <button
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
