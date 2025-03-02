"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props = {};
const AddFriendFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("emter you email"),
});

const AddFriendDialogue = (props: Props) => {
  const form = useForm<z.infer<typeof AddFriendFormSchema>>({
    resolver: zodResolver(AddFriendFormSchema),
    defaultValues: { email: "" },
  });

  const HandleSubmit = () => {
    // Handle form submission here
  };

  return (
    <Tooltip>
      <Dialog>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button size="icon" variant="outline">
              <UserPlus />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        
        <TooltipContent>
          <p>Add a new friend</p>
        </TooltipContent>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add a new friend</DialogTitle>
            <DialogDescription>
              Enter the email of the person you want to add.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(HandleSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email ..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Add Friend</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </Tooltip>
  );
};

export default AddFriendDialogue;
