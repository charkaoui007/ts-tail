import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import GroupCard from "./GroupCard";
import Expenses from "./Expenses";
import GroupDetails from "./GroupDetails";

const App: React.FC = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <GroupDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
