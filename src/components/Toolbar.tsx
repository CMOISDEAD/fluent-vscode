import { Button } from "@fluentui/react-components";

export const Toolbar = () => {
  return (
    <div className="flex content-center items-center">
      <Button appearance="transparent" size="small">
        File
      </Button>
      <Button appearance="transparent" size="small">
        Edit
      </Button>
      <Button appearance="transparent" size="small">
        View
      </Button>
      <Button appearance="transparent" size="small">
        Selection
      </Button>
      <Button appearance="transparent" size="small">
        Help
      </Button>
    </div>
  );
};
