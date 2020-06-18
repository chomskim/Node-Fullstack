import React, { Component } from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';

const MESSAGES_SUBSCRIPTION = gql`
  subscription onMessageAdded {
    messageAdded {
      id
      text
      chat {
        id
      }
      user {
        id
        __typename 
      }
      __typename 
    }
  }
`;

class ChatsList extends Component {
  componentDidMount() {
    this.subscribeToNewMessages();
  }

  subscribeToNewMessages = () => {
    const self = this;
    const { user } = this.props;
    this.props.subscribeToMore({
      document: MESSAGES_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data || !prev.chats.length) return prev;

        let index = -1;
        for (let i = 0; i < prev.chats.length; i++) {
          if (prev.chats[i].id === subscriptionData.data.messageAdded.chat.id) {
            index = i;
            break;
          }
        }

        if (index === -1) return prev;

        const newValue = Object.assign({}, prev.chats[i], {
          lastMessage: {
            text: subscriptionData.data.messageAdded.text,
            __typename: subscriptionData.data.messageAdded.__typename
          }
        });
        const newList = { chats: [...prev.chats] };
        newList.chats[i] = newValue;
        return newList;
      }
    });
  }

  usernamesToString = (userList) => {
    const { user } = this.props;
    let usernamesString = '';
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].username !== user.username) {
        usernamesString += userList[i].username;
      }
      if (i - 1 === userList.length) {
        usernamesString += ', ';
      }
    }
    return usernamesString;
  }

  shorten(text) {
    if (!text.length) {
      return "";
    }
    if (text.length > 12) {
      return text.substring(0, text.length - 9) + '...';
    }
    return text;
  }

  getAvatar = (userList) => {
    const { user } = this.props;
    if (userList.length > 2) {
      return '/public/group.png';
    } else {
      if (userList[0].id !== user.id) {
        return userList[0].avatar;
      } else {
        return userList[1].avatar;
      }
    }
  }

  render() {
    const { chats } = this.props;
    return (
      <div className="chats">
        {chats.map((chat, i) =>
          <div key={`chat${chat.id}`} className="chat"
            onClick={() => this.props.openChat(chat.id)}>
            <div className="header">
              <img src={this.getAvatar(chat.users)} />
              <div>
                <h2>{this.shorten(this.usernamesToString(chat.users))}
                </h2>
                <span>{chat.lastMessage && this.shorten(chat.lastMessage.text)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withApollo(ChatsList);
