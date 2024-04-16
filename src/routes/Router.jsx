import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import LogIn from '../components/log-in/LogIn';
import Register from '../components/register/Register';
import Home from '../home/Home';
const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/log-in',
    element: <LogIn />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default Router;
