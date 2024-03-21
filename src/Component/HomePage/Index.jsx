import React from "react";
import bgIndex from "../../assets/image/bg_index.jpg";
import tinTuc1 from "../../assets/image/tintuc1.jpg";
import tinTuc2 from "../../assets/image/tintuc2.jpg";
import tinTuc3 from "../../assets/image/tintuc3.jpg";
import IconFlag from "../../assets/image/flag";
import IconHot from "../../assets/image/hot";
import Arrow from "../../assets/image/arrow";

const Index = () => {
  const article = [tinTuc1, tinTuc2, tinTuc3];
  const menu = [
    "Danh muc tac pham",
    "Bang xep hang",
    "Mien phi",
    "Hoan thanh",
    "Khu vuc VIP",
  ];
  const news = [
    {
      title: "Tuyen cong tac vien",
      icon: (
        <svg
          width="5"
          height="4"
          viewBox="0 0 5 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="2.5" cy="2" r="2" fill="#8E8E93" />
        </svg>
      ),
    },
    { title: "Bang luong Convert", icon: <IconHot /> },
    { title: "Kiem tien voi chung toi", icon: <IconFlag /> },
  ];

  return (
    <div className="grid grid-cols-[17.25rem_minmax(0,_1fr)] container mx-auto gap-3">
      <div className="leading-5 tracking-[0.1px]">
        <ul className="bg-[#3a3a3c] text-[#ececec] rounded-md px-3 py-4 mt-4">
          {menu.map((item, index) => (
            <li
              key={index}
              className="py-3 pl-3 text-[14px] hover:bg-[#636366] flex items-center justify-between">
              <span>{item}</span>
              <Arrow />
            </li>
          ))}
        </ul>
        <div className="flex flex-col rounded-md bg-[#f7f7fa]">
          <span className="bg-[#ed4259] text-white  text-center p-2 mt-4">
            Tin Tuc
          </span>
          {news.map((item, index) => (
            <a
              key={index}
              className="flex gap-4 items-center justify-start p-3 text-start border-[#efeff4] border-[1px] text-[#919193] cursor-pointer">
              <div className="w-6 h-6 flex items-center justify-center">
                {item.icon}
              </div>
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="max-h-72 overflow-hidden">
          <img src={bgIndex} alt="Background" className="object-cover " />
        </div>
        <div className="grid grid-cols-3">
          {article.map((item, index) => (
            <div className="max-h-40">
              <img
                key={index}
                src={item}
                alt={`Article ${index + 1}`}
                className="max-h-160"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
