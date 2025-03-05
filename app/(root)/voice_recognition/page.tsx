import ConversationFallback from '@/components/shared/conversation/ConversationFallback'
import ItemList from '@/components/shared/item-list/ItemList'
import React from 'react'
import { AddNewButton, MasterButton, UnrecognisedButton } from './_components/VoiceActions'

const VoiceRecognitionPage = () => {
  return (
    <>
      <ItemList 
        title='Voice Bank'
        action={
          <div className="flex items-center gap-2">
            <MasterButton />
            <AddNewButton />
          </div>
        }
      >
        <div className="flex flex-col h-[calc(100vh-200px)]">
          <div className="flex-grow"></div>
          <div className="flex justify-center pb-4">
            <UnrecognisedButton />
          </div>
        </div>
      </ItemList>
      <ConversationFallback />
    </>
  )
}

export default VoiceRecognitionPage