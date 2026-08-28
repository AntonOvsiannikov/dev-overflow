import type { FC } from "react";
import Link from "next/link";
import ROUTES from "@/const/routes";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Image from "next/image";
import { UserIcon } from "lucide-react";

interface UserAvatarProps {
  id: string;
  name: string;
  imageUrl?: string | null;
  className?: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ id, name, imageUrl, className = "h-9 w-9" }) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <Link href={ROUTES.PROFILE(id)}>
      <Avatar className={className}>
        {imageUrl ? (
          <Image src={imageUrl} alt={name} className="rounded-full object-cover" width={36} height={36} quality={100} />
        ) : (
          <AvatarFallback className="primary-gradient font-space-grotesk font-bold tracking-wider text-white">
            {initials}
          </AvatarFallback>
        )}
      </Avatar>
    </Link>
  );
};

export default UserAvatar;
