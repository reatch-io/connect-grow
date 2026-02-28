import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps {
  to: string;
  className?: string;
  activeClassName?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName: _activeClassName, to, ...props }, ref) => {
    return (
      <Link ref={ref} href={to} className={cn(className)} {...props} />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };

