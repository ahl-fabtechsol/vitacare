import { ModeToggle } from "@/components/appComponents/mode-toggle";
import React from "react";

export default function AdminHeader() {
  return (
    <header className="bg-white dark:bg-[#171717] p-5 shadow-md flex justify-between items-center">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
        Admin Dashboard
      </h1>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
}
