import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

type LayoutProps = {
  children?: ReactNode | null;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      {children ?? <Outlet />}
    </div>
  );
}