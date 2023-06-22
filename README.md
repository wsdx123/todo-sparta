# ✨ Todo-List 개인과제 ✨

<br>
<br>

## 💎 버전

- ver.1 (2023.06.15.)
- ver.2 (2023.06.22.) : 페이지 라우팅, 상세 페이지, todo 수정, redux 적용

<br>
<br>

## 🚀 배포

[![Netlify Status](https://api.netlify.com/api/v1/badges/f551df19-8610-429e-95b3-696a530b21e8/deploy-status)](https://todo-sparta-jy.netlify.app/)

<br>
<br>

## 🔧 기술 스택

- Javascript
- CSS
- Redux
- React-router-dom

<br>
<br>

## 📒 폴더 구조

```sh
📦src
 ┣ 📂components    # 컴포넌트들을 모아놓은 폴더
 ┃ ┣ 📂card        # todo card 컴포넌트
 ┃ ┣ 📂cardList    # card 가 들어가는 영역에 대한 컴포넌트
 ┃ ┣ 📂modal       # card 수정 버튼을 눌렀을때 띄우는 modal 컴포넌트
 ┃ ┗ 📂todoForm    # todo 생성 컴포넌트
 ┣ 📂redux         # 상태관리 redux 설정 및 리듀서를 모은 폴더
 ┃ ┣ 📂config      # redux store가 있는 폴더
 ┃ ┗ 📂modules     # redux의 reducer들을 모아놓은 폴더
 ┣ 📂routes        # 페이지별 컴포넌트를 모아놓은 폴더
 ┃ ┣ 📂detail      # 각 card의 상세페이지를 보여주는 컴포넌트
 ┗ ┗ 📂home        # 초기화면을 보여주는 컴포넌트
```

<br>
<br>

## 📌 실행 방법

```
git clone https://github.com/wsdx123/todo-sparta.git
```

```
yarn install && yarn start
```

<br>
<br>

## 📝 제작 과정

1일차) react 학습. react 앱 생성

2일차) 대강의 구조잡기. todo작성, 삭제/작업 상태변경 기능 구현. 컴포넌트 분리

3일차) localstorage를 활용한 새로고침시 todo 보존기능 구현. refactoring 작업. 배포 및 readme 작성.

<hr/>

23.06.20.) redux, react-router-dom 학습

23.06.21.) redux setting, todo 수정, 상세페이지 라우팅 구현

23.06.22.) refactoring, develop > main merge 작업

<br>
<br>

## 💡 구현 내용(update 23.06.22.)

<br>

### **필수 구현**

- 상단의 todo 추가를 통해 todo card를 추가할 수 있습니다.

- card의 '삭제' 버튼을 통해 해당 todo를 삭제할 수 있습니다.
- card의 '완료' 혹은 '취소' 버튼을 통해 해당 todo를 Done 상태로 바꾸거나, Working 상태로 바꿀 수 있습니다.
- 반복되는 컴포넌트를 분리하여 컴포넌트의 재사용성을 높혔습니다. (Card 컴포넌트, TodoForm 컴포넌트)

<hr/>

- todo card에 '수정' 버튼을 추가해 클릭 시 todo 내용을 수정할 수 있는 모달창이 열려 제목,내용을 수정할 수 있습니다.

- todo card의 제목을 클릭하면 해당 todo의 상세페이지로 이동합니다. 해당 카드의 id값을 파라미터로 주어 라우팅을 구현했습니다.
- redux를 사용해 todo의 상태관리를 했습니다. todo의 생성, 삭제, 수정, 완료/진행 상태 모두 redux의 'todos' reducer로 동작합니다.

### **추가 구현(update 23.06.22.)**

- ~~localstorage를 활용해 새로고침 시에도 작성했던 todo card가 남아있습니다.~~

- ~~작업 완료에 대한 상태(working/Done) 또한 변경 후 새로고침을 했을때 변경된 상태가 적용됩니다.~~

> localstorage 기능은 잠시 비활성화 되었습니다.

<br>
<br>

## ✏️ 어려웠던 점(update 23.06.22)

<br>

### 1. localstorage와 state의 연결

- 변경된 상태를 localstorage에 넣었을 때, 변경된 state값이 바로 들어가지 않았습니다. 새로운 변수에 변경될 state를 임시로 할당 후, state 와 localstorage 각각 뿌려주는 방식으로 해결했습니다.

### 2. 초기 localstorage에 값이 존재하지 않을때 에러발생

- 새로고침 시 todo가 남아있도록 하기 위해 useEffect를 사용했습니다. 하지만 최초에 localstorage에 아무런 key-value가 없다면 동작하지 않는 문제가 있었습니다. 이는 useEffect 내부에 localstorage에 아무런 값이 없다면 리턴하는 조건문을 달아줘 해결했습니다.

<hr/>

### 1. modal창 외부영역 클릭시 modal 닫기

- 방법에 대한 고민이 많았습니다. 외부영역 div를 따로 두었고, 여기에 클릭 이벤트를 달아 구현할까 생각했는데 이 방법이 정상적인 구현방법인지 궁금했고 튜터님께 확인받은 결과 사용해도 무방하다고 피드백 들었습니다.하지만 currentTarget vs target 을 이용하는 방법또한 좋을 것 같다는 조언을 들었고, 다음 기회에 이 방법을 적용해 구현해 볼 생각입니다.(현재 App에는 모달 외부영역 클릭시 창닫기 기능이 구현되어있지 않습니다.)
