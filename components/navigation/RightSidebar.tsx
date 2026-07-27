import Link from "next/link";
import ROUTES from "@/const/routes";
import Image from "next/image";
import TagCard from "../cards/TagCard";

const questions = [
  {
    id: "1",
    title: "What is the best way to learn React?",
  },
  {
    id: "2",
    title: "What is the best way to learn Next.js?",
  },
  {
    id: "3",
    title: "What is the best way to learn Tailwind CSS?",
  },
  {
    id: "4",
    title: "What is the best way to learn TypeScript?",
  },
  {
    id: "5",
    title: "What is the best way to learn Node.js?",
  },
];

const popularTags = [
  {
    id: "1",
    name: "react",
    questions: 100,
  },
  {
    id: "2",
    name: "nextjs",
    questions: 67,
  },
  {
    id: "3",
    name: "tailwindcss",
    questions: 60,
  },
  {
    id: "4",
    name: "typescript",
    questions: 34,
  },
  {
    id: "5",
    name: "nodejs",
    questions: 18,
  },
];

const RightSidebar = () => {
  return (
    <section className="custom-scollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 right-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {questions.map(({ id, title }) => (
            <Link key={id} href={ROUTES.QUESTION(id)} className="flex items-center justify-between gap-6">
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image src="/icons/chevron-right.svg" alt="Chevron" width={20} height={20} className="invert-colors" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ id, name, questions }) => (
            <TagCard key={id} id={id} name={name} questions={questions} showCount />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
