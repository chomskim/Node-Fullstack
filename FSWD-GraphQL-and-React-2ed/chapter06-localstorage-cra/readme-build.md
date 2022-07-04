### Create Project by CRA and Add Packages

```
npx create-react-app chapter06-cra
cd chapter06-cra
yarn add @apollo/client
yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
yarn add @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
yarn add graphql bcrypt jsonwebtoken
yarn add react-helmet react-infinite-scroll-component prop-types


```

### React Hook Error Fix

Change in apollo/mutations/addMessage.js

```
- export const getAddMessageMutation = (data) =>  useMutation(ADD_MESSAGE, getAddMessageConfig(data))
+ export const useAddMessageMutation = (data) =>  useMutation(ADD_MESSAGE, getAddMessageConfig(data))
```

And Chat.js
