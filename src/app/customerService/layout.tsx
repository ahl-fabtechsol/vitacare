import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSideBar } from "@/components/appComponents/AppSideBar";
import AppHaeder from "@/components/appComponents/AppHaeder";

export default function CustomerServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSideBar type="customerService" />
      <main className="flex flex-col min-h-screen w-full">
        <AppHaeder type="customerService" />
        <SidebarTrigger />
        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
