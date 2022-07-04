const typeDefinitions = `
  directive @auth on QUERY | FIELD_DEFINITION | FIELD

  type Post {
    id: Int
    text: String
    user: User
  }

  type User {
    id: Int
    avatar: String
    username: String
  }

  type Message {
    id: Int
    text: String
    chat: Chat
    user: User
  }

  type Chat {
    id: Int
    messages: [Message]
    lastMessage: Message
    users: [User]
  }

  type PostFeed {
    posts: [Post]
  }

  type RootQuery {
    currentUser: User @auth
    posts: [Post]
    chats: [Chat] @auth
    chat(chatId: Int): Chat
    postsFeed(page: Int, limit: Int): PostFeed @auth
    usersSearch(page: Int, limit: Int, text: String!): UsersSearch
  }

  input PostInput {
    text: String!
  }

  input ChatInput {
    users: [Int]
  }

  input MessageInput {
    text: String!
    chatId: Int!
  }

  type Response {
    success: Boolean
  }

  type UsersSearch {
    users: [User]
  }

  type Auth {
    token: String
  }

  type RootMutation {
    addPost (
      post: PostInput!
    ): Post
    addChat (
      chat: ChatInput!
    ): Chat
    addMessage (
      message: MessageInput!
    ): Message
    deletePost (
      postId: Int!
    ): Response
    login (
      email: String!
      password: String!
    ): Auth
    signup (
      username: String!
      email: String!
      password: String!
    ): Auth
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

export default [typeDefinitions];
