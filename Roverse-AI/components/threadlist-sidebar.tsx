import type * as React from "react";
import Image from "next/image";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

import { ThreadList } from "@/components/thread-list";

export function ThreadListSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="mb-2 border-b">
        <div className="flex items-center justify-between">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                <div className="flex aspect-square size-8 items-center justify-center overflow-hidden rounded-lg">
                  <Image
                    src="/logo.png"
                    alt="Roverse AI"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Roverse AI</span>
                  <span className="text-xs text-muted-foreground">
                    Personal AI Assistant
                  </span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <ThreadList />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}