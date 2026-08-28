# YONO Website Network — SEO Positioning & Cannibalization Resolution Specification

**Version:** 2.0
**Status:** FINAL OWNERSHIP / IMPLEMENTATION-GATED
**Date:** 2026-08-09
**Supersedes:** Version 1.0 (2026-08-09)
**Authoritative inputs for this revision:** 12 individual domain discovery audits (`ALL_AUDITS_COMPILED.md`), and `reconciliation/CROSS_DOMAIN_RECONCILIATION.md` (the cross-domain synthesis of those audits).
**Purpose:** Governance instructions for restructuring the YONO website network so each domain owns a distinct search intent, keyword cluster, and topical position — now finalized against repository evidence rather than assumption, with destructive implementation explicitly gated behind performance-data review.

---

## 0. Revision Note (v1.0 → v2.0)

Version 1.0 was a design specification written before any repository was audited. Since then:

1. All 12 domains were individually audited against v1.0's assumptions, reading actual repository content, architecture, and data.
2. A portfolio-wide reconciliation (`reconciliation/CROSS_DOMAIN_RECONCILIATION.md`) resolved contradictions between audits, built a conflict matrix, and produced a final proposed ownership map.
3. **Domain identities are now finalized** for all 12 domains — every audit independently converged on the same 12 roles v1.0 proposed, so the identity assignments in Section 2 below carry forward largely unchanged. Several identities are marked **CONDITIONAL**: the assignment is correct, but earning it requires a specific structural, methodological, or evidentiary precondition that does not yet exist in the repository (see each domain's block in Section 4).
4. **One keyword assignment is corrected against v1.0:** `UonoVoucher.com` was assigned `Yono promo code`. Repository evidence directly contradicts this — the site is honestly built around the **Uono / Uono Play** brand and explicitly warns users not to confuse it with Yono. UonoVoucher's primary keyword is now `Uono promo code`. Generic `Yono promo code` ownership is **UNRESOLVED — BUSINESS DECISION REQUIRED** and is not silently reassigned to any other domain.
5. **Destructive implementation (redirects, consolidation, noindex, removal) is now explicitly gated.** v1.0 already contained preservation language (old §22–24), but the audits found extensive off-mission content on nearly every domain, and it would be easy for an implementing agent to read the new ownership map and start executing URL changes immediately. This version makes that explicitly unauthorized: **provisional URL dispositions are candidates, not commands**, until GSC/backlink evidence and, in several cases, a business decision exist. See Sections 16, 21, and 32.
6. Several **new permanent governance sections** were added that did not exist in v1.0: an Entity Specialist & Modifier Ownership Rule (Section 5), an Entity Reference Rule (Section 6), a Promo/Reward/Referral terminology and ownership section (Section 8), boundary rules specific to AllYonoOfficial, AllYonoUpdate, AllYonoIndia, AllYonoPatti, and AllYonoGuru (Sections 9–13), a strengthened Data Integrity Policy (Section 14), a Content Migration/Preservation Policy (Section 15), standardized URL Disposition Terminology (Section 16), and an explicit Unresolved Portfolio Decisions register (Section 33). These exist specifically so a future AI agent working on any single domain cannot unknowingly recreate the cannibalization patterns the audits found.
7. Sections that repository evidence did not dispute — title/meta/H1 rules, content quality, E-E-A-T, structured data, canonicalization, indexability, sitemaps, robots.txt, llms.txt, and performance priority — are preserved from v1.0 with only minor edits.

**This version does not authorize any implementation.** It is a governance document. Phase 0 (integrity corrections) is the only work explicitly cleared to begin without further data-gathering — see Section 31.

---

## 1. Primary Objective

The network must NOT operate as multiple copies of the same "All Yono Games / Yono Game Download / APK / Promo Code / Bonus" website. The 12-domain audit found this is, in fact, what has happened on most of the network — this specification exists to reverse it.

Each domain must have:

1. One clearly defined primary search intent.
2. One primary keyword/topic ownership area.
3. A distinct content architecture.
4. Distinct homepage positioning.
5. Supporting secondary keywords relevant to its assigned intent.
6. Unique content that serves the assigned intent.
7. Internal links that reinforce its topical hierarchy.
8. No unnecessary competition with another network domain for the same primary query.

Do NOT blindly optimize every domain for high-volume generic YONO keywords.

The objective is **intent ownership**, not maximum keyword repetition, and not maximum page count.

---

## 2. Master Domain Ownership Map (v2.0 — Final)

| Domain | Primary Keyword / Topic | Primary Intent | Position | Current Alignment | Conditional On |
|---|---|---|---|---|---|
| YonoLink.co | all Yono games | Directory / Navigational | Master YONO directory | ALIGNED | — |
| AllYonoOfficial.com | best Yono games | Commercial Investigation | Rankings / recommendations | MISALIGNED (currently) | Legitimate evaluation methodology + removal of fabricated-looking rating data (§9) |
| AllYonoIndia.com | Yono games India | India-specific / Localization | India access hub | MISALIGNED (currently) | CMS/data-model support for India dimensions + authoritative legal sourcing (§11) |
| AllYonoGuru.com | Yono game guide | Informational | Educational authority | MISALIGNED (currently) | Homepage repositioning + directory/promo removal (execution, not structural) |
| AllYonoUpdate.com | Yono game updates | Freshness / News | Update authority | MISALIGNED (currently, live architecture) | Restoration of existing shelved freshness architecture (§10) |
| AllYonoReward.com | Yono game rewards | Rewards / Bonus mechanics | Rewards authority | PARTIALLY ALIGNED | Directory/promo removal (execution, not structural) |
| UonoVoucher.com | **Uono promo code** *(corrected — was "Yono promo code" in v1.0)* | Promo lookup (Uono brand) | Uono/Uono Play promo-code database | ALIGNED | — |
| YonoMoreGames.com | Yono referral code | Referral / Navigation | Referral-code directory | ALIGNED | — |
| AllYonoArcade.com | Yono Arcade | Entity / Brand | Yono Arcade specialist | PARTIALLY ALIGNED | Directory/promo removal + cession of `/all-games/win-rummy`, `/all-games/dhangame` (execution + evidence-gated) |
| AllYonoPatti.com | Teen Patti games | Category | Teen Patti specialist | MISALIGNED (currently) | Teen Patti as a first-class taxonomy category (§12) |
| WinRummyIndia.com | Win Rummy | Entity / Brand | Win Rummy specialist | PARTIALLY ALIGNED | Resolution of the 51-page `[platform].astro` Tier-3 architecture, evidence-gated (§32) |
| DhanGame.co | DhanGame | Entity / Brand | DhanGame specialist | MISALIGNED (currently) | Full entity-architecture build-out (near-total rebuild) |
| *(no domain)* | **Yono promo code** (generic) | Transactional/promo lookup | **OWNERSHIP UNRESOLVED — BUSINESS DECISION REQUIRED** | — | See §8.3 |

This table is the primary source of truth for domain identity. If another instruction conflicts with this ownership map, STOP and review the conflict before implementation.

**Do not read "Current Alignment" as authorization to make any specific change.** It describes repository reality as of the 2026-08-09 audit cycle, for prioritization purposes only. All destructive changes remain gated per Sections 15, 16, 21, and 32.

---

## 3. Global Non-Negotiable Rules

### Rule 1 — Do Not Make Every Site an "All Yono Games" Directory

Only **YonoLink.co** should deliberately own the broad master-directory intent. Other domains may reference YONO games when contextually useful, but their homepage, metadata, headings, internal architecture, and majority of content must reinforce their assigned specialization.

*Audit finding: nine of twelve domains currently violate this rule via a 50–60-page platform grid. See Section 7.*

### Rule 2 — One Search Intent = One Primary Owner

Before creating or optimizing a page, determine:

- target query;
- search intent;
- primary network owner (Section 2, Section 5, Section 8);
- whether another network page already targets it.

Example — keyword `Yono Arcade promo code`:

- AllYonoArcade.com = explanation of how Yono Arcade promo codes work (explanatory only).
- AllYonoReward.com = explanation of Yono Arcade rewards/bonuses.
- AllYonoUpdate.com = dated Yono Arcade changes/updates.
- Current-code lookup = **UNRESOLVED** — no domain is currently the confirmed generic-Yono promo-code owner (§8.3). Do not assign this to UonoVoucher; UonoVoucher owns Uono, not Yono.

Do NOT create four pages with substantially identical titles, introductions, FAQs, content, and CTA structure.

### Rule 3 — Same Entity Is Allowed; Same Intent Is Not

Multiple network sites can discuss Win Rummy. They must discuss it for different reasons.

GOOD:

- WinRummyIndia.com → Win Rummy entity/download/login/safety information
- AllYonoReward.com → Win Rummy reward mechanics
- AllYonoUpdate.com → Win Rummy dated updates/news
- YonoMoreGames.com → Win Rummy referral code lookup
- AllYonoOfficial.com → Win Rummy scored review/ranking (once methodology exists, §9)
- YonoLink.co → concise Win Rummy directory listing
- AllYonoGuru.com → generic guide content that uses Win Rummy only as an illustrative example
- Current-code promo lookup for Win Rummy → **UNRESOLVED** generic-Yono territory (§8.3); WinRummyIndia itself correctly refuses to operate this as a lookup product

BAD:

Every site creates:

`Win Rummy APK Download 2026 — ₹500 Bonus & Latest Promo Code`

That creates network-level intent overlap. *(Audit finding: this exact pattern — an entity specialist's brand profiled as a full monetized page on another domain — is the single highest-severity violation found across all 12 audits. See Section 6.)*

### Rule 4 — Never Copy Content Across Domains

Do NOT reuse: introductions; app descriptions; FAQs; reviews; conclusions; title templates; meta descriptions; comparison text; bonus descriptions; installation instructions; author bios; schema descriptions; headings; article structures; CTAs; tables.

Content must be written specifically for the purpose of the destination domain. Changing 10–20% of words is NOT sufficient differentiation.

*Audit finding: the seven-domain duplicated AM/PM/EVE promo-code product (§8) is the portfolio's largest violation of this rule — the same product, code cadence, and page shape reproduced near-identically seven times.*

### Rule 5 — Do Not Use Canonical Tags as the Main Cannibalization Solution

Canonical tags are for genuine duplicate/near-duplicate URL situations. Do not keep near-identical pages across domains and attempt to solve the strategy by adding cross-domain canonicals.

The preferred solution is: **different intent + different content + different architecture + different value proposition.**

If two pages genuinely serve the same purpose and one has no independent value, consider consolidation, redirect, noindex, or removal — but only after reviewing traffic, links, conversions, and Google Search Console data (Section 15). Never mass-redirect pages without mapping relevant replacements.

### Rule 6 — Entity Specialists Are Bounded (new in v2.0)

A domain assigned as an entity specialist (currently AllYonoArcade.com, WinRummyIndia.com, DhanGame.co) owns deep authority for its assigned entity only. It must never host a live, monetized profile page for an entity assigned to a different specialist. See Section 5 for the full modifier-ownership table and Section 6 for the reusable reference rule.

### Rule 7 — Uncertainty Is Preserved, Not Resolved by Assumption (new in v2.0)

Where audit or reconciliation evidence is insufficient to name a single confident owner, this specification records the item as **OWNERSHIP UNRESOLVED — BUSINESS DECISION REQUIRED** or **DATA REQUIRED**. An implementing AI must not silently pick a default owner for an unresolved item, even if one option seems architecturally convenient. See Section 33.

### Rule 8 — Disposition Language Is Not Authorization (new in v2.0)

Terms like *REDIRECT CANDIDATE*, *NOINDEX CANDIDATE*, *CONSOLIDATE*, and *REMOVE ONLY AFTER DATA REVIEW* describe a provisional recommendation, not an instruction to act. See Section 16. An implementing AI must not translate "redirect candidate" into an actual redirect without first completing the evidence-gathering in Section 32 and, where noted, a business decision in Section 33.

### Rule 9 — Do Not Destroy Existing Rankings (elevated from v1.0 §22)

Before changing an existing URL with any possibility of organic performance, inspect GSC query data, clicks/impressions, backlinks, and indexed status; identify existing ranking keywords; determine intended new ownership; and decide whether to update, preserve, consolidate, or redirect. Do not change URLs unnecessarily. If a URL remains appropriate, prefer updating the existing page over creating or moving to a new one. See Section 15.

---

## 4. Domain-by-Domain Governance

> Each block below is the authoritative governance record for that domain. Fields marked "Data dependencies" must be satisfied — or a documented business decision made — before any destructive action listed for that domain proceeds (Sections 16, 32).

### YonoLink.co

- **Final identity:** Master YONO Game Directory
- **Primary keyword:** all Yono games
- **Primary search intent:** Directory / navigational discovery
- **Secondary keyword clusters:** all Yono game, Yono games list, Yono game list, all Yono apps, Yono games, Yono game directory, Yono game download
- **Unique reason this domain exists:** it is the only domain whose job is to catalog the entire ecosystem at a consistent, comparable depth.
- **Topics it MUST own:** full-catalog discovery; categorized browsing; concise, directory-depth per-entity profiles.
- **Topics it MAY support:** short entity blurbs linking out to specialists; a directory-depth promo-code pointer/link (no lookup UI) once generic promo ownership is resolved.
- **Topics it MUST NOT own:** a full promo-code database; ranked "best" content (AllYonoOfficial's role); deep single-entity authority pages (entity specialists' role).
- **Allowed entity depth:** Directory-depth only — name, category, one-paragraph summary, link out. Never a full APK/download/login walkthrough for an entity with an assigned specialist.
- **Allowed directory depth:** Full — this is the domain's core mission.
- **Allowed promo depth:** None beyond a pointer/link, pending §8.3 resolution.
- **Allowed rewards depth:** None.
- **Allowed referral depth:** None.
- **Allowed update/freshness depth:** Catalog sort/filter by date-added is UI, not a conflict; no dated news articles.
- **Allowed review/comparison depth:** None — ranked or scored content belongs to AllYonoOfficial.
- **Main cross-domain boundaries:** must not drift into AllYonoOfficial's rankings territory or into entity specialists' deep-authority territory (currently violated by `best-yono-rummy-apps`, `yono-slots-spin-guide`, and `dhan-game-apk-download-promo-code`).
- **Current alignment status:** ALIGNED (core directory function); specific inner pages PARTIALLY ALIGNED (see above).
- **Data dependencies before implementation:** GSC/backlink review before migrating `/games`, `/games/[slug]` (×10), `/promo-codes`, or the two commercial-investigation/entity posts named above.
- **Technical priority (carried from v1.0):** CRITICAL. Reported mobile score 65, CWV FAILED, `llms.txt` missing. Prioritize Core Web Vitals and mobile performance independent of the ownership work above (Phase 5, §34).

### AllYonoOfficial.com

- **Final identity:** Commercial Investigation / Rankings Authority — **CONDITIONAL**, see §9.
- **Primary keyword:** best Yono games
- **Primary search intent:** Commercial investigation
- **Secondary keyword clusters:** best Yono apps, top Yono games, top Yono apps, recommended Yono games, Yono game reviews, Yono game comparison
- **Unique reason this domain exists:** it is the only domain whose job is to evaluate and recommend across the portfolio, once it builds a real methodology — its trust/safety cluster (scam awareness, entity-verification journalism) is a genuinely unique differentiator with no equivalent elsewhere.
- **Topics it MUST own:** criteria-based evaluation/comparison content; cross-portfolio trust/scam-awareness journalism; entity-verification methodology.
- **Topics it MAY support:** brief directory-style listing only insofar as it supports a "which one should I pick" comparison — never as an independent directory.
- **Topics it MUST NOT own:** APK/download hosting; entity-depth authority pages; general directory intent.
- **Allowed entity depth:** Comparison-level only — facts sourced from or linked to the entity specialist, never re-hosted.
- **Allowed directory depth:** None — currently the biggest violation on this domain (60-app grid, `/most-rated-apps/`).
- **Allowed promo depth:** None.
- **Allowed rewards depth:** None (mentions only in comparison context).
- **Allowed referral depth:** None.
- **Allowed update/freshness depth:** "New games worth reviewing" as evaluative commentary only, not dated news (AllYonoUpdate's role).
- **Allowed review/comparison depth:** Full, once methodology exists (§9) — this is the domain's core mission.
- **Main cross-domain boundaries:** must not compete with YonoLink for directory intent or with entity specialists for download depth; `/win-rummy-review/`-style content on WinRummyIndia is fact-based/non-scored and may coexist with a scored AllYonoOfficial treatment of the same entity.
- **Current alignment status:** MISALIGNED.
- **Data dependencies before implementation:** GSC on `/most-rated-apps/` and the 60 entity pages before any consolidation; methodology must be built and the integrity issue below fixed before "best/top" claims are published.
- **CONDITIONAL requirement (§9):** must remove or replace the uniform, unsourced 4.1★ rating (~58 pages) and repeated 85 MB size field before targeting "best/top/reviews/rankings" queries. Treat this identity as *earned-in-principle, not earned-in-practice* until fixed.
- **Technical priority (carried from v1.0):** Medium. Reported mobile score 84.

### AllYonoIndia.com

- **Final identity:** India-Specific YONO Hub — **CONDITIONAL**, see §11.
- **Primary keyword:** Yono games India
- **Primary search intent:** India-specific discovery/access
- **Secondary keyword clusters:** all Yono games India, Yono game India, Yono games for Android India, Yono APK India, Yono game download India
- **Unique reason this domain exists:** it is the only domain whose job is the portfolio-wide India regulatory/access layer that no single entity specialist would build for every platform.
- **Topics it MUST own:** cross-entity India legal/regulatory framework (hedged, sourced); payment/device/network context where verified; responsible-gaming resources.
- **Topics it MAY support:** brief cross-reference index entries per entity, linking to the entity specialist for depth.
- **Topics it MUST NOT own:** a full 55-page entity/APK directory; deep single-entity+India authority where a specialist already owns it (e.g., "Win Rummy India").
- **Allowed entity depth:** Index/reference only (a paragraph + link), except where no specialist exists for that entity.
- **Allowed directory depth:** None beyond the India-context index.
- **Allowed promo depth:** None (current `/promo-code/` is ~87% empty with mislabeled entries and must not be extended, §14).
- **Allowed rewards depth:** None.
- **Allowed referral depth:** None.
- **Allowed update/freshness depth:** None — not this domain's role.
- **Allowed review/comparison depth:** None.
- **Main cross-domain boundaries:** deep entity+India content belongs to the entity specialist (WinRummyIndia's own India-legal depth is the portfolio model); `win-rummy-india-guide` is the sharpest named collision in the portfolio and requires a full-text comparison against WinRummyIndia before disposition (§32).
- **Current alignment status:** MISALIGNED.
- **Data dependencies before implementation:** CMS/data-model fields for India dimensions (UPI, KYC, TDS flag, state availability) do not currently exist and must be built; authoritative legal/regulatory sourcing required before publishing or extending any state-specific legality, KYC, or tax/TDS content (§11, §14).
- **Technical priority (carried from v1.0):** Medium. Reported mobile score 86.

### AllYonoGuru.com

- **Final identity:** Educational / Knowledge Authority
- **Primary keyword:** Yono game guide
- **Primary search intent:** Informational
- **Secondary keyword clusters:** Yono game guides, how Yono games work, Yono APK guide, Yono game safety, Yono game comparison (methodology, not verdicts), Yono terminology
- **Unique reason this domain exists:** it is the only domain whose job is to teach, independent of any single brand or ranking — its ~16 genuinely authored educational posts are a real, unique asset.
- **Topics it MUST own:** generic rules/mechanics/terminology education; generic APK/Android-install/permissions education; generic skill-vs-chance legal literacy; neutral comparison methodology (the criteria/framework, not the verdict).
- **Topics it MAY support:** brief illustrative mentions of specific entities inside a generic lesson.
- **Topics it MUST NOT own:** entity authority; rankings/recommendations; news/freshness; reward mechanics; promo/referral codes; India localization specifics; **Teen-Patti-specific category education** (hand rankings, variant rules specific to Teen Patti — this belongs to AllYonoPatti, §12; AllYonoGuru's existing Teen Patti hand-ranking/joker-rule posts are candidates for migration, §16).
- **Allowed entity depth:** Illustrative only — no dedicated entity pages.
- **Allowed directory depth:** None. The homepage's current self-positioning as "Yono Game All" is the single most direct, literal violation of an assigned identity found anywhere in the portfolio and must be corrected.
- **Allowed promo depth:** None — the current full promo-code product is off-mission.
- **Allowed rewards depth:** None — bonus-mechanics posts belong on AllYonoReward.
- **Allowed referral depth:** None.
- **Allowed update/freshness depth:** None — "New Yono Games 2026"-style posts belong on AllYonoUpdate.
- **Allowed review/comparison depth:** Methodology only, not verdicts.
- **Main cross-domain boundaries:** YonoLink (directory), AllYonoPatti (Teen-Patti-specific education), AllYonoReward (bonus mechanics), AllYonoUpdate (freshness).
- **Current alignment status:** MISALIGNED (currently self-declared as a directory).
- **Data dependencies before implementation:** GSC review of the current homepage's rankings before repositioning; GSC/backlink review before migrating the 57-app showcase, 43+ download pages, promo product, Teen-Patti-specific posts, and the freshness-shaped post.
- **Technical priority (carried from v1.0):** Medium. Reported mobile score 86.

### AllYonoUpdate.com

- **Final identity:** Freshness / News Authority
- **Primary keyword:** Yono game updates
- **Primary search intent:** Freshness / news / changes
- **Secondary keyword clusters:** Yono game update, latest Yono games, new Yono games, Yono app update, Yono game latest version
- **Unique reason this domain exists:** it is the only domain whose job is "what changed recently," network-wide — and it already has a shelved architecture built specifically for this role.
- **Topics it MUST own:** dated, network-wide launch/version/status/availability reporting; new-game announcements; maintenance/network announcements.
- **Topics it MAY support:** brief per-entity update logs where genuinely dated.
- **Topics it MUST NOT own:** full directory; promo-code database; evergreen entity education (AllYonoGuru's or the entity specialists' role).
- **Allowed entity depth:** Dated-news depth only, never full entity profiles.
- **Allowed directory depth:** None — `/all-yono-games/` and the 8 APK hubs are off-mission.
- **Allowed promo depth:** None — `/promo-code-updates/` is off-mission.
- **Allowed rewards depth:** None.
- **Allowed referral depth:** None.
- **Allowed update/freshness depth:** Full — this is the domain's core mission, **provided entries are genuinely dated** (no `new Date()`-on-every-build sitemap freshness, no backdating).
- **Allowed review/comparison depth:** None.
- **Main cross-domain boundaries:** YonoLink (directory); each entity specialist's own evergreen "recheck" logs are a distinct, compatible intent and do not conflict (§5).
- **Current alignment status:** MISALIGNED (live architecture); the domain's shelved `_removed-pages` architecture (`latest-updates`, `update-archive`, `game-updates`, `app-updates`, `events-notices`) already matches the assigned role — restoration, not invention, is the path to alignment (§10). The domain's own trust pages currently describe this shelved system as if it were live, which is an E-E-A-T mismatch to fix regardless (§31).
- **Data dependencies before implementation:** confirm the shelved architecture's dates are still meaningful (or re-verify) before republishing; GSC/backlink review before migrating the live directory/promo/education-silo content.
- **Technical priority (carried from v1.0):** High. Reported mobile score 75, `llms.txt` missing.

### AllYonoReward.com

- **Final identity:** Rewards / Bonus Mechanics Authority
- **Primary keyword:** Yono game rewards
- **Primary search intent:** Reward information and explanation
- **Secondary keyword clusters:** Yono rewards, Yono game bonus, Yono welcome bonus, Yono daily rewards, Yono reward guide
- **Unique reason this domain exists:** it is the only domain whose job is to explain how rewards/bonuses work as a system — its 12-page `/rewards` core is genuine, high-quality mechanics education.
- **Topics it MUST own:** reward/bonus mechanics — types, eligibility, conditions, expiration logic, why values differ by platform; cashback and VIP/loyalty mechanics (currently a gap — build out).
- **Topics it MAY support:** brief explanatory mention of promo codes as one input into a reward, without a lookup product.
- **Topics it MUST NOT own:** full directory; promo-code lookup/database; referral-code lookup.
- **Allowed entity depth:** Mechanics-depth only — e.g. `/rewards/win-rummy` explaining Win Rummy's reward system, never its APK/login/download.
- **Allowed directory depth:** None — `/games` (×55) is off-mission.
- **Allowed promo depth:** Explanatory only, no current-code claims — `/promo-codes` (×55) is off-mission and pending §8.3/§16 disposition.
- **Allowed rewards depth:** Full — this is the domain's core mission.
- **Allowed referral depth:** None — stays with YonoMoreGames.
- **Allowed update/freshness depth:** None.
- **Allowed review/comparison depth:** None.
- **Main cross-domain boundaries:** YonoLink (directory), generic-promo territory, entity specialists (entity facts). One DhanGame bonus article currently leaks into promo/bonus-code territory and should be reframed to strict mechanics framing, not removed (§16).
- **Current alignment status:** PARTIALLY ALIGNED — 12 on-mission pages against 110 off-mission URLs.
- **Data dependencies before implementation:** GSC/backlink review before migrating `/games` and `/promo-codes`.
- **Technical priority (carried from v1.0):** Medium. Reported mobile score 85, `llms.txt` missing.

### UonoVoucher.com

- **Final identity:** Uono / Uono Play Promo-Code & Voucher Authority — **explicitly NOT generic Yono promo-code authority.** *(Corrected in v2.0 — see §0.)*
- **Primary keyword:** Uono promo code
- **Primary search intent:** Promo-code lookup, for the Uono brand specifically
- **Secondary keyword clusters:** Uono voucher, Uono Play promo code
- **Unique reason this domain exists:** it is the only domain in the portfolio with a real, non-fabricated, actively-maintained code/voucher database — for Uono.
- **Topics it MUST own:** current Uono/Uono Play code verification and status.
- **Topics it MAY support:** the existing, clearly labeled Uono≠Yono disambiguation note — a genuine trust asset, keep it.
- **Topics it MUST NOT own:** generic "Yono promo code" (§8.3 — remains unresolved and is not assigned here); a Yono-wide directory.
- **Allowed entity depth:** Uono-specific only.
- **Allowed directory depth:** None — trim `/uono-games/` if it currently reads as a mini-directory.
- **Allowed promo depth:** Full, for Uono — this is the domain's core mission.
- **Allowed rewards depth:** None.
- **Allowed referral depth:** None — `/vouchers/` product classification against referral/access behavior is unresolved (§33).
- **Allowed update/freshness depth:** Code status/verification dates only.
- **Allowed review/comparison depth:** None.
- **Main cross-domain boundaries:** none currently, precisely because this domain is honestly off the generic-Yono axis. One AllYonoReward article leaking DhanGame bonus content into promo territory is AllYonoReward's item to fix, not UonoVoucher's.
- **Current alignment status:** ALIGNED, for its corrected identity.
- **Data dependencies before implementation:** `/vouchers/` product clarification (§33).
- **Technical priority (carried from v1.0):** High. Reported mobile score 71, `llms.txt` missing.

### YonoMoreGames.com

- **Final identity:** Referral / Invite / Access-Code Lookup Authority
- **Primary keyword:** Yono referral code
- **Primary search intent:** Referral / navigation
- **Secondary keyword clusters:** Yono game referral code, Yono invite code, Yono referral link, `{platform} referral code`
- **Unique reason this domain exists:** it is the only domain whose job is referral/invite access, and it already does this cleanly — the cleanest domain in the portfolio.
- **Topics it MUST own:** referral/invite-code and access-link lookup, per platform.
- **Topics it MAY support:** a single generic "Yono referral code" landing page aggregating/explaining the 55 individual pages — currently missing; a genuine gap, not a conflict, and safe to build.
- **Topics it MUST NOT own:** promo-code lookup; reward-mechanics explanation; general directory.
- **Allowed entity depth:** Referral-specific only.
- **Allowed directory depth:** `/platform` grid is acceptable as long as copy stays referral-first (already mostly true).
- **Allowed promo depth:** None (already clean).
- **Allowed rewards depth:** None — bonus language already deliberately banned; keep it that way.
- **Allowed referral depth:** Full — this is the domain's core mission.
- **Allowed update/freshness depth:** Verification-date stamps only.
- **Allowed review/comparison depth:** None.
- **Main cross-domain boundaries:** YonoLink (mild directory ambiguity on `/platform`, not a material conflict).
- **Current alignment status:** ALIGNED.
- **Data dependencies before implementation:** verification pass on the bulk-identical `lastVerifiedAt`/`addedAt` timestamps across sampled entries (§14).
- **Technical priority (carried from v1.0):** Low. Reported mobile score 99, `llms.txt` missing.

### AllYonoArcade.com

- **Final identity:** Yono Arcade Entity Authority
- **Primary keyword:** Yono Arcade
- **Primary search intent:** Entity / branded navigation
- **Secondary keyword clusters:** Yono Arcade download, Yono Arcade APK, Yono Arcade game APK, Yono Arcade games, Yono Arcade login
- **Unique reason this domain exists:** it is the only domain whose job is Yono Arcade specifically — its entity core (`/`, `/download`, `/game-apk`, `/pure-apk`, `/mall`, `/login`, `/customer-care`, `/is-yono-arcade-safe`) already earns this.
- **Topics it MUST own:** Yono Arcade identity, download, APK, login, safety, support, entity-specific promo *explanation*.
- **Topics it MAY support:** brief, linked references to sibling entities where editorially relevant (e.g. a genuine "Yono Arcade vs. X" comparison, per Rule 3) — never a profile page.
- **Topics it MUST NOT own:** any other brand's entity page (Win Rummy, DhanGame, or the ~43 unrelated brands currently referenced); the generic Yono directory; promo-code lookup; reward mechanics; referral codes.
- **Allowed entity depth:** Full, for Yono Arcade only.
- **Allowed directory depth:** None — `/all-games/[slug]` (×50) is off-mission and must be resolved.
- **Allowed promo depth:** Explanatory only — the 50-platform `/promo-codes` product is off-mission, pending §8.3/§16 disposition.
- **Allowed rewards depth:** None — stays with AllYonoReward.
- **Allowed referral depth:** None — stays with YonoMoreGames.
- **Allowed update/freshness depth:** Evergreen "recheck" pattern only (WinRummyIndia's model), not network news.
- **Allowed review/comparison depth:** Self-limited/fact-based only, as an entity specialist (§5).
- **Main cross-domain boundaries:** **`/all-games/win-rummy` and `/all-games/dhangame` are direct, confirmed entity-ownership conflicts** with WinRummyIndia.com and DhanGame.co respectively — this is one half of the portfolio's single highest-severity finding (§6). `/blog/dhangame-promo-code-bonus-guide` is the same conflict, doubled by a dedicated article.
- **Current alignment status:** PARTIALLY ALIGNED — entity core strong, directory/promo layer and two named entity conflicts off-mission.
- **Data dependencies before implementation:** GSC/backlink review of `/all-games/[slug]`, especially `/all-games/win-rummy` and `/all-games/dhangame`, before any redirect; the receiving domains (WinRummyIndia.com, DhanGame.co) must have a page ready to receive that traffic. Freeze further growth of `/all-games/[slug]` in the interim (§31).
- **Technical priority (carried from v1.0):** Medium. Reported mobile score 80, `llms.txt` missing.

### AllYonoPatti.com

- **Final identity:** Teen Patti Category Authority — **CONDITIONAL**, see §12.
- **Primary keyword:** Teen Patti games
- **Primary search intent:** Category discovery
- **Secondary keyword clusters:** Teen Patti games India, Teen Patti apps, Teen Patti APK, Teen Patti game list, Teen Patti guide, Teen Patti hand rankings
- **Unique reason this domain exists:** it is the only domain whose job is Teen Patti specifically — its 10-guide cluster (hand rankings, blind/seen, chaal, sideshow/show, boot/pot, terminology, variants, probabilities, Teen Patti vs. poker, responsible/legal hedging) already proves it can own this.
- **Topics it MUST own:** Teen Patti rules, terminology, hand rankings, variants, Teen-Patti-specific safety/legal awareness; discovery of genuinely Teen-Patti-relevant apps.
- **Topics it MAY support:** a mode-specific page for an entity that genuinely offers Teen Patti as one mode (e.g. "Win Rummy's Teen Patti table") — never a full generic entity profile.
- **Topics it MUST NOT own:** a general Rummy/Slots/Spin/Bingo directory; generic promo-code lookup; generic rewards.
- **Allowed entity depth:** Only where the entity clears the Teen-Patti-relevance threshold in §12, and only mode-specific, never a full profile.
- **Allowed directory depth:** Category-scoped only (Teen Patti apps), never general.
- **Allowed promo depth:** None — `/promo-codes` (×55) is off-mission.
- **Allowed rewards depth:** None — the generic `/rewards` layer is off-mission; Teen-Patti-specific bonus mechanics may remain as a link to AllYonoReward.
- **Allowed referral depth:** None.
- **Allowed update/freshness depth:** None.
- **Allowed review/comparison depth:** None.
- **Main cross-domain boundaries:** YonoLink (general directory), AllYonoGuru (generic education — Teen-Patti-specific posts currently on AllYonoGuru are migration candidates to here, §16).
- **Current alignment status:** MISALIGNED — the CMS `GameCategory` taxonomy has no "Teen Patti" category at all, and the 55-entry directory is dominated by Rummy/Multi-game/Slots/Spin.
- **Data dependencies before implementation:** Teen Patti must be added as a first-class taxonomy category (structural, not evidence-gated — safe to do, §34 Phase 1); GSC/backlink review before pruning or migrating the bulk of `/games`.
- **Technical priority (carried from v1.0):** Low. Reported mobile score 96, `llms.txt` missing.

### WinRummyIndia.com

- **Final identity:** Win Rummy Entity Authority — **CONDITIONAL**, see below.
- **Primary keyword:** Win Rummy
- **Primary search intent:** Entity / branded navigation
- **Secondary keyword clusters:** Win Rummy India, Win Rummy download, Win Rummy APK, Win Rummy login
- **Unique reason this domain exists:** it already has the single most rigorous claims-vs-facts editorial methodology in the portfolio — this identity is fully earned within its ~39-page Tier-1 content (identity, official-domain verification, APK/download/install, login, safety, game catalogue, fact-based self-limited review, deep Win Rummy + India legal context, explanatory-only promo/referral content, evergreen recheck logs) and needs only its off-mission architecture resolved to be fully coherent.
- **Topics it MUST own:** Win Rummy identity, official-domain verification, APK/download/install, login, safety, game catalogue, fact-based non-scored review, deep Win Rummy + India legal/availability context, entity-specific promo/referral explanation (non-lookup).
- **Topics it MAY support:** generic Android-security education framed as generic (already exists via `/app-verification/`) — acceptable as supporting content per Rule 3, though it is closer in spirit to AllYonoGuru's role and should stay clearly framed as general, not Win-Rummy-specific.
- **Topics it MUST NOT own:** any other brand's entity page (this is the domain's single biggest current violation); Teen Patti content (correctly, it has none); current-code promo/referral lookup (correctly, already avoided).
- **Allowed entity depth:** Full, for Win Rummy only.
- **Allowed directory depth:** None.
- **Allowed promo depth:** Explanatory only — already correctly implemented, no changes needed.
- **Allowed rewards depth:** Entity-facts level only — already correct, no eligibility tables, defers to AllYonoReward.
- **Allowed referral depth:** Explanatory only — already correctly implemented, explicitly refuses code lookup.
- **Allowed update/freshness depth:** Evergreen "recheck" pattern — already correctly implemented, distinct from AllYonoUpdate's dated journalism.
- **Allowed review/comparison depth:** Fact-based, non-scored only, as an entity specialist (§5); a scored AllYonoOfficial treatment of Win Rummy may coexist once AllYonoOfficial's methodology exists.
- **Main cross-domain boundaries:** **the `[platform].astro` template generates 51 pages (57% of the site's indexed footprint) for entirely unrelated brands, including `/dhan-game/` (direct conflict with DhanGame.co) and `/yono-arcade/` (direct conflict with AllYonoArcade.com)** — the single highest-severity, repository-confirmed finding across all 12 audits (§6). It also includes 6 more Yono-brand pages, 17 unrelated rummy-brand pages, and 27 brands entirely outside the 12-domain portfolio, all carrying live affiliate tracking links. `win-rummy-india-guide` on AllYonoIndia.com is the highest-priority named text-comparison item in the portfolio (§32).
- **Current alignment status:** PARTIALLY ALIGNED — Tier-1 content is the strongest single-entity asset in the portfolio; the majority of the site's page count is off-mission.
- **CONDITIONAL requirement:** resolution of the 51 Tier-3 pages via the GSC/backlink evidence process in §32 — **not** an immediate removal. Freeze further growth of this template in the interim (§31). Clarification is also needed on whether these 51 pages were a deliberate interim monetization layer or an unreviewed build artifact (§33).
- **Data dependencies before implementation:** GSC/backlink data for `/dhan-game/` and `/yono-arcade/` specifically, plus confirmation that DhanGame.co and AllYonoArcade.com have (or are building) a receiving page before any redirect; full-text comparison against AllYonoIndia's `win-rummy-india-guide`, AllYonoOfficial's Win Rummy pages, AllYonoGuru's Win Rummy content, and YonoLink's Win Rummy APK safety article.
- **Technical priority (carried from v1.0):** Low. Reported mobile score 93, `llms.txt` missing. Check indexing and GSC visibility carefully — the domain shows signs of a pre-launch state (placeholder contact email, placeholder source URLs).

### DhanGame.co

- **Final identity:** DhanGame Entity Authority — **CONDITIONAL**, requires the most substantial rebuild in the portfolio.
- **Primary keyword:** DhanGame
- **Primary search intent:** Entity / branded navigation
- **Secondary keyword clusters:** Dhan Game, DhanGame download, DhanGame APK, DhanGame login, DhanGame India
- **Unique reason this domain exists:** the domain name is the strongest entity-relevance asset in the portfolio for DhanGame and is currently almost entirely unused for that purpose.
- **Topics it MUST own (once built):** DhanGame identity, download, APK, login, safety, promo/reward explanation, India-specific DhanGame context.
- **Topics it MAY support:** the existing bespoke `win-rummy-vs-dhan-game` comparison post — differentiated, keep.
- **Topics it MUST NOT own:** the 51 unrelated brand pages currently making up ~98% of its indexed footprint; generic directory intent.
- **Allowed entity depth:** Currently near-zero; target = full, modeled directly on WinRummyIndia's Tier-1 architecture.
- **Allowed directory depth:** None — this is the domain's core problem today and must be eliminated.
- **Allowed promo depth:** Explanatory only, once built.
- **Allowed rewards depth:** Entity-facts level only, once built.
- **Allowed referral depth:** None — stays with YonoMoreGames.
- **Allowed update/freshness depth:** Evergreen "recheck" pattern, once built.
- **Allowed review/comparison depth:** Fact-based, non-scored only, as an entity specialist (§5), once built.
- **Main cross-domain boundaries:** YonoLink (directory) currently has more DhanGame-specific depth than DhanGame.co itself; WinRummyIndia's `/dhan-game/` and AllYonoArcade's `/all-games/dhangame` are the two confirmed entity-ownership conflicts that should eventually point traffic here (§6, §32).
- **Current alignment status:** MISALIGNED.
- **Data dependencies before implementation:** GSC comparison of DhanGame.co vs. YonoLink vs. WinRummyIndia vs. AllYonoArcade for DhanGame-related queries — this determines redirect sequencing, since DhanGame.co's entity architecture does not yet exist to receive traffic. Building the architecture itself (Phase 1, §34) is **not** evidence-gated and may begin immediately.
- **Technical priority (carried from v1.0):** High. Reported mobile score 76, `llms.txt` missing.

---

## 5. Entity Specialist & Modifier Ownership Rule

Currently assigned entity specialists:

| Entity | Specialist domain |
|---|---|
| Yono Arcade | AllYonoArcade.com |
| Win Rummy | WinRummyIndia.com |
| DhanGame | DhanGame.co |

**An entity specialist owns**, for its assigned entity: the bare entity query; official-site/entity verification; download; APK; login; support; safety; entity-specific game catalogue; factual, non-scored entity review; an evergreen recheck/status page.

**Modifiers with a distinct intent belong elsewhere**, regardless of which domain the entity's fans might expect to find them on:

| Modifier | Owner | Reasoning |
|---|---|---|
| `{Entity}` (bare) | Entity specialist | Core brand navigational query |
| `{Entity} download` / `APK` | Entity specialist | Entity-specific transactional/how-to |
| `{Entity} login` | Entity specialist | Entity-specific access how-to |
| `{Entity} official website` | Entity specialist | Entity verification — WinRummyIndia's disclosed, sourced model is the portfolio template |
| `{Entity} safety` / "is {Entity} safe" | Entity specialist | Entity-specific trust content |
| `{Entity} review` (fact-based, non-scored) | Entity specialist | Rule 3 pattern |
| `{Entity} review` (scored/comparative) | AllYonoOfficial.com, once methodology exists (§9) | Coexists with the entity specialist's fact-based version if genuinely differentiated |
| `{Entity} games` / game list | Entity specialist | Entity catalogue depth |
| `{Entity} promo code` — explanatory ("how it works") | Entity specialist | Explains mechanics only, per Rule 3 and WinRummyIndia's proven pattern |
| `{Entity} promo code` — current/active code lookup | **UNRESOLVED generic-Yono owner** (§8.3), or UonoVoucher only if the entity is Uono-branded | Lookup is a different product than explanation |
| `{Entity} reward / bonus mechanics` | AllYonoReward.com | Reward-mechanics depth is not the entity specialist's job |
| `{Entity} referral code` / invite code | YonoMoreGames.com | Referral lookup is not the entity specialist's job |
| `{Entity} dated launch/update/news` | AllYonoUpdate.com | Freshness/news intent |
| `{Entity} updates` (evergreen "we periodically recheck this") | Entity specialist | Distinct intent from AllYonoUpdate's dated journalism |
| `{Entity} + India` (deep legal/availability) | Entity specialist | WinRummyIndia's proven model — India strengthens the entity page rather than needing to be forked out |
| `{Entity} + India` (brief cross-reference) | AllYonoIndia.com | Short index entry linking to the entity specialist for depth |
| `{Entity}` ranked against competitors | AllYonoOfficial.com, once methodology exists | Commercial investigation |
| `{Entity} Teen Patti mode` | AllYonoPatti.com | Only if genuinely Teen-Patti-specific (§12) |
| `{Entity}` generic directory listing | YonoLink.co | Concise directory depth only |

---

## 6. Entity Reference Rule (permanent, reusable)

A non-owner domain may reference an assigned entity **only when the page remains inside the non-owner domain's own search intent.**

Examples:

- YonoLink may list Win Rummy briefly as a directory entry.
- AllYonoReward may explain Win Rummy reward mechanics.
- AllYonoUpdate may report Win Rummy launch news.
- YonoMoreGames may provide Win Rummy referral lookup.
- AllYonoPatti may discuss Win Rummy's Teen Patti mode if genuinely relevant.

**Non-owner domains must NOT create**, for an entity assigned to another specialist:

- a full entity profile;
- an entity APK authority page;
- an entity download funnel;
- an entity login/support silo;
- a monetized affiliate landing page;
- broad standalone entity authority content.

This is not a theoretical risk. It is the single highest-severity, repository-confirmed finding across all 12 audits: WinRummyIndia.com hosts live, affiliate-monetized `/dhan-game/` and `/yono-arcade/` pages, and AllYonoArcade.com hosts `/all-games/win-rummy` and `/all-games/dhangame`. Both are named CONDITIONAL items in Section 4 and are subject to the evidence-gated disposition process in Section 32 — **not** immediate deletion.

---

## 7. Directory Ownership Rule

**YonoLink.co is the sole portfolio owner of:** all Yono games; Yono games list; general game/app discovery; master directory intent.

Other domains must NOT operate a generic 50–60-app directory. Allowed exceptions:

- **YonoMoreGames.com** may show a referral-first platform index.
- **AllYonoPatti.com** may show genuinely Teen-Patti-relevant apps only (§12).
- **AllYonoIndia.com** may show a brief, India-context reference index.
- **AllYonoOfficial.com** may compare multiple apps only through evaluative/ranking methodology (§9) — not a bare listing.
- **AllYonoReward.com** may index reward-mechanics topics/entities only where the page's purpose is reward explanation.
- **AllYonoUpdate.com** may index updates/events, not generic apps.
- **Entity specialists** (AllYonoArcade, WinRummyIndia, DhanGame) must not operate broad multi-brand directories at all, including for other portfolio entities (§6).

**A UX grid alone is not automatically a conflict.** A page becomes a directory-ownership conflict when its primary purpose is *"what games/apps exist?"* rather than its domain's assigned specialized intent. A visually grid-shaped page whose actual content and purpose is referral lookup, reward explanation, or Teen-Patti-specific discovery is not a violation of this rule merely because it looks like a grid.

---

## 8. Promo vs. Reward vs. Referral — Terminology and Ownership

### 8.1 Definitions

- **PROMO CODE:** a specific current code used to unlock a promotion. Owning question: *"what is the current valid code and is it still active?"*
- **REFERRAL / INVITE CODE:** a signup/access code or link tied to referral attribution. Owning question: *"what code/link do I use to sign up and get credited?"*
- **REWARD / BONUS MECHANICS:** the rules explaining eligibility, conditions, value structures, expiration, cashback, VIP tiers, welcome bonus, daily rewards, referral reward structure. Owning question: *"how do rewards work and what am I entitled to?"*

### 8.2 Ownership

| Intent | Owner | Status |
|---|---|---|
| Referral/invite-code lookup | YonoMoreGames.com | Confirmed, no dispute |
| Reward/bonus mechanics | AllYonoReward.com | Confirmed |
| Uono promo-code lookup | UonoVoucher.com | Confirmed, no dispute |
| Generic Yono current-promo-code lookup | — | **OWNERSHIP UNRESOLVED — BUSINESS DECISION REQUIRED** |

### 8.3 Generic Yono promo-code ownership — explicitly unresolved

Seven domains (YonoLink, AllYonoArcade, AllYonoReward, AllYonoGuru, AllYonoUpdate, AllYonoIndia, AllYonoPatti) currently run a near-identical AM/PM/EVE promo-code database for generic "Yono" games, and none is the confirmed owner. UonoVoucher — the v1.0 default — is honestly Uono-branded and does not cover generic Yono (§0). No domain has a demonstrated, non-scope-creep, non-empty, non-integrity-flagged version of this product.

**This is left unresolved rather than invented.** Two non-binding options exist for the business to decide, neither of which this specification adopts by default:

- **Option A:** build a genuine new generic-Yono lookup product, most naturally as an extension of AllYonoReward if the business wants one centralized owner.
- **Option B:** do not centralize generic Yono promo-code lookup at all; entity specialists explain "how {brand} promo codes work" (explanatory only, §5), and no domain claims current-code lookup for generic Yono.

**Regardless of which option is chosen (or neither):** the seven off-mission promo-code layers should not continue to exist in their current duplicated form on domains whose core mission is something else. See §16 for disposition terminology and §32 for the evidence required before acting.

**Do not assign generic Yono promo-code ownership to AllYonoReward, or any other domain, as a default.** This must remain visibly unresolved (§33) until a business decision is made.

### 8.4 What promo-code mentions are allowed on non-owner sites

A short explanatory paragraph or FAQ entry ("Does {brand} have promo codes? Here's generally how they work") is allowed on entity specialists and AllYonoReward. It must not include:

- current-code claims;
- copy-code UI;
- an AM/PM/EVE-style time-gated database;
- 50+ programmatic promo pages;

unless that domain is eventually and explicitly designated the generic promo owner per §8.3.

---

## 9. AllYonoOfficial.com — Commercial Investigation Methodology Rule

AllYonoOfficial.com may own `best Yono games`, `top Yono games`, `Yono game reviews`, `Yono game comparison`, and recommendation intent generally — **only after it has a legitimate evaluation methodology.**

**Before publishing any ranking/recommendation claim, the domain must:**

1. Define visible evaluation criteria (e.g. safety/verification status, download-source legitimacy, official-domain identifiability, feature completeness, transparency, complaint/red-flag patterns).
2. Source the evidence behind each evaluated claim.
3. Explain the methodology on a visible, linked page.
4. Avoid arbitrary scoring.
5. Avoid fabricated star ratings.
6. Avoid unsupported "best" claims.
7. Show dates where an evaluation can change over time.

**Explicitly prohibited, per direct audit finding:**

- uniform or fake/placeholder star ratings (the current ~4.1★ repeated across ~58 pages);
- uniform arbitrary APK sizes (the current repeated 85 MB field);
- invented review counts;
- unsourced popularity claims.

Entity specialists may maintain factual, non-scored reviews for their own entity (§5). AllYonoOfficial owns portfolio-wide **scored/comparative** evaluation — the two are complementary, not duplicative, if genuinely differentiated in treatment.

Until the above is complete, treat `best Yono games` as **earned-in-principle, not earned-in-practice.**

---

## 10. AllYonoUpdate.com — Freshness vs. Directory-Sorting Rule

**Freshness intent** answers: what changed? when did it change? which entity changed? what was the previous state? what is the new state? what is the source? what should the user know or do? Examples: launch announcement, release status, maintenance, version update, availability change, network-wide announcement.

**Directory sorting** is a page that merely orders apps by "new," "latest," or "recently added" as a catalog UI behavior. This is not freshness authority and creates no conflict when it stays on YonoLink as sort/filter UI.

A domain publishing a "New Yono Games 2026"-style **article** (content-level freshness/news, as currently exists on AllYonoGuru) is freshness intent and belongs to AllYonoUpdate, or must be reworked into evergreen education if it stays elsewhere.

**AllYonoUpdate's shelved `_removed-pages` freshness architecture** (`latest-updates`, `update-archive`, `game-updates`, `app-updates`, `events-notices`) is the preferred restoration basis for this domain's identity — it already matches the assigned role better than the live directory/promo architecture, and the domain's own trust pages already describe it as if live. Restoration is subject to date/content re-verification before republishing (§31, §34 Phase 1) — it is not gated behind GSC/backlink evidence the way a redirect would be, because it is additive, not destructive.

---

## 11. AllYonoIndia.com — Localization Substance Rule

India-specific content means **substantive localization**, not merely inserting the word "India" into generic content.

**Potentially valid dimensions**, and the rule for each:

| Dimension | Rule |
|---|---|
| Verified availability/access in India | Ownable if directly observed |
| Authoritative legal/regulatory framework | Ownable if hedged and sourced (mirror WinRummyIndia's MeitY/PIB-sourced approach) |
| State restrictions | Ownable only where reliably sourced to an authoritative reference — current content is unsourced and internally contradictory and must not be extended as-is |
| India-specific payment support / UPI compatibility | Ownable if per-app verified |
| Platform-documented KYC | Ownable only if platform-documented — do not infer a legal requirement |
| Device/network/access observations | Ownable if actually tested |
| Responsible gaming resources | Ownable — low legal risk, high trust value, currently underused |
| Tax/TDS | Ownable only when properly sourced and reviewed |

**Hard rule: never invent** state legality, tax/TDS requirements, KYC requirements, or payment compatibility. If legal/financial facts are not verified, the classification is **DATA REQUIRED** — do not publish a placeholder-plausible answer.

**Entity + India deep content belongs to the entity specialist** where one exists (WinRummyIndia's own India-legal depth is the portfolio model, adopted here for all three current specialists). AllYonoIndia handles the portfolio-wide, cross-entity India context only.

---

## 12. AllYonoPatti.com — Category Eligibility Rule

AllYonoPatti.com owns: Teen Patti games; Teen Patti rules; Teen Patti hand rankings; Teen Patti terminology; Teen Patti variants; Teen-Patti-specific safety; Teen-Patti-specific legal awareness.

**Hard eligibility test for a dedicated entity/app page on this domain.** An entity qualifies only if:

1. Teen Patti is a primary/meaningful offering of that entity's product, **or**
2. the page specifically covers that entity's Teen Patti mode (e.g. "Win Rummy's Teen Patti table: rules and access" — narrow, mode-specific content is fine; a full generic entity profile is not).

**An app does NOT qualify merely because Teen Patti appears somewhere in a broad lobby.** Category-discovery content itself (rules, hand rankings, variants, terminology, safety, legal awareness) requires no per-entity gating and is always in scope.

**Structural requirement:** Teen Patti must become a first-class taxonomy/category in the CMS (`GameCategory`). This is currently missing entirely and is the structural blocker for this domain's identity — building it is not evidence-gated (§34 Phase 1).

---

## 13. AllYonoGuru.com — Education Boundary Rule

AllYonoGuru.com owns generic educational topics: how Yono games work; rules/mechanics; terminology; generic APK installation; Android permissions; general safety literacy; generic tutorials; neutral comparison methodology; generic skill-vs-chance literacy.

It must NOT own: entity authority; rankings/recommendations; current news; reward mechanics; current promo codes; referral lookup; India localization specifics; **Teen-Patti-specific deep education** (this belongs to AllYonoPatti, §12 — a meaningful, explicit distinction: AllYonoGuru teaches generic card/skill-game literacy, AllYonoPatti owns the Teen-Patti-specific deep dive).

---

## 14. Data Integrity Policy

Every data-integrity issue below was found during the 12-domain audit. This policy is written to prevent recurrence, on any domain, going forward.

**Explicitly prohibited, network-wide:**

- fabricated ratings;
- fabricated review counts;
- uniform placeholder statistics presented as real (e.g. an identical star rating or file size repeated across dozens of otherwise-distinct pages);
- fake APK size/version;
- fabricated promo codes;
- domain URLs mislabeled as promo codes;
- fake "last verified" dates;
- bulk-import dates displayed as if they were individual per-entry verification dates;
- `new Date()`-style sitemap freshness used to imply content actually changed;
- unsupported legal conclusions;
- trust pages claiming functionality that is not actually live (e.g. describing an archive/notice system as active when it is currently shelved).

**When a fact cannot be verified, use one of:** `UNKNOWN`, `NOT VERIFIED`, `DATA REQUIRED` — never an invented value, even a plausible-looking one.

**Named instances requiring correction (see §31 for which are cleared to fix immediately):**

- AllYonoOfficial.com: uniform 4.1★ rating (~58 pages), repeated 85 MB size field.
- YonoLink.co: identical `AggregateRating.ratingCount = 10000` across 55 pages.
- AllYonoUpdate.com: sitemap `lastmod` regenerated via `new Date()` on every build.
- AllYonoIndia.com: `/promo-code/` entries where a domain is stored as if it were a code; missing update timestamp; internally contradictory state-legality content referencing a Disclaimer page that does not exist.
- YonoMoreGames.com: bulk-identical `lastVerifiedAt`/`addedAt` timestamps across sampled entries.
- WinRummyIndia.com: `APP_FACTS` labeled "verified" while surrounding copy describes the same values as unverified platform claims; uniform placeholder identity facts stamped across all 51 Tier-3 pages; a known placeholder contact email alongside live, tracked affiliate links (mixed launch state); a "Customer Support Chat" label pointing to an unverified third-party domain.

---

## 15. Content Migration / Preservation Policy

**Existing content must not be deleted, redirected, noindexed, consolidated, or migrated solely because it conflicts strategically with the ownership map in this document.**

Before any destructive disposition, evaluate:

- GSC impressions;
- GSC clicks;
- ranking queries;
- backlinks and referring domains;
- historical traffic;
- destination-page readiness (does the intended owner have a page ready to receive this content/traffic?);
- whether the intended owner already ranks for the relevant query;
- whether the content can be reframed in place rather than removed.

**If this data is unavailable, the classification is DATA REQUIRED.** Do not guess, and do not treat architectural conflict alone as sufficient grounds for a destructive action.

This policy applies with particular force to the CONDITIONAL items in Section 4 that involve removing or redirecting an existing indexed URL — most notably WinRummyIndia's `/dhan-game/` and `/yono-arcade/`, and AllYonoArcade's `/all-games/win-rummy` and `/all-games/dhangame`.

---

## 16. URL Disposition Terminology (standardized)

Use exactly these classifications when recording a disposition decision for an existing URL:

- **KEEP**
- **KEEP + REFRAME**
- **CONSOLIDATE**
- **MIGRATE**
- **REDIRECT CANDIDATE**
- **NOINDEX CANDIDATE**
- **REMOVE ONLY AFTER DATA REVIEW**
- **DATA REQUIRED**

**A "CANDIDATE" label authorizes nothing.** "Redirect candidate" means a redirect may be the right eventual action once the evidence in Section 15 and Section 32 exists and, where applicable, a business decision in Section 33 has been made — it does not mean "redirect this URL." An implementing AI must never read a CANDIDATE label as an instruction and must never silently upgrade a CANDIDATE to an executed action.

This is a different framework from Section 17's page-creation decision process, which governs *new* pages, not the disposition of existing indexed URLs.

---

## 17. Page-Creation Decision Process (new pages)

Before publishing ANY new SEO page, perform this process.

**Step 1 — Identify Query.** Determine the exact primary target query.

**Step 2 — Identify Intent.** Classify it as: informational; navigational; commercial investigation; transactional/promo lookup; referral lookup; freshness/news; category; entity; localized.

**Step 3 — Check Domain Ownership.** Compare the intent against Section 2, Section 5, and Section 8.

**Step 4 — Search Existing Network Content.** Check whether another network page already owns the same query and intent.

**Step 5 — Decide.**

- **CREATE:** no conflicting page exists and the domain is the correct owner.
- **UPDATE:** a suitable page already exists on the correct domain.
- **REPOSITION:** the existing page has value but targets the wrong intent.
- **CONSOLIDATE:** multiple pages on the same site substantially duplicate each other.

Never automatically create a page based only on keyword similarity to an existing one elsewhere in the portfolio.

---

## 18. Cross-Domain Linking Rules

Contextual cross-domain links are allowed when useful to the visitor. Preferred patterns:

- YonoLink → entity specialist (for full depth)
- Entity specialist → YonoMoreGames (for referral lookup)
- Entity specialist → AllYonoReward (for reward mechanics)
- Entity specialist → AllYonoUpdate (for dated ecosystem news, where relevant)
- AllYonoIndia → entity specialist (for entity+India depth)
- AllYonoPatti → qualifying entity specialist (only where the Teen-Patti-relevance threshold in §12 is met)
- AllYonoOfficial comparisons → relevant entity specialist sources (rather than re-hosting facts)

**Do NOT create:** a sitewide reciprocal footer link network across all domains; mass exact-match cross-domain links; a link-wheel architecture; a pattern of placing links to every owned domain on every page.

Where cross-domain references are useful, use natural, descriptive-anchor contextual linking, not exact-match keyword stuffing.

---

## 19. Title Tag Rules

Every indexable page must have a unique title aligned with its assigned intent. Avoid repeating the same title formula across the network.

BAD (the exact anti-pattern found in the audits — the same formula reused per-brand across domains):

```text
Yono Arcade APK Download 2026 | ₹500 Bonus | Promo Code
Win Rummy APK Download 2026 | ₹500 Bonus | Promo Code
DhanGame APK Download 2026 | ₹500 Bonus | Promo Code
```

Titles should accurately describe the specific page's purpose. Do not stuff keywords. Do not add claims not supported by the page.

---

## 20. Meta Description Rules

Each important indexable page needs a useful, page-specific meta description. Do not: copy descriptions across domains; merely swap the game name; stuff every keyword variation; use unverifiable bonus claims; manufacture urgency. Describe the page's actual value.

---

## 21. H1 / Heading Rules

Use one clear primary H1 reflecting the page's purpose. Subheadings must build the assigned topic. Templates may provide structural consistency, but content architecture should follow actual intent — not the same H2 sequence (Download → What Is → Features → Bonus → Promo Code → How to Download → FAQ) regardless of the page's real purpose.

---

## 22. Content Quality Rules

Every important page should provide original value: first-hand verification, screenshots, original comparisons, structured data, unique explanations, update history, troubleshooting, testing results, compatibility details, clearly sourced facts, meaningful editorial analysis. Do not generate pages solely because a keyword exists. Do not create hundreds of near-identical programmatic pages without meaningful unique value — this is the exact pattern found in the seven-domain promo-code duplication (§8) and WinRummyIndia's 51-page Tier-3 template (§4, §6).

---

## 23. E-E-A-T / Trust Rules

Where appropriate, clearly show: site purpose; About page; Contact page; editorial policy; correction policy; author/editor information; update dates; sources where factual claims require support; privacy policy; terms; disclaimer; responsible gaming information where relevant.

Do not misrepresent an independent site as an official operator if it is not official. The word "Official" in a domain name must not be used to make false affiliation claims.

Trust pages must describe **currently live** functionality only — do not describe a shelved or planned system (e.g. an archive/notice system) as if it were active (§14).

---

## 24. Structured Data Rules

Use structured data only when the visible page genuinely supports it. Potential types: Organization; WebSite; BreadcrumbList; Article/BlogPosting; FAQPage only where appropriate and compliant; other supported schema relevant to actual content.

**Do not fabricate ratings, review counts, authors, prices, availability, or business relationships in schema.** This is a direct, elevated restatement of a finding repeated across multiple audits (§14) — validate structured data after any implementation.

---

## 25. Canonicalization

Every indexable page should normally have a valid self-referencing canonical unless there is a deliberate reason otherwise. Audit: HTTP vs HTTPS; www vs non-www; trailing slash variants; parameter URLs; duplicate archives; tag/category duplication; pagination; duplicate WordPress paths.

**Cross-domain canonicalization must NOT be used merely because two network sites target similar keywords** — this is not a substitute for the ownership and disposition work in Sections 2–17.

---

## 26. Indexability

For each intended SEO landing page, verify: HTTP 200; no accidental `noindex`; crawlable; not blocked by robots.txt; correct canonical; included in the appropriate XML sitemap; internally linked; useful content present; not a soft 404; mobile accessible. Do not assume a page is indexable merely because it loads in a browser.

---

## 27. XML Sitemaps

Each domain should maintain clean XML sitemaps containing canonical, indexable URLs. Do not include: redirects; 404s; noindex URLs; parameter duplicates; staging URLs; noncanonical duplicates. Submit/monitor through Google Search Console. `lastmod` values must reflect genuine content changes, not build timestamps (§14).

---

## 28. Robots.txt

Audit robots.txt on every domain. Ensure critical CSS, JS, content, and indexable sections are not accidentally blocked. Robots.txt is NOT a replacement for `noindex`.

---

## 29. llms.txt

Reported missing on: AllYonoArcade.com, AllYonoReward.com, AllYonoPatti.com, UonoVoucher.com, YonoLink.co, AllYonoUpdate.com, WinRummyIndia.com, DhanGame.co, YonoMoreGames.com.

Implement where desired for AI-discovery experimentation and network consistency. **Do not treat llms.txt as a Google ranking factor or as the solution to keyword cannibalization.** This work is explicitly last-priority (Phase 5, §34) — the ownership, integrity, and architecture work in this document must land first.

---

## 30. Performance Priority

| Priority | Domain | Mobile | Notes |
|---|---|---:|---|
| Critical | YonoLink.co | 65 | CWV FAILED |
| High | UonoVoucher.com | 71 | Needs optimization |
| High | AllYonoUpdate.com | 75 | Needs optimization |
| High | DhanGame.co | 76 | Needs optimization |
| Medium | AllYonoArcade.com | 80 | Improve |
| Medium | AllYonoOfficial.com | 84 | Improve |
| Medium | AllYonoReward.com | 85 | Improve |
| Medium | AllYonoIndia.com | 86 | Improve |
| Medium | AllYonoGuru.com | 86 | Improve |
| Low | WinRummyIndia.com | 93 | Maintain |
| Low | AllYonoPatti.com | 96 | Maintain |
| Low | YonoMoreGames.com | 99 | Maintain |

Do not sacrifice UX or functionality merely to chase a perfect Lighthouse number. Focus especially on real-user Core Web Vitals. This work is independent of the ownership/architecture reconciliation and may proceed in parallel (Phase 5, §34) without waiting on it.

---

## 31. Current P0 Integrity Actions (safe to fix prior to migration)

These are factual/integrity corrections, not destructive SEO restructuring. They do not require GSC/backlink review and are cleared to begin immediately, independent of the evidence-gathering in Section 32:

1. **AllYonoOfficial.com:** correct or remove the uniform 4.1★ rating and the repeated 85 MB placeholder-like field (§9, §14).
2. **YonoLink.co:** correct or remove the identical `AggregateRating.ratingCount = 10000` across 55 pages (§14).
3. **AllYonoIndia.com:** correct the internally contradictory legal/state-list content and the reference to a nonexistent Disclaimer page — correct toward hedged, sourced framing; do not delete a possibly-ranking page outright (§11, §14, §15).
4. **AllYonoUpdate.com:** correct trust pages that currently describe the shelved archive/notice system as if it were live (§10, §23).

Also safe to begin immediately, being additive/structural rather than destructive: freezing further growth of AllYonoArcade's `/all-games/[slug]` and WinRummyIndia's `[platform].astro` output (§4); adding the Teen Patti taxonomy category on AllYonoPatti (§12); adding India-dimension CMS fields on AllYonoIndia (§11); and beginning DhanGame.co's entity-architecture build-out (§4).

---

## 32. GSC / Backlink Data Requirements (before Phase 2/3 destructive implementation)

For every URL/template marked CONSOLIDATE, MIGRATE, REDIRECT CANDIDATE, NOINDEX CANDIDATE, or REMOVE ONLY AFTER DATA REVIEW anywhere in this document, collect before acting:

- GSC page impressions;
- GSC page clicks;
- top queries;
- average position;
- indexing status;
- backlinks;
- referring domains.

For major entity collisions, additionally compare **destination-domain** performance before any redirect. Named priority items:

- WinRummyIndia.com `/dhan-game/` (vs. DhanGame.co)
- WinRummyIndia.com `/yono-arcade/` (vs. AllYonoArcade.com)
- AllYonoArcade.com `/all-games/win-rummy` (vs. WinRummyIndia.com)
- AllYonoArcade.com `/all-games/dhangame` (vs. DhanGame.co)
- YonoLink.co's DhanGame article (vs. DhanGame.co)
- AllYonoIndia.com `win-rummy-india-guide` (vs. WinRummyIndia.com)
- DhanGame.co's own current entity URL (baseline, to know what exists today)

**Do not prescribe or execute final redirects until this data exists.** Where it does not exist in this session or any future one, the classification remains DATA REQUIRED (§15, §16).

---

## 33. Unresolved Portfolio Decisions

These are visible, standing decisions that this specification does **not** resolve by assumption. An implementing AI encountering any of these must treat them as open, not as settled by default:

1. **Generic "Yono promo code" ownership** — no domain currently earns it (§8.3); Option A vs. Option B vs. no centralized owner is a business decision.
2. **Fate of WinRummyIndia's 27 fully off-portfolio Tier-3 brands** (slots/casino/betting/bingo) — entirely outside the 12-domain master ownership map; requires a business decision on whether they belong anywhere in this portfolio.
3. **Fate of WinRummyIndia's 17 unrelated rummy-brand Tier-3 pages** — category-adjacent to AllYonoPatti at most, not assigned to any current domain; most would likely fail the Teen-Patti-relevance threshold in §12 since they are Rummy, not Teen Patti.
4. **Fate of DhanGame.co's 51 non-DhanGame brand pages** — some may have independent ranking/traffic value unrelated to DhanGame and could plausibly redistribute to YonoLink rather than simply being removed; requires GSC data (§32).
5. **UonoVoucher.com's `/vouchers/` product classification** — needs clarification against referral/access behavior before disposition.
6. **AllYonoPatti's final architecture preference** — a self-contained Teen-Patti category index vs. a bridge/index relationship with YonoLink for Teen-Patti-relevant entities. A minor architectural preference, not settled by the audits.

Do not resolve any of these by assumption, convenience, or architectural tidiness. Escalate to a human for a decision.

---

## 34. Implementation Phases

### Phase 0 — Integrity Corrections and Growth Freezes
Section 31's four named corrections; freeze further growth of AllYonoArcade's `/all-games/[slug]` and WinRummyIndia's `[platform].astro` output pending Phase 2 evidence.

### Phase 1 — Build Missing Target Architecture (non-destructive)
Work that is additive and does not require removing or redirecting any existing URL:
- DhanGame.co entity architecture (download/APK/login/safety), modeled on WinRummyIndia's Tier-1 structure.
- AllYonoOfficial.com evaluation methodology (§9).
- AllYonoPatti.com Teen Patti taxonomy category (§12).
- AllYonoIndia.com localization CMS schema (§11).
- AllYonoUpdate.com freshness architecture restoration, with date/content re-verification (§10).
- AllYonoReward.com cashback/VIP-loyalty content gaps.
- YonoMoreGames.com generic "Yono referral code" aggregator/explainer page.

### Phase 2 — Collect GSC/Backlink Evidence and Resolve URL Disposition
Execute Section 32 for every URL currently marked CONSOLIDATE, MIGRATE, REDIRECT CANDIDATE, NOINDEX CANDIDATE, or REMOVE ONLY AFTER DATA REVIEW across every domain block in Section 4. Resolve the business decisions in Section 33 where the business is ready to decide. Convert CANDIDATE labels to confirmed dispositions only once evidence (and, where applicable, a business decision) exists.

### Phase 3 — Execute Approved Migrations
Only dispositions confirmed in Phase 2 — never a CANDIDATE label read as a command (§16) — including the directory-layer and promo-code-layer consolidations across the nine and seven affected domains respectively, and the named entity-conflict resolutions (`/dhan-game/`, `/yono-arcade/`, `/all-games/win-rummy`, `/all-games/dhangame`).

### Phase 4 — Build New Supporting Authority Content
New content that depends on Phase 1–3 having landed: AllYonoOfficial's actual comparison/ranking content (only after its methodology exists and the directory cleanup has happened, so new content isn't competing with leftover directory pages); expanded India-specific content on AllYonoIndia (only after CMS fields and legal sourcing exist); expanded Teen Patti entity coverage on AllYonoPatti (only after the taxonomy and relevance-triage work has happened).

### Phase 5 — Performance, CWV, and Technical Enhancement
Section 30's performance priorities and `llms.txt` implementation (§29) — independent of the above and safe to run in parallel throughout, but deliberately lowest-priority relative to the intent-ownership work.

---

## 35. Governance QA Checklist

Before marking any domain's positioning work complete, verify:

- [ ] The domain has exactly one primary identity (Section 4).
- [ ] The domain has exactly one primary search intent.
- [ ] Homepage title, meta description, and H1 all support the assigned intent.
- [ ] Opening content explains the domain's unique purpose.
- [ ] Navigation supports the topical architecture, not a generic directory.
- [ ] Generic YONO-directory language has been reduced where inappropriate (Section 7).
- [ ] Any entity content stays within the modifier-ownership boundaries in Section 5.
- [ ] No non-owner entity page, download funnel, or login/support silo exists for an entity assigned elsewhere (Section 6).
- [ ] No fabricated data exists per Section 14.
- [ ] Existing high-value rankings were reviewed before any change (Section 15).
- [ ] No CANDIDATE-labeled disposition was executed without the evidence in Section 32 (Section 16).
- [ ] Internal links follow Section 18, with no reciprocal footer network.
- [ ] Canonicals, sitemap, robots.txt, and indexability were checked (Sections 25–28).
- [ ] Structured data was validated and contains no fabricated fields (Section 24).
- [ ] Any relevant Unresolved Portfolio Decision (Section 33) was left open, not silently resolved.
- [ ] Changes were documented per Section 36.

---

## 36. Required Report After Each Domain Action

```text
DOMAIN:
ACTION TYPE: (Phase 0 integrity / Phase 1 build / Phase 2 evidence-gathering / Phase 3 migration / Phase 4 new content / Phase 5 performance)
ASSIGNED ROLE:
PRIMARY KEYWORD:
PRIMARY INTENT:

CHANGES COMPLETED:
- ...

HOMEPAGE (if touched):
Title:
Meta Description:
H1:

DISPOSITIONS APPLIED (must cite the evidence that authorized each one, per §32):
- URL -> Disposition -> Evidence cited

DISPOSITIONS STILL CANDIDATE (not yet executed, and why):
- ...

UNRESOLVED PORTFOLIO DECISIONS TOUCHED (§33):
- ...

DATA INTEGRITY ITEMS FIXED (§14):
- ...

TECHNICAL ISSUES:
- ...

INTERNAL LINKING:
- ...

REQUIRES HUMAN REVIEW:
- ...

FINAL STATUS: PASS / PARTIAL / FAIL
```

Do NOT return only "Done." Provide evidence of what was changed and what remains gated.

---

## 37. AI Assistant Safety Rules for This Project

The implementing AI MUST NOT:

1. Change the assigned primary intent without approval.
2. Turn a specialist domain into a generic YONO directory.
3. Copy content from another network domain.
4. Generate doorway pages merely to capture keyword variations.
5. Create hundreds of near-identical pages.
6. Invent promo codes, bonuses, ratings, reviews, statistics, dates, or claims (§14).
7. Claim a site is officially affiliated with an operator without evidence.
8. Add cross-domain canonicals as a shortcut for positioning problems.
9. Mass-redirect URLs without reviewing rankings and relevance (§32).
10. Remove ranking pages without checking GSC/backlinks (§15).
11. Change existing URLs unnecessarily.
12. Stuff exact-match keywords.
13. Add every owned domain to every site's footer for SEO manipulation (§18).
14. Treat `llms.txt` as a replacement for technical SEO (§29).
15. Mark implementation complete without validation.
16. **Silently assign ownership of an item marked OWNERSHIP UNRESOLVED or DATA REQUIRED to any domain**, including the architecturally "convenient" one (§7, §33).
17. **Treat a REDIRECT CANDIDATE, NOINDEX CANDIDATE, CONSOLIDATE, or MIGRATE label as an executed instruction** (§16).
18. **Build or extend an entity profile, download funnel, or login/support silo for an entity assigned to a different specialist** (§6).

If uncertain, the AI must preserve the existing page and flag it for human review rather than making a destructive change.

---

## 38. Network Success State

The project is complete only when the network communicates the following clearly:

```text
YonoLink
└── ALL YONO GAMES / DIRECTORY

AllYonoOfficial
└── BEST YONO GAMES / REVIEWS / RECOMMENDATIONS (conditional on methodology, §9)

AllYonoIndia
└── YONO GAMES INDIA (conditional on localization substance, §11)

AllYonoGuru
└── GUIDES / EDUCATION / EXPLANATIONS

AllYonoUpdate
└── LATEST UPDATES / NEW INFORMATION

AllYonoReward
└── REWARDS / BONUSES EXPLAINED

UonoVoucher
└── UONO PROMO CODES / VOUCHERS (not generic Yono, §0)

YonoMoreGames
└── REFERRAL / INVITE CODES

AllYonoArcade
└── YONO ARCADE

AllYonoPatti
└── TEEN PATTI (conditional on taxonomy, §12)

WinRummyIndia
└── WIN RUMMY (conditional on Tier-3 resolution, §32)

DhanGame
└── DHANGAME (conditional on full rebuild, §4)

Generic "Yono promo code"
└── OWNERSHIP UNRESOLVED — BUSINESS DECISION REQUIRED (§8.3, §33)
```

The network must behave as a portfolio of specialized resources, NOT twelve versions of the same website — and one open question (generic promo-code ownership) remains visibly open rather than quietly defaulted.

---

## 39. Final Instruction to Implementing AI

**Do not optimize blindly.**

Before modifying any existing page:

1. Understand its current purpose.
2. Identify its current target queries.
3. Compare them with Sections 2, 4, 5, and 8.
4. Preserve valuable rankings where possible (Section 15).
5. Reposition only where a confirmed conflict exists.
6. Maintain technical SEO integrity.
7. Verify the result after implementation.

When a requested change could damage an existing ranking, URL, backlink profile, indexation state, or conversion path, flag it for review instead of making an irreversible change. When an item is marked CONDITIONAL, DATA REQUIRED, or OWNERSHIP UNRESOLVED, treat that as a hard stop, not a placeholder to fill in with best judgment.

**Primary objective: eliminate search-intent conflict while preserving existing SEO equity, building clear topical authority for every domain, and never converting a provisional recommendation into an executed action without the evidence this document requires.**
