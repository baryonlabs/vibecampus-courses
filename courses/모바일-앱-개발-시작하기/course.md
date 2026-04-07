---
marp: true
title: "모바일 앱 개발 시작하기"
description: "React Native를 활용하여 iOS와 Android 앱을 동시에 만드는 방법을 배웁니다."
keywords: ["모바일", "앱", "app", "mobile", "ios", "android", "react native", "어플"]
theme: koreatech-v3
---

<!-- +stage: 1 | 모바일 개발 환경 설정 | 개발 도구 설치와 첫 프로젝트를 생성합니다. -->
<!-- +tools: Expo|React Native 개발을 간소화하는 플랫폼으로, 복잡한 네이티브 설정 없이 바로 시작할 수 있습니다.|https://expo.dev|essential -->
<!-- +tools: VS Code|React Native 개발에 최적화된 무료 코드 에디터로, 다양한 확장 기능을 지원합니다.|https://code.visualstudio.com|essential -->
<!-- +tools: Android Studio|Android 에뮬레이터와 SDK를 제공하는 공식 개발 도구입니다.|https://developer.android.com/studio|recommended -->

<!-- +lesson: 1 | React Native 소개 및 환경 설정 -->

# React Native 소개

하나의 코드로 iOS와 Android 앱 만들기

---

# React Native란?

- Facebook이 개발한 크로스 플랫폼 모바일 프레임워크
- JavaScript/TypeScript로 네이티브 앱 개발
- 하나의 코드베이스로 iOS, Android 동시 지원
- 기존 React 지식을 그대로 활용 가능

---

# 첫 React Native 프로젝트

```
# Expo로 시작하기 (추천)
npx create-expo-app MyFirstApp
cd MyFirstApp
npx expo start
```

> 참고: Expo를 사용하면 복잡한 네이티브 설정 없이 바로 시작할 수 있습니다.

---

<!-- +qa -->
- q: "Flutter vs React Native 어떤 걸 배워야 하나요?"
  a: "둘 다 훌륭한 선택입니다. JavaScript/React를 이미 알고 있다면 React Native가, 새로 시작한다면 Flutter도 좋은 선택입니다. 채용 시장에서는 둘 다 수요가 높습니다."

---

<!-- +stage: 2 | React Native 기초 | 핵심 컴포넌트와 스타일링 방법을 익힙니다. -->
<!-- +tools: React Native Directory|React Native 호환 라이브러리를 검색하고 비교할 수 있는 디렉토리입니다.|https://reactnative.directory|recommended -->
<!-- +tools: Expo Snack|브라우저에서 React Native 코드를 바로 실행하고 테스트할 수 있는 온라인 에디터입니다.|https://snack.expo.dev|recommended -->
<!-- +tools: React Native Debugger|React Native 앱의 상태, 네트워크, UI를 디버깅할 수 있는 독립형 도구입니다.|https://github.com/jhen0409/react-native-debugger|optional -->

<!-- +lesson: 1 | 기본 컴포넌트 사용하기 -->

# React Native 핵심 컴포넌트

View, Text, Image, ScrollView 등

---

# 기본 컴포넌트 예시

```
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>안녕하세요!</Text>
      <Text style={styles.subtitle}>
        첫 번째 모바일 앱입니다.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: '#666' },
});
```

> 참고: React Native에서는 div 대신 View, span 대신 Text를 사용합니다.

---

<!-- +qa -->
- q: "웹의 CSS와 React Native 스타일링의 차이는?"
  a: "React Native는 Flexbox를 기본으로 사용하며, CSS와 비슷하지만 카멜케이스(backgroundColor)를 쓰고, 단위(px)를 생략합니다. StyleSheet.create로 성능 최적화도 됩니다."

---

<!-- +stage: 3 | 내비게이션과 상태 관리 | 여러 화면 간 이동과 데이터 관리 방법을 배웁니다. -->
<!-- +tools: React Navigation|React Native 앱의 화면 이동과 내비게이션 구조를 구현하는 공식 라이브러리입니다.|https://reactnavigation.org|essential -->
<!-- +tools: Zustand|가볍고 직관적인 상태 관리 라이브러리로, Redux보다 간단하게 사용할 수 있습니다.|https://zustand-demo.pmnd.rs|recommended -->
<!-- +tools: AsyncStorage|React Native에서 로컬 데이터를 영구적으로 저장할 수 있는 키-값 저장소입니다.|https://react-native-async-storage.github.io/async-storage/|recommended -->

<!-- +lesson: 1 | React Navigation 사용하기 -->

# 앱 내비게이션

여러 화면 간 이동 구현하기

---

# React Navigation

- Stack Navigator: 화면을 쌓아가며 이동
- Tab Navigator: 하단 탭 바 UI
- Drawer Navigator: 사이드 메뉴
- 각 네비게이터를 조합하여 복잡한 구조 구현

---

# Stack Navigator 예시

```
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

> 참고: Stack Navigator는 가장 기본적인 내비게이션 패턴입니다.

---

<!-- +qa -->
- q: "Expo Router와 React Navigation 중 뭘 써야 하나요?"
  a: "Expo Router는 파일 기반 라우팅으로 Next.js와 비슷한 방식입니다. 새 프로젝트라면 Expo Router를 추천합니다. 기존 프로젝트에는 React Navigation이 여전히 많이 사용됩니다."

---

<!-- +stage: 4 | 앱 배포하기 | 완성한 앱을 앱스토어와 플레이스토어에 출시합니다. -->
<!-- +tools: EAS Build|Expo의 클라우드 빌드 서비스로, iOS/Android 앱을 로컬 환경 없이 빌드할 수 있습니다.|https://docs.expo.dev/build/introduction/|essential -->
<!-- +tools: Apple App Store Connect|iOS 앱의 제출, 심사, 배포를 관리하는 Apple 공식 플랫폼입니다.|https://appstoreconnect.apple.com|essential -->
<!-- +tools: Google Play Console|Android 앱의 출시, 업데이트, 성과 분석을 관리하는 Google 공식 플랫폼입니다.|https://play.google.com/console|essential -->

<!-- +lesson: 1 | 빌드와 배포 프로세스 -->

# 앱 배포하기

전 세계에 내 앱을 공개하는 법

---

# 배포 단계

- 1. 앱 아이콘, 스플래시 화면 설정
- 2. EAS Build로 빌드 생성
- 3. Apple App Store / Google Play Store 개발자 등록
- 4. 스토어에 앱 제출 및 심사 대기
- 5. 출시 후 업데이트는 EAS Update로 간편하게

---

# EAS Build 명령어

```
# EAS CLI 설치
npm install -g eas-cli

# 빌드 설정
eas build:configure

# iOS 빌드
eas build --platform ios

# Android 빌드
eas build --platform android
```

> 참고: Expo의 EAS 서비스를 사용하면 로컬에서 Xcode/Android Studio 없이도 빌드할 수 있습니다.

---

<!-- +qa -->
- q: "앱 출시에 비용이 드나요?"
  a: "Apple App Store는 연간 $99, Google Play Store는 1회 $25의 개발자 등록비가 필요합니다. Expo의 무료 플랜으로도 기본 빌드와 배포가 가능합니다."

---
