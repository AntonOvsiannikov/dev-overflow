import { techMap } from "@/const/techMap";
import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      rounded: [{ rounded: ["1.5", "2"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLocaleLowerCase();
  return techMap[normalizedTechName] ? `${techMap[normalizedTechName]} colored` : "devicon-devicon-plain colored";
};

export const getTimeStamp = (date: Date) => {
  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - date.getTime()) / 1000);

  const units = [
    { name: "second", value: 1 },
    { name: "minute", value: 60 },
    { name: "hour", value: 3600 },
    { name: "day", value: 86400 },
    { name: "week", value: 604800 },
    { name: "month", value: 2629746 },
    { name: "year", value: 31556952 },
  ];

  for (const unit of units) {
    const interval = Math.floor(secondsAgo / unit.value);
    if (interval >= 1) {
      return `${interval} ${unit.name}${interval > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};
