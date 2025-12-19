
# Svelte 5 (Runes Mode) + TypeScript + Tailwind CSS  
## 구조 · 반응성 · 이벤트 · Store 학습 튜토리얼

이 저장소는 **Svelte 5 (Runes Mode)** 환경에서  
TypeScript 및 Tailwind CSS를 함께 사용하며,  
**프론트엔드 실무 관점에서 필요한 핵심 개념과 반응성 수단**을 단계별 예제로 학습하기 위한 목적의 튜토리얼 프로젝트입니다.

---

## 1. 기술 스택

- **SvelteKit**
- **Svelte 5 (Runes Mode)**
- **TypeScript**
- **Tailwind CSS**
- Node.js (LTS 권장)

---

## 2. 프로젝트 생성

```bash
npx sv create svelte-basic
cd svelte-basic
npm install
npm run dev
````

* `sv@0.10.x` 기준
* Tailwind CSS 옵션 포함

---

## 3. SvelteKit 기본 구조 이해

```txt
src/
├─ app.html
├─ routes/
│  ├─ +layout.svelte
│  ├─ +page.svelte
├─ lib/
│  ├─ components/
│  │  └─ Button.svelte
│  └─ stores/
│     └─ counter.ts
```

### 핵심 파일 역할

| 파일               | 역할                                  |
| ---------------- | ----------------------------------- |
| `app.html`       | HTML 엔트리 포인트 (React의 index.html 역할) |
| `+layout.svelte` | 전역 레이아웃 (React의 App.tsx에 해당)        |
| `+page.svelte`   | 페이지 단위 컴포넌트                         |
| `lib/components` | 재사용 UI 컴포넌트                         |
| `lib/stores`     | 전역 상태 관리                            |

---

## 4. Svelte의 “템플릿” 개념

* `.svelte` 파일은 **컴포넌트이자 템플릿**
* `<script>` / `<style>`를 제외한 마크업 영역을 템플릿이라 지칭
* JSX가 아닌 **Svelte 전용 템플릿 문법** 사용
* 컴파일 타임에 DOM 업데이트 코드 생성

---

## 5. 반응성 수단 정리 (Svelte 5 기준)

### ① `$state` — 로컬 상태

```svelte
<script lang="ts">
  let count = $state(0);
</script>

<p>{count}</p>
<button onclick={() => count++}>+</button>
```

* 컴포넌트 내부 상태
* 자동 반응성
* 가장 기본적인 상태 관리 수단

---

### ② `$derived` — 파생 상태

```svelte
<script lang="ts">
  let count = $state(1);
  const doubled = $derived(() => count * 2);
</script>

<p>count: {count}</p>
<p>doubled: {doubled()}</p>
```

* `$state`, props 등으로부터 계산된 값
* 자동 의존성 추적
* **반환값은 값이 아닌 함수**
* 템플릿에서는 반드시 `()`로 호출

---

### ③ `$effect` — 사이드 이펙트

```svelte
<script lang="ts">
  let count = $state(0);

  $effect(() => {
    console.log('count changed:', count);
  });
</script>
```

* 상태 변경에 반응하는 부수 효과 처리
* React의 `useEffect`와 유사
* 의존성 배열 불필요

---

### ④ `$props` — 컴포넌트 props

```svelte
<script lang="ts">
  const { variant = 'primary' } = $props<{ variant?: string }>();
</script>
```

* `export let`을 대체 (Runes Mode)
* 구조 분해 할당 기반
* TypeScript와 자연스럽게 결합

---

### ⑤ Store — 전역 상태 관리

```ts
// src/lib/stores/counter.ts
import { writable } from 'svelte/store';

export const counterStore = writable(0);
```

```svelte
<script>
  import { counterStore } from '$lib/stores/counter';
</script>

<p>{$counterStore}</p>
<button onclick={() => counterStore.update(v => v + 1)}>+</button>
```

* 컴포넌트 간 공유 상태 관리
* React의 Context / Zustand와 유사한 역할
* 전역 공유가 필요한 경우에만 사용 권장

---

## 6. 이벤트 처리 (Svelte 5 핵심 변경점)

```svelte
<button onclick={handleClick}>Click</button>
```

* `on:click` 문법은 deprecated
* DOM 요소와 컴포넌트 모두 동일하게 `onclick` 사용
* 이벤트는 **함수 props 전달 방식**
* 한 파일 내에서 old / new 문법 혼용 불가

---

## 7. 재사용 Button 컴포넌트 예제 (Tailwind 기반)

```svelte
<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';

  type Variant = 'primary' | 'secondary' | 'ghost';

  const {
    variant = 'primary',
    class: className,
    children,
    ...rest
  } = $props<
    {
      variant?: Variant;
      class?: string;
      children?: any;
    } & HTMLButtonAttributes
  >();

  const base =
    'inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition';

  const variants: Record<Variant, string> = {
    primary: 'bg-amber-600 text-white hover:bg-amber-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    ghost: 'bg-transparent hover:bg-gray-100'
  };

  const classes = `${base} ${variants[variant]} ${className ?? ''}`;
</script>

<button {...rest} class={classes}>
  {@render children?.()}
</button>
```

### 사용 예

```svelte
<Button onclick={() => count++}>+</Button>
```

---

## 8. React와의 핵심 차이 요약

| 항목     | React           | Svelte 5        |
| ------ | --------------- | --------------- |
| 상태     | `useState`      | `$state`        |
| 파생 값   | `useMemo`       | `$derived` (함수) |
| effect | `useEffect`     | `$effect`       |
| 이벤트    | `onClick`       | `onclick`       |
| ref 전달 | `forwardRef`    | `bind` / props  |
| 전역 상태  | Context / Redux | Store           |

---

## 9. 학습 포인트 정리

* Svelte 5는 **Signal 기반 반응성 모델**
* `$derived`는 값이 아니라 **getter 함수**
* 이벤트 모델 단순화 (emit 개념 제거)
* Store는 꼭 필요한 경우에만 사용
* Tailwind 클래스 조합은 script 영역에서 계산 권장

---

## 10. 다음 학습 예정

* 입력 요소 (`input`, `change`, `submit`) 처리 패턴
* focus / ref 관리 패턴
* Store와 SvelteKit SSR 연계 시 주의점
* Headless UI 컴포넌트 설계 패턴
