import { Card, CardPreview, Button } from "@fluentui/react-components"
import { Blocks, Bug, Container, File, GitPullRequest, Settings, User } from "lucide-react"

export const Actionbar = () => {
  return (
    <Card className="h-full">
      <CardPreview className="!flex flex-col justify-between p-2 !h-full">
        <div className="!flex flex-col gap-2">
          <Button size="small" appearance="transparent" icon={<File className="text-blue-400" />} />
          <Button size="small" appearance="transparent" icon={<GitPullRequest />} />
          <Button size="small" appearance="transparent" icon={<Bug />} />
          <Button size="small" appearance="transparent" icon={<Container />} />
          <Button size="small" appearance="transparent" icon={<Blocks />} />
        </div>
        <div className="!flex flex-col gap-2 flex-1">
          <Button size="small" appearance="transparent" icon={<User />} />
          <Button size="small" appearance="transparent" icon={<Settings />} />
        </div>
      </CardPreview>
    </Card>
  )
}
