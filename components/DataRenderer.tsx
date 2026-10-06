import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { DEFAULT_ERROR } from "@/const/states";

interface Error {
  message: string;
  details?: Record<string, string[]>;
}

interface EmptyButton {
  text: string;
  href: string;
}

interface StateSkeletonProps {
  image: {
    light: string;
    dark: string;
    alt: string;
  };
  title: string;
  message: string;
  button?: EmptyButton;
}
const StateSkeleton = ({ image, title, message, button }: StateSkeletonProps) => (
  <div className="mt-16 flex w-full flex-col items-center justify-center sm:mt-36">
    <>
      <Image src={image.dark} alt={image.alt} width={270} height={200} className="hidden object-contain dark:block" />
      <Image src={image.light} alt={image.alt} width={270} height={200} className="block object-contain dark:hidden" />
    </>
    <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
    <p className="body-regular text-dark500_light700 max-w-mdtext-center mt-3.5">{message}</p>
    {button && (
      <Button
        className="paragraph-medium bg-primary-500 text-light-900 hover:bg-primary-500 mt-5 min-h-[46px] rounded-lg px-4 py-3"
        asChild
      >
        <Link href={button.href}>{button.text}</Link>
      </Button>
    )}
  </div>
);

interface Empty {
  title: string;
  message: string;
  button?: EmptyButton;
}

interface Props<T> {
  success: boolean;
  error?: Error;
  data?: T[] | null;
  empty: Empty;
  render: (data: T[]) => ReactNode;
}

const DataRenderer = <T,>({ success, error, data, empty = DEFAULT_EMPTY, render }: Props<T>) => {
  if (!success) {
    return (
      <StateSkeleton
        image={{
          light: "/images/light-error.png",
          dark: "/images/dark-error.png",
          alt: "Error state illustration",
        }}
        title={error?.message || DEFAULT_ERROR.title}
        message={error?.details ? JSON.stringify(error.details, null, 2) : DEFAULT_ERROR.message}
        button={DEFAULT_ERROR.button}
      />
    );
  }

  if (!data || data.length === 0) {
    return (
      <StateSkeleton
        image={{
          light: "/images/light-illustration.png",
          dark: "/images/dark-illustration.png",
          alt: "Empty state illustration",
        }}
        title={empty.title}
        message={empty.message}
        button={empty.button}
      />
    );
  }

  return <div>{render(data)}</div>;
};

export default DataRenderer;
