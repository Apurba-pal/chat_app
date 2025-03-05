import ConversationFallback from '@/components/shared/conversation/ConversationFallback'
import ItemList from '@/components/shared/item-list/ItemList'
import React from 'react'
import AddFriendDialogue from './_components/addFriendDialogue'

type Props = {}

const ContactsPage = (props: Props) => {
  return (
    <><ItemList title='Contacts' action={<AddFriendDialogue/>}></ItemList>
    <ConversationFallback/>
    </>
  )
}

export default ContactsPage