# X30 카드뉴스 디자인 시스템

> 출처: 핀터레스트 레퍼런스 5장 (`card1.png`~`card5.png`, `5주차...Skill_files/`) — 인스타그램 4:5(1080×1350) 카드뉴스 1세트(표지+본문3+클로징)
> 목적: HTML/CSS로 그대로 옮길 수 있는 구체 수치. X30 브랜드 컬러(Light Ruby `#B5504F` / Sand `#f0be6e`)와 일치하는 점을 확인하고, 그 위에 얹힌 타이포·레이아웃·반복 컴포넌트를 추출했다.

---

## 1. 캔버스

| 항목 | 값 |
|---|---|
| 사이즈 | **1080 × 1350px** (인스타그램 4:5) |
| 세이프 마진 | 좌우·상하 **64px** (콘텐츠는 952px 폭 안에) |
| 코너 라운딩 (이미지/이미지카드) | **24px** |
| 코너 라운딩 (칩/배지/버튼) | 칩 16px · 배지(원) 완전원 · CTA 버튼 완전원(pill) |

---

## 2. 컬러 (HEX)

| 토큰 | HEX | 용도 | 차용 레퍼런스 |
|---|---|---|---|
| `--cream` | `#F3EEE4` | 라이트 카드 배경 (표지·본문카드) | card1, card3, card4 |
| `--rust` (브랜드 메인) | `#B5504F` | 강조 텍스트, 배지 배경, CTA 텍스트, 클로징 카드 배경, X30 워드마크 | card1~5 전체 — 지식 파일 Light Ruby와 동일 |
| `--sand` (브랜드 서브) | `#F0BE6E` | 클로징 카드 오버라인·날짜 라벨(골드) | card2, card5 |
| `--ink` | `#1F1B19` | 헤드라인·본문 다크 텍스트 | card1, card3, card4 |
| `--gray-body` | `#6B6660` | 본문 설명문, 라이트 카드의 캡션 | card1, card3, card4 |
| `--navy-photo-overlay` | `#1B1F33` | 본문카드 중 야간/사진형 이미지 배경(드론쇼 카드) | card2 |
| `--chip-tan` | `#ECE2CD` | WHEN/WHERE/PRICE 칩 배경 (라이트 카드) | card3, card4 |
| `--chip-dark` | `#5B4543` (rust 위 반투명 흑갈) | 칩 배경 (다크 사진 카드) | card2 |
| `--white` | `#FFFFFF` | 클로징 카드 헤드라인/CTA 버튼 배경 | card2, card5 |
| `--hairline` | `#FFFFFF` 10% opacity | 클로징 카드 리스트 구분선 | card5 |

