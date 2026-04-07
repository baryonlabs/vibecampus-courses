---
marp: true
title: "웹 개발 마스터하기"
description: "HTML/CSS 기초부터 React, Next.js까지 현대 웹 개발의 전체 흐름을 학습합니다."
keywords: ["웹", "web", "프론트엔드", "frontend", "홈페이지", "사이트", "웹사이트", "website"]
theme: koreatech-v3
---

<!-- +stage: 1 | HTML & CSS 기초 | 웹의 뼈대와 스타일링의 기본을 배웁니다. -->
<!-- +tools: VS Code|가장 인기 있는 무료 코드 에디터로, HTML/CSS 자동완성과 라이브 프리뷰를 지원합니다.|https://code.visualstudio.com|essential -->
<!-- +tools: Chrome DevTools|브라우저 내장 개발자 도구로, HTML/CSS를 실시간으로 수정하고 디버깅할 수 있습니다.|https://developer.chrome.com/docs/devtools|essential -->
<!-- +tools: CodePen|HTML, CSS, JavaScript를 브라우저에서 바로 실습하고 공유할 수 있는 온라인 에디터입니다.|https://codepen.io|recommended -->

<!-- +lesson: 1 | HTML 구조 이해하기 -->

# HTML 구조 이해하기

웹 페이지의 뼈대를 만드는 법

<!-- script: 자, 이번 시간에는, HTML 구조에 대해서 함께 알아보겠습니다. 웹 페이지의 뼈대를 만드는 방법인데요, 차근차근 설명드릴게요. -->

---

# HTML이란?

- HyperText Markup Language의 약자
- 웹 페이지의 구조를 정의하는 마크업 언어
- 태그(tag)를 사용하여 콘텐츠를 감싸는 방식

<!-- script: 먼저, HyperText Markup Language의 약자인데요. 쉽게 말하면, 웹 페이지의 구조를 정의하는 마크업 언어입니다. 태그라는 것을 사용해서, 콘텐츠를 감싸는 방식으로 작동해요. -->

---

# 기본 HTML 문서 구조

```
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>내 첫 웹페이지</title>
</head>
<body>
  <h1>안녕하세요!</h1>
  <p>첫 번째 웹페이지입니다.</p>
</body>
</html>
```

> 참고: 모든 HTML 문서는 이 기본 구조를 따릅니다.

<!-- script: 자, 이제 기본 HTML 문서 구조를 화면으로 보시겠습니다. 맨 위에 DOCTYPE 선언이 있고요, html 태그 안에 head와 body가 들어있습니다. head에는 문서 정보가, body에는 실제 보여지는 내용이 들어가요. 이 구조가 모든 HTML 문서의 기본 뼈대입니다. -->

---

# 주요 HTML 태그

- <h1>~<h6>: 제목 태그
- <p>: 문단 태그
- <a>: 링크 태그
- <img>: 이미지 태그
- <div>: 영역 구분 태그

<!-- script: 자주 사용하는 HTML 태그를 정리해볼게요. 먼저 h1부터 h6까지는, 제목을 나타내는 태그입니다. p 태그는 문단, a 태그는 다른 페이지로 이동하는 링크, img는 이미지를 넣을 때 사용합니다. 그리고 div 태그는, 영역을 구분하는 데 쓰이는데요, 레이아웃을 잡을 때 자주 활용됩니다. -->

---

<!-- +qa -->
- q: "HTML과 프로그래밍 언어의 차이가 뭔가요?"
  a: "HTML은 마크업 언어로, 콘텐츠의 구조를 정의합니다. 프로그래밍 언어(JavaScript 등)는 로직과 동작을 정의하죠. HTML은 '무엇을 보여줄지', 프로그래밍 언어는 '어떻게 동작할지'를 담당합니다."
- q: "태그를 닫지 않으면 어떻게 되나요?"
  a: "브라우저가 자동으로 보정하려 하지만, 예상치 못한 레이아웃 문제가 발생할 수 있습니다. 항상 태그를 올바르게 닫는 습관을 들이세요."

---

<!-- +lesson: 2 | CSS로 스타일링하기 -->

