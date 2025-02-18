import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <header className="w-11/12 mx-auto">
        <nav>
          <NavBar />
        </nav>
      </header>

      <main className="w-11/12 mx-auto">
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
};

export default MainLayout;
