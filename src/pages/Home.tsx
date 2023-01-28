import { ApplicationSection } from "@components/Home/Applications/ApplicationSection";
import { StatusBar } from "@components/Home/StatusBar";

export const Home = () => {
  return (
    <div className="w-full">
      <StatusBar />
      <div className="flex">
        <ApplicationSection />
      </div>
    </div>
  );
};
