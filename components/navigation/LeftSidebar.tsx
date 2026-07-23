import Link from "next/link";
import { Button } from "../ui/button";
import ROUTES from "@/const/routes";
import NavLinks from "./navbar/NavLinks";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <section className="custom-scollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 left-0 flex h-screen w-fit flex-col justify-between overflow-y-auto border-r px-6 pt-37 pb-8 max-sm:hidden lg:w-[266px] dark:shadow-none">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        <Button className="small-medium btn-secondary min-h-10 w-full rounded-lg px-4 py-3 shadow-none" asChild>
          <Link href={ROUTES.SIGN_IN}>
            <Image src="/icons/account.svg" alt="Account" width={20} height={20} className="invert-colors lg:hidden" />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>
        <Button
          className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-10 w-full rounded-lg border px-4 py-3 shadow-none"
          asChild
        >
          <Link href={ROUTES.SIGN_UP}>
            <Image src="/icons/sign-up.svg" alt="Logout" width={20} height={20} className="invert-colors lg:hidden" />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSidebar;
