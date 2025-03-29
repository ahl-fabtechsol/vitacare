import { Calendar, Home, Inbox, LogOut, Search, Settings } from "lucide-react";


export const dashboardLabels = {
  admin: "Admin Panel",
  labAdministrator: "Laboratory Admin Panel",
  labSalesRepresentatives: "Lab Sales Representatives Dashboard",
  salesManager: "Sales Manager",
  logistics: "Logistics",
  customerService: "Customer Service",
  pharmacyClient: "Client Profile (Pharmacy)",
  pharmacyGroup: "Pharmacy Group",
};




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


  export const labSalesRepresentativesNavigation = [
    {
      title: "Dashboard",
      url: "/labSalesRepresentatives/dashboard",
      icon: Home,
    },
    {
      title: "Clients",
      url: "/labSalesRepresentatives/clients",
      icon: Home,
    },
    {
      title: "Orders",
      url: "/labSalesRepresentatives/orders",
      icon: Home,
    },
    {
      title: "Catalog",
      url: "/labSalesRepresentatives/catalog",
      icon: Home,
    },
    {
      title: "Activity",
      url: "/labSalesRepresentatives/activity",
      icon: Home,
    },
    {
      title: "Chats",
      url: "/labSalesRepresentatives/chats",
      icon: Home,
    },
  ]


export const salesManagerNavigation = [
  {
    title: "Dashboard",
    url: "/salesManager/dashboard",
    icon: Home,
  },
  {
    title: "Catalog",
    url: "/salesManager/catalog",
    icon: Home,
  },
  {
    title: "Clients",
    url: "/salesManager/clients",
    icon: Home,
  },
  {
    title: "Orders",
    url: "/salesManager/orders",
    icon: Home,
  },
  {
    title: "Sales Performance Tracking",
    url: "/salesManager/salesPerformanceTracking",
    icon: Home,
  },
  {
    title: "Team Members",
    url: "/salesManager/teamMembers",
    icon: Home,
  },
  {
    title: "Chats",
    url: "/salesManager/chats",
    icon: Home,
  },
  {
    title: "Activity",
    url: "/salesManager/activity",
    icon: Home,
  },
]


export const logisticsNavigation = [
  {
    title: "Dashboard",
    url: "/logistics/dashboard",
    icon: Home,
  },
  {
    title: "Shipping Coordination & Order Fulfillment",
    url: "/logistics/fulfillment",
    icon: Home,
  },
  {
    title: "Inventory",
    url: "/logistics/inventory",
    icon: Home,
  },
  {
    title: "Returns",
    url: "/logistics/returns",
    icon: Home,
  },
  {
    title: "Chats",
    url: "/logistics/chats",
    icon: Home,
  },
  {
    title: "Activity",
    url: "/logistics/activity",
    icon: Home,
  },
]


export const customerServiceNavigation = [
  {
    title: "Dashboard",
    url: "/customerService/dashboard",
    icon: Home,
  },
  {
    title: "Catalog",
    url: "/customerService/catalog",
    icon: Home,
  },
  {
    title: "Orders",
    url: "/customerService/orders",
    icon: Home,
  },
  {
    title: "Clients",
    url: "/customerService/clients",
    icon: Home,
  },
  {
    title: "Feedbacks",
    url: "/customerService/feedbacks",
    icon: Home,
  },
  {
    title: "Chats",
    url: "/customerService/chats",
    icon: Home,
  },
  {
    title: "Activity",
    url: "/customerService/activity",
    icon: Home,
  },
]


export const pharmacyClientNavigation = [
  {
    title: "Dashboard",
    url: "/pharmacyClient/dashboard",
    icon: Home,
  },
  {
    title: "Order List",
    url: "/pharmacyClient/orderList",
    icon: Home,
  },
  {
    title: "Catalog",
    url: "/pharmacyClient/catalog",
    icon: Home,
  },
  {
    title: "Chats",
    url: "/pharmacyClient/chats",
    icon: Home,
  },
  {
    title: "Activity",
    url: "/pharmacyClient/activity",
    icon: Home,
  },
]

export const pharmacyGroupNavigation = [
  {
    title: "Dashboard",
    url: "/pharmacyGroup/dashboard",
    icon: Home,
  },
  {
    title: "Catalog",
    url: "/pharmacyGroup/catalog",
    icon: Home,
  },
  {
    title: "Orders",
    url: "/pharmacyGroup/orders",
    icon: Home,
  },
  {
    title: "Group Members",
    url: "/pharmacyGroup/groupMembers",
    icon: Home,
  },
  {
    title: "Group Agreement",
    url: "/pharmacyGroup/groupAgreement",
    icon: Home,
  },
  {
    title: "Chats",
    url: "/pharmacyGroup/chats",
    icon: Home,
  },
]


  export const allNavigations = {
    admin: adminNavigation,
    labAdministrator: labAdministratorNavigation,
    labSalesRepresentatives:labSalesRepresentativesNavigation,
    salesManager:salesManagerNavigation,
    logistics:logisticsNavigation,
    customerService:customerServiceNavigation,
    pharmacyClient:pharmacyClientNavigation,
    pharmacyGroup:pharmacyGroupNavigation
  }