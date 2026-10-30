import { Link } from "react-router-dom";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";

export default function PageNotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4">
      <div className="flex max-w-lg flex-col items-center text-center">

        <h1 className="text-8xl font-extrabold tracking-tight text-[#245C3A] sm:text-9xl">
          404
        </h1>

        <div className="mt-4 rounded-full bg-green-100 p-5 text-[#245C3A]">
          <AlertCircle size={45} />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
          Oops! Page Not Found
        </h2>

        <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
          The page you are looking for doesn't exist,
          may have been moved, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg bg-[#245C3A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1B472C]"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>
      </div>
    </main>
  );
}