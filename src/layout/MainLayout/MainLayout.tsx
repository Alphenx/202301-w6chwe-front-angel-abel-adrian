import { Outlet } from 'react-router-dom';
import './MainLayout.css';
const MainLayout = () => {
  return (
    <div className="app-container">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
