import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success";
  children: React.ReactNode;
}

export function Badge({ variant = "default", children, className, ...props }: BadgeProps) {
  if (variant === "success") {
    return (
      <span className={cn("badge-success", className)} {...props}>
        <span className="badge-success-dot" />
        {children}
      </span>
    );
  }

  return (
    <span className={cn("badge-skill", className)} {...props}>
      {children}
    </span>
  );
}
