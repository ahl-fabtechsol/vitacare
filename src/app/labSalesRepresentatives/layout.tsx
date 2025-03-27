import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSideBar } from "@/components/appComponents/AppSideBar";
import AppHaeder from "@/components/appComponents/AppHaeder";

export default function LabSalesRepresentativesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSideBar type="labSalesRepresentatives" />
      <main className="flex flex-col min-h-screen w-full">
        <AppHaeder type="labSalesRepresentatives" />
        <SidebarTrigger />
        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
