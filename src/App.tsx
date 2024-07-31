import Editor from "@monaco-editor/react";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";

import { Toolbar } from "./components/Toolbar";
import { Terminal } from "./components/terminal";
import { StatusBar } from "./components/StatusBar";
import { Actionbar } from "./components/bars/Actionbar";
import { ContextBread } from "./components/ContextBread";
import { Sidebar } from "./components/bars/Sidebar";

import code from "./utils/code";
import { Popup } from "./components/Popup";

const options = {
  selectOnLineNumbers: true,
  automaticLayout: true,
};

function App() {
  return (
    <div className="h-screen relative flex flex-col gap-2 p-2">
      <Toolbar />
      <div className="flex gap-2 flex-grow">
        <div className="flex items-center gap-2">
          <Actionbar />
          <Sidebar />
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <Card className="flex-grow">
            <CardHeader description={<ContextBread />} />
            <CardPreview className="h-full">
              <Editor
                height="100%"
                theme="vs-dark"
                language="typescript"
                options={options}
                defaultValue={code}
              />
            </CardPreview>
          </Card>
          <Terminal />
        </div>
      </div>
      <StatusBar />
      <Popup />
    </div>
  );
}

export default App;
