"use client";

import { ChevronsUpDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className='flex w-full flex-col gap-2'>
      <div className='flex items-center justify-between gap-4 px-4'>
        <h4 className='text-sm font-semibold'>
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger
          render={
            <Button
              variant='ghost'
              size='icon'
              className='size-8'
            />
          }>
          <ChevronsUpDown />
          <span className='sr-only'>Toggle</span>
        </CollapsibleTrigger>
      </div>
      <div className='rounded-md border px-4 py-2 font-mono text-sm'>
        @base-ui-components
      </div>
      <CollapsibleContent className='flex flex-col gap-2'>
        <div className='rounded-md border px-4 py-2 font-mono text-sm'>
          @shadcn/ui
        </div>
        <div className='rounded-md border px-4 py-2 font-mono text-sm'>
          @shadcn-baseui
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
