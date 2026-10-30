import { Link } from "react-router-dom";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";

export default function PageNotFound() {
  return (
    <main>
      <div>
        <h1>404</h1>

        <AlertCircle size={50} />

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist,
          may have been moved, or is temporarily unavailable.
        </p>

        <div>
          <Link to="/">
            <Home size={18} />
            Back to Home
          </Link>

          <button onClick={() => window.history.back()}>
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}