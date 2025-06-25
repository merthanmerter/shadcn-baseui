"use client";

import { Toggle as TogglePrimitive } from "@base-ui-components/react/toggle";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui-components/react/toggle-group";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";

import { toggleVariants } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: "default",
  variant: "default",
});

interface ToggleGroupProps
  extends React.ComponentProps<typeof ToggleGroupPrimitive>,
    VariantProps<typeof toggleVariants> {}

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: ToggleGroupProps) {
  return (
    <ToggleGroupPrimitive
      data-slot='toggle-group'
      data-variant={variant}
      data-size={size}
      className={cn(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        className,
      )}
      {...props}>
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  );
}

interface ToggleGroupItemProps
  extends Omit<React.ComponentProps<typeof TogglePrimitive>, "render">,
    VariantProps<typeof toggleVariants> {
  render?: React.ComponentProps<typeof TogglePrimitive>["render"];
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  render,
  ...props
}: ToggleGroupItemProps) {
  const context = React.useContext(ToggleGroupContext);

  if (render) {
    return (
      <TogglePrimitive
        data-slot='toggle-group-item'
        data-variant={context.variant || variant}
        data-size={context.size || size}
        className={cn(
          toggleVariants({
            variant: context.variant || variant,
            size: context.size || size,
          }),
          "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
          className,
        )}
        render={render}
        {...props}
      />
    );
  }

  return (
    <TogglePrimitive
      data-slot='toggle-group-item'
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className,
      )}
      render={(buttonProps) => (
        <button
          type='button'
          {...buttonProps}>
          {children}
        </button>
      )}
      {...props}
    />
  );
}

export { ToggleGroup, ToggleGroupItem };
