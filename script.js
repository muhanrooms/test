// 교육용 더미 데이터 + 인터랙션

const img = (seed, w = 400, h = 300) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

// ---- QuickMenu ----
const quickMenuData = [
  { icon: "🛍️", label: "쇼핑하기" },
  { icon: "⚡", label: "오늘의딜" },
  { icon: "🏠", label: "집들이" },
  { icon: "🐾", label: "멍냥종합" },
  { icon: "📦", label: "패키지입찰" },
  { icon: "📷", label: "절판지찾아" },
  { icon: "🛒", label: "오마트" },
  { icon: "🚚", label: "이사청소" },
  { icon: "📶", label: "인테리어신청" },
];
document.getElementById("quickMenuList").innerHTML = quickMenuData
  .map(
    (m) => `<li><span class="icon-circle">${m.icon}</span><span>${m.label}</span></li>`
  )
  .join("");

// ---- 이런 사진 찾고 있나요 ----
const photoTags = ["원목가구", "비포애프터", "방꾸미기", "조명템", "냉장고정리"];
const photoRow = document.getElementById("photoRow");
photoTags.forEach((tag, i) => {
  const div = document.createElement("div");
  div.className = "photo-card";
  div.style.backgroundImage = `url(${img("photo" + i, 300, 300)})`;
  div.innerHTML = `
    <span class="photo-card__tag">${tag}</span>
    <span class="photo-card__author">user_${1000 + i}</span>
    <span class="photo-card__like">❤️ ${(Math.random() * 9 + 1).toFixed(1)}k</span>
  `;
  photoRow.appendChild(div);
});

// ---- 오늘의 추천 집들이 ----
const houseData = [
  { title: "25평 신혼집, 꼭 필요한 것들로만 채운 미니멀 무드", desc: "불필요한 가구를 덜어내고 여백의 미를 살린 신혼집 인테리어" },
  { title: "[원룸 동남아니아 33py] 인천 구축아파트, 작은 비용으로 마법을 부린 셀프 시공", desc: "한정된 예산으로 최대 효율을 뽑아낸 셀프 인테리어 기록" },
  { title: "셀프 시공으로 클렌테리어로 야무지게 꾸민, 22평 구축 신혼집", desc: "직접 발품 팔아 자재를 고르고 완성한 신혼집 시공기" },
  { title: "아늑한 그린 파스텔톤 6평 원룸 오피스텔 꾸미기 (비포애프터)", desc: "좁은 공간도 컬러 매치로 넓어 보이게 만드는 노하우" },
];
document.getElementById("houseGrid").innerHTML = houseData
  .map(
    (h, i) => `
    <div class="card">
      <div class="card__img" style="background-image:url(${img("house" + i, 400, 300)})"></div>
      <p class="card__title">${h.title}</p>
      <p class="card__desc">${h.desc}</p>
    </div>`
  )
  .join("");

// ---- 카테고리별 상품 찾기 ----
const categoryData = ["침구단열", "가구", "데코", "주방·다이닝", "주방용품", "식물", "데코·소품", "조명", "수납·정리", "생활용품", "유아·아동", "반려동물"];
document.getElementById("categoryRow").innerHTML = categoryData
  .map(
    (c) => `<div class="category-item"><span class="icon-circle">🏷️</span><span>${c}</span></div>`
  )
  .join("");

// ---- 오늘의딜 ----
const dealData = [
  { name: "시그니처 분유 20캡 75g(갈가지하용)", brand: "Bebesup", price: 46800, discount: 0 },
  { name: "[오늘의딜 단독] 1+1 인절 전동건반 곳간식 수납 시스템 옷장 5단", price: 59000, discount: 10 },
  { name: "[오늘의딜 단독] 전기레인지 1인용 휴대 미니쿡탑", price: 54700, discount: 39 },
  { name: "찌개2캡종 1팩+5캡 80g 시리얼 4종 외 골라담기", price: 14900, discount: 53 },
];
document.getElementById("dealGrid").innerHTML = dealData
  .map(
    (d, i) => `
    <div class="card deal-card">
      <div class="card__img" style="background-image:url(${img("deal" + i, 400, 300)})">
        <span class="deal-timer" data-timer>02:58:41</span>
      </div>
      <div class="deal-brand"><span class="deal-brand__logo"></span>오늘의집 PICK</div>
      <p class="deal-name">${d.name}</p>
      <p class="deal-price">${d.discount ? `<span class="deal-discount">${d.discount}%</span>` : ""}${d.price.toLocaleString()}원</p>
      <p class="deal-rating">⭐ ${(Math.random() * 1 + 4).toFixed(1)} 리뷰 ${Math.floor(Math.random() * 15000 + 100)}</p>
      <div class="deal-badges"><span class="deal-badge">무료배송</span><span class="deal-badge">적립</span></div>
    </div>`
  )
  .join("");

