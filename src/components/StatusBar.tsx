import { ReactNode } from "react";
import { Card, CardPreview } from "@fluentui/react-components";
import {
  Computer,
  CircleX,
  TriangleAlert,
  GitFork,
  CheckCheck,
  FileCode,
  Info,
} from "lucide-react";

export const StatusBar = () => {
  return (
    <Card>
      <CardPreview className="py-1 px-2 flex justify-between gap-2 text-xs">
        <div className="!flex items-center gap-5">
          <TextIcon icon={Computer}>Open a remote window</TextIcon>
          <TextIcon icon={CircleX} color="red">
            1 Error
          </TextIcon>
          <TextIcon icon={TriangleAlert} color="yellow">
            0 Warning
          </TextIcon>
          <TextIcon icon={GitFork}>Main</TextIcon>
          <TextIcon icon={CheckCheck} color="emerald">
            Prettier
          </TextIcon>
        </div>
        <div className="!flex items-center justify-end gap-5">
          <TextIcon icon={FileCode}>Line 1, Column 10</TextIcon>
          <TextIcon>Tab Size: 4</TextIcon>
          <TextIcon icon={Info}>UTF-8 | LF | Vue | 5.2.2</TextIcon>
        </div>
      </CardPreview>
    </Card>
  );
};

interface Props {
  icon?: any;
  children: ReactNode;
  color?: string;
}

const TextIcon = ({ icon: Icon, children, color }: Props) => {
  return (
    <div className="flex items-center gap-2">
      {Icon && <Icon size={14} className={color && `text-${color}-500`} />}{" "}
      <span>{children}</span>
    </div>
  );
};
