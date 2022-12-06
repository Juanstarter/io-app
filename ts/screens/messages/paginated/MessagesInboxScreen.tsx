import * as React from "react";
import { useMessageOpening } from "../../../components/messages/paginated/hooks/useMessageOpening";
import MessagesInbox from "../../../components/messages/paginated/MessagesInbox";
import { upsertMessageStatusAttributes } from "../../../store/actions/messages";
import { useIODispatch, useIOSelector } from "../../../store/hooks";
import { allInboxMessagesSelector } from "../../../store/reducers/entities/messages/allPaginated";
import { UIMessage } from "../../../store/reducers/entities/messages/types";

const MessagesInboxScreen = () => {
  const inbox = useIOSelector(allInboxMessagesSelector);
  const { openMessage } = useMessageOpening();

  const dispatch = useIODispatch();

  const setArchived = (
    isArchived: boolean,
    messages: ReadonlyArray<UIMessage>
  ) =>
    messages.forEach(message =>
      dispatch(
        upsertMessageStatusAttributes.request({
          message,
          update: { tag: "archiving", isArchived }
        })
      )
    );

  return (
    <MessagesInbox
      messages={inbox}
      navigateToMessageDetail={openMessage}
      archiveMessages={messages => setArchived(true, messages)}
    />
  );
};

export default MessagesInboxScreen;
