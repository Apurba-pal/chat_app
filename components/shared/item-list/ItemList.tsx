"use client";

import { Card } from "@/components/ui/card";
import { useConversation } from "@/hooks/useConversation";
import { cn } from "@/lib/utils";
import React from "react";

type Props = React.PropsWithChildren<{
  title: string;
  action?: React.ReactNode;
}>;

const ItemList = ({ children, title, action: Action }: Props) => {
  const {isActive} = useConversation()
  return (
    <Card className={cn("hidden h-full w-full lg:flex-none lg:w-80 p-2",{
      "block":!isActive,
      "lg:block":isActive,
    })}>
      <div className="flex flex-col h-full">
        <div className="flex flex-col items-center gap-4 mb-4">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          {Action && Action}
        </div>
        
        <div className="flex-1 overflow-y-auto space-y-2 min-h-0">
          {children}
        </div>
      </div>
    </Card>
  );
};

export default ItemList;