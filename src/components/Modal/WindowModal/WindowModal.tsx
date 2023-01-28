import { GoogleSearch } from "@components/Browser/GoogleSearch";
import { Gallery } from "@components/Gallery/Gallery";
import { News } from "@components/News/News";
import { Icon } from "@components/shared/Icon/Icon";
import { IconDefinition } from "@components/shared/Icon/Icon.generated";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
interface Props {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export default function WindowModal({ isVisible, onClose, children }: Props) {
  return (
    <Transition appear as={Fragment} show={isVisible}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full  items-center justify-center  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full h-screen p-8 flex items-center justify-center   transition-all">
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
