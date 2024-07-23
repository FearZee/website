import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => <h1 className="text-4xl font-bold" {...props} />,
    p: (props) => <p className="text-sm" {...props} />,
  };
}
