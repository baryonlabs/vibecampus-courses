---
marp: true
title: "데이터 사이언스 입문"
description: "Python과 데이터 분석 도구를 활용하여 데이터에서 인사이트를 도출하는 방법을 배웁니다."
keywords: ["데이터", "data", "분석", "analytics", "머신러닝", "machine learning", "ml", "ai", "인공지능", "파이썬", "python"]
theme: koreatech-v3
---

<!-- +stage: 1 | Python 기초 | 데이터 사이언스의 기본 언어인 Python을 배웁니다. -->
<!-- +tools: Anaconda|Python과 데이터 분석 라이브러리를 한 번에 설치할 수 있는 배포판입니다.|https://www.anaconda.com|essential -->
<!-- +tools: Jupyter Notebook|코드, 시각화, 설명을 한 문서에 작성할 수 있는 대화형 개발 환경입니다.|https://jupyter.org|essential -->
<!-- +tools: Google Colab|브라우저에서 무료 GPU와 함께 Python 코드를 실행할 수 있는 클라우드 노트북입니다.|https://colab.research.google.com|recommended -->

<!-- +lesson: 1 | Python 시작하기 -->

# Python 시작하기

데이터 사이언스의 필수 언어

---

# 왜 Python인가?

- 배우기 쉬운 문법 - 영어 읽듯이 자연스러운 코드
- 풍부한 데이터 분석 라이브러리 (pandas, numpy, scikit-learn)
- 데이터 사이언스 분야에서 가장 많이 사용되는 언어
- 활발한 커뮤니티와 방대한 자료

---

# Python 기본 문법

```
# 변수와 자료형
name = "홍길동"
age = 25
scores = [90, 85, 92, 88]

# 조건문
if age >= 20:
    print(f"{name}님은 성인입니다.")

# 반복문
for score in scores:
    print(f"점수: {score}")

# 함수
def average(numbers):
    return sum(numbers) / len(numbers)

print(f"평균: {average(scores)}")
```

> 참고: Python은 들여쓰기로 코드 블록을 구분합니다.

---

<!-- +qa -->
- q: "Python을 설치하려면 어떻게 하나요?"
  a: "Anaconda를 설치하는 것을 추천합니다. Python과 데이터 분석에 필요한 주요 라이브러리가 모두 포함되어 있고, Jupyter Notebook도 바로 사용할 수 있습니다."

---

<!-- +stage: 2 | 데이터 분석 기초 | pandas와 numpy로 데이터를 다루는 방법을 배웁니다. -->
<!-- +tools: pandas|Python의 핵심 데이터 분석 라이브러리로, 표 형태의 데이터를 효율적으로 처리합니다.|https://pandas.pydata.org|essential -->
<!-- +tools: NumPy|고성능 수치 계산 라이브러리로, 배열 연산과 선형대수를 지원합니다.|https://numpy.org|essential -->
<!-- +tools: Kaggle|데이터 사이언스 대회와 공개 데이터셋을 제공하는 플랫폼으로, 실습에 최적입니다.|https://www.kaggle.com|recommended -->

<!-- +lesson: 1 | pandas로 데이터 다루기 -->

# pandas로 데이터 다루기

데이터 분석의 핵심 도구

---

# pandas 기본 사용법

```
import pandas as pd

# CSV 파일 읽기
df = pd.read_csv("sales_data.csv")

# 기본 정보 확인
print(df.head())        # 처음 5행
print(df.describe())    # 통계 요약
print(df.info())        # 컬럼 정보

# 데이터 필터링
high_sales = df[df["amount"] > 10000]

# 그룹별 집계
monthly = df.groupby("month")["amount"].sum()
```

> 참고: pandas의 DataFrame은 엑셀 시트와 비슷한 2차원 데이터 구조입니다.

---

<!-- +qa -->
- q: "pandas와 엑셀의 차이는 뭔가요?"
  a: "엑셀은 GUI 기반, pandas는 코드 기반입니다. pandas는 대용량 데이터 처리에 강하고, 반복 작업을 자동화할 수 있으며, 분석 과정을 재현할 수 있다는 장점이 있습니다."

