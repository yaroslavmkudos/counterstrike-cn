import type { MDXComponents } from "mdx/types";
import defaultComponents from "fumadocs-ui/mdx";
import { ComponentPreview } from "@/components/component-preview";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ComponentPreview,
    ...components,
  };
}
