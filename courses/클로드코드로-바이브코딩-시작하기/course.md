---
marp: true
title: "클로드코드로 바이브코딩 시작하기"
description: "코딩을 몰라도 Claude Code를 설치하고 AI에게 시켜서 나만의 홈페이지를 직접 만들고 배포합니다."
keywords: ["바이브코딩", "vibecoding", "vibe coding", "홈페이지 만들기", "무료", "claude code", "클로드코드"]
theme: koreatech-v3
---

<!-- +stage: 1 | Claude Code 설치하기 | Node.js를 설치하고 Claude Code CLI를 설정하여 AI 코딩 환경을 준비합니다. -->
<!-- +tools: Claude Code|Anthropic의 AI 코딩 에이전트입니다. 터미널에서 자연어로 지시하면 코드를 작성합니다.|https://code.claude.com/docs/ko/overview|essential -->
<!-- +tools: Node.js|npm이 없다는 에러가 나올 때 설치하세요. Claude Code 실행에 필요합니다.|https://nodejs.org|recommended -->
<!-- +tools: GitHub|코드를 저장하고 배포에 연결하는 플랫폼입니다.|https://github.com|essential -->

<!-- +lesson: 1 | Claude Code 설치 -->

# 클로드코드로 바이브코딩 시작하기

코드를 쓰지 않아도 됩니다. Claude에게 시키세요.

<!-- script: 자, 클로드코드로 바이브코딩을 시작해볼게요. 코드를 직접 쓸 필요가 없습니다. Claude에게 시키면 됩니다. -->

---

# 바이브코딩이란?

- 코드를 직접 쓰는 대신, AI에게 자연어로 지시하는 방식
- "로그인 페이지 만들어줘" → Claude가 코드를 생성
- 내가 할 일: 무엇을 만들지 설명하기, 결과 확인하기, 피드백 주기
- Claude Code가 이 과정을 PowerShell에서 직접 해주는 도구

<!-- script: 바이브코딩은, 코드를 직접 쓰는 대신에 AI에게 자연어로 지시하는 방식입니다. 예를 들어, 로그인 페이지 만들어줘 라고 하면, Claude가 알아서 코드를 생성합니다. 여러분이 할 일은, 무엇을 만들지 설명하고, 결과를 확인하고, 피드백을 주는 것뿐이에요. -->

---

# 공식 설치 가이드

- 공식 문서: code.claude.com/docs/ko/overview
- Windows에서 설치는 명령 프롬프트(cmd) 한 줄이면 끝납니다
- 아래 설치 명령어를 복사해서 cmd에 붙여넣고 Enter를 누르세요

<!-- script: 공식 문서는 code.claude.com에서 확인할 수 있습니다. 한국어 가이드도 있으니 참고하세요. Windows에서 설치는 정말 간단합니다. 명령 프롬프트에서 한 줄만 실행하면 됩니다. -->

---

# Claude Code 설치하기

```
# 1. Windows: 시작 메뉴에서 "cmd" 검색 → 명령 프롬프트 실행

# 2. 아래 한 줄을 복사 → 붙여넣기 → Enter
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd

# 3. 설치 완료 후 Claude Code 시작!
claude
```

> 참고: 설치가 자동으로 진행됩니다. 완료 후 claude를 입력하면 Anthropic 계정 인증 안내가 나옵니다.

<!-- script: 시작 메뉴에서 cmd를 검색해서, 명령 프롬프트를 실행하세요. 그리고 화면에 보이는 curl 명령어를 복사해서 붙여넣고 Enter를 누르면, 설치가 자동으로 진행됩니다. 설치가 끝나면 claude를 입력하세요. 처음 실행하면 계정 인증 안내가 나옵니다. -->

---

<!-- +qa -->
- q: "코딩을 전혀 몰라도 되나요?"
  a: "네! 바이브코딩은 코딩 지식 없이 AI에게 자연어로 지시하는 방식입니다. '이런 걸 만들어줘'라고 말하면 Claude가 코드를 작성합니다."
- q: "Claude Code는 무료인가요?"
  a: "Claude Code CLI 자체는 무료이지만, API 사용료가 발생합니다. Anthropic 계정에서 크레딧을 충전하거나 Claude Max 플랜을 구독하면 됩니다."

---

<!-- +lesson: 2 | Claude Code 첫 대화 -->

# Claude Code와 첫 대화

터미널에서 AI에게 직접 말을 걸어보세요

<!-- script: 이제 Claude Code와 첫 대화를 해볼게요. 터미널에서 AI에게 직접 말을 걸어봅시다. -->

---

# Claude Code 기본 사용법

```
# 프로젝트 폴더 만들기
mkdir my-homepage
cd my-homepage

# Claude Code 시작
claude

# Claude에게 말하기 (예시)
> 이 폴더에 Next.js 프로젝트를 만들어줘.
> Tailwind CSS도 설정해줘.
```

