### Install packages

With all packages from chapter02-server add

```
yarn add sequelize mysql2
npm install -g sequelize-cli
yarn add -D sequelize-cli
yarn add -D babel-plugin-require-context-hook

```

### Model generate using sequelize

```
sequelize model:generate --models-path src/models --migrations-path src/migrations --name Post --attributes text:text
sequelize db:migrate --migrations-path src/migrations --config src/config/index.js
sequelize seed:generate --name fake-posts --seeders-path src/seeders
```

### Edit fake-posts.js and Run

```
sequelize db:seed:all --seeders-path src/seeders --config src/config/index.js
```

### edit package.json

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "nodemon --exec babel-node  --plugins require-context-hook --watch src src/index.js"
  },

```

### Sequelize Command

```
sequelize model:generate --models-path src/models --migrations-path src/migrations --name User --attributes avatar:string,username:string
sequelize migration:create --migrations-path src/migrations --name add-userId-to-post
sequelize db:migrate --migrations-path src/migrations --config src/config/index.js
sequelize db:migrate:undo --migrations-path src/migrations --config src/config/index.js
sequelize seed:generate --name fake-users --seeders-path src/seeders
sequelize db:seed:undo:all --seeders-path src/seeders --config src/config/index.js
sequelize seed:generate --name fake-posts --seeders-path src/seeders
sequelize db:seed:all --seeders-path src/seeders --config src/config/index.js
```

### Test with Postman

```
http://172.30.1.43:8000/graphql

[Body][GraphQL]
[QUERY]
mutation addPost($post : PostInput!) {
  addPost(post : $post) {
    id
    text
    user {
      username
      avatar
    }
  }
}
[VARIABLES]
{
  "post": {
  "text": "You just added a post."
  }
}
[RES]
{
    "data": {
        "addPost": {
            "id": 3,
            "text": "You just added a post.",
            "user": {
                "username": "TestUser",
                "avatar": "/uploads/avatar1.png"
            }
        }
    }
}
```

### Chat Model

```
sequelize model:generate --models-path src/models --migrations-path src/migrations --name Chat --attributes firstName:string,lastName:string,email:string
sequelize migration:create --migrations-path src/migrations --name create-user-chats
sequelize db:migrate --migrations-path src/migrations --config src/config/index.js
```

### Message model

```
sequelize model:generate --models-path src/models --migrations-path src/migrations --name Message --attributes text:string,userId:integer,chatId:integer
sequelize db:migrate --migrations-path src/migrations --config src/config/index.js
```

### Test with Postman

```
http://172.30.1.43:8000/graphql

[Body][GraphQL]
[QUERY]
{
  chats {
    id users { id }
    messages {
      id
      text
      user { id username }
    }
  }
}
[VARIABLES]
{}
[RES]
{
    "data": {
        "chats": []
    }
}
```

### Seeding many-to-many data

```
sequelize seed:generate --name fake-chats --seeders-path src/seeders
sequelize seed:generate --name fake-chats-users-relations --seeders-path src/seeders
-- Edit *-fake-chats.js and *-fake-chats-users-relations.js
sequelize seed:generate --name fake-messages --seeders-path src/seeders
sequelize db:seed:all --seeders-path src/seeders --config src/config/index.js
```

### Test with Postman

```
http://172.30.1.43:8000/graphql

[Body][GraphQL]
[QUERY]
{
  chats {
    id users { id }
    messages {
      id
      text
      user { id username }
    }
  }
}
[VARIABLES]
{}
[RES]
{
    "data": {
        "chats": [
            {
                "id": 1,
                "users": [
                    {
                        "id": 1
                    },
                    {
                        "id": 2
                    }
                ],
                "messages": [
                    {
                        "id": 1,
                        "text": "This is a test message.",
                        "user": {
                            "id": 1,
                            "username": "TestUser"
                        }
                    },
                    {
                        "id": 2,
                        "text": "This is a second test message.",
                        "user": {
                            "id": 2,
                            "username": "TestUser2"
                        }
                    }
                ]
            }
        ]
    }
}
```

### for only one chat

```
[QUERY]
query($chatId: Int!){
  chat(chatId:$chatId) {
    id
    users { id }
    messages {
      id
      text
      user {
        id
        username
      }
    }
  }
}
[VARIABLES]
{ "chatId": 1 }
[RES]
{
    "data": {
        "chat": {
            "id": 1,
            "users": [
                {
                    "id": 1
                },
                {
                    "id": 2
                }
            ],
            "messages": [
                {
                    "id": 1,
                    "text": "This is a test message.",
                    "user": {
                        "id": 1,
                        "username": "TestUser"
                    }
                },
                {
                    "id": 2,
                    "text": "This is a second test message.",
                    "user": {
                        "id": 2,
                        "username": "TestUser2"
                    }
                }
            ]
        }
    }
}
```

### Creating a new chat

```
[QUERY]
mutation addChat($chat: ChatInput!) {
  addChat(chat: $chat) {
    id
    users { id }
  }
}
[VARIABLES]
{
  "chat": {
    "users": [1, 2]
  }
}
[RES]
{
    "data": {
        "addChat": {
            "id": 2,
            "users": [
                {
                    "id": 1
                },
                {
                    "id": 2
                }
            ]
        }
    }
}

```

### Creating a new message

```
[QUERY]
mutation addMessage($message : MessageInput!) {
  addMessage(message : $message) {
    id
    text
  }
}
[VARIABLES]
{
  "message": {
    "text": "You just added a message.",
    "chatId": 1
  }
}
[RES]
{
    "data": {
        "addMessage": {
            "id": 3,
            "text": "You just added a message."
        }
    }
}
```
