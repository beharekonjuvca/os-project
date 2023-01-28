import { useWindowContext } from "@context/WindowContext/WindowContext";

import { Application } from "./Application";
import { applications } from "./applications";

export const ApplicationSection = () => {
  const { openWindow } = useWindowContext();
  return (
    <div className="flex flex-col items-start mt-6 ml-6 ">
      <div className="flex gap-x-8">
        {applications.map((item) => (
          <Application
            {...item}
            key={`${item.name}-${item.icon}`}
            onDoubleClick={() => {
              openWindow(item.type);
            }}
          />
        ))}
      </div>
    </div>
  );
};
