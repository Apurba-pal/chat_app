import ConversationFallback from '@/components/shared/conversation/ConversationFallback'
import ItemList from '@/components/shared/item-list/ItemList'
import React from 'react'
import { AddNewButton, MasterButton, UnrecognisedButton } from './_components/VoiceActions'

const VoiceRecognitionPage = () => {
  return (
    <>
      <ItemList 
        title='Voice Recognition'
        action={
          <div className="flex items-center gap-2">
            <MasterButton />
            <AddNewButton />
          </div>
        }
      >
        <div className="mt-auto">
          <UnrecognisedButton />
        </div>
      </ItemList>
      <ConversationFallback />
    </>
  )
}

export default VoiceRecognitionPage