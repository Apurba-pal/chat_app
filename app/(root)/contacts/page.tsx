import ConversationFallback from '@/components/shared/conversation/ConversationFallback'
import ItemList from '@/components/shared/item-list/ItemList'
import React from 'react'

type Props = {}

const ContactsPage = (props: Props) => {
  return (
    <><ItemList title='Friends'>Cotacts Page</ItemList>
    <ConversationFallback/>
    </>
  )
}

export default ContactsPage