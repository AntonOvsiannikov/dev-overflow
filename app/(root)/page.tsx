import { type FC } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ROUTES from "@/const/routes";
import LocalSearch from "@/components/search/LocalSearch";
import HomeFilter from "@/components/filters/HomeFilter";
import QuestionCard from "@/components/cards/QuestionCard";
import { auth } from "@/auth";

const questions = [
  {
    id: "1",
    title: "How to use React hooks?",
    description: "I want to learn how to use React hooks to build a web application.",
    tags: [
      { id: "1", name: "react" },
      { id: "2", name: "javascript" },
      { id: "3", name: "next.js" },
    ],
    author: { id: "1", name: "John Doe", image: "https://github.com/shadcn.png" },
    upvotes: 10,
    views: 100,
    answers: 10,
    createdAt: new Date(),
  },
  {
    id: "2",
    title: "How to use Next.js?",
    description: "I want to learn how to use Next.js to build a web application.",
    tags: [
      { id: "1", name: "next.js" },
      { id: "2", name: "javascript" },
      { id: "3", name: "react" },
    ],
    author: { id: "1", name: "John Doe", image: "https://github.com/shadcn.png" },
    upvotes: 1,
    views: 20,
    answers: 2,
    createdAt: new Date(),
  },
  {
    id: "3",
    title: "How to use Tailwind CSS?",
    description: "I want to learn how to use Tailwind CSS to build a web application.",
    tags: [
      { id: "1", name: "javascript" },
      { id: "2", name: "react" },
      { id: "3", name: "next.js" },
    ],
    author: { id: "1", name: "John Doe", image: "https://github.com/shadcn.png" },
    upvotes: 3,
    views: 30,
    answers: 3,
    createdAt: new Date(),
  },
  {
    id: "4",
    title: "How to use TypeScript?",
    description: "I want to learn how to use TypeScript to build a web application.",
    tags: [
      { id: "1", name: "javascript" },
      { id: "2", name: "react" },
      { id: "3", name: "next.js" },
    ],
    author: { id: "1", name: "John Doe", image: "https://github.com/shadcn.png" },
    upvotes: 4,
    views: 40,
    answers: 4,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}
const Home: FC<SearchParams> = async ({ searchParams }) => {
  const session = await auth();
  console.log(session);
  const { query = "", filter = "" } = await searchParams;
  const filteredQuestions = questions.filter((question) => {
    const matchQuery = question.title.toLowerCase().includes(query.toLowerCase());
    const matchFilter = filter ? question.tags[0].name.toLowerCase() === filter.toLowerCase() : true;
    return matchQuery && matchFilter;
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button className="primary-gradient text-light-900! min-h-[46px] px-4 py-3" asChild>
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch route="/" imgSrc="/icons/search.svg" placeholder="Search questions..." otherClasses="flex-1" />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
