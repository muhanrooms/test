---
name: extract-design-system
description: Extracts a concrete, HTML/CSS-ready design system from reference card-news / social-carousel images (e.g. Pinterest templates, screenshots of Instagram carousel designs). Produces a design-system.md documenting exact HEX colors, px-level typography per text role, a 1080×1350 (4:5) layout grid per card type, reusable components (number badge, CTA pill, info chips, brand wordmark, source citation) with copy-pasteable CSS, overall tone, and a one-line "borrowed from" note per reference image. Use this skill whenever the user shares reference images/screenshots of card news, carousel templates, or social post designs and asks to build a design system, style guide, or "디자인 시스템" from them — even if they don't say "design system" explicitly, e.g. "이 템플릿들 보고 톤앤매너 좀 뽑아줘" or "이 핀터레스트 이미지들 참고해서 카드뉴스 만들 때 쓸 기준 만들어줘".
---

# Extract Design System

Turn a handful of reference card-news images into a single `design-system.md` that someone could hand to a developer and get pixel-faithful HTML/CSS back — no guessing, no vague adjectives like "warm tones." Every value in the output should be something you could paste straight into a CSS rule.

## Why this works the way it does

Reference images for card news (Pinterest boards, IG carousel screenshots, client-supplied templates) usually share a few things across all the cards in a set even when each card looks different: a fixed canvas size, a small color palette reused in different roles, a handful of recurring UI components (a number badge, an info chip, a CTA button, a brand mark), and a typographic hierarchy that repeats card to card. The job here is to notice that repetition and pin it down in numbers — because "looks elegant" can't be coded, but `#B5504F` and `64px` can.

## Step 1 — Look at every reference image individually

Read each image with the Read tool (or view it if attached inline) before writing anything. Don't skip ahead to writing the doc from a vague memory of "Pinterest card news templates usually look like X" — the whole value of this skill is that the output is grounded in what's actually in front of you, not a generic template guess.

For each image, look for:
- **Background color(s)** — is it a flat color, a gradient, a photo with an overlay/tint?
- **Text roles present**: eyebrow/overline label, big display number (if a numbered series), headline, body paragraph, info-chip label+value pairs, footnote/source citation, brand wordmark/handle. Not every image will have every role — that's fine, note what's there.
- **Repeating shapes**: circular badges, pill-shaped buttons, rounded-rect chips, divider lines, image cards with rounded corners.
- **Where things sit relative to the edges** — eyeball approximate positions as fractions of the image (e.g. "headline starts about 6% from the left, 56% down") so they can be converted to px later.

If the images are clearly different *roles* within one carousel (a cover, several body cards, a closing/CTA card), treat them as such — the canvas and brand elements should be shared across all of them, but the per-card-type layout (Step 3) should be documented separately per role, the same way a real carousel has a different shape for its first slide, its body slides, and its last slide.

## Step 2 — Reverse-engineer exact values, not impressions

This is the step people skip and shouldn't. For each visual property, convert what you see into a number:

- **Colors → HEX.** Estimate the HEX from what's visible (if you have an MCP screenshot/inspect tool available that gives pixel colors, use it for accuracy; otherwise use your best-judgment HEX read from the image content). Give every color a semantic token name (`--rust`, `--cream`, `--sand`, `--ink`, `--gray-body` etc.) based on its *role*, not its appearance — this makes the table reusable even if exact shade gets refined later.
- **Typography → px on a known canvas.** Card news for Instagram is almost always **1080×1350px (4:5)** unless the user says otherwise — assume this canvas and scale all your pixel estimates to it. If a reference screenshot you're reading is smaller (e.g. a 480px-wide screenshot), figure out the scale factor first (`1080 / screenshot_width`) and multiply every px estimate by it, so the final numbers are canvas-accurate, not screenshot-accurate. Estimate `font-size`, approximate `font-weight` (400/600/700/800), `line-height` as a unitless ratio, and `letter-spacing` in px for uppercase/eyebrow text.
- **Layout → a grid in px.** For each card type (cover / body / closing — or whatever roles you identified in Step 1), write out a top-to-bottom list of `y` positions and box dimensions in px, assuming the 64px safe-margin convention common to this format (adjust if the reference clearly uses something else). Treat this like you're writing positions for `position:absolute` elements on the 1080×1350 canvas.
- **Components → CSS you could paste in.** For each recurring UI piece (badge, chip, CTA pill, wordmark, source line, eyebrow+underline), write a literal CSS declaration block, not just a description. Someone should be able to copy it into a stylesheet and have it roughly work.

It's fine — expected, even — to use round, clean numbers (64px margins, 16px/24px border-radius, 16px gaps) rather than oddly specific ones like 61.5px, since that's how real design systems are built and it's also easier to apply consistently.

## Step 3 — Write design-system.md

Use this structure (Korean section headers by default — switch to English headers only if the user has been writing to you in English in the surrounding conversation):

```markdown
# [프로젝트명] 카드뉴스 디자인 시스템

> 출처: [레퍼런스 이미지 파일명들]
> 목적: 한 줄로 어떤 산출물을 위한 추출인지

## 1. 캔버스
(표: 사이즈, 세이프 마진, 코너 라운딩 등)

## 2. 컬러 (HEX)
(표: 토큰 | HEX | 용도 | 차용 레퍼런스)

## 3. 타이포그래피 (px)
(표: 역할 | 폰트 스타일 | size | weight | line-height | letter-spacing | 색상)

## 4. 레이아웃 그리드
(카드 타입별로 섹션을 나눠 y좌표/사이즈 명시 — 표지/본문/클로징 등)

## 5. 반복 컴포넌트
(표: 컴포넌트 | 구조 | CSS 스펙 — CSS 스펙 칸은 실제 paste 가능한 CSS)

## 6. 톤
(불릿 4~6개 — 비주얼에서 드러나는 성격/원칙)

## 7. 레퍼런스별 차용 포인트 한 줄 요약
(표: 파일 | 차용한 점 — 레퍼런스 이미지 1장당 정확히 1행, 1줄)
```

This mirrors how a real design system reads top-to-bottom: setup (canvas) → raw tokens (color, type) → composition (grid) → reusable parts (components) → judgment calls (tone) → provenance (what came from where).

A few things worth getting right:

- **Section 2's "차용 레퍼런스" column and Section 7 are not redundant.** Section 2 tells you which reference *justifies* a given color choice (useful when several images share a color). Section 7 is a clean per-image summary for someone skimming — exactly one line per reference image, naming the single most distinctive thing it contributed. If a project already has an established brand palette (check for a brand guide, knowledge file, or prior design-system.md in the project), call out explicitly where a reference's colors line up with the existing brand — that consistency is worth flagging, not just silently adopting.
- **Don't invent components that don't appear in any reference.** If none of the images have a CTA button, don't include one in Section 5 just because it's common in card news generally — only document what's actually evidenced. It's fine to note in Section 6 if you think something's a gap, but the system should describe what was *extracted*, not a generic best-practice template.
- **Tone (Section 6) should explain *why* the visual choices work, not just restate them.** "Headlines are big" is not tone; "the contrast between oversized serif numerals and small printed-receipt-style chips signals 'editorial guide you can trust,' not 'ad'" is tone — it's an interpretation that would help someone extend the system consistently to a card you haven't designed yet.

## Output

Save the result as `design-system.md` in the project's working directory (or wherever the user indicates), unless they've named a different filename or location.

After writing it, give a short summary (not a restatement of the whole doc) highlighting: how many reference images were processed, the core palette tokens, and anything that surprised you or that you had to make a judgment call on (e.g. a reference whose colors didn't match the rest, or a component that appeared in only one image).
