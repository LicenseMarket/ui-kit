import { Plate } from "@udecode/plate-common/react";
import { Editor, EditorContainer } from "../plate-ui/editor";
import { useCreateEditor } from "../editor/use-create-editor";
import { FixedToolbarButtons } from "../plate-ui/fixed-toolbar-buttons";
import { Separator } from "../plate-ui/separator";

interface EditorProps {
  onChange: (value: string) => void;
  value?: any;
}

export default function EditorComponent({ onChange, value }: EditorProps) {
  const editor = useCreateEditor({ value });

  const handleValueChange = (e: { value: any }) => {
    onChange(JSON.stringify(e.value));
  };

  return (
    <div className="rounded-lg border p-1 dark:border-neutral-700">
      <Plate
        editor={editor}
        onValueChange={handleValueChange}
      >
        <EditorContainer>
          <FixedToolbarButtons />
          <Separator className="my-2" />
          <div className="rtl hidden-scrollbar h-[calc(100vh-175px)] pr-5">
            <Editor variant="ai" placeholder="اینجا بنویسید..." />
          </div>
        </EditorContainer>
      </Plate>
    </div>
  );
}
