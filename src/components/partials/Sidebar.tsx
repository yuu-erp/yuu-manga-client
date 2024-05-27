import React from "react";
import Logo from "../shared/Logo";

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
            </div>
            <div className="flex flex-col my-3">Header2</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Sidebar);
