"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number;
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className, ratio = 1, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-full", className)}
        style={{
          aspectRatio: ratio,
        }}
        data-slot='aspect-ratio'
        {...props}>
        {children}
      </div>
    );
  },
);

AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
