"use client";
import { AskQuestionSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const QuestionForm = () => {
  const form = useForm<z.infer<typeof AskQuestionSchema>>({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [],
    },
  });

  const handleCreateQuestion = (values: z.infer<typeof AskQuestionSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleCreateQuestion)} className="flex w-full flex-col gap-10">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-14 border"
                />
              </FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                Be specific and imagine you&apos;re asking a question to another person
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Detailed explanation of your problem <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>Editor</FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                Introduce the problem and expand on what you put in the title.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-3">
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Tags <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <div>
                  <Input
                    {...field}
                    placeholder="Add tags..."
                    className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus min-h-14 border"
                  />
                  Tags
                </div>
              </FormControl>
              <FormDescription className="body-regular text-light-500 mt-2.5">
                Add up to 3 tags to describe what your question is about.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-16 flex justify-end">
          <Button type="submit" className="primary-gradient text-light-900! w-fit">
            Ask a Question
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default QuestionForm;
