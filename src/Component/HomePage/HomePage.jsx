import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
const HomePage = () => {
  return (
    <>
      <div>
        <Header />
        <Nav />
        <Outlet />
      </div>
    </>
  );
};

export default HomePage;
