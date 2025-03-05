import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pencil, Trash, Check } from "lucide-react";
import React, { useState } from "react";

type VoiceCommandProps = {
  id: string;
  command: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, newCommand: string) => void;
};

const VoiceCommandItem = ({ id, command, onDelete, onEdit }: VoiceCommandProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCommand, setEditedCommand] = useState(command);
  const [isHovered, setIsHovered] = useState(false);

  const handleSave = () => {
    onEdit(id, editedCommand);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setEditedCommand(command);
      setIsEditing(false);
    }
  };

  return (
    <Card 
      className="p-4 w-full flex items-center justify-between group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isEditing ? (
        <Input
          value={editedCommand}
          onChange={(e) => setEditedCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="text-sm"
        />
      ) : (
        <span className="text-sm">{command}</span>
      )}
      
      <div className={`flex gap-2 transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        {isEditing ? (
          <Button variant="ghost" size="icon" onClick={handleSave}>
            <Check className="h-4 w-4" />
          </Button>
        ) : (
          <Button variant="ghost" size="icon" onClick={() => setIsEditing(true)}>
            <Pencil className="h-4 w-4" />
          </Button>
        )}
        <Button variant="ghost" size="icon" onClick={() => onDelete(id)}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default VoiceCommandItem;
