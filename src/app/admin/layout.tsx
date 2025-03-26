import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSideBar } from "@/components/appComponents/AppSideBar";
import AppHaeder from "@/components/appComponents/AppHaeder";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSideBar type="admin" />
      <main className="flex flex-col min-h-screen w-full">
        <AppHaeder type="admin" />
        <SidebarTrigger />
        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
