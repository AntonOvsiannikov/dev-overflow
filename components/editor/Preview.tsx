import { Code } from "bright";
import type { FC } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

Code.theme = {
  dark: "github-dark",
  light: "github-light",
  lightSelector: "html.light",
};

interface PreviewProps {
  content: string;
}

const Preview: FC<PreviewProps> = ({ content }) => {
  const formattedContent = content.replace(/\\/g, "").replace(/&#x20;/g, "");

  return (
    <section className="markdown prose grid wrap-break-word">
      <MDXRemote
        source={formattedContent}
        components={{
          pre: (props) => <Code {...props} lineNumbers className="shadow-light-200 dark:shadow-dark-200" />,
        }}
      />
    </section>
  );
};

export default Preview;
