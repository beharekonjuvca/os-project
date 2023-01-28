import { Icon } from "@components/shared/Icon/Icon";
import { CurrentTime } from "@components/shared/Time/CurrentTime";
import { useWindowContext } from "@context/WindowContext/WindowContext";
import React from "react";

export const StatusBar = () => {
  const { openWindow } = useWindowContext();
  return (
    <div className="w-full h-[24px] bg-[#D9D9D9] dark:bg-gray-500 flex justify-between items-center">
      <span
        onClick={() => openWindow("preferences")}
        className="text-xs ml-2 font-bold cursor-pointer"
      >
        Preferences
      </span>

      <div className="flex ">
        <div className="flex items-center text-xs font-bold my-1 ">
          75% {<Icon className="w-5 mx-1" icon="battery-life" />}
        </div>
        <p className="flex items-center text-xs font-bold my-1 mr-1.5 ml-2">
          {<CurrentTime />}
        </p>
      </div>
    </div>
  );
};
