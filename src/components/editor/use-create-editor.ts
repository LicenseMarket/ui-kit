import { withProps } from "@udecode/cn";
import {
  BasicMarksPlugin,
  BoldPlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from "@udecode/plate-basic-marks/react";
import {
  ParagraphPlugin,
  PlateElement,
  PlateLeaf,
  usePlateEditor,
} from "@udecode/plate-common/react";
import { LinkPlugin } from "@udecode/plate-link/react";
import { LinkElement } from "../plate-ui/link-element";
import { linkPlugin } from "./plugins/link-plugin";
import { AlignPlugin } from "@udecode/plate-alignment/react";
import { HeadingPlugin } from "@udecode/plate-heading/react";
import { IndentPlugin } from "@udecode/plate-indent/react";
import { IndentListPlugin } from "@udecode/plate-indent-list/react";
import { HEADING_KEYS } from "@udecode/plate-heading";

export const useCreateEditor = ({ value = "" }: { value?: string }) => {
  return usePlateEditor({
    override: {
      components: {
        [LinkPlugin.key]: LinkElement,
        [BoldPlugin.key]: withProps(PlateLeaf, { as: "strong" }),
        [ItalicPlugin.key]: withProps(PlateLeaf, { as: "em" }),
        [ParagraphPlugin.key]: withProps(PlateElement, {
          as: "p",
          className: "mb-4",
        }),
        [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: "s" }),
        [UnderlinePlugin.key]: withProps(PlateLeaf, { as: "u" }),
        blockquote: withProps(PlateElement, {
          as: "blockquote",
          className: "mb-4 border-l-4 border-[#d0d7de] pl-4 text-[#636c76]",
        }),
        h1: withProps(PlateElement, {
          as: "h1",
          className:
            "mb-4 mt-6 text-3xl font-semibold tracking-tight lg:text-4xl",
        }),
        h2: withProps(PlateElement, {
          as: "h2",
          className: "mb-4 mt-6 text-2xl font-semibold tracking-tight",
        }),
        h3: withProps(PlateElement, {
          as: "h3",
          className: "mb-4 mt-6 text-xl font-semibold tracking-tight",
        }),
      },
    },
    plugins: [
      BasicMarksPlugin,
      HeadingPlugin,
      linkPlugin,
      AlignPlugin.configure({
        inject: {
          targetPlugins: [ParagraphPlugin.key, HeadingPlugin.key],
        },
      }),
      IndentPlugin.configure({
        inject: {
          targetPlugins: [ParagraphPlugin.key, HEADING_KEYS.h1],
        },
      }),
      IndentListPlugin.configure({
        inject: {
          targetPlugins: [ParagraphPlugin.key, HEADING_KEYS.h1],
        },
      }),
    ],
    value:
      typeof value === "string" && value.trim().length > 0
        ? () => {
            try {
              const parsedValue = JSON.parse(value);
              return Array.isArray(parsedValue) ? parsedValue : [];
            } catch (error: unknown) {
              console.error("Error parsing editor value:", error);
              return [];
            }
          }
        : [],
  });
};
