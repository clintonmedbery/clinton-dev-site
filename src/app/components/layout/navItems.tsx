import React from "react";
import {
  IconCloudPlus,
  IconPuzzle,
  IconSofa,
  IconUmbrella,
  IconVaccine
} from "@tabler/icons-react";

export type NavItem = {
  heading: string;
  sidebarLabel: string;
  href: string;
  icon: React.ReactNode;
};

export const defaultNavItems: NavItem[] = [
  {
    heading: "Clint's Page",
    sidebarLabel: "Home",
    href: "/",
    icon: <IconSofa className="w-6 h-6" />
  },
  {
    heading: "Old School Weather",
    sidebarLabel: "Weather",
    href: "/old-school-weather",
    icon: <IconUmbrella className="w-6 h-6" />
  },
  {
    heading: "Free AAC",
    sidebarLabel: "Free AAC",
    href: "/free-aac",
    icon: <IconPuzzle className="w-6 h-6" />
  },
  {
    heading: "Multi Cloud Provisioning Tools",
    sidebarLabel: "Provisioning Tools",
    href: "/provisioning-tools",
    icon: <IconCloudPlus className="w-6 h-6" />
  },
  {
    heading: "Vax Appointment Scraper",
    sidebarLabel: "Vax Scraper",
    href: "/vax-scraper",
    icon: <IconVaccine className="w-6 h-6" />
  }
];
