### DB Table update

```
sequelize migration:create --migrations-path src/server/migrations --name add-email-password-to-post
sequelize db:migrate --migrations-path src/server/migrations --config src/server/config/index.js
```

### Update First User

```
password: '$2a$10$bE3ovf9/Tiy/d68bwNUQ0.zCjwtNFq9ukg9h4rhKiHCb6x5ncKife'
email: 'test1@example.com'
```

### Add .env

```
yarn add dotenv
require('dotenv').config();

```

### Test By GraphQL

```
[Body][GraphQL]
[QUERY]
mutation login($email : String!, $password: String!) {
  login(email: $email, password : $password) {
    token
  }
}
[VARIABLES]
{
"email": "test1@example.com",
"password": "123456789"
}
[RES]
{
    "data": {
        "login": {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxQGV4YW1wbGUuY29tIiwiaWQiOjEsImlhdCI6MTY1NjgyMTg2MywiZXhwIjoxNjU2OTA4MjYzfQ.vDnZQxx2gnHDCcFI6trzUgqZNdOz07LC5uvpKsP2aAs"
        }
    }
}
```
