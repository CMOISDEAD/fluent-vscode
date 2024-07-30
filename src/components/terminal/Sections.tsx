import { Tab, TabList } from "@fluentui/react-components";

export const Sections = () => {
  return (
    <TabList defaultSelectedValue="terminal" size="small">
      <Tab value="problems">Problems</Tab>
      <Tab value="debug">Debug Console</Tab>
      <Tab value="output">Output</Tab>
      <Tab value="terminal">Terminal</Tab>
    </TabList>
  );
};
