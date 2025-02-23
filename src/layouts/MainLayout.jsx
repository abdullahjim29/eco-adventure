import { Outlet} from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "./Footer";

const MainLayout = () => {


  return (
    <div className="min-h-screen flex flex-col">
      {/* navbar */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white shadow-sm">
        <nav className="w-11/12 mx-auto">
          <NavBar />
        </nav>
      </header>

      <main className="bg-[#FAF9FE] border border-[#FAF9FE] flex-grow">
        <section className="">
          <Outlet />
        </section>
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
