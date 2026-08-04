import type { FC } from "react";
import Link from "next/link";
import ROUTES from "@/const/routes";
import { Badge } from "../ui/badge";
import { getDeviconClassName } from "@/lib/utils";

interface TagCardProps {
  id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCard: FC<TagCardProps> = ({ id, name, questions, showCount, compact }) => {
  const iconClass = getDeviconClassName(name);

  return (
    <Link href={ROUTES.TAGS(id)} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm`}></i>
          <span>{name}</span>
        </div>
      </Badge>

      {showCount && <p className="small-medium text-dark500_light700">{questions}</p>}
    </Link>
  );
};

export default TagCard;
