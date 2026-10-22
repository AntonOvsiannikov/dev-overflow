import Link from "next/link";
import type { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MetricProps {
  imgUrl: string;
  alt: string;
  value: number | string;
  title: string;
  href?: string;
  textStyles: string;
  imgStyles?: string;
  isAuthor?: boolean;
  titleStyles?: string;
}

const Metric: FC<MetricProps> = ({ imgUrl, alt, value, title, href, textStyles, imgStyles, isAuthor, titleStyles }) => {
  const metricContent = (
    <>
      <Image src={imgUrl} alt={alt} width={16} height={16} className={`rounded-full object-contain ${imgStyles}`} />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        {title ? <span className={cn("small-regular line-clamp-1", titleStyles)}>{title}</span> : null}
      </p>
    </>
  );
  return href ? (
    <Link href={href} className="flex-center gap-1">
      {metricContent}
    </Link>
  ) : (
    <div className="flex-center gap-1">{metricContent}</div>
  );
};

export default Metric;
