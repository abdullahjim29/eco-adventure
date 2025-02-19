import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white shadow-sm">
        <nav className="w-11/12 mx-auto">
          <NavBar />
        </nav>
      </header>

      <main className="bg-[#FAF9FE] border border-[#FAF9FE]">
        <section className="w-11/12 mx-auto">
          <Outlet />
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default MainLayout;