// ---- 유저들의 인테리어 시공 리뷰 ----
const reviewData = [
  "부모님댁 인테리어를 반셀프 진행하게 되었어요. 새 주방 인테리어는 생각 시공 맞기는 입체로로 처음 1차로 교칭을 채워서 2주만에 안심된 시점에 끝나는 오늘의집 자재과 보내모 깐깐함을 같이 챕했어요.",
  "부모님댁 20년 이상 헌 옘에 마무리 없는 시리하다레다는 잘못 주문 시했어요-첫 시공이라 신뢰 A/S 가셨음 오늘의집 자재과 보내모 깐깐함을 같이 챕했어요.",
  "이사 갈 신혼집 오래된 아파트라서 도배 시공만 필요했으면, 견적 인테리어 업체 가본니 부터 사장이라 그건지 평정하게 대답하시더니고요. (집게 벼지요)",
];
document.getElementById("reviewGrid").innerHTML = reviewData
  .map(
    (text, i) => `
    <div class="card review-card">
      <div class="card__img" style="background-image:url(${img("review" + i, 400, 320)})"></div>
      <span class="review-tag">오늘의집 인테리어</span>
      <p class="card__desc" style="-webkit-line-clamp:3">${text}</p>
    </div>`
  )
  .join("");

// ---- 오늘의 기획전 ----
const promoData = [
  { title: "오늘의집 라이브", sub: "우직하지 더 좋아지는 시간", live: true },
  { title: "원하는날도착", sub: "오늘의집 공식 가구 배송/설치 서비스" },
  { title: "오마트", sub: "전송용 무료배송" },
  { title: "오늘의집 Only", sub: "매일 새로운 장보기 핫딜 오마트" },
];
document.getElementById("promoGrid").innerHTML = promoData
  .map(
    (p, i) => `
    <div class="promo-card" style="background-image:url(${img("promo" + i, 400, 240)})">
      ${p.live ? `<span class="promo-card__live">LIVE</span>` : ""}
      <span class="promo-card__title">${p.title}</span>
      <span class="promo-card__sub">${p.sub}</span>
    </div>`
  )
  .join("");

// ---- 베스트 ----
const bestTabs = ["전체", "생활템", "가구", "패브릭", "가전·디지털", "주방용품", "식물", "데코·소품", "조명", "수납·정리", "생활용품", "유아·아동", "반려동물"];
const bestTabsEl = document.getElementById("bestTabs");
bestTabsEl.innerHTML = bestTabs
  .map((t, i) => `<span class="tab ${i === 0 ? "is-active" : ""}" data-tab="${t}">${t}</span>`)
  .join("");
bestTabsEl.addEventListener("click", (e) => {
  if (!e.target.classList.contains("tab")) return;
  bestTabsEl.querySelectorAll(".tab").forEach((t) => t.classList.remove("is-active"));
  e.target.classList.add("is-active");
});

const bestData = [
  { brand: "텐바이텐", name: "[최대5%추가] 폼올스튜드 카스마자트 흑수수 생강가가루(전반대) 미니맥스 43포션", price: 34900, discount: 39 },
  { brand: "수면셔터", name: "6피스 디스크 화이트 인델 베드스 S/SS/Q/K/LK 트윈텍레스 5종", price: 299000, discount: 62 },
  { brand: "이뮤터", name: "맞춤 비치는 도톰 레이스시커튼(스카프웨어형거)", price: 16800, discount: 28 },
];
document.getElementById("bestGrid").innerHTML = bestData
  .map(
    (b, i) => `
    <div class="card best-card">
      <span class="best-rank">${i + 1}</span>
      <span class="best-pick">오늘의집 pick</span>
      <div class="card__img" style="background-image:url(${img("best" + i, 400, 300)})"></div>
      <p class="deal-brand">${b.brand}</p>
      <p class="deal-name">${b.name}</p>
      <p class="deal-price"><span class="deal-discount">${b.discount}%</span>${b.price.toLocaleString()}원</p>
      <p class="deal-rating">⭐ ${(Math.random() * 1 + 4).toFixed(1)} 리뷰 ${Math.floor(Math.random() * 15000 + 100)}</p>
    </div>`
  )
  .join("");

// ---- Hero indicator click (간단 순환) ----
const heroIndicator = document.getElementById("heroIndicator");
let heroIndex = 1;
const heroTotal = 16;
heroIndicator.addEventListener("click", () => {
  heroIndex = heroIndex >= heroTotal ? 1 : heroIndex + 1;
  heroIndicator.textContent = `${heroIndex}/${heroTotal} +`;
});

// ---- 오늘의딜 타이머 카운트다운 ----
document.querySelectorAll("[data-timer]").forEach((el) => {
  let [h, m, s] = el.textContent.split(":").map(Number);
  let totalSec = h * 3600 + m * 60 + s;
  setInterval(() => {
    totalSec = totalSec > 0 ? totalSec - 1 : 23 * 3600 + 59 * 60 + 59;
    const hh = String(Math.floor(totalSec / 3600)).padStart(2, "0");
    const mm = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
    const ss = String(totalSec % 60).padStart(2, "0");
    el.textContent = `${hh}:${mm}:${ss}`;
  }, 1000);
});