# CSS로 스타일링하기

웹 페이지를 아름답게 꾸미는 법

<!-- script: 이번에는, CSS로 스타일링하는 방법을 알아볼게요. 웹 페이지를 아름답게 꾸미는 기술인데요, HTML이 뼈대라면, CSS는 옷이라고 생각하시면 됩니다. -->

---

# CSS 기본 개념

- Cascading Style Sheets - 스타일을 정의하는 언어
- 선택자(selector)로 HTML 요소를 지정
- 속성(property)과 값(value)으로 스타일 적용

<!-- script: CSS는 Cascading Style Sheets의 약자입니다. 먼저 선택자를 사용해서, 어떤 HTML 요소에 스타일을 적용할지 지정하고요. 그 다음에 속성과 값을 넣어서, 실제 스타일을 정의합니다. 예를 들면, 글자 색상이나 크기 같은 것들이죠. -->

---

# CSS 기본 문법

```
/* 선택자 { 속성: 값; } */
h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 16px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
```

> 참고: 클래스 선택자(.)와 태그 선택자를 활용하세요.

<!-- script: 화면에 CSS 코드가 보이시죠. h1 태그 선택자를 사용해서, 색상과 크기를 지정하고 있습니다. 아래는 container라는 클래스 선택자인데요, 점을 앞에 붙여서 클래스를 선택합니다. max-width와 margin으로 가운데 정렬하는 패턴은, 실무에서 정말 많이 씁니다. -->

---

<!-- +qa -->
- q: "인라인 스타일과 CSS 파일의 차이는?"
  a: "인라인 스타일은 HTML 태그에 직접 작성하고, CSS 파일은 별도로 분리합니다. CSS 파일로 분리하면 재사용성과 유지보수가 훨씬 좋아집니다."

---

<!-- +stage: 2 | JavaScript 기초 | 웹에 동적인 기능을 추가하는 프로그래밍 언어를 배웁니다. -->
<!-- +tools: Node.js|JavaScript 런타임 환경으로, 브라우저 밖에서도 JavaScript를 실행할 수 있게 해줍니다.|https://nodejs.org|essential -->
<!-- +tools: MDN Web Docs|Mozilla에서 운영하는 웹 기술 공식 문서로, JavaScript 레퍼런스의 표준입니다.|https://developer.mozilla.org|recommended -->
<!-- +tools: GitHub|코드 버전 관리와 협업을 위한 플랫폼으로, 포트폴리오 관리에도 필수입니다.|https://github.com|essential -->

<!-- +lesson: 1 | 변수와 자료형 -->

# JavaScript 변수와 자료형

데이터를 저장하고 다루는 기본

---

# 변수 선언

- let: 변경 가능한 변수 선언
- const: 변경 불가능한 상수 선언
- var: 옛날 방식 (사용 비추천)

---

# 변수 사용 예시

```
const name = "홍길동";
let age = 25;
let isStudent = true;

console.log(`이름: ${name}, 나이: ${age}`);

age = 26; // let은 재할당 가능
// name = "김철수"; // const는 재할당 불가 → 에러!
```

> 참고: 가능하면 const를 사용하고, 변경이 필요할 때만 let을 사용하세요.

---

<!-- +qa -->
- q: "let과 const 중 어떤 걸 써야 하나요?"
  a: "기본적으로 const를 사용하세요. 값을 변경해야 할 때만 let을 쓰면 됩니다. 이렇게 하면 의도치 않은 값 변경을 방지할 수 있습니다."

---

<!-- +lesson: 2 | 함수와 이벤트 -->

# 함수와 이벤트

코드를 구조화하고 사용자와 상호작용하기

---

# 함수 선언과 호출

```
// 함수 선언
function greet(name) {
  return `안녕하세요, ${name}님!`;
}

// 화살표 함수
const add = (a, b) => a + b;

console.log(greet("홍길동")); // "안녕하세요, 홍길동님!"
console.log(add(3, 5)); // 8
```

> 참고: 화살표 함수는 간결한 문법을 제공합니다.

---

# 이벤트 처리

