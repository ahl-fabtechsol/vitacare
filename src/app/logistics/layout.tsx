import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSideBar } from "@/components/appComponents/AppSideBar";
import AppHaeder from "@/components/appComponents/AppHaeder";

export default function LogisticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSideBar type="logistics" />
      <main className="flex flex-col min-h-screen w-full">
        <AppHaeder type="logistics" />
        <SidebarTrigger />
        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
