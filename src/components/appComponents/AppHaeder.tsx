import React from "react";
import { ModeToggle } from "./mode-toggle";

const dashboardLabels = {
  admin: "Admin Dashboard",
  labAdministrator: "Lab Admin Dashboard",
  labSalesRepresentatives: "Lab Sales Representatives Dashboard",
  salesManager: "Sales Manager",
  logistics: "Logistics",
  customerService: "Customer Service",
};

export default function AppHaeder({
  type,
}: {
  type: keyof typeof dashboardLabels;
}) {
  const dashboardLabel = dashboardLabels[type];
  return (
    <header className="bg-white dark:bg-[#171717] p-5 shadow-md flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
        {dashboardLabel}
      </h1>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
