# Next.js - Firebase tutorial

## Create Firebase Project

### 1. login to firebase console website

> https://console.firebase.google.com/?hl=ko

### 2. create firebase project

2-1) 프로젝트 추가 버튼 클릭

![프로젝트 추가 버튼 클릭](tutorials/resources/images/create_firebase_project_001.png)

2-2) 프로젝트 이름 입력

![프로젝트 이름 입력](tutorials/resources/images/create_firebase_project_002.png)

![프로젝트 이름 입력 후 계속 버튼 클릭](tutorials/resources/images/create_firebase_project_003.png)

2-3) Google 애널리틱스

![구글 애널리틱스 사용 동의 후 계속 버튼 클릭](tutorials/resources/images/create_firebase_project_004.png)

나라 설정 및 약관 동의 후 프로젝트 만들기 클릭

![나라설정, 약관동의, 프로젝트 만들기 버튼 클릭](tutorials/resources/images/create_firebase_project_005.png)

2-4) 프로젝트 생성

![프로젝트 생성 중](tutorials/resources/images/create_firebase_project_006.png)

![프로젝트 생성 완료, 계속 버튼 클릭](tutorials/resources/images/create_firebase_project_007.png)

### 3. firebase project created

![프로젝트 콘솔 화면](tutorials/resources/images/create_firebase_project_008.png)

## Add Next.js project to Firebase Project

### 1. register web app

1-1) click <img src="tutorials/resources/icons/web_app_icon.png" width="19px" height="18px" alt="웹앱아이콘"></img>(web button)

![웹앱 등록](tutorials/resources/images/connect_webapp_001.png)

1-2) 웹앱 프로젝트 이름 입력

![웹앱 프로젝트 이름 입력](tutorials/resources/images/connect_webapp_002.png)

![앱 등록 버튼 클릭](tutorials/resources/images/connect_webapp_003.png)

1-3) 콘솔로 이동

- 모듈 sdk를 이용할 것이기 때문에 네모칸 안의 firebaseConfig 부분만 따로 복사해두면 된다

![콘솔로 이동 버튼 클릭](tutorials/resources/images/connect_webapp_004.png)

### 2. webapp registered

![등록된 프로젝트 확인](tutorials/resources/images/connect_webapp_005.png)

## Start Firebase Authentication

### 1. init authentication

- api key를 발급하기 위해 authentication을 시작한다

![realtime database 클릭](tutorials/resources/images/authentication_001.png)

![데이터베이스 만들기 클릭](tutorials/resources/images/authentication_002.png)

- 프로젝트 설정에 들어가면 웹 api 키를 확인할 수 있다

![데이터베이스 만들기 클릭](tutorials/resources/images/authentication_003.png)

## Start Firebase Hosting

### 1. init firebase hosting

1-1) hosting 시작

![hosting 버튼 클릭](tutorials/resources/images/firebase_hosting_001.png)

![시작하기 버튼 클릭](tutorials/resources/images/firebase_hosting_002.png)

1-2) firebase hosting 설정

![firebase cli 설치](tutorials/resources/images/firebase_hosting_003.png)

1-3) firebase-tools 다운로드

```Shell
npm install -g firebase-tools
```

![firebase tools 설치](tutorials/resources/images/firebase_hosting_004.png)

1-4) 프로젝트 초기화

- move to your project directory

```Shell
cd {project_directory}
```

![프로젝트 초기화](tutorials/resources/images/firebase_hosting_005.png)

1-5) firebase login

- to login

```Shell
firebase login
```

- to logout

```Shell
firebase logout
```

![firebase login](tutorials/resources/images/firebase_hosting_006.png)

![구글 로그인](tutorials/resources/images/firebase_hosting_007.png)

![권한 허가](tutorials/resources/images/firebase_hosting_008.png)

![로그인 성공](tutorials/resources/images/firebase_hosting_009.png)

1-6) firebase  init

```Shell
firebase init
```

- 화살표로 Hosting으로 이동해서 spacebar로 선택하고 enter를 누른다

