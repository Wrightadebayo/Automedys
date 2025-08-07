
import { Outlet } from 'react-router-dom';
import  Navbar  from '../component/Navbar';
import ScrollToTop from '../component/ScrollToTop';

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
    <Navbar/>
      <Outlet />
    </div>
  )
}

export default Layout
