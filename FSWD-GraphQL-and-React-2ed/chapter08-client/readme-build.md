### Add Packages

```
yarn add react-router-dom
yarn add react-cropper
yarn add apollo-upload-client
yarn add react-dropzone react-modal
```

### Change to react-router-dom v6

- ./components/bar/home.js

```
- import { withRouter } from 'react-router';
+
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()
    return <Component {...props} router={{ location, navigate, params }} />
  }
  return ComponentWithRouterProp
}
```

- ./router.js

```
Redirect --> Navigate
Switch --> Routes
PrivateRoute Login is changed
```
