import { Icon } from "@components/shared/Icon/Icon";
import { IconDefinition } from "@components/shared/Icon/Icon.generated";
import { WindowType } from "@context/WindowContext/WindowContext";
import React from "react";
export type ApplicationProps = {
  name: string;
  type: WindowType;
  icon: IconDefinition;
};
type Props = ApplicationProps & {
  onDoubleClick: () => void;
};
export const Application = (props: Props) => {
  return (
    <div
      onDoubleClick={props.onDoubleClick}
      className="flex flex-col items-center cursor-pointer"
    >
      <div className="w-[90px] h-[90px] rounded-[50px] bg-[#D9D9D9] dark:bg-gray-500 p-7 flex items-center justify-center shadow-lg">
        <Icon icon={props.icon} className="w-full " />
      </div>
      <h2 className="dark:text-grey">{props.name}</h2>
    </div>
  );
};
