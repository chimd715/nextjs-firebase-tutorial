# Add Realtime Database to Next.js Project

### 1. init realtime database

1-1) realtime database setup

- 화살표로 Realtime Database로 이동해서 spacebar로 선택하고 enter를 누른다

![firebase init](resources/images/create_realtime_db_007.png)

- 데이터베이스 보안 규칙을 저장할 파일 이름 설정

![보안 규칙 파일 이름](resources/images/create_realtime_db_008.png)

1-2) firebase sdk 설치

```Shell
npm install --save firebase
```

### 2. firebase usage

- firebase 모듈을 import 해서 사용합니다

```javascript
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
```

- 다음 config 코드를 작성해 앱에서 firebase를 초기화합니다

```javascript
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
var firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};
```

- firebase database 사용

```javascript
// Get a reference to the database service
var database = firebase.database();
```

참고링크: <https://firebase.google.com/docs/database/web/read-and-write?hl=ko>
