import SidebarWrapper from "@/components/shared/sidebar/SidebarWrapper";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import React from "react";

type Props = React.PropsWithChildren<{}>;

const layout = ({ children }: Props) => {
  return (
    <SidebarWrapper>
      <TooltipProvider>{children}</TooltipProvider>
    </SidebarWrapper>
  );
};

export default layout;
