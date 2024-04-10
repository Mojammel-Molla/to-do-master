import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-between my-5 ">
      <div>
        <h1 className="text-2xl font-bold text-indigo-500">To Do Master</h1>
      </div>
      <div>
        <Link to="/log-in">
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-md font-semibold">
            Log In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
