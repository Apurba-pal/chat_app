"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { useConversation } from "@/hooks/useConversation";
import { ThemeToggle } from "@/components/ui/theme/theme-toggle";
import { MessageSquare, Users, Mic } from "lucide-react";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const {isActive} = useConversation();
  const pathname = usePathname();

  if (isActive) return null;

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
    <Card className="fixed bottom-4 left-4 right-4 w-[calc(100%-32px)] flex h-16 items-center lg:hidden border shadow-lg rounded-full bg-white/90 backdrop-blur-sm">
      <nav className="w-full p-6">
        <ul className="flex justify-evenly items-center w-full">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant={item.active ? "default" : "ghost"}
                        className="rounded-full"
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
          <li><ThemeToggle/></li>
          <li>
            <UserButton afterSignOutUrl="/" />
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default MobileNav;
