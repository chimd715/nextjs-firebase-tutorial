# Start Firebase Hosting

### 1. init firebase hosting

1-1) hosting 시작

![hosting 버튼 클릭](resources/images/firebase_hosting_001.png)

![시작하기 버튼 클릭](resources/images/firebase_hosting_002.png)

1-2) firebase hosting 설정

![firebase cli 설치](resources/images/firebase_hosting_003.png)

1-3) firebase-tools 다운로드

```Shell
npm install -g firebase-tools
```

![firebase tools 설치](resources/images/firebase_hosting_004.png)

1-4) 프로젝트 초기화

- move to your project directory

```Shell
cd {project_directory}
```

![프로젝트 초기화](resources/images/firebase_hosting_005.png)

1-5) firebase login

- to login

```Shell
firebase login
```

- to logout

```Shell
firebase logout
```

![firebase login](resources/images/firebase_hosting_006.png)

![구글 로그인](resources/images/firebase_hosting_007.png)

![권한 허가](resources/images/firebase_hosting_008.png)

![로그인 성공](resources/images/firebase_hosting_009.png)

1-6) firebase  init

```Shell
firebase init
```

- 화살표로 Hosting으로 이동해서 spacebar로 선택하고 enter를 누른다

![firebase init](resources/images/firebase_hosting_010.png)

- 파이어베이스 프로젝트를 이미 생성했으므로 "Use an existing project"를 선택한다. 새로 생성하기를 원하는 경우에는 "Create a new project"를 선택하면 된다

![기존 프로젝트 사용](resources/images/firebase_hosting_011.png)

- 이 호스팅에 사용할 파이어베이스 프로젝트를 선택한다

![프로젝트 선택](resources/images/firebase_hosting_012.png)

- 퍼블릭으로 사용할 폴더 이름을 지정한다

![퍼블릭 폴더 이름 설정](resources/images/firebase_hosting_013.png)

- 페이지가 하나인 앱인지 여러개인 앱인지 설정한다 (y/N)

![싱글 페이지 앱 여부](resources/images/firebase_hosting_014.png)

- 깃과 자동으로 연동할 것인지 설정한다 (y/N)

![깃 자동 연동 여부](resources/images/firebase_hosting_015.png)

1-7) firebase sdk 추가

- next js 프로젝트 이름을 입력한다

- sdk 추가의 경우 모듈형 sdk를 설치할 것이므로 넘어가면 된다

![등록 및 계속하기 버튼 클릭](resources/images/firebase_hosting_016.png)

1-8) 배포 시에 해당 명령어를 사용하면 된다

```Shell
firebase deploy
```

- 배포된 프로젝트는 네모 칸 안의 링크를 통해 확인할 수 있다

![콘솔로 이동 버튼 클릭](resources/images/firebase_hosting_017.png)

- 아무런 작업 없이 배포하면 해당 화면을 확인할 수 있다

![배포 확인](resources/images/firebase_hosting_019.png)

### 2. firebase hosting setting done

![호스팅 등록 확인](resources/images/firebase_hosting_018.png)
