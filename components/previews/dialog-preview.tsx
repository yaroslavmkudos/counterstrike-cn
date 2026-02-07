"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
} from "@/components/ui/cscn/dialog";
import { Button } from "@/components/ui/cscn/button";

export function DialogPreview() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Disconnect</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <DialogDescription>
            Are you sure you want to disconnect from the server?
          </DialogDescription>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="default" size="sm">Cancel</Button>
          </DialogClose>
          <Button variant="destructive" size="sm">Disconnect</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
