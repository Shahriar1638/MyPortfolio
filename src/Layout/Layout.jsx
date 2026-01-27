import { Outlet } from "react-router";
import Navbar from "../Component/Common/Navbar";
import Footer from "../Component/Common/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
