import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
}

export function Button({ variant = "primary", href, className, children, ...props }: ButtonProps) {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";
  
  if (href) {
    return (
      <Link href={href} className={cn(baseClass, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(baseClass, className)} {...props}>
      {children}
    </button>
  );
}
