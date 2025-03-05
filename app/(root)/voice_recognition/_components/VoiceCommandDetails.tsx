"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mic, MicOff, Play, Pause, Trash2, Send } from "lucide-react";
import { useState } from "react";

type Props = {
  id: string;
  command: string;
};

const VoiceCommandDetails = ({ id, command }: Props) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);

  const handleRecordToggle = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Start recording logic
      setHasRecording(false);
    } else {
      // Stop recording logic
      setHasRecording(true);
    }
  };

  const handlePlayToggle = () => {
    if (hasRecording) {
      setIsPlaying(!isPlaying);
      // Play/Pause logic here
    }
  };

  const handleDelete = () => {
    setHasRecording(false);
    // Delete recording logic here
  };

  const handleSend = () => {
    if (hasRecording) {
      // Send recording logic here
    }
  };

  return (
    <div className="h-full flex items-center justify-center">
      <Card className="p-8 w-[400px]">
        <h2 className="text-2xl font-bold mb-8 text-center">{command}</h2>
        
        <div className="flex gap-4 justify-center mb-6">
          <Button
            variant={isRecording ? "destructive" : "default"}
            size="icon"
            className="h-12 w-12"
            onClick={handleRecordToggle}
          >
            {isRecording ? (
              <MicOff className="h-6 w-6" />
            ) : (
              <Mic className="h-6 w-6" />
            )}
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12"
            disabled={!hasRecording}
            onClick={handlePlayToggle}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12"
            disabled={!hasRecording}
            onClick={handleDelete}
          >
            <Trash2 className="h-6 w-6" />
          </Button>
        </div>

        <div className="text-center mb-6 text-muted-foreground">
          {isRecording ? (
            <p>Recording in progress...</p>
          ) : hasRecording ? (
            <p>Recording ready</p>
          ) : (
            <p>No recording available</p>
          )}
        </div>

        <Button
          variant="default"
          className="w-full"
          disabled={!hasRecording}
          onClick={handleSend}
        >
          <Send className="h-5 w-5 mr-2" />
          Send Recording
        </Button>
      </Card>
    </div>
  );
};

export default VoiceCommandDetails;
