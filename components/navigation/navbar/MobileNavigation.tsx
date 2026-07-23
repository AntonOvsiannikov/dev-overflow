import type { FC } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ROUTES from "@/const/routes";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image src="/icons/hamburger.svg" alt="Menu Icon" width={36} height={36} className="invert-colors sm:hidden" />
      </SheetTrigger>
      <SheetContent side="left" className="background-light900_dark200 border-none p-6">
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image src="/images/site-logo.svg" alt="DevFlow Logo" width={23} height={23} />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
            Dev<span className="text-primary-500">Flow</span>
          </p>
        </Link>

        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
              <NavLinks isMobileNav={true} />
            </section>
          </SheetClose>

          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Button className="small-medium btn-secondary min-h-10 w-full rounded-lg px-4 py-3 shadow-none" asChild>
                <Link href={ROUTES.SIGN_IN}>
                  <span className="primary-text-gradient">Log In</span>
                </Link>
              </Button>
            </SheetClose>

            <SheetClose asChild>
              <Button
                className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-10 w-full rounded-lg border px-4 py-3 shadow-none"
                asChild
              >
                <Link href={ROUTES.SIGN_UP}>Sign Up</Link>
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
