import IconSearch from "../../assets/image/Search";
import IconPhone from "../../assets/image/Phone";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const nav = [
    { title: "Trang Chu", link: "/" },
    { title: "Truyen", link: "/truyen" },
    { title: "Sach", link: "/sach" },
    { title: "Hoc Lieu", link: "/hoclieu" },
  ];
  return (
    <>
      <div className="bg-[#3a3a3c] text-[#ececed] xl:p-0 p-2">
        <div className="container mx-auto ">
          <div className="flex xl:flex-row items-center gap-5  justify-between min-w-28 flex-col">
            <ul className="grid grid-cols-4 min-w-max">
              {nav.map((item, index) => {
                return (
                  <NavLink
                    to={item.link}
                    className="px-6 py-5 hover:bg-[#bf2c24] text-center cursor-pointer transition ease-in-out delay-75">
                    {item.title}
                  </NavLink>
                );
              })}
            </ul>
            <div className="flex flex-auto items-center justify-between w-full">
              <div className="flex-auto relative h-full">
                <div className="absolute top-2/4 right-5 -translate-y-2/4 scale-125 cursor-pointer">
                  <IconSearch />
                </div>
                <input
                  placeholder="Tim kiem..."
                  className="px-4 py-2 w-full h-full border-[#505053] border-1 rounded-md bg-[#efeff4] text-[#505053]"
                />
              </div>
              <div className="flex-none gap-2 flex flex-row items-center">
                <a className="px-6 flex gap-4 cursor-pointer">
                  <IconPhone />
                  <span>Tai app</span>
                </a>
                <button className="bg-[#ed4259] px-6 py-2 rounded-[1.5rem]">
                  Nap Tien
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Nav;
