import ConversationFallback from '@/components/shared/conversation/ConversationFallback'
import ItemList from '@/components/shared/item-list/ItemList'
import React from 'react'

type Props = {}

const VoiceRecognitionPage = (props: Props) => {
  return (
    <>
      <ItemList title='Voice Recognition' />
      <ConversationFallback />
    </>
  )
}

export default VoiceRecognitionPage