import { Calendar, Home, Inbox, LogOut, Search, Settings } from "lucide-react";


export const adminNavigation = [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: Home,
    },
    {
      title: "Catalog",
      url: "/admin/catalog",
      icon: Inbox,
    },
    {
      title: "Clients",
      url: "/admin/clients",
      icon: Calendar,
    },
    {
      title: "Groups",
      url: "/admin/groups",
      icon: Search,
    },
    {
      title: "Users",
      url: "/admin/users",
      icon: Settings,
    },
    {
      title: "Laboratories",
      url: "/admin/laboratories",
      icon: Settings,
    },
    {
      title: "Orders",
      url: "/admin/orders",
      icon: Settings,
    },
    {
      title: "Performance Tracking",
      url: "/admin/performanceTracking",
      icon: Settings,
    },
    {
      title: "Chats",
      url: "/admin/chats",
      icon: Settings,
    },
    {
      title: "Activity",
      url: "/admin/activity",
      icon: Settings,
    },
  ];



  export const labAdministratorNavigation = [
    {
      title: "Dashboard",
      url: "/labAdministrator/dashboard",
      icon: Home,
    },
 
    {
      title: "Clients",
      url: "/labAdministrator/clients",
      icon: Calendar,
    },
    {
        title: "Orders",
        url: "/labAdministrator/orders",
        icon: Calendar,
      },
      {
        title: "Catalog",
        url: "/labAdministrator/catalog",
        icon: Calendar,
      },
      {
        title: "Users",
        url: "/labAdministrator/users",
        icon: Calendar,
      },
      {
        title: "Product",
        url: "/labAdministrator/product",
        icon: Calendar,
      },
      {
        title: "Groups",
        url: "/labAdministrator/groups",
        icon: Calendar,
      },
      {
        title: "Group Agreement",
        url: "/labAdministrator/group-agreement",
        icon: Calendar,
      },
      {
        title: "Commercial Offer",
        url: "/labAdministrator/commercial-offer",
        icon: Calendar,
      },
      {
        title: "Automated Sendings",
        url: "/labAdministrator/automated-sendings",
        icon: Calendar,
      },
      {
        title: "Chats",
        url: "/labAdministrator/chats",
        icon: Calendar,
      },
      {
        title: "Activity",
        url: "/labAdministrator/activity",
        icon: Calendar,
      },
  ];


  export const allNavigations = {
    admin: adminNavigation,
    labAdministrator: labAdministratorNavigation,
    
  }