"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "@/components/ui/theme/theme-toggle";
import { MessageSquare, Users, Mic } from "lucide-react";

const DesktopNav = () => {
  const pathname = usePathname();

  const navigationItems = [
    {
      href: "/conversations",
      name: "conversations",
      icon: <MessageSquare />,
      active: pathname === "/conversations",
    },
    {
      href: "/contacts",
      name: "contacts",
      icon: <Users />,
      active: pathname === "/contacts",
    },
    {
      href: "/voice_recognition",
      name: "voice",
      icon: <Mic />,
      active: pathname === "/voice_recognition",
    },
  ];
  
  return (
    <Card className="hidden lg:flex lg:flex-col lg:justify-between lg:items-center lg:h-full lg:w-16 lg:px-2 lg:py-4">
      <nav className="flex flex-col items-center gap-4">
        <ul className="flex flex-col gap-4 items-center">
          {navigationItems.map((item) => (
            <li key={item.href} className="relative">
              <Link href={item.href}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant={item.active ? "default" : "outline"}
                      >
                        {item.icon}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col gap-4 items-center">
        <ThemeToggle/>
        <UserButton />
      </div>
    </Card>
  );
};

export default DesktopNav;