> 참고: claude 명령어 실행 후 자연어로 대화하면 됩니다. AI가 필요한 명령어를 알아서 실행합니다.

<!-- script: 먼저 프로젝트 폴더를 만들고, 그 안에서 claude 명령어를 실행합니다. 그러면 Claude와 대화할 수 있는 상태가 되는데요, 여기서 이 폴더에 Next.js 프로젝트를 만들어줘 라고 말하면 됩니다. Claude가 알아서 필요한 명령어를 실행합니다. -->

---

# 알아두면 좋은 팁

- Claude가 파일을 수정할 때 승인(y/n)을 물어봅니다 → y를 눌러 허용
- "이 프로젝트가 뭐가 들어있는지 설명해줘" → 현재 상태 파악
- 실수했다면 "방금 한 거 되돌려줘" 라고 하면 됩니다
- 한 번에 하나씩 요청하면 더 정확합니다

<!-- script: 몇 가지 팁을 알려드릴게요. Claude가 파일을 수정할 때, 승인을 물어보는데요, y를 눌러서 허용하면 됩니다. 실수했다면, 방금 한 거 되돌려줘 라고 하면 되고요. 한 번에 하나씩 요청하면 더 정확한 결과를 얻을 수 있습니다. -->

---

<!-- +qa -->
- q: "Cursor와 뭐가 다른가요?"
  a: "Cursor는 코드 에디터 안에서 AI를 사용하고, Claude Code는 터미널에서 직접 AI와 대화합니다. Claude Code는 파일 생성, 명령어 실행, Git 작업까지 스스로 처리합니다. 더 자율적인 AI 에이전트입니다."

---

<!-- +stage: 2 | 홈페이지 프로젝트 생성 | Claude Code에게 시켜서 Next.js 프로젝트를 만들고 로컬에서 실행합니다. -->
<!-- +tools: Next.js|React 기반 웹 프레임워크입니다. Claude가 이 도구로 홈페이지를 만들어줍니다.|https://nextjs.org|essential -->
<!-- +tools: Tailwind CSS|디자인을 쉽게 적용하는 CSS 도구입니다. Claude가 알아서 사용합니다.|https://tailwindcss.com|recommended -->

<!-- +lesson: 1 | Claude에게 프로젝트 만들기 시키기 -->

# 프로젝트 생성

Claude에게 홈페이지의 뼈대를 만들어달라고 하세요

<!-- script: 이번에는 Claude에게 홈페이지 프로젝트를 만들어달라고 해볼게요. -->

---

# Claude에게 이렇게 말하세요

```
# Claude Code 안에서:

> Next.js 프로젝트를 만들어줘.
> Tailwind CSS를 설정하고,
> 개인 포트폴리오 홈페이지로 만들어줘.
> 내 이름은 [이름]이고, [직업]을 하고 있어.
> 깔끔하고 모던한 디자인으로 해줘.

# Claude가 알아서:
# 1. create-next-app 실행
# 2. Tailwind 설정
# 3. 페이지 코드 작성
# 4. npm run dev로 실행
```

> 참고: [이름]과 [직업]을 본인 정보로 바꿔주세요.

<!-- script: Claude에게 이렇게 말하면 됩니다. Next.js 프로젝트를 만들어줘, Tailwind CSS를 설정하고, 개인 포트폴리오 홈페이지로 만들어줘. 이름과 직업을 알려주면, Claude가 알아서 프로젝트를 생성하고, 페이지를 만들고, 개발 서버까지 실행합니다. -->

---

# 결과 확인

- Claude가 "npm run dev를 실행할까요?" 라고 물으면 y 입력
- 브라우저에서 localhost:3000 접속
- 내 이름이 포함된 홈페이지가 보이면 성공!
- 마음에 안 드는 부분? → Claude에게 "이 부분 바꿔줘" 라고 말하세요

<!-- script: Claude가 다 만들면, 브라우저에서 localhost:3000에 접속해보세요. 내 이름이 포함된 홈페이지가 보이면 성공입니다. 마음에 안 드는 부분이 있으면, Claude에게 바꿔달라고 말하면 됩니다. -->

---

<!-- +qa -->
- q: "에러가 나면 어떻게 하나요?"
  a: "에러가 나면 Claude에게 그대로 말하세요. '에러가 났어, 고쳐줘' 라고 하면 Claude가 에러를 읽고 알아서 수정합니다. 바이브코딩의 핵심은 에러도 AI에게 맡기는 것입니다."

---

<!-- +stage: 3 | 내 콘텐츠로 채우기 | 자기소개, 프로젝트, 연락처 등 실제 내 정보로 홈페이지를 완성합니다. -->
<!-- +tools: Unsplash|무료 고품질 이미지를 다운로드할 수 있는 사이트입니다.|https://unsplash.com|recommended -->
<!-- +tools: ChatGPT|자기소개 문구나 콘텐츠 초안을 작성하는 데 활용하세요.|https://chat.openai.com|recommended -->