```
const button = document.querySelector("#myBtn");

button.addEventListener("click", () => {
  alert("버튼이 클릭되었습니다!");
});
```

> 참고: addEventListener로 사용자 상호작용을 처리합니다.

---

<!-- +qa -->
- q: "일반 함수와 화살표 함수의 차이는?"
  a: "문법 차이 외에, 화살표 함수는 자신만의 this를 갖지 않습니다. 메서드 정의에는 일반 함수를, 콜백에는 화살표 함수를 주로 사용합니다."

---

<!-- +stage: 3 | React 입문 | 컴포넌트 기반 UI 라이브러리 React의 기초를 배웁니다. -->
<!-- +tools: React Developer Tools|브라우저 확장으로, React 컴포넌트 트리와 상태를 실시간으로 검사할 수 있습니다.|https://react.dev/learn/react-developer-tools|essential -->
<!-- +tools: Vite|차세대 빌드 도구로, 빠른 개발 서버와 핫 모듈 교체를 제공합니다.|https://vite.dev|recommended -->
<!-- +tools: npm|Node.js 패키지 매니저로, React 및 서드파티 라이브러리를 설치하고 관리합니다.|https://www.npmjs.com|essential -->

<!-- +lesson: 1 | 컴포넌트와 JSX -->

# React 컴포넌트와 JSX

UI를 조립하는 새로운 방식

---

# React란?

- Facebook이 만든 UI 라이브러리
- 컴포넌트 단위로 UI를 구성
- Virtual DOM으로 효율적인 렌더링
- JSX: JavaScript 안에서 HTML을 작성

---

# 첫 번째 React 컴포넌트

```
function Welcome({ name }) {
  return (
    <div>
      <h1>안녕하세요, {name}님!</h1>
      <p>React의 세계에 오신 것을 환영합니다.</p>
    </div>
  );
}

// 사용
<Welcome name="홍길동" />
```

> 참고: 컴포넌트는 재사용 가능한 UI 조각입니다.

---

<!-- +qa -->
- q: "React를 꼭 배워야 하나요?"
  a: "필수는 아니지만, 현재 가장 많은 기업에서 사용하는 프론트엔드 라이브러리입니다. 취업이나 실무 프로젝트를 위해 배워두면 매우 유용합니다."

---

<!-- +stage: 4 | Next.js와 풀스택 개발 | 서버 사이드 렌더링과 API 라우트로 풀스택 웹 앱을 만듭니다. -->
<!-- +tools: Vercel|Next.js 공식 배포 플랫폼으로, Git 푸시만으로 자동 배포가 가능합니다.|https://vercel.com|essential -->
<!-- +tools: Prisma|TypeScript용 ORM으로, 데이터베이스 스키마 관리와 타입 안전한 쿼리를 지원합니다.|https://www.prisma.io|recommended -->
<!-- +tools: Tailwind CSS|유틸리티 기반 CSS 프레임워크로, 빠르게 반응형 디자인을 구현할 수 있습니다.|https://tailwindcss.com|recommended -->

<!-- +lesson: 1 | Next.js 시작하기 -->

# Next.js 시작하기

React 기반 풀스택 프레임워크

---

# Next.js의 장점

- 파일 기반 라우팅 - 파일 구조가 곧 URL
- 서버 사이드 렌더링(SSR) & 정적 생성(SSG)
- API 라우트로 백엔드 로직도 함께
- 이미지 최적화, 코드 스플리팅 자동 처리

---

# Next.js 페이지 예시

```
// app/page.tsx
export default function Home() {
  return (
    <main>
      <h1>환영합니다!</h1>
      <p>Next.js 앱입니다.</p>
    </main>
  );
}
```

> 참고: app 디렉토리 안의 page.tsx가 자동으로 라우트가 됩니다.

---

<!-- +qa -->
- q: "React와 Next.js의 차이는?"
  a: "React는 UI 라이브러리이고, Next.js는 React 기반의 풀스택 프레임워크입니다. Next.js는 라우팅, SSR, API 등을 기본 제공하여 별도 설정 없이 바로 사용할 수 있습니다."

---
