import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import MouseGlow from "../MouseGlow";

const Mainlayout = () => {
  return (
    <div className="min-h-screen bg-black">
      <MouseGlow />

      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Mainlayout;