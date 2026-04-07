# VibeCampus Courses

VibeCampus 학습 플랫폼의 오픈 강의 콘텐츠 레포지토리입니다.

누구나 PR로 강의를 기여할 수 있습니다.

## 구조

```
courses/
├── ai-level-1-chatbot/
│   └── course.md          # PugMarp 마크다운
├── ai-level-2-automation/
│   └── course.md
└── ...
```

## 기여 방법

1. 이 레포를 포크합니다
2. `courses/내-코스명/course.md` 파일을 생성합니다
3. PugMarp 포맷으로 강의를 작성합니다
4. PR을 제출합니다

## PugMarp 포맷

```markdown
---
marp: true
title: "코스 제목"
description: "코스 설명"
keywords: [키워드1, 키워드2]
theme: koreatech-v3
---

<!-- +stage: 1 | 스테이지 제목 | 스테이지 설명 -->
<!-- +tools: 도구명|설명|URL|essential -->

<!-- +lesson: 1 | 레슨 제목 -->

# 슬라이드 제목
- 불릿 포인트 1
- 불릿 포인트 2

---

# 다음 슬라이드

...
```

## 빌드

```bash
npx tsx scripts/build.ts
```

## 라이선스

MIT