<!-- +lesson: 1 | Claude에게 콘텐츠 수정 시키기 -->

# 내 홈페이지를 나답게

Claude에게 수정을 요청하며 홈페이지를 완성하세요

<!-- script: 이번에는 홈페이지를 내 콘텐츠로 채워볼게요. Claude에게 수정을 요청하면서 완성합니다. -->

---

# Claude에게 이렇게 시키세요

- "자기소개 섹션에 이 내용을 넣어줘: [내 소개]"
- "프로젝트 포트폴리오 섹션을 추가해줘"
- "연락처 폼을 만들어줘. 이메일로 보내지게"
- "다크모드 지원하게 해줘"
- "모바일에서도 잘 보이게 반응형으로 만들어줘"

<!-- script: Claude에게 이렇게 말하면 됩니다. 자기소개 섹션에 내 소개를 넣어줘, 포트폴리오 섹션을 추가해줘, 다크모드 지원하게 해줘. 하나씩 요청하면서 결과를 확인하세요. -->

---

# 프롬프트 팁

- 한 번에 하나씩 요청하세요 (여러 개를 한꺼번에 X)
- 결과를 확인하고 → 마음에 안 드는 부분만 수정 요청
- "이 부분의 색상을 파란색으로 바꿔줘" 같이 구체적으로
- 마음에 들면 "좋아, 다음으로" 라고 하면 됩니다
- 스크린샷을 보여주며 "이것처럼 만들어줘"도 가능

<!-- script: 팁을 드릴게요. 한 번에 하나씩 요청하는 게 중요합니다. 결과를 보고, 마음에 안 드는 부분만 구체적으로 수정 요청하세요. 색상을 파란색으로 바꿔줘, 이렇게 구체적일수록 좋습니다. -->

---

<!-- +qa -->
- q: "디자인 감각이 없어도 되나요?"
  a: "네! Claude에게 '깔끔하게', '모던하게', '미니멀하게' 같은 키워드만 전달하면 됩니다. 참고할 사이트가 있다면 '이 사이트처럼 만들어줘'라고 URL을 알려줘도 좋습니다."

---

<!-- +stage: 4 | 세상에 공개하기 (배포) | 완성한 홈페이지를 Vercel로 배포하여 누구나 접속할 수 있게 합니다. -->
<!-- +tools: Vercel|GitHub와 연결하면 자동으로 홈페이지를 배포해주는 무료 서비스입니다.|https://vercel.com|essential -->
<!-- +tools: GitHub Desktop|코드를 GitHub에 올리는 GUI 도구입니다. 터미널이 어렵다면 이걸 쓰세요.|https://desktop.github.com|recommended -->

<!-- +lesson: 1 | Claude에게 배포 시키기 -->

# 세상에 공개하기

내 홈페이지에 누구나 접속할 수 있게 됩니다

<!-- script: 마지막 단계입니다. 완성한 홈페이지를 세상에 공개해볼게요. -->

---

# Claude에게 배포 요청하기

```
# Claude Code 안에서:

> 이 프로젝트를 GitHub에 올리고
> Vercel로 배포해줘.

# Claude가 알아서:
# 1. git init & commit
# 2. GitHub 저장소 생성
# 3. git push
# 4. Vercel 연결 & 배포
# 5. 배포 URL 알려줌
```

> 참고: GitHub과 Vercel 계정이 필요합니다. 사전에 가입해두세요.

<!-- script: Claude에게 이 프로젝트를 GitHub에 올리고 Vercel로 배포해줘 라고 말하면 됩니다. Claude가 git 초기화부터, GitHub 업로드, Vercel 배포까지 한 번에 처리합니다. 끝나면 배포 URL을 알려줍니다. -->

---

# 배포 확인 & 공유

- Claude가 알려준 URL (예: my-homepage.vercel.app)에 접속
- 모바일에서도 접속해서 확인하기
- 주변 사람에게 URL 공유해보기
- 수정이 필요하면? → Claude에게 말하고 "다시 배포해줘" 하면 끝

<!-- script: 배포가 끝나면, Claude가 알려준 URL에 접속해보세요. 모바일에서도 확인해보시고, 주변 분들에게 공유해보세요. 수정이 필요하면 Claude에게 고쳐달라고 하고, 다시 배포해줘 라고 하면 됩니다. -->

---

<!-- +qa -->
- q: "도메인을 연결할 수 있나요?"
  a: "네! Claude에게 '커스텀 도메인을 연결해줘'라고 하면 안내해줍니다. 도메인은 가비아, Cloudflare 등에서 연 1-2만원에 구매할 수 있습니다."
- q: "배포 후 수정하면 어떻게 되나요?"
  a: "Claude에게 수정을 시킨 후 '다시 배포해줘'라고 하면 됩니다. Claude가 git push를 하면 Vercel이 자동으로 재배포합니다. 1분이면 반영됩니다!"

---
