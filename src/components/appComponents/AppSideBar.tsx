"use client";

import { LogOut } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { allNavigations } from "@/lib/navigation";

const dashboardLabels = {
  admin: "Admin Panel",
  labAdministrator: "Laboratory Admin Panel",
  labSalesRepresentatives: "Lab Sales Representatives Dashboard",
  salesManager: "Sales Manager",
  logistics: "Logistics",
  customerService: "Customer Service",
  pharmacyClient: "Client Profile (Pharmacy)",
  pharmacyGroup: "Pharmacy Group",
};

export function AppSideBar({ type }: { type: keyof typeof allNavigations }) {
  const pathname = usePathname();
  const navigation = allNavigations[type];
  const dashboardLabel = dashboardLabels[type];
  const router = useRouter();
  return (
    <Sidebar>
      <SidebarHeader className="bg-primary">
        <div className="flex flex-col items-center p-2 justify-center text-white">
          <span className="text-lg font-semibold">VitaCare</span>
          <span className="text-xs ">A medical software</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-center">
            {dashboardLabel}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation?.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    style={{
                      padding: "1.5rem",
                    }}
                    className={`${
                      pathname === item.url
                        ? "bg-primary text-white hover:bg-primary/90 hover:text-white "
                        : "hover:bg-primary/20 hover:text-black active:bg-primary active:text-white"
                    } transition-colors duration-200`}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <Button
          className="bg-gray-300 text-black dark:bg-white cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <LogOut color="red" size={20} />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
