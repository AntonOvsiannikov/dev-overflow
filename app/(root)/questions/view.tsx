"use client";

import { useEffect } from "react";
import { incrementViews } from "@/lib/actions/question.action";
import { toast } from "sonner";

const View = ({ questionId }: { questionId: string }) => {
  const handleIncrement = async () => {
    const result = await incrementViews({ questionId });

    if (result.success) {
      toast.success("Success", {
        description: "Views incremented",
      });
    } else {
      console.log(result);
      toast.error("Error", {
        description: result.error?.message || "Failed to increment views",
      });
    }
  };

  useEffect(() => {
    handleIncrement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default View;