> 규칙: **rust(#B5504F)는 카드마다 최소 1곳**(배지·오버라인·X30 워드마크 중 하나) 반드시 등장해 브랜드 일관성을 유지한다.

---

## 3. 타이포그래피 (px, 1080×1350 기준)

| 역할 | 폰트 스타일 | size | weight | line-height | letter-spacing | 색상 |
|---|---|---|---|---|---|---|
| 오버라인/eyebrow (`SEOUL GUIDE · JUNE 2026`, `DON'T MISS · ONE NIGHT ONLY`) | 세리프 아님, sans 대문자 | 22px | 600 | 1.2 | 1.5px | rust(라이트) / sand(다크) |
| 커버 대형 숫자 (`5`) | 세리프(Playfair Display류, high-contrast) | 240px | 800 | 0.9 | 0 | rust |
| 헤드라인 H1 (카드 본문 타이틀) | 세리프 Bold | 64px | 700 | 1.15 | 0 | ink(라이트) / white(다크) |
| 본문 설명 (1~2문장) | sans Regular | 30px | 400 | 1.4 | 0 | gray-body |
| 칩 라벨 (`WHEN`/`WHERE`/`PRICE`) | sans 대문자 | 18px | 600 | 1.2 | 1px | gray-body 70% |
| 칩 값 (`Jun 5–7` 등) | sans Bold | 26px | 700 | 1.25 | 0 | ink / white |
| 캡션/풋노트 (`Weather permitting…`) | sans Italic 또는 Regular | 22px | 400 | 1.4 | 0 | gray-body |
| 출처 표기 (`Source: ...`) | sans Regular | 18px | 400 | 1.3 | 0 | gray-body 60% |
| X30 워드마크 | 세리프 Bold | 28px | 700 | 1 | 0.5px | rust |
| 넘버 배지 숫자 (원 안 `1`/`2`/`3`) | 세리프 Bold | 32px | 700 | 1 | 0 | white |
| 클로징 리스트 — 날짜 라벨 (`Jun 5`) | 세리프 Italic | 26px | 600 | 1.3 | 0 | sand |
| 클로징 리스트 — 항목명 | sans Regular | 28px | 400 | 1.3 | 0 | white |
| CTA 버튼 텍스트 | sans Bold | 28px | 700 | 1 | 0 | rust (버튼은 white 배경) |

차용: 커버의 압도적 크기 대형 세리프 숫자 + 본문 헤드라인의 클래식 세리프는 **card1**, 칩 타이포 위계(라벨 작게/값 굵게)는 **card3·card4**, 다크 배경에서의 골드 오버라인·세리프 이탤릭 날짜는 **card2·card5**에서 따왔다.

---

## 4. 레이아웃 그리드

### 4.1 표지 카드 (card1 타입)
```
y=64   오버라인 (좌측 정렬) + 우측 짧은 rust 언더라인
y=104  대형 숫자(240px) + 헤드라인 2줄 (숫자 우측에 정렬, 숫자 baseline ≈ 헤드라인 2번째 줄 baseline)
y=420  본문 설명 (2줄)
y=950  썸네일 스트립: 4장 가로 배열, 카드당 약 (952-3×16)/4 ≈ 226px 폭 × 300px 높이, radius 16px, gap 16px
y=1230 "Swipe to see all five →" (rust, 24px sans medium)
y=1286 X30 워드마크 (우측 정렬)
```

### 4.2 본문 카드 (card2~4 타입, 3장 반복)
```
y=64           이미지/배너 블록 — 폭 952px, 높이 640px, radius 24px
y=640(이미지 하단에서 -32) 넘버 배지(원 72px, rust bg, white 숫자) — 이미지 좌하단에 절반 겹치게 배치
y=712          오버라인 (대문자, 좌측, 배지와 같은 y라인 살짜 아래)
y=760          헤드라인 H1, 좌측 정렬, 최대 2줄
y=900          본문 설명 1~2줄
y=1000         칩 그룹: 3칸 가로, 각 칩 폭 (952-2×16)/3 ≈ 307px, 높이 96px, radius 16px, 내부 padding 20px/24px, gap 16px
y=1140         (선택) 캡션 1줄 — 날씨/주의사항 등
y=1270         출처 표기 (좌측) + X30 워드마크 (우측), 같은 baseline
```

### 4.3 클로징/CTA 카드 (card5 타입)
```
배경: 풀블리드 rust(#B5504F)
y=64    오버라인 (sand, 대문자) + 짧은 sand 언더라인
y=104   헤드라인 H1 2줄 (white)
y=260   본문 설명 2줄 (white 90%)
y=360   리스트 4행 반복: [날짜라벨(좌, sand, 세리프 이탤릭, 폭 160px) | 항목명(우, white)], 각 행 높이 64px, 행간 hairline(1px, white 10%) 하단 구분선
y=900~  (빈 여백 — 시선 유도용 네거티브 스페이스)
y=1180  CTA 버튼: pill, white 배경, 높이 96px, 폭 콘텐츠 맞춤(좌우 padding 48px), radius 48px, 텍스트 28px bold rust + 화살표 아이콘
y=1286  X30 워드마크 (cream톤, 우측 정렬)
```

---

## 5. 반복 컴포넌트 (모든 카드 공통)

| 컴포넌트 | 구조 | CSS 스펙 |
|---|---|---|
| **카드 번호 배지** | 원형, rust 배경, white 세리프 숫자, 이미지 좌하단에 절반 오버랩 | `width:72px; height:72px; border-radius:50%; background:#B5504F; display:flex; align-items:center; justify-content:center; font:700 32px serif; color:#fff; position:absolute; bottom:-36px; left:32px;` |
| **정보 칩(WHEN/WHERE/PRICE)** | 라벨(작게,대문자) + 값(굵게) 세로 스택, 둥근 사각 배경 | `border-radius:16px; padding:20px 24px; background:#ECE2CD;` (다크 카드는 `background:rgba(0,0,0,.35)`) — 라벨 `font:600 18px sans; letter-spacing:1px; opacity:.7;` 값 `font:700 26px sans; margin-top:4px;` |
| **CTA 핀(pill) 버튼** | 흰 배경 pill, rust 텍스트, 화살표 | `border-radius:48px; background:#fff; color:#B5504F; padding:24px 48px; font:700 28px sans; display:inline-flex; align-items:center; gap:12px;` |
| **X30 핸들/워드마크** | 모든 카드 우하단 고정, 시그니처 역할 | `position:absolute; right:64px; bottom:64px; font:700 28px serif; color:#B5504F; letter-spacing:.5px;` (클로징처럼 배경이 rust면 색은 cream `#F3EEE4`로 반전) |
| **출처 표기** | 모든 본문 카드 좌하단, 신뢰도 장치 | `position:absolute; left:64px; bottom:64px; font:400 18px sans; color:rgba(0,0,0,.5);` 문구 포맷: `Source: {도메인} (official)` |
| **오버라인/eyebrow + 언더라인** | 대문자 라벨 옆에 짧은 rust/sand 선 | `text-transform:uppercase; letter-spacing:1.5px; font:600 22px sans;` + 옆에 `width:40px; height:2px; background:currentColor;` |

---

## 6. 톤 (보이스 — 비주얼에 드러나는 성격)

- **"광고가 아니라 가이드"** — 모든 본문 카드가 WHEN/WHERE/PRICE 칩 + 출처(Source) 표기를 갖는다. 정보지/여행 가이드처럼 신뢰를 주는 포맷. 이는 지식 파일 §9 "사실만, 과장 금지" 원칙과 정확히 맞물린다.
- **빅 세리프 + 캐주얼 sans 대비** — 헤드라인은 큼직한 클래식 세리프(에디토리얼/매거진 느낌), 칩·라벨은 깔끔한 sans. "정보는 가볍게, 타이틀은 임팩트 있게"라는 위계.
- **여백을 두려워하지 않음** — 클로징 카드(card5)는 리스트 아래 넓은 빈 공간을 남겨 CTA 버튼에 시선을 유도. 본문 카드도 칩 아래 충분한 하단 마진.
- **색은 정보의 위치를 알려주는 신호** — rust는 항상 "브랜드/강조", sand/gold는 항상 "다크 배경 위의 라벨"로 고정 — 카드를 넘기는 동안 사용자가 컬러만 보고도 무슨 역할인지 학습하게 됨.
- **숫자가 진행도를 말해준다** — 커버의 "5"와 본문 카드의 원형 배지(1,2,3...)가 "지금 몇 번째 카드인지"를 항상 보여줘서, 캐러셀을 넘기는 행동을 유도(완독률 장치).

---

## 7. 레퍼런스별 차용 포인트 한 줄 요약

| 파일 | 차용한 점 |
|---|---|
| `card1.png` (표지) | 대형 세리프 숫자 + 헤드라인 조합, 하단 4장 썸네일 스트립과 "Swipe to see all five →" 유도 문구 |
| `card2.png` (다크 사진 카드) | 사진/배너 위에 얹는 골드 오버라인 + 화이트 세리프 헤드라인, 반투명 다크 칩 스타일 |
| `card3.png` (라이트 활동 카드) | 이미지 좌하단에 겹치는 원형 넘버 배지, 칩 3개 가로 배열 + 라벨/값 위계 |
| `card4.png` (라이트 일러스트 카드) | 일러스트형 이미지에도 동일하게 적용되는 배지·오버라인·칩 패턴 — 사진/일러스트 혼용 가능함을 확인 |
| `card5.png` (클로징/CTA) | 풀블리드 브랜드 컬러 배경, 날짜+항목 리스트(hairline 구분), 화이트 pill CTA 버튼, 워드마크 색 반전 |
