
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

export default function Sidebar() {
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);

  return (
    <div className={clsx(
      "bg-gray-100 dark:bg-gray-900 h-screen w-64 p-4 fixed top-0 left-0 z-40 transform transition-transform duration-300",
      {
        "-translate-x-full md:translate-x-0": !isSidebarOpen,
        "translate-x-0": isSidebarOpen,
      }
    )}>
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="text-gray-800 dark:text-white">Overview</Link>
        <Link to="/projects" className="text-gray-800 dark:text-white">Projects</Link>
        <Link to="/contact" className="text-gray-800 dark:text-white">Contact</Link>
      </nav>
    </div>
  );
}
