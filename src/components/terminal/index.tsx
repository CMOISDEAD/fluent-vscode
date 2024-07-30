import { Sessions } from "./Sessions";
import { TerminalInput } from "./TerminalInput";

export const Terminal = () => {
  return (
    <div className="flex gap-2 h-32">
      <Sessions />
      <TerminalInput />
    </div>
  );
};
