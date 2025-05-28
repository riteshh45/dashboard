
import { useDispatch } from 'react-redux';
import { toggleSidebar, toggleTheme } from '../features/ui/uiSlice';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  return (
    <div className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-800">
      <button onClick={() => dispatch(toggleSidebar())} className="md:hidden">☰</button>
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">My Portfolio</h1>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="px-3 py-1 bg-blue-500 text-white rounded"
      >
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}
