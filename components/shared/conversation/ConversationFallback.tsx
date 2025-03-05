import { Card } from '@/components/ui/card'
import React from 'react'

type Props = {
  children?: React.ReactNode;
};

const ConversationFallback = ({ children }: Props) => {
  return (
    <Card className='hidden lg:flex h-full w-full p-2 items-center justify-center bg-secondary text-secondary-foreground'>
      {children || 'Select / start conversation to get started!'}
    </Card>
  );
};

export default ConversationFallback;