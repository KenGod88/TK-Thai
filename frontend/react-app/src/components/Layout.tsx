import { Outlet } from "react-router-dom";


const Layout: React.FC = () => {
  return (
    <>


      <main className="min-h-screen bg-black text-white">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;