import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout/MainLayout';
import CreateRobot from '../pages/CreateRobot/CreateRobot';
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
        path: 'create',
        element: <CreateRobot />,
      },
    ],
  },
]);
