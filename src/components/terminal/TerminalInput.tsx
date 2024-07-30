import { Card, CardHeader, CardPreview } from "@fluentui/react-components";
import { Sections } from "./Sections";

export const TerminalInput = () => {
  return (
    <Card className="flex-grow font-mono">
      <CardHeader description={<Sections />} />
      <CardPreview className="p-2">
        <input
          className="bg-transparent outline-none"
          placeholder="type a command..."
        />
      </CardPreview>
    </Card>
  );
};
