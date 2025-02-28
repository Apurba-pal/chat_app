"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigation } from "@/hooks/useNavigation";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const MobileNav = () => {
  const paths = useNavigation();
  
  return (
    <Card className="fixed bottom-4 left-4 right-4 w-[calc(100%-32px)] flex h-16 items-center lg:hidden border shadow-lg rounded-full bg-white/90 backdrop-blur-sm">
      <nav className="w-full p-6">
        <ul className="flex justify-evenly items-center w-full">
          {paths.map((path) => (
            <li key={path.href}>
              <Link href={path.href}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant={path.active ? "default" : "ghost"}
                        className="rounded-full"
                      >
                        {path.icons}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">{path.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </li>
          ))}
          <li>
            <UserButton afterSignOutUrl="/" />
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default MobileNav;
