import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6">
      <div className="text-center max-w-md">
      
        <h1 className="text-8xl font-extrabold text-gray-900 tracking-tight">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Sahifa topilmadi
        </h2>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
          >
            <Home size={18} />
            Bosh sahifa
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-5 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            <ArrowLeft size={18} />
            Ortga
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;