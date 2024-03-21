import { Routes, Route } from "react-router-dom";
import Login from "../Component/Login/Login";
import HomePage from "../Component/HomePage/HomePage";
import Index from "../Component/HomePage/Index";
const AppRouter = (props) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Index />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*">404 not found</Route>
      </Routes>
    </>
  );
};
export default AppRouter;
