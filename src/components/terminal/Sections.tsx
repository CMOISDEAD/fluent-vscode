import { Tab, TabList } from "@fluentui/react-components";

export const Sections = () => {
  return (
    <TabList defaultSelectedValue="terminal" size="small" className="px-2 w-full bg-secondary/60 rounded">
      <Tab value="problems">Problems</Tab>
      <Tab value="debug">Debug Console</Tab>
      <Tab value="output">Output</Tab>
      <Tab value="terminal">Terminal</Tab>
    </TabList>
  );
};
