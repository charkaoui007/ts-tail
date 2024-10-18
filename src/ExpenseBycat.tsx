import React from "react";

const BarGraph: React.FC = () => {
  return (
    <div className="flex min-w-72 flex-1 flex-col gap-2 rounded-xl border border-[#dce1e5] p-6">
      <p className="text-[#111517] text-base font-medium leading-normal">
        Expenses by Category
      </p>
      <div className="grid min-h-[180px] gap-x-4 gap-y-6 grid-cols-[auto_1fr] items-center py-3">
        <p className="text-[#647787] text-[13px] font-bold leading-normal tracking-[0.015em]">
          Rent
        </p>
        <div className="h-full flex-1">
          <div
            className="border-[#647787] bg-[#f0f2f4] border-r-2 h-full"
            style={{ width: "90%" }}
          ></div>
        </div>
        <p className="text-[#647787] text-[13px] font-bold leading-normal tracking-[0.015em]">
          Groceries
        </p>
        <div className="h-full flex-1">
          <div
            className="border-[#647787] bg-[#f0f2f4] border-r-2 h-full"
            style={{ width: "10%" }}
          ></div>
        </div>
        <p className="text-[#647787] text-[13px] font-bold leading-normal tracking-[0.015em]">
          Utilities
        </p>
        <div className="h-full flex-1">
          <div
            className="border-[#647787] bg-[#f0f2f4] border-r-2 h-full"
            style={{ width: "80%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
