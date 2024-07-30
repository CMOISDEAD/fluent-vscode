import MonacoEditor from "react-monaco-editor";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";

import { Toolbar } from "./components/Toolbar";
import { ContextBread } from "./components/ContextBread";
import { Terminal } from "./components/terminal";
import { StatusBar } from "./components/StatusBar";

const options = {
  selectOnLineNumbers: true,
  automaticLayout: true,
};

function App() {
  return (
    <div className="h-screen relative flex flex-col gap-3 p-2">
      <Toolbar />
      <div className="flex-grow">
        <Card className="h-full">
          <CardHeader description={<ContextBread />} />
          <CardPreview className="h-full">
            <MonacoEditor
              theme="vs-dark"
              language="typescript"
              options={options}
              height="100%"
            />
          </CardPreview>
        </Card>
      </div>
      <Terminal />
      <StatusBar />
    </div>
  );
}

export default App;
