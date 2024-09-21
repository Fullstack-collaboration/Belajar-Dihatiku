import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Layout = ({ children }) => {

  return (
    <div>
      {/* <Navbar /> */}
        <div className="min-h-[70vh]">
            {children}
        </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout