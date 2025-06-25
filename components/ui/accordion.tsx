"use client";

import { Accordion } from "@base-ui-components/react/accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

function AccordionRoot({
  ...props
}: React.ComponentProps<typeof Accordion.Root>) {
  return (
    <Accordion.Root
      data-slot='accordion'
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof Accordion.Item>) {
  return (
    <Accordion.Item
      data-slot='accordion-item'
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Accordion.Trigger>) {
  return (
    <Accordion.Header className='flex'>
      <Accordion.Trigger
        data-slot='accordion-trigger'
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-panel-open]>svg]:rotate-180",
          className,
        )}
        {...props}>
        {children}
        <ChevronDownIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200' />
      </Accordion.Trigger>
    </Accordion.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Accordion.Panel>) {
  return (
    <Accordion.Panel
      data-slot='accordion-content'
      className={cn(
        "h-[var(--accordion-panel-height)] overflow-hidden text-sm transition-[height] ease-out",
        "data-[ending-style]:h-0 data-[starting-style]:h-0",
        className,
      )}
      {...props}>
      <div className={cn("pt-0 pb-4")}>{children}</div>
    </Accordion.Panel>
  );
}

export {
  AccordionRoot as Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
};
