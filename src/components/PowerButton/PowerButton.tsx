import { useState } from "react";
import { useAuthContext } from "@context/AuthContext/AuthContext";
import { Icon } from "@components/shared/Icon/Icon";
import WindowModal from "@components/Modal/WindowModal/WindowModal";
export const PowerButton = () => {
  const { isAuthenticated, logout } = useAuthContext();
  const [isVisible, setIsVisible] = useState(false);
  const handleOpen = () => {
    setIsVisible(true);
  };
  const handleClose = () => {
    setIsVisible(false);
  };
  const handlePowerOff = () => {
    window.close();
  };
  const handleLogout = () => {
    setIsVisible(false);
    logout();
  };
  return (
    <div>
      <div
        onClick={handleOpen}
        className="bg-primary dark:bg-[#2B303B]
      w-14 h-14 rounded-full flex justify-center items-center absolute cursor-pointer bottom-2.5 left-5 drop-shadow-lg"
      >
        <Icon className="w-5" icon="power-off" />
      </div>
      <WindowModal isVisible={isVisible} onClose={handleClose}>
        <div className="flex flex-col gap-y-4">
          <div
            onClick={handlePowerOff}
            className="flex rounded-lg p-3 min-w-[200px items-center] bg-slate-300 cursor-pointer"
          >
            <Icon icon="power-off" className="w-5 mr-2.5" />
            <p>Power Off</p>
          </div>
          <div>
            {isAuthenticated && (
              <div
                onClick={handleLogout}
                className="flex rounded-lg p-3 min-w-[200px items-center] bg-slate-300 cursor-pointer"
              >
                <Icon icon="log-out" className="w-5 mr-2.5" />
                <p>Log Out</p>
              </div>
            )}
          </div>

          <div
            onClick={handleClose}
            className="flex rounded-lg p-3 min-w-[200px items-center] bg-slate-300 cursor-pointer"
          >
            <p>Cancel</p>
          </div>
        </div>
      </WindowModal>
    </div>
  );
};
