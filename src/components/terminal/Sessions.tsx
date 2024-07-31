import { Card, CardPreview, Tab, TabList } from "@fluentui/react-components";

export const Sessions = () => {
  return (
    <Card>
      <CardPreview className="p-5">
        <TabList
          vertical
          size="small"
          appearance="subtle"
          defaultSelectedValue="node"
        >
          <Tab value="node" className="w-full">node</Tab>
          <Tab value="powershell" className="w-full">powershell</Tab>
          <Tab value="bash" className="w-full">powershell</Tab>
        </TabList>
      </CardPreview>
    </Card>
  );
};
