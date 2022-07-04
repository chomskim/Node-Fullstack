import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client';

export const ADD_MESSAGE = gql`
  mutation addMessage($message : MessageInput!) {
    addMessage(message : $message) {
      id
      text
      user {
        id
      }
    }
  }
`;

export const getAddMessageConfig = (data) => ({
  update(cache, { data: { addMessage } }) {
    cache.modify({
      id: cache.identify(data.chat),
      fields: {
        messages(existingMessages = []) {
          const newMessageRef = cache.writeFragment({
            data: addMessage,
            fragment: gql`
              fragment NewMessage on Chat {
                  id
                  type
              }
            `
          });
          return [...existingMessages, newMessageRef];
        }
      }
    });
  }
});

export const getAddMessageMutation = (data) => useMutation(ADD_MESSAGE, getAddMessageConfig(data));