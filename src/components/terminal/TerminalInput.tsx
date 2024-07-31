import { Card, CardHeader, CardPreview } from "@fluentui/react-components";
import { Sections } from "./Sections";

export const TerminalInput = () => {
  return (
    <Card className="flex-grow font-mono">
      <CardHeader description={<Sections />} />
      <CardPreview className="px-4 py-2 overflow-y-auto">
        <pre className="font-mono text-xs whitespace-pre-wrap">
          {`vite v2.9.9 dev server running at:

> Local: http://localhost:5173/
> Network: use '--host' to expose

ready in 300ms.
vite:spa 10:35:40 PM [vite] ✨ dependencies updated.
vite:spa 10:35:41 PM [vite] Rebuilding...
vite:spa 10:35:42 PM [vite] Build complete.`}
        </pre>
      </CardPreview>
    </Card>
  );
};
