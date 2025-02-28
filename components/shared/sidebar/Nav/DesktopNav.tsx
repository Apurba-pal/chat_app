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

const DesktopNav = () => {
  const paths = useNavigation();
  
  return (
    <Card className="hidden lg:flex lg:flex-col lg:justify-between lg:items-center lg:h-full lg:w-16 lg:px-2 lg:py-4">
      <nav className="flex flex-col items-center gap-4">
        <ul className="flex flex-col gap-4 items-center">
          {paths.map((path) => (
            <li key={path.href} className="relative">
              <Link href={path.href}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant={path.active ? "default" : "outline"}
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
        </ul>
      </nav>
      <div className="flex flex-col gap-4 items-center">
        <UserButton />
      </div>
    </Card>
  );
};

export default DesktopNav;
