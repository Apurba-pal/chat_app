"use client";

import { Card } from "@/components/ui/card";
import { useNavigation } from "@/hooks/useNavigation";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const DesktopNav = () => {
  const paths = useNavigation();
  return (
    <Card className="hidden lg:flex lg:flex-col lg:justify-between lg:items-center lg:h-full lg:w-16 lg:px-2 lg:py-4">
      <nav className="flex flex-col items-center gap-4">
        {paths.map((path) => (
          <Link
            key={path.href}
            href={path.href}
            className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${
              path.active ? "bg-gray-100" : ""
            }`}
          >
            {path.icons}
          </Link>
        ))}
      </nav>
      <div className="flex flex-col gap-4 items-center">
        <UserButton />
      </div>
    </Card>
  );
};

export default DesktopNav;