![firebase init](tutorials/resources/images/firebase_hosting_010.png)

- 파이어베이스 프로젝트를 이미 생성했으므로 "Use an existing project"를 선택한다. 새로 생성하기를 원하는 경우에는 "Create a new project"를 선택하면 된다

![기존 프로젝트 사용](tutorials/resources/images/firebase_hosting_011.png)

- 이 호스팅에 사용할 파이어베이스 프로젝트를 선택한다

![프로젝트 선택](tutorials/resources/images/firebase_hosting_012.png)

- 퍼블릭으로 사용할 폴더 이름을 지정한다

![퍼블릭 폴더 이름 설정](tutorials/resources/images/firebase_hosting_013.png)

- 페이지가 하나인 앱인지 여러개인 앱인지 설정한다 (y/N)

![싱글 페이지 앱 여부](tutorials/resources/images/firebase_hosting_014.png)

- 깃과 자동으로 연동할 것인지 설정한다 (y/N)

![깃 자동 연동 여부](tutorials/resources/images/firebase_hosting_015.png)

1-7) firebase sdk 추가

- next js 프로젝트 이름을 입력한다

- sdk 추가의 경우 모듈형 sdk를 설치할 것이므로 넘어가면 된다

![등록 및 계속하기 버튼 클릭](tutorials/resources/images/firebase_hosting_016.png)

1-8) 배포 시에 해당 명령어를 사용하면 된다

```Shell
firebase deploy
```

- 배포된 프로젝트는 네모 칸 안의 링크를 통해 확인할 수 있다

![콘솔로 이동 버튼 클릭](tutorials/resources/images/firebase_hosting_017.png)

- 아무런 작업 없이 배포하면 해당 화면을 확인할 수 있다

![배포 확인](tutorials/resources/images/firebase_hosting_019.png)

### 2. firebase hosting setting done

![호스팅 등록 확인](tutorials/resources/images/firebase_hosting_018.png)


## Create Firebase Realtime Database

### 1. create realtime database

1-1) realtime database 시작

![realtime database 클릭](tutorials/resources/images/create_realtime_db_001.png)

![데이터베이스 만들기 클릭](tutorials/resources/images/create_realtime_db_002.png)

1-2) 보안 규칙

- [상세설명](https://firebase.google.com/docs/database/web/start?authuser=0#create_a_database)

![테스트 모드로 시작, 사용 설정 클릭](tutorials/resources/images/create_realtime_db_003.png)

### 2. realtime database created

![데이터베이스 생성 완료](tutorials/resources/images/create_realtime_db_004.png)

### 3. set security rules

- 잠금 모드로 시작시 read, write가 모두 금지되어 있으므로 권한을 수정해줘야 한다

![규칙 탭](tutorials/resources/images/create_realtime_db_005.png)

![권한 수정](tutorials/resources/images/create_realtime_db_006.png)

참고링크: https://css-tricks.com/intro-firebase-react/


## Add Realtime Database to Next.js Project

### 1. init realtime database

1-1) realtime database setup

- 화살표로 Realtime Database로 이동해서 spacebar로 선택하고 enter를 누른다

![firebase init](tutorials/resources/images/create_realtime_db_007.png)

- 데이터베이스 보안 규칙을 저장할 파일 이름 설정

![보안 규칙 파일 이름](tutorials/resources/images/create_realtime_db_008.png)

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

## Create Firebase Storage

### 1. create cloud storage

1-1) cloud storage 시작

![storage 클릭](tutorials/resources/images/create_firebase_storage_001.png)

![시작하기 클릭](tutorials/resources/images/create_firebase_storage_002.png)

1-2) cloud storage setting

![다음 클릭](tutorials/resources/images/create_firebase_storage_003.png)

- storage 지역을 설정한다 (지역은 서비스 지역과 가까울수록 좋다)

![storage 지역 설정](tutorials/resources/images/create_firebase_storage_004.png)

### 2. cloud storage created

![storage created](tutorials/resources/images/create_firebase_storage_005.png)
