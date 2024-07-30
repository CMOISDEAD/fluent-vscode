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
          <Tab value="node">node</Tab>
          <Tab value="powershell">powershell</Tab>
          <Tab value="bash">bash</Tab>
        </TabList>
      </CardPreview>
    </Card>
  );
};
