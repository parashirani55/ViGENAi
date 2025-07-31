"use client";
import {
  CircleUserIcon,
  FileVideo,
  PanelsTopLeft,
  ShieldPlusIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideNav() {
  const MenuOption = [
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: PanelsTopLeft,
    },
    {
      id: 2,
      name: "Create New",
      path: "/dashboard/create-new",
      icon: FileVideo,
    },
    {
      id: 3,
      name: "Upgrade",
      path: "/dashboard/upgrade",
      icon: ShieldPlusIcon,
    },
    {
      id: 4,
      name: "Account",
      path: "/dashboard/account",
      icon: CircleUserIcon,
    },
  ];

  const path = usePathname();

  return (
    <div className="w-64 h-screen shadow-md p-5">
      <div className="grid gap-3">
        {MenuOption.map((item) => {
          const isActive = path === item.path;
          return (
            <Link href={item.path} key={item.id}>
              <div
                className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors ${
                  isActive
                    ? "bg-red-500 text-white"
                    : "hover:bg-red-400 hover:text-white"
                }`}
              >
                <item.icon />
                <h2>{item.name}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
