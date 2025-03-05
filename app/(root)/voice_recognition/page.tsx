"use client";

import ConversationFallback from '@/components/shared/conversation/ConversationFallback'
import ItemList from '@/components/shared/item-list/ItemList'
import React, { useState } from 'react'
import { AddNewButton, MasterButton, UnrecognisedButton } from './_components/VoiceActions'
import VoiceCommandItem from './_components/VoiceCommandItem'

type VoiceCommand = {
  id: string;
  command: string;
};

const VoiceRecognitionPage = () => {
  const [commands, setCommands] = useState<VoiceCommand[]>([]);

  const handleAddCommand = () => {
    const newCommand = {
      id: Date.now().toString(),
      command: `New Command ${commands.length + 1}`,
    };
    setCommands([newCommand, ...commands]);
  };

  const handleDeleteCommand = (id: string) => {
    setCommands(commands.filter(cmd => cmd.id !== id));
  };

  const handleEditCommand = (id: string, newCommand: string) => {
    setCommands(commands.map(cmd => 
      cmd.id === id ? { ...cmd, command: newCommand } : cmd
    ));
  };

  return (
    <>
      <ItemList 
        title='Voice Bank'
        action={
          <div className="flex items-center gap-2">
            <MasterButton />
            <div onClick={handleAddCommand}>
              <AddNewButton />
            </div>
          </div>
        }
      >
        {commands.map((cmd) => (
          <VoiceCommandItem
            key={cmd.id}
            id={cmd.id}
            command={cmd.command}
            onDelete={handleDeleteCommand}
            onEdit={handleEditCommand}
          />
        ))}
        <div className="mt-auto flex justify-center w-full">
          <UnrecognisedButton />
        </div>
      </ItemList>
      <ConversationFallback />
    </>
  )
}

export default VoiceRecognitionPage