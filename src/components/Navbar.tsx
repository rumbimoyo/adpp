import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold">ADP372S Assessment</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-gray-900">Login</Link>
            <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}