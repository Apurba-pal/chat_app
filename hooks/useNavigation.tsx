"use client";

import { MessageSquare, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useNavigation = () => {
  const pathname = usePathname();
  const paths = useMemo(
    () => [
      {
        name: "conversations",
        href: "/conversations",
        icons: <MessageSquare />,
        active: pathname.startsWith("/conversations"),
      },
      {
        name: "contacts",
        href: "/contacts",
        icons: <Users />,
        active: pathname.startsWith("/contacts"),
      },
    ],
    [pathname]
  );
  return paths;
};
