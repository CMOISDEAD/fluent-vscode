import { Card, CardHeader, CardPreview, Tree, TreeItem, TreeItemLayout } from "@fluentui/react-components";

export const Sidebar = () => {
  return (
    <Card className="h-full w-60">
      <CardHeader
        header={
          <h3 className="text-lg font-semibold text-primary">
            File Tree
          </h3>
        }
        description={
          <p className="text-xs">
            ~/src/git/fractal-tree
          </p>
        }
      />
      <CardPreview className="p-2">
        <Tree aria-label="file tree" size="small" defaultOpenItems={["default-subtree-2"]}>
          <TreeItem itemType="branch">
            <TreeItemLayout>node_modules</TreeItemLayout>
          </TreeItem>
          <TreeItem itemType="branch" value="default-subtree-2">
            <TreeItemLayout>src</TreeItemLayout>
            <Tree>
              <TreeItem itemType="branch">
                <TreeItemLayout>components</TreeItemLayout>
                <Tree>
                  <TreeItem itemType="leaf">
                    <TreeItemLayout>Sidebar.tsx</TreeItemLayout>
                  </TreeItem>
                </Tree>
              </TreeItem>
              <TreeItem itemType="leaf">
                <TreeItemLayout>App.tsx</TreeItemLayout>
              </TreeItem>
            </Tree>
          </TreeItem>
          <TreeItem itemType="leaf">
            <TreeItemLayout>package.json</TreeItemLayout>
          </TreeItem>
        </Tree>
      </CardPreview>
    </Card>
  );
}
