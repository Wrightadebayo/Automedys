import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Service, About, Contact, Layout } from './component';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Navbar will be shared across these routes
    children: [
      { path: '/', element: <Home /> },
      { path: '/service', element: <Service /> },
      { path: '/about', element: <About Us/> },
      { path: '/contact', element: <Contact Us /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;






  



