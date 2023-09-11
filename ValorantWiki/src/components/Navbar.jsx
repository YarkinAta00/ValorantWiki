import { Link } from "react-router-dom"; 

function Navbar() {
  const isCurrentPath = (path) => location.pathname === path;

  return (
    <div className="w-full bg-red-700 flex flex-col md:flex-row justify-between py-4">
      <div className="px-8">
        <Link to="/">
          <h1 className="font-semibold text-2xl">Valorant Wiki</h1>
        </Link>
      </div>
      <div className="md:flex space-x-8 px-10">
        <Link to="/agents">
          <h1 className={`font-medium text-xl ${isCurrentPath("/agents") ? "text-white" : "text-black"}`}>Agents</h1>
        </Link>
        <Link to="/weapons">
          <h1 className={`font-medium text-xl ${isCurrentPath("/weapons") ? "text-white" : "text-black"}`}>Weapons</h1>
        </Link>
        <Link to="/maps">
          <h1 className={`font-medium text-xl ${isCurrentPath("/maps") ? "text-white" : "text-black"}`}>Maps</h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
