import { Outlet } from 'react-router-dom';
import Header from '../../features/Header/Header';

const MainLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
