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

type SelectedView = {
  type: 'master' | 'command';
  id?: string;
} | null;

const VoiceRecognitionPage = () => {
  const [commands, setCommands] = useState<VoiceCommand[]>([]);
  const [selectedView, setSelectedView] = useState<SelectedView>(null);

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

  const handleSelectCommand = (id: string) => {
    setSelectedView({ type: 'command', id });
  };

  const handleMasterClick = () => {
    setSelectedView({ type: 'master' });
  };

  return (
    <>
      <ItemList 
        title='Voice Bank'
        action={
          <div className="flex items-center gap-2">
            <MasterButton onClick={handleMasterClick} />
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
            onSelect={handleSelectCommand}
          />
        ))}
        <div className="mt-auto flex justify-center w-full">
          <UnrecognisedButton />
        </div>
      </ItemList>
      
      <ConversationFallback>
        {selectedView?.type === 'master' && (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-xl">Hello from Master Component</h2>
          </div>
        )}
        {selectedView?.type === 'command' && (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-xl">Hello from Component number {selectedView.id}</h2>
          </div>
        )}
      </ConversationFallback>
    </>
  )
}

export default VoiceRecognitionPage