import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSideBar } from "@/components/appComponents/AppSideBar";
import AppHaeder from "@/components/appComponents/AppHaeder";

export default function SalesManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSideBar type="salesManager" />
      <main className="flex flex-col min-h-screen w-full">
        <AppHaeder type="salesManager" />
        <SidebarTrigger />
        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
