import Brand from "../../assets/image/Brand";
import Bell from "../../assets/image/Bell";
import Avatar from "../../assets/image/avata.jpg";
import LogoHeader from "../../assets/image/logoheader.jpg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="container mx-auto">
        <img className="cursor-pointer" src={LogoHeader} />
      </div>
      <div className="h-[72px] w-full">
        <div className="flex fled-col items-center justify-between h-full container mx-auto">
          <div className="flex gap-10">
            <Brand />
            <div className="flex flex-col items-start justify-center cursor-pointer">
              <span className="font-normal text-3xl tracking-wide">
                Tekbook
              </span>
              <span className="font-light text-sm  ">
                Book here, store there
              </span>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="scale-150 cursor-pointer">
              <Bell />
            </div>
            <div className=" flex items-center gap-4">
              <div className="h-10 w-10 rounded-full">
                <img className="cursor-pointer " src={Avatar} />
              </div>
              <span className="cursor-pointer">Nguyen Minh Toan</span>
              <NavLink
                className="bg-[#ed455c] px-5 py-1 rounded-xl text-[#b3b3b7] hover:bg-[#d3d3d8] hover:text-white transition ease-in-out delay-150 "
                to="/login">
                Logout
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
