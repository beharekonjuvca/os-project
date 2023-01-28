import { GoogleSearch } from "@components/Browser/GoogleSearch";
import { Camera } from "@components/Camera/Camera";
import { Documents } from "@components/Documents/Documents";
import { Gallery } from "@components/Gallery/Gallery";
import { News } from "@components/News/News";
import { Preferences } from "@components/Preferences/Preferences";
import { WindowType } from "@context/WindowContext/WindowContext";
import React from "react";
import WindowModal from "../WindowModal/WindowModal";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  component: WindowType | null;
}
const WindowCoponents: { [key in WindowType]: React.FunctionComponent } = {
  browser: GoogleSearch,
  camera: Camera,
  gallery: Gallery,
  folder: Documents,
  news: News,
  preferences: Preferences,
};
export const AppModal = ({ isVisible, onClose, component }: Props) => {
  const Component = component ? WindowCoponents[component] : () => <></>;
  return (
    <WindowModal isVisible={isVisible} onClose={onClose}>
      <div className="flex w-full h-full  max-h-[800px] max-w-[1400px] ">
        <div className="bg-[#D9d9d9] dark:bg-black w-full h-full  overflow-hidden overflow-y-auto rounded-xl flex flex-col ">
          <div className="w-full  h-5 px-[6px] flex items-center justify-end ">
            <div
              onClick={onClose}
              className="w-3 h-3 mb-2 mt-2.5 ml-4 cursor-pointer rounded-full bg-red-500"
            ></div>
          </div>
          <Component />
        </div>
      </div>
    </WindowModal>
  );
};
