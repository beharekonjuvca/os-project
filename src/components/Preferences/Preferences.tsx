import React from "react";
import { Toggle } from "./Toggle";

export const Preferences = () => {
  return (
    <div className="flex flex-col ml-6 items-start">
      <h1 className="text-3xl font-bold mb-4">Preferences</h1>
      <Toggle />
    </div>
  );
};
