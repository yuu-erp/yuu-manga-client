import React from "react";
import Logo from "../shared/Logo";
import HomeIcon from "../icons/HomeIcon";

const Sidebar = () => {
  return (
    <header
      role="header"
      className="z-[3] flex items-end select-none grow flex-col"
    >
      <div className="flex flex-col w-[275px] ml-[60px]">
        <div
          className="flex flex-col fixed h-full top-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-[275px] justify-between flex flex-col overflow-y-auto h-full px-2">
            <div className="flex flex-col items-start">
              <Logo className="my-2 max-w-full flex flex-col" />
              <div className="mb-1 mt-[2px] w-full flex flex-col">
                <nav className="flex flex-col items-start">
                  <a className="flex flex-col items-start outline-none cursor-pointer grow w-full my-0">
                    <div className="flex flex-row justify-center p-3 rounded-full hover:bg-slate-500">
                      <HomeIcon className="w-7 h-7 text-[#e7e9ea]" />
                      <div className="break-words max-w-full min-w-0 font-bold text-xl whitespace-nowrap text-[#e7e9ea] ml-5 mr-[26px] overflow-hidden">
                        Home
                      </div>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="w-[90%] my-1 flex flex-col">header1.2</div>
            </div>
            <div className="flex flex-col my-3">Header2</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Sidebar);
