## Chapter02 Express Server Build

### make server folder

```
mkdir chapter02-server
cd chapter02-server
npm init
yarn add express
yarn add nodemon
yarn add -D @babel/node @babel/core babel-loader
yarn add -D @babel/preset-env @babel/preset-react

```

### edit package.json

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "server": "nodemon --exec babel-node --watch src/server src/index.js"
  },
```

### edit .babelrc (you can use import in JavaScript)

```
{
    "presets": ["@babel/env","@babel/react"]
}
```

### run server

```
yarn server
```

### yarn build in chapter02-cra

### copy ./build to chapter02-server and rename to dist

### edit path in server index.js

```
const root = path.join(__dirname, '../');
const app = express();

app.use('/', express.static(path.join(root, 'dist')));
```

```
yarn add compression cors helmet
yarn add apollo-server-express graphql @graphql-tools/schema
```

### Postman

```
http://172.30.1.43:8000/graphql

[Body][GraphQL]
[QUERY]
{
  posts {
    id
    text
    user {
      avatar
      username
    }
  }
}
[RES]
{
    "data": {
        "posts": [
            {
                "id": 2,
                "text": "Lorem ipsum",
                "user": {
                    "avatar": "/uploads/avatar1.png",
                    "username": "Test User"
                }
            },
            {
                "id": 1,
                "text": "Lorem ipsum",
                "user": {
                    "avatar": "/uploads/avatar2.png",
                    "username": "Test User 2"
                }
            }
        ]
    }
}

[Body][GraphQL]
[QUERY]
mutation addPost($post : PostInput!,$user: UserInput!) {
  addPost(post : $post, user: $user) {
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
  },
  "user": {
    "avatar": "/uploads/avatar3.png",
    "username": "Fake User"
  }
}
[RES]
{
    "data": {
        "addPost": {
            "id": 3,
            "text": "You just added a post.",
            "user": {
                "username": "Fake User",
                "avatar": "/uploads/avatar3.png"
            }
        }
    }
}
```
