import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pencil, Trash } from "lucide-react";
import React from "react";

type VoiceCommandProps = {
  id: string;
  command: string;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

const VoiceCommandItem = ({ id, command, onDelete, onEdit }: VoiceCommandProps) => {
  return (
    <Card className="p-4 w-full flex items-center justify-between">
      <span className="text-sm">{command}</span>
      <div className="flex gap-2">
        <Button variant="ghost" size="icon" onClick={() => onEdit(id)}>
          <Pencil className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => onDelete(id)}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default VoiceCommandItem;
