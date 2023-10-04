# Firebase Tutorials with React
### 1. Connecting your webapp with firebase
- Create a firebase project and connect your web app using the firebase sdk
```bash
npm i firebase
# install the firebase sdk
```

- Create a config file in your project directory *firebase.js*
```javascript
import { initializeApp } from "firebase";

const configOptions = {
    // Options...
};

export const app = initializeApp(configOptions);
```