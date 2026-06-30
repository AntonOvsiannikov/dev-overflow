import type { FC, ReactNode } from "react";
import Navbar from "@/components/navigation/navbar";

interface RootLayoutProps {
  children: ReactNode;
}
const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
