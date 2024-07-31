import {
  Link,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
} from "@fluentui/react-components";
import { useState } from "react";

export const Popup = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={(_, data) => setOpen(data.open)}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Fluent Design Inspiration: Visual Studio Code</DialogTitle>
          <DialogContent>
            <p>
              This page was created as an interpretation of the Fluent Design concept applied to Visual Studio Code, inspired by this
              <Link href="https://www.youtube.com/watch?v=HrlNTIbo9o4&pp=ygUSdnMgY29kZSB1aSBkZXNpZ24g" target="_blank"> video</Link> by <span className="italic">@duckc</span>.
              Explore how Microsoft's fluid design style can transform the look and functionality of VS Code, providing a more modern and engaging visual experience.
            </p>
            <img src="https://designzig.com/content/images/2023/05/Microsoft-Fluent-2.jpg" alt="fluent 2 desing" className="my-3 object-cover w-fit rounded" />
            <p className="text-center text-xs">
              <Link href="https://github.com/CMOISDEAD" target="_blank">@CMOISDEAD</Link>
            </p>
          </DialogContent>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  )
}
