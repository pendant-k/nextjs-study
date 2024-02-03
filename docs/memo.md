# MEMO

## React Router
URL과 컴포넌트를 수동적으로 맵핑하여 라우팅하는 방식
- `/` : <Home />
- `/about-us`: <AboutUs />
- `/movies/:id` : <Movie />

## NextJS의 라우팅
- 파일 시스템 기반의 라우팅
- page 파일이 없으면 경로로 취급되지 않는다.
- `/dir1/dir2` : nested 폴더를 통해서 경로의 뎁스를 늘릴 수 있다.

`use client` : 기본적으로는 SSR을 사용한다.(모든 컴포넌트와 페이지들은 우선 백엔드에서 렌더링이 된다.)
rendering : JavaScript로 작성된 컴포넌트들을 HTML로 변환하여 화면에 출력할 수 있도록 하는 작업

JavaScript가 동작하지 않을 때는 `useState()` 같은 동작이 이루어지진 않지만 UI는 빠르게 렌더링이 된다.

## client-side navigation (hydration)
`/about-us` -> Boring HTML -> `init(Boring HTML -> interactive (React init))`
자바스크립트를 로드하기 전에 기본적인 HTML을 보여주고나서 로드가 완료되면 인터렉션이 가능해진다.
React가 초기화 되기 전에 빠르게 기본적인 UI를 출력해줄 수 있다 (사용자가 빠르게 UI를 볼 수 있음)

`use client`가 없다면 hydrate가 되지 않고 인터렉티브한 동작을 하지 않는다. 단순한 HTML로 남겨짐.
`useState()` 같은 거 쓰려면 hydrate 되어야하고 그럼 어차피 자동으로 오류를 리턴할 거라서 엄청 신경 쓸 필요는 없음
`use client`를 쓰지 않는다면 기본적으로 모두 서버 컴포넌트임
서버 컴포넌트에 작성하는 코드는 모두 서버에서만 동작하기 때문에 api 키 같은 걸 다이렉트로 활용해도 문제될 건 없음

## Layout
- 템플릿 설정같은 거임
- 중첩 레이아웃도 사용가능함
- 각 페이지를 구성하는 폴더 내에 별도의 레이아웃을 둘 수 있고 해당 디렉토리의 하위 디렉토리에는 상위 레이아웃이 모두 포함됨
- 특정 레이아웃의 상위에 레이아웃이 있다면 상위 레이아웃 내에 특정 레이아웃을 포함시킴
- 그룹을 통해서 더 복잡한 작업을 할 수도 있음

## route group
- `(home)`처럼 괄호를 사용하면 URL을 생성하지 않음

## Dynamic Route
- `/movies/:id`
- 폴더 내에 [id]처럼 경로를 만들어주면 됨 (기존에 static 페이지 만들듯이)

## Data Fetching
- 클라이언트 사이드에서 데이터를 불러오는 작업을 수행하면 (일반적인 React App) API키 노출 등의 문제가 있기 때문에 제약이 많고 이로 인해서 