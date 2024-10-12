import { Link, useLocation } from 'react-router-dom';
import { HiHome, HiOutlineBookOpen } from 'react-icons/hi';
import { CgProfile } from 'react-icons/cg';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-20 h-screen bg-[#f8f1ec] flex flex-col justify-between py-4 rounded-r-3xl shadow-lg">
      <div className="flex flex-col items-center space-y-6">
        <Link to="/">
          <div className={`p-2 rounded-full ${isActive('/') ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <HiHome className="w-6 h-6" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center space-y-6">
        <Link to="/general">
          <div className={`p-2 rounded-full ${isActive('/general') ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <HiOutlineBookOpen className="w-6 h-6" />
          </div>
        </Link>

        <Link to="/particular">
          <div className={`p-2 rounded-full ${isActive('/particular') ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <HiOutlineBookOpen className="w-6 h-6" />
          </div>
        </Link>

        <Link to="/documentacion">
          <div className={`p-2 rounded-full ${isActive('/documentacion') ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <HiOutlineBookOpen className="w-6 h-6" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center">
        <Link to="/perfil">
          <div className={`p-2 rounded-full ${isActive('/perfil') ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <CgProfile className="w-6 h-6" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
