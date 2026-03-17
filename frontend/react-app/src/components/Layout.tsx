import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;