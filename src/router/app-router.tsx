import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout/MainLayout';
import EditRobot from '../pages/EditRobot/EditRobot';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'edit/:id',
        element: <EditRobot />,
      },
    ],
  },
]);
