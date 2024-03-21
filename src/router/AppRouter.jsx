import { Routes, Route } from "react-router-dom";
import Login from "../Component/Login/Login";
import HomePage from "../Component/HomePage/HomePage";
import Index from "../Component/HomePage/Index";
import Truyen from "../Component/Truyen/Truyen";
import ErrorPage from "./ErrorPage";
const AppRouter = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Index />} />
          <Route path="truyen" element={<Truyen />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
export default AppRouter;