---

<!-- +stage: 3 | 데이터 시각화 | matplotlib과 seaborn으로 데이터를 시각적으로 표현합니다. -->
<!-- +tools: Matplotlib|Python의 기본 시각화 라이브러리로, 다양한 차트와 그래프를 생성할 수 있습니다.|https://matplotlib.org|essential -->
<!-- +tools: Seaborn|Matplotlib 기반의 통계 시각화 라이브러리로, 아름다운 차트를 간단하게 만듭니다.|https://seaborn.pydata.org|recommended -->
<!-- +tools: Plotly|인터랙티브 차트를 만들 수 있는 시각화 라이브러리로, 웹 대시보드에 적합합니다.|https://plotly.com/python/|optional -->

<!-- +lesson: 1 | 차트와 그래프 만들기 -->

# 데이터 시각화

데이터를 눈으로 이해하기

---

# matplotlib 기본 차트

```
import matplotlib.pyplot as plt
import numpy as np

# 선 그래프
months = ['1월', '2월', '3월', '4월', '5월']
sales = [120, 135, 148, 162, 155]

plt.figure(figsize=(10, 6))
plt.plot(months, sales, marker='o')
plt.title('월별 매출 추이')
plt.ylabel('매출 (만원)')
plt.grid(True)
plt.show()
```

> 참고: 시각화는 데이터의 패턴과 트렌드를 발견하는 가장 빠른 방법입니다.

---

<!-- +qa -->
- q: "어떤 차트를 언제 써야 하나요?"
  a: "추세 → 선 그래프, 비교 → 막대 그래프, 분포 → 히스토그램, 관계 → 산점도, 비율 → 파이 차트를 사용합니다. 데이터의 성격에 맞는 차트를 선택하는 것이 중요합니다."

---

<!-- +stage: 4 | 머신러닝 입문 | scikit-learn으로 첫 번째 머신러닝 모델을 만들어봅니다. -->
<!-- +tools: scikit-learn|Python의 대표적인 머신러닝 라이브러리로, 분류/회귀/군집화 알고리즘을 제공합니다.|https://scikit-learn.org|essential -->
<!-- +tools: TensorFlow|Google이 개발한 딥러닝 프레임워크로, 신경망 모델 구축과 학습을 지원합니다.|https://www.tensorflow.org|optional -->
<!-- +tools: Hugging Face|사전 학습된 AI 모델을 공유하고 활용할 수 있는 커뮤니티 플랫폼입니다.|https://huggingface.co|optional -->

<!-- +lesson: 1 | 첫 번째 ML 모델 만들기 -->

# 머신러닝 입문

데이터로부터 패턴을 학습하는 AI

---

# 머신러닝이란?

- 데이터에서 패턴을 자동으로 학습하는 알고리즘
- 지도학습: 정답이 있는 데이터로 학습 (분류, 회귀)
- 비지도학습: 정답 없이 패턴 발견 (군집화)
- scikit-learn: Python의 대표적인 ML 라이브러리

---

# 간단한 분류 모델

```
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import pandas as pd

# 데이터 준비
df = pd.read_csv("iris.csv")
X = df.drop("species", axis=1)
y = df["species"]

# 학습/테스트 분리
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 모델 학습
model = RandomForestClassifier()
model.fit(X_train, y_train)

# 예측 및 평가
predictions = model.predict(X_test)
print(f"정확도: {accuracy_score(y_test, predictions):.2f}")
```

> 참고: 이 코드로 붓꽃 품종을 96% 이상의 정확도로 분류할 수 있습니다.

---

<!-- +qa -->
- q: "머신러닝을 배우려면 수학을 잘 해야 하나요?"
  a: "기초적인 통계와 선형대수 개념이 도움이 되지만, scikit-learn 같은 라이브러리를 사용하면 수학을 깊이 몰라도 시작할 수 있습니다. 실습하면서 필요한 수학을 점진적으로 배워나가세요."

---
