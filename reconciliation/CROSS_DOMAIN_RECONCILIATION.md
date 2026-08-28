# YONO Portfolio — Cross-Domain SEO Reconciliation

**Status:** RECONCILIATION ONLY — no repository, metadata, sitemap, canonical, or navigation changes have been made anywhere in the portfolio as part of this report.
**Inputs read in full:** `YONO_SEO_POSITIONING_MASTER_SPEC.md` (v1.0) and all 12 domain audits via `ALL_AUDITS_COMPILED.md`.
**Inputs NOT available this session:** live GSC/Ahrefs/backlink/traffic data for any of the 12 domains; the individual `audits/0X-*.md` files (only the compiled version exists on disk — content is identical in substance, confirmed by file inspection).

---

## 1. Executive Portfolio Diagnosis

The portfolio has one master spec and twelve domains, and eleven of the twelve currently deviate from their assigned identity in the same three ways:

1. **Directory scope creep.** Nine of the twelve domains (AllYonoArcade, DhanGame, AllYonoOfficial, AllYonoReward, AllYonoGuru, AllYonoUpdate, AllYonoIndia, AllYonoPatti, WinRummyIndia) operate a 50–60-page "all Yono platforms" grid that duplicates YonoLink's assigned master-directory role. On three domains (DhanGame, AllYonoGuru, WinRummyIndia) this directory layer is not a side feature — it **is** the majority of the indexed site.
2. **Duplicate promo-code product.** Seven domains (YonoLink, AllYonoArcade, AllYonoReward, AllYonoGuru, AllYonoUpdate, AllYonoIndia, AllYonoPatti) run a near-identical 50–55-page AM/PM/EVE promo-code database for generic "Yono" games. This is the single most severe Rule-4/Rule-5/Section-12 violation in the portfolio: the same product, same code cadence, same page shape, reproduced seven times. An eighth domain, UonoVoucher, runs the only *honest, differentiated* version of this product — but for a different brand (Uono, not Yono) than the master spec assigned it.
3. **Cross-entity trespass among the entity specialists.** WinRummyIndia (57% of its indexed pages) and AllYonoArcade (via `/all-games/[slug]`) each independently host live, monetized profile pages for entities assigned to *other* specialist domains — most seriously `/dhan-game/` and `/yono-arcade/` on WinRummyIndia.com, and `/all-games/win-rummy` and `/all-games/dhangame` on AllYonoArcade.com. This is the highest-severity finding across all twelve audits: portfolio domains are not just drifting toward generic territory, they are actively building monetized pages for each other's assigned brands.

Set against this, four domains are genuinely close to their assigned role already and need refinement, not reconstruction: **YonoLink** (master directory — earns it), **YonoMoreGames** (referral lookup — earns it, cleanest domain in the portfolio), **UonoVoucher** (promo/voucher lookup — earns it, but for Uono not Yono), and **WinRummyIndia's Tier-1 content** (~39 pages — the single best-executed entity-authority content in the portfolio, undermined by its own Tier-3 architecture).

Three domains have a genuinely strong, differentiated content core buried under an off-mission architecture that a straightforward pruning/rebalancing (not a rebuild) would fix: **AllYonoReward** (12 reward-mechanics pages vs. 110 directory/promo pages), **AllYonoGuru** (16 educational posts vs. a self-declared "Yono Game All" directory homepage), **AllYonoPatti** (10 Teen Patti guides vs. a 55-entry Rummy/Slots/Spin directory with no Teen Patti taxonomy category at all).

Two domains require the most substantial rework: **DhanGame.co**, whose entire homepage and architecture is a generic 52-app directory with almost no DhanGame-specific content, and **AllYonoOfficial.com**, whose assigned "best Yono games" identity is not represented anywhere in the live architecture and whose one candidate differentiator (a uniform, unsourced 4.1★ rating on 58 pages) is itself a data-integrity liability that must be fixed before, not after, the commercial-investigation identity can be trusted.

One domain has a structural conflict with the master spec itself, not with its own architecture: **AllYonoUpdate.com**, which already contains a shelved (`_removed-pages`) architecture that matches its assigned freshness role far better than its current live directory/promo pages — this is a repository fact the master spec's authors likely didn't have visibility into, and it changes the recommended action from "build new" to "restore and promote existing."

One keyword assignment in the master spec is **directly contradicted by repository evidence**: `UonoVoucher.com` → `Yono promo code`. The site's own content distinguishes Uono from Yono and warns users not to confuse them. Per this task's explicit instruction, this is not force-corrected to match the old spec; it is reconciled below as UNRESOLVED for the generic term, RESOLVED (UonoVoucher) for the Uono-specific term.

**Bottom line:** the portfolio's biggest problem is not that domains lack a role — every domain in the master spec has a plausible, differentiated role and at least a partial content foundation for it. The problem is that eleven of twelve domains still carry a second, larger, unrelated site (a directory, a promo database, or someone else's entity page) bolted onto that foundation. Reconciliation is fundamentally a **subtraction** exercise — removing/migrating the off-mission majority — more than an invention exercise.

---

## 2. Current Reality Matrix

| Domain | Current repository-evidenced identity | Current dominant keyword | Current dominant intent | Master-spec identity | Master-spec keyword | Identity match? | Strongest existing asset | Largest current conflict | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| **YonoLink.co** | Master YONO directory — genuinely earned | all Yono games | Directory / navigational | Master YONO Game Directory | all Yono games | **YES** | `/` + `/app` 55-app catalog, disciplined directory-depth entity profiles | `/promo-codes` generic promo product; `/games` internally duplicates `/app`; 2 posts drift into AllYonoOfficial/DhanGame territory | High |
| **AllYonoOfficial.com** | 60-app download/bonus directory | generic app download/bonus (not "best Yono games") | Directory / transactional | Commercial Investigation / Rankings | best Yono games | **NO** | Trust/safety cluster (scam awareness, entity-verification journalism) — unique in portfolio | Homepage + `/most-rated-apps/` + category pages duplicate YonoLink; uniform unsourced 4.1★ on ~58 pages blocks a credible review identity | High |
| **AllYonoIndia.com** | Generic All-Yono APK/download/promo directory with thin, partly-contradictory India-legal layer | generic Yono APK download (India appended decoratively) | Directory / transactional | India-Specific YONO Hub | Yono games India | **NO** | `win-rummy-india-guide` (also its clearest conflict) + handful of genuine legal/India posts | `/all-yono-games/` 55-page directory; CMS has no fields for India dimensions (UPI/KYC/TDS/state); internal legal contradiction referencing a nonexistent Disclaimer state-list | High |
| **AllYonoGuru.com** | Self-declared "Yono Game All" directory/download property with a buried educational core | generic Yono game download/directory | Directory / transactional | Educational / Knowledge Authority | Yono game guide | **NO** | ~16 genuinely authored educational posts (rummy/Teen Patti rules, Android permissions, skill-vs-chance legal literacy) | 57-app showcase + 43+ download pages + full promo product; `AppEntry.primaryDomain`/`SIBLING_URLS` routing mechanism exists but is disabled | High |
| **AllYonoUpdate.com** | Live = directory/APK portal + promo database; shelved `_removed-pages` = matching freshness architecture | generic Yono APK/download/promo (live) | Directory / transactional (live) | Freshness / News Authority | Yono game updates | **NO (live) / YES (shelved)** | Win Rummy launch-status article, DhanGame launch guide, shelved `latest-updates`/`update-archive`/`game-updates` architecture | Homepage + `/all-yono-games/` + 8 APK hubs duplicate YonoLink; `/promo-code-updates/` duplicates promo territory; trust pages describe the shelved system as if live (E-E-A-T mismatch) | High |
| **AllYonoReward.com** | Directory (55) + promo database (55) + rewards education (12) hybrid | mixed; architecturally generic games/promo, editorially rewards | Mixed transactional/informational | Rewards / Bonus Education | Yono game rewards | **PARTIAL** | `/rewards` + `/rewards/[slug]` ×12 — genuine mechanics education | `/games` ×55 duplicates YonoLink; `/promo-codes` ×55 duplicates promo territory; 110 off-mission URLs vs. 12 on-mission | High |
| **UonoVoucher.com** | Uono / Uono Play promo-code & voucher authority — genuinely earned, for a different brand | Uono promo code / Uono voucher | Promo lookup (transactional) | Promo Code / Voucher Database | Yono promo code | **DISPUTED** | Manually reviewed code records, real status/dates, no fabrication, corrections infrastructure | The master-spec keyword itself doesn't match the repo brand; secondary: homepage/`/uono-games/` can read as a mini-directory | High on Uono≠Yono; Medium on portfolio resolution |
| **YonoMoreGames.com** | Referral/access-code lookup directory — genuinely earned, cleanest domain in portfolio | `{platform} referral code` ×55 (no single generic page) | Referral / navigational | Referral Code / Access Directory | Yono referral code | **YES (in substance)** | `/platform/[slug]` ×55 clean referral templates; bonus/reward language deliberately banned | `/platform` grid is visually directory-shaped (mild YonoLink ambiguity); generic head term has no dedicated landing page | High |
| **AllYonoArcade.com** | Yono Arcade entity core + 50-platform directory + generic promo product | Yono Arcade (core) diluted by "all Yono games" grid | Entity/navigational, diluted by directory/transactional | Yono Arcade Entity Authority | Yono Arcade | **PARTIAL** | Entity core: `/`, `/download`, `/game-apk`, `/pure-apk`, `/mall`, `/login`, `/customer-care`, `/is-yono-arcade-safe` | `/all-games/[slug]` ×50 + `/promo-codes`; direct entity conflicts `/all-games/win-rummy`, `/all-games/dhangame` | High |
| **AllYonoPatti.com** | Generic 55-platform directory + 55-page promo product + generic rewards, with a strong Teen Patti guide cluster attached | generic Yono platform names (not "Teen Patti games") | Directory/transactional, genuine informational minority | Teen Patti Category Authority | Teen Patti games | **NO (structurally)** | `/guides` — 10 deep, accurate Teen Patti rules/terminology/variant guides | `/games` ×55 (no "Teen Patti" category exists in the data model) + `/promo-codes` ×55 + `/rewards` (generic) | High |
| **WinRummyIndia.com** | Tier-1 (43% of pages) = best-in-portfolio Win Rummy entity authority; Tier-3 (57%) = undisclosed 51-brand gambling affiliate directory | By page count, NOT Win Rummy — 51/90 sitemap URLs are unrelated brands | Split: Tier-1 entity/informational (excellent); Tier-3 transactional/affiliate (off-mission) | Win Rummy Entity Authority | Win Rummy | **PARTIAL / AT RISK** | Tier-1 claims-vs-facts entity core (~39 pages) — most disciplined, best-sourced content in the portfolio | `[platform].astro` generates `/dhan-game/` (conflicts DhanGame.co) and `/yono-arcade/` (conflicts AllYonoArcade.com), plus 6 more Yono-brand pages and 27 fully unassigned gambling brands, all affiliate-monetized | High (most rigorous of the 12 audits) |
| **DhanGame.co** | Generic 52-app directory — near-copy of the YonoLink pattern | none specific — generic "gaming apps directory" | Directory / transactional | DhanGame Entity Authority | DhanGame | **NO** | Domain name itself + bespoke `win-rummy-vs-dhan-game` comparison post | 51/52 listings unrelated to DhanGame; DhanGame's own entity page is a thin template; no download/APK/login/promo/rewards/updates/safety/support architecture exists | High |

---

## 3. Cross-Domain Conflict Matrix

### 3.1 Intent × current-owner overview

| Intent | Current owner(s) observed | Severity of overlap | Provisional single owner | Note |
|---|---|---|---|---|
| Master directory / all Yono games | YonoLink (intended) **+ 9 others via scope creep** | **CRITICAL** | YonoLink.co | Worst duplication pattern by page count in the portfolio |
| Entity authority (Yono Arcade / DhanGame / Win Rummy) | Intended specialists **+ each other** (WinRummyIndia hosts DhanGame & Arcade; AllYonoArcade hosts Win Rummy & DhanGame) | **CRITICAL** | AllYonoArcade / DhanGame.co / WinRummyIndia respectively | Direct entity trespass, not just adjacency |
| APK / download | Entity specialists (intended) + YonoLink, AllYonoOfficial, AllYonoGuru, AllYonoIndia, AllYonoUpdate, AllYonoReward, AllYonoPatti, AllYonoArcade (all via directory layers) | **HIGH** | Entity specialists for named brands; YonoLink for directory-depth listing only | Same page shape (APK/download box) reproduced across ~8 domains |
| Login / access | Entity specialists (intended) + same directory layers as above | **MEDIUM** | Entity specialists | Lower query volume than APK/download but same duplication mechanism |
| Promo-code lookup | UonoVoucher (Uono only, honest) + YonoLink, AllYonoArcade, AllYonoReward, AllYonoGuru, AllYonoUpdate, AllYonoIndia, AllYonoPatti (generic Yono, all off-mission) | **CRITICAL** | Uono promo code → UonoVoucher (resolved). Generic Yono promo code → **UNRESOLVED** | See Section 7 |
| Referral / invite-code lookup | YonoMoreGames (intended, clean) | **LOW** | YonoMoreGames.com | No material conflict found |
| Rewards / bonus mechanics | AllYonoReward (intended) + promo-code layers on 6 other domains blur into this | **MEDIUM** | AllYonoReward.com | Boundary blur is with promo-code product, not a second rewards claimant |
| Freshness / news / updates | AllYonoUpdate (intended, but live architecture doesn't deliver it) + implicit "new/latest" labels on AllYonoGuru, AllYonoOfficial listings | **MEDIUM** | AllYonoUpdate.com (once its shelved architecture is restored) | Entity specialists' own evergreen "recheck" content is a distinct, compatible intent — not a conflict |
| India localization | AllYonoIndia (intended, not yet earned) + WinRummyIndia's genuine India-legal depth + YonoLink/AllYonoOfficial/AllYonoGuru mentioning India incidentally | **HIGH** | AllYonoIndia for cross-entity/portfolio-wide India layer; entity specialists for entity+India depth | `win-rummy-india-guide` vs. WinRummyIndia's core premise is the sharpest single collision |
| Teen Patti | AllYonoPatti (intended, no taxonomy support yet) + Teen Patti content fragments on AllYonoGuru (hand-ranking/joker-rule posts) | **MEDIUM** | AllYonoPatti.com | AllYonoGuru's Teen-Patti-specific posts should migrate/consolidate here (see §14) |
| Educational / how-to | AllYonoGuru (intended) + generic install/safety guides duplicated on WinRummyIndia (`/app-verification/`), AllYonoIndia, AllYonoOfficial blog | **MEDIUM** | AllYonoGuru.com | WinRummyIndia's own audit flags its `/app-verification/` guides as closer to AllYonoGuru's role |
| Safety / trust | Every entity specialist owns entity-specific safety (fine); AllYonoOfficial owns cross-portfolio scam/trust journalism (unique) | **LOW** | Entity-specific → specialists; cross-portfolio → AllYonoOfficial | Genuinely complementary, not competing |
| Reviews / rankings / commercial investigation | AllYonoOfficial (intended, not yet earned) + WinRummyIndia's self-limited `/win-rummy-review/` | **MEDIUM** | AllYonoOfficial.com (scored/comparative) + entity specialists (fact-based, non-scored) can coexist | See §13 boundary |
| Comparison | AllYonoOfficial (intended) + bespoke one-off comparison posts on YonoLink, AllYonoArcade, DhanGame (`win-rummy-vs-*`) | **LOW–MEDIUM** | AllYonoOfficial for general "best X" comparison; entity-specialist-hosted single comparisons are acceptable if bespoke and framed for that domain's own audience (Rule 3 pattern) | Only a conflict if the same comparison text/structure is reused across domains |
| Game/category discovery | YonoLink (general) + AllYonoPatti (Teen Patti category, not yet earned) | **MEDIUM** | YonoLink for general; AllYonoPatti for Teen-Patti-specific category discovery | Same fix as master-directory row — AllYonoPatti's `/games` needs to become category-scoped, not general |

### 3.2 Named highest-severity collisions

| # | Domain A | Domain B | Query / intent | Current owner(s) | Why they collide | Severity | Provisional winner | Reason |
|---|---|---|---|---|---|---|---|---|
| 1 | WinRummyIndia.com | DhanGame.co | "DhanGame" entity authority | Both (WinRummyIndia via `/dhan-game/`, live affiliate link) | `[platform].astro` template mechanically generated a DhanGame profile with an external affiliate URL not pointing to DhanGame.co | **CRITICAL** | DhanGame.co | Master spec explicitly assigns DhanGame entity ownership to DhanGame.co; WinRummyIndia's own audit calls this "the single clearest entity-ownership conflict found" |
| 2 | WinRummyIndia.com | AllYonoArcade.com | "Yono Arcade" entity authority | Both (WinRummyIndia via `/yono-arcade/`) | Same templated-directory mechanism as #1 | **CRITICAL** | AllYonoArcade.com | Master spec explicitly assigns Yono Arcade to AllYonoArcade.com |
| 3 | AllYonoArcade.com | WinRummyIndia.com | "Win Rummy" entity authority | Both (AllYonoArcade via `/all-games/win-rummy`) | AllYonoArcade's directory layer profiles Win Rummy | **HIGH** | WinRummyIndia.com | Mirror image of #2; AllYonoArcade's own audit rates this a "direct cross-domain conflict" |
| 4 | AllYonoArcade.com | DhanGame.co | "DhanGame" entity authority | Both (AllYonoArcade via `/all-games/dhangame`, plus a full blog post `dhangame-promo-code-bonus-guide`) | Same mechanism as #1, doubled by a dedicated blog article | **HIGH** | DhanGame.co | Same reasoning as #1 |
| 5 | Seven domains (YonoLink, AllYonoArcade, AllYonoReward, AllYonoGuru, AllYonoUpdate, AllYonoIndia, AllYonoPatti) | — (mutual) | "Yono promo code" / current-code lookup | All seven, near-identical AM/PM/EVE structure | Same product concept (time-gated code lookup) independently reproduced on 7 domains, none of which is the master-spec-assigned owner | **CRITICAL** | **UNRESOLVED** (see §7) | No domain has an honest, non-scope-creep, non-empty version of this product for Yono specifically |
| 6 | Nine domains (all except YonoLink, YonoMoreGames, UonoVoucher) | YonoLink.co | "all Yono games" / general directory | YonoLink (intended) + 9 scope-creep copies | Independently-built 50–60 page grids replicate YonoLink's core function | **CRITICAL** | YonoLink.co | Confirmed by both master spec and every audit's own verdict |
| 7 | AllYonoIndia.com | WinRummyIndia.com | "Win Rummy India" | Both (`win-rummy-india-guide` vs. WinRummyIndia's entire premise) | AllYonoIndia built full entity-plus-India depth on a query WinRummyIndia was assigned to own | **HIGH** | WinRummyIndia.com (deep); AllYonoIndia keeps a brief cross-reference | WinRummyIndia audit's own provisional call, echoed by AllYonoIndia's "key boundary" finding |
| 8 | AllYonoOfficial.com | WinRummyIndia.com | "Win Rummy official website" / official-site verification | Both | AllYonoOfficial's generic entity-verification content overlaps WinRummyIndia's dedicated, disclosed `/win-rummy-official-website/` page | **MEDIUM** | WinRummyIndia.com | WinRummyIndia's page is more specific, sourced, and disclosed; AllYonoOfficial should link out rather than duplicate |
| 9 | AllYonoOfficial.com | WinRummyIndia.com | "Win Rummy review" | Both | AllYonoOfficial's assigned commercial-investigation role vs. WinRummyIndia's self-limited, non-scored review | **LOW–MEDIUM** | Coexist, differentiated | WinRummyIndia = fact-based/non-scored; AllYonoOfficial = scored/comparative — legitimate if AllYonoOfficial actually builds scored methodology (see §13) |
| 10 | YonoLink.co | AllYonoOfficial.com | `best-yono-rummy-apps`, `yono-slots-spin-guide` | YonoLink (currently hosting) | These are commercial-investigation-shaped posts sitting on the directory domain | **MEDIUM** | AllYonoOfficial.com | Matches AllYonoOfficial's assigned role; YonoLink should not host ranked "best" content per its own master-spec restrictions |
| 11 | YonoLink.co | DhanGame.co | `dhan-game-apk-download-promo-code` | YonoLink (currently hosting) | Deep DhanGame entity/promo content sitting on the directory domain | **MEDIUM** | DhanGame.co | Directory should stay at listing depth per Rule 3's own YonoLink examples |
| 12 | AllYonoGuru.com | AllYonoPatti.com | Teen Patti hand-ranking / joker-rule posts | AllYonoGuru | AllYonoGuru's educational content strays into Teen-Patti-specific category depth that AllYonoPatti is assigned to own | **MEDIUM** | AllYonoPatti.com | AllYonoGuru should keep generic card-game literacy; Teen-Patti-specific rules depth belongs to the category authority |
| 13 | AllYonoGuru.com | AllYonoUpdate.com | "New Yono Games 2026" post | AllYonoGuru | Freshness/news-shaped content on the education domain | **LOW–MEDIUM** | AllYonoUpdate.com | Should migrate once AllYonoUpdate's freshness architecture is restored |
| 14 | AllYonoReward.com | UonoVoucher.com | one DhanGame bonus article | AllYonoReward | Article leaks from reward-mechanics framing into promo/bonus-code territory | **LOW** | AllYonoReward.com (reframe) | Keep on AllYonoReward but rewrite to strictly mechanics framing, no code claims |
| 15 | WinRummyIndia.com | YonoLink.co | Win Rummy APK safety article vs. `/win-rummy-apk/` + `/app-verification/` | Both | Direct topical overlap flagged by WinRummyIndia's own audit | **MEDIUM** | WinRummyIndia.com (entity depth); YonoLink stays directory-depth | Requires text comparison — DATA REQUIRED |
| 16 | AllYonoGuru.com | WinRummyIndia.com | "Win Rummy Game List" vs. `/win-rummy-games/` | Both | Directly overlapping catalogue content | **MEDIUM** | WinRummyIndia.com | Entity-catalogue depth belongs to the entity specialist; AllYonoGuru's version should be removed or reduced to a link-out |
| 17 | AllYonoPatti.com | (17 unassigned rummy brands on WinRummyIndia Tier-3) | generic rummy-brand category listings | WinRummyIndia (unintentionally) | Card-game-category-adjacent brands sitting on an entity-specialist domain instead of the category-authority domain | **LOW–MEDIUM** | Neither currently — see §6/§15 | These brands are not Win Rummy and not necessarily Teen Patti; likely belongs off-portfolio or requires a business decision |

*This list covers the highest-severity, repository-confirmed collisions. It is not an exhaustive enumeration of every possible query pair — the two directory-layer and promo-code-layer patterns (rows 5 and 6) already account for the large majority of individual page-level conflicts once expanded to their full ~50-page scope on each of the affected domains.*

---

## 4. Final Proposed Domain Ownership Map

> Every entry below is provisional pending the GSC/backlink data called out throughout this report. None of it should be implemented until approved.

### YonoLink.co
- **Final identity:** Master YONO Game Directory (unchanged)
- **Primary keyword:** all Yono games
- **Primary intent:** Directory / navigational discovery
- **Secondary keywords:** Yono games list, Yono game directory, all Yono apps
- **Owns:** full-catalog discovery, categorized browsing, concise per-entity directory profiles
- **May support:** short entity blurbs linking out to specialists; a directory-depth promo-code *pointer* (link only) once a generic-Yono promo owner is resolved
- **Must not own:** full promo-code database, ranked "best" content, deep single-entity authority pages
- **Entity depth allowed:** Directory-depth only (name, category, one-paragraph summary, link out) — never full APK/download/login walkthroughs for entities with an assigned specialist
- **Promo depth allowed:** None (pointer/link only, pending §7 resolution)
- **Reward depth allowed:** None
- **Referral depth allowed:** None
- **Update/freshness depth allowed:** Directory sort/filter by date-added is fine; no dated news articles
- **Directory depth allowed:** Full — this is the domain's core mission
- **Main competing domain to avoid:** none structurally (it's the hub) — but must stop drifting into AllYonoOfficial (rankings) and DhanGame (deep entity) territory
- **Unique reason to exist:** it is the only domain whose job is to catalog the entire ecosystem at a consistent, comparable depth

### AllYonoOfficial.com
- **Final identity:** Commercial Investigation / Rankings — *conditional on methodology fix* (see §13)
- **Primary keyword:** best Yono games
- **Primary intent:** Commercial investigation
- **Secondary keywords:** top Yono games, Yono game reviews, Yono game comparison
- **Owns:** criteria-based evaluation/comparison content, cross-portfolio trust/scam-awareness journalism, entity-verification methodology
- **May support:** brief directory-style listing only insofar as it supports a "which one should I pick" comparison, not as an independent directory
- **Must not own:** APK/download hosting, entity-depth authority pages, general directory intent
- **Entity depth allowed:** Comparison-level only (facts sourced from/linked to the entity specialist, not re-hosted)
- **Promo depth allowed:** None
- **Reward depth allowed:** None (mentions only in comparison context)
- **Referral depth allowed:** None
- **Update/freshness depth allowed:** "New games worth reviewing" as evaluative commentary, not dated news
- **Directory depth allowed:** None (currently the biggest violation on this domain)
- **Main competing domain to avoid:** YonoLink (directory) and every entity specialist (download depth)
- **Unique reason to exist:** it is the only domain whose job is to evaluate and recommend, once it actually builds a real methodology

### AllYonoIndia.com
- **Final identity:** India-Specific YONO Hub — *conditional on CMS/data-model fix and legal sourcing* (see §10)
- **Primary keyword:** Yono games India
- **Primary intent:** India-specific discovery/access
- **Secondary keywords:** Yono APK India, Yono games for Android India
- **Owns:** cross-entity India legal/regulatory framework (hedged, sourced), payment/device/network context, responsible-gaming resources
- **May support:** brief cross-reference index entries per entity, linking to the entity specialist for depth
- **Must not own:** full 55-page entity/APK directory, deep single-entity+India authority where a specialist already owns it (e.g., Win Rummy + India)
- **Entity depth allowed:** Index/reference only (a paragraph + link), except where no specialist exists
- **Promo depth allowed:** None (current `/promo-code/` is 87% empty and should not be extended)
- **Reward depth allowed:** None
- **Referral depth allowed:** None
- **Update/freshness depth allowed:** None (not its role)
- **Directory depth allowed:** None beyond the India-context index
- **Main competing domain to avoid:** YonoLink (directory) and entity specialists (deep entity+India content)
- **Unique reason to exist:** it is the only domain whose job is the *portfolio-wide* India regulatory/access layer that no single entity specialist would build for every platform

### AllYonoGuru.com
- **Final identity:** Educational / Knowledge Authority
- **Primary keyword:** Yono game guide
- **Primary intent:** Informational
- **Secondary keywords:** how Yono games work, Yono APK guide, Yono game safety
- **Owns:** generic rules/mechanics/terminology education, generic APK/Android-install/permissions education, generic skill-vs-chance legal literacy, neutral comparison *methodology* (not verdicts)
- **May support:** brief mentions of specific entities as examples within a generic lesson
- **Must not own:** entity authority, rankings, news, rewards, promo/referral codes, India localization specifics, Teen-Patti-specific category depth
- **Entity depth allowed:** Illustrative only, no dedicated entity pages
- **Promo depth allowed:** None (current full promo product must be removed)
- **Reward depth allowed:** None (bonus-mechanics posts should migrate to AllYonoReward)
- **Referral depth allowed:** None
- **Update/freshness depth allowed:** None ("New Yono Games 2026" should migrate to AllYonoUpdate)
- **Directory depth allowed:** None (homepage must stop self-labeling "Yono Game All")
- **Main competing domain to avoid:** YonoLink (directory) and AllYonoPatti (Teen-Patti-specific education)
- **Unique reason to exist:** it is the only domain whose job is to teach, independent of any single brand or ranking

### AllYonoUpdate.com
- **Final identity:** Freshness / News Authority — *achieved by restoring the shelved architecture, not building new*
- **Primary keyword:** Yono game updates
- **Primary intent:** Freshness / news / changes
- **Secondary keywords:** new Yono games, latest Yono games, Yono app update
- **Owns:** dated network-wide launch/version/status/availability reporting
- **May support:** brief per-entity update logs where genuinely dated
- **Must not own:** full directory, promo-code database, evergreen entity education (that's AllYonoGuru or the entity specialists)
- **Entity depth allowed:** Dated-news depth only, not full entity profiles
- **Promo depth allowed:** None (`/promo-code-updates/` must be removed)
- **Reward depth allowed:** None
- **Referral depth allowed:** None
- **Update/freshness depth allowed:** Full — this is the domain's core mission
- **Directory depth allowed:** None (`/all-yono-games/` and the 8 APK hubs must be removed/repurposed)
- **Main competing domain to avoid:** YonoLink (directory) and each entity specialist's own evergreen "recheck" logs (compatible, not competing — different intent)
- **Unique reason to exist:** it is the only domain whose job is "what changed recently," network-wide

### AllYonoReward.com
- **Final identity:** Rewards / Bonus Mechanics Authority
- **Primary keyword:** Yono game rewards
- **Primary intent:** Reward information and explanation
- **Secondary keywords:** Yono bonus, Yono welcome bonus, Yono daily rewards
- **Owns:** reward/bonus MECHANICS — types, eligibility, conditions, expiration logic, why values differ by platform, cashback/VIP/loyalty (currently missing gaps)
- **May support:** brief explanatory mention of promo codes as one input into a reward, without a lookup product
- **Must not own:** full directory, promo-code lookup/database, referral-code lookup
- **Entity depth allowed:** Mechanics-depth only (e.g., `/rewards/win-rummy` explaining Win Rummy's reward *system*, not its APK/login/download)
- **Promo depth allowed:** Explanatory only, no current-code claims (`/promo-codes` ×55 must be removed)
- **Reward depth allowed:** Full — this is the domain's core mission
- **Referral depth allowed:** None (stays with YonoMoreGames)
- **Update/freshness depth allowed:** None
- **Directory depth allowed:** None (`/games` ×55 must be removed)
- **Main competing domain to avoid:** YonoLink (directory), generic-promo territory, entity specialists (entity facts)
- **Unique reason to exist:** it is the only domain whose job is to explain how rewards/bonuses work as a system

### UonoVoucher.com
- **Final identity:** Uono / Uono Play Promo Code & Voucher Database (brand-specific, not generic Yono)
- **Primary keyword:** Uono promo code
- **Primary intent:** Promo-code lookup (for the Uono brand)
- **Secondary keywords:** Uono voucher, Uono Play promo code
- **Owns:** current Uono/Uono Play code verification and status
- **May support:** a clearly labeled, hedged note distinguishing Uono from Yono (already present — keep it)
- **Must not own:** generic "Yono promo code" (UNRESOLVED, not assigned here), a Yono-wide directory
- **Entity depth allowed:** Uono-specific only
- **Promo depth allowed:** Full, for Uono — this is the domain's core mission
- **Reward depth allowed:** None (stays with AllYonoReward for Yono; not in scope for Uono either)
- **Referral depth allowed:** None
- **Update/freshness depth allowed:** Code status/verification dates only
- **Directory depth allowed:** None (`/uono-games/` should be trimmed if it reads as a mini-directory)
- **Main competing domain to avoid:** none currently, precisely because it is honestly off the generic-Yono axis
- **Unique reason to exist:** it is the only domain in the portfolio with a real, non-fabricated, actively-maintained code/voucher database — for Uono

### YonoMoreGames.com
- **Final identity:** Referral Code / Access Directory (unchanged)
- **Primary keyword:** Yono referral code
- **Primary intent:** Referral / navigation
- **Secondary keywords:** Yono invite code, `{platform} referral code`
- **Owns:** referral/invite-code and access-link lookup, per platform
- **May support:** a single generic "Yono referral code" landing page aggregating/explaining the 55 individual pages (currently missing — a genuine gap, not a conflict)
- **Must not own:** promo-code lookup, reward-mechanics explanation, general directory
- **Entity depth allowed:** Referral-specific only
- **Promo depth allowed:** None (already clean)
- **Reward depth allowed:** None (bonus language already banned — keep it)
- **Referral depth allowed:** Full — this is the domain's core mission
- **Update/freshness depth allowed:** Verification-date stamps only
- **Directory depth allowed:** `/platform` grid is acceptable as long as copy stays referral-first (already mostly true)
- **Main competing domain to avoid:** YonoLink (directory ambiguity on `/platform`)
- **Unique reason to exist:** it is the only domain whose job is referral/invite access, and it already does this cleanly

### AllYonoArcade.com
- **Final identity:** Yono Arcade Entity Authority
- **Primary keyword:** Yono Arcade
- **Primary intent:** Entity / branded navigation
- **Secondary keywords:** Yono Arcade download, Yono Arcade APK, Yono Arcade login
- **Owns:** Yono Arcade identity, download, APK, login, safety, support, entity-specific promo *explanation*
- **May support:** brief, linked references to sibling entities if editorially relevant (e.g., a genuine "Yono Arcade vs. X" comparison, per Rule 3), never a profile page
- **Must not own:** any other brand's entity page (Win Rummy, DhanGame, the 43 unrelated brands), the generic Yono directory, promo-code lookup, reward mechanics, referral codes
- **Entity depth allowed:** Full, for Yono Arcade only
- **Promo depth allowed:** Explanatory only (`/promo-codes` 50-platform product must be removed)
- **Reward depth allowed:** None (stays with AllYonoReward)
- **Referral depth allowed:** None (stays with YonoMoreGames)
- **Update/freshness depth allowed:** Evergreen "recheck" pattern only (WinRummyIndia model), not network news
- **Directory depth allowed:** None (`/all-games/[slug]` ×50 must be removed/migrated)
- **Main competing domain to avoid:** YonoLink (directory), WinRummyIndia and DhanGame.co (their entities)
- **Unique reason to exist:** it is the only domain whose job is Yono Arcade specifically

### AllYonoPatti.com
- **Final identity:** Teen Patti Category Authority — *conditional on adding a first-class Teen Patti taxonomy*
- **Primary keyword:** Teen Patti games
- **Primary intent:** Category discovery
- **Secondary keywords:** Teen Patti rules, Teen Patti hand rankings, Teen Patti variants
- **Owns:** Teen Patti rules, terminology, hand rankings, variants, Teen-Patti-specific safety/legal awareness, discovery of genuinely-Teen-Patti-relevant apps
- **May support:** a mode-specific page for an entity that genuinely offers Teen Patti as one mode (e.g., "Win Rummy's Teen Patti table"), never a full generic entity profile
- **Must not own:** general Rummy/Slots/Spin/Bingo directory, generic promo-code lookup, generic rewards
- **Entity depth allowed:** Only where the entity is genuinely Teen-Patti-relevant, and only mode-specific, not full profile
- **Promo depth allowed:** None (`/promo-codes` ×55 must be removed)
- **Reward depth allowed:** None (`/rewards` generic layer must be removed; Teen-Patti-specific bonus mechanics may stay as a link to AllYonoReward)
- **Referral depth allowed:** None
- **Update/freshness depth allowed:** None
- **Directory depth allowed:** Category-scoped only (Teen Patti apps), not general
- **Main competing domain to avoid:** YonoLink (general directory), AllYonoGuru (generic education)
- **Unique reason to exist:** it is the only domain whose job is Teen Patti specifically, and its guide cluster already proves it can do this well

### WinRummyIndia.com
- **Final identity:** Win Rummy Entity Authority — *conditional on removing/migrating the 51 Tier-3 pages*
- **Primary keyword:** Win Rummy
- **Primary intent:** Entity / branded navigation
- **Secondary keywords:** Win Rummy India, Win Rummy download, Win Rummy APK, Win Rummy login
- **Owns:** Win Rummy identity, official-domain verification, APK/download/install, login, safety, game catalogue, fact-based self-limited review, deep Win Rummy + India legal/availability context, entity-specific promo/referral *explanation* (non-lookup)
- **May support:** generic Android-security education framed as generic (already exists via `/app-verification/`), acceptable per Rule 3 as long as it's clearly supporting content
- **Must not own:** any other brand's entity page (this is the domain's single biggest current violation), Teen Patti content (it has none — correct), current-code promo/referral lookup (already correctly avoided)
- **Entity depth allowed:** Full, for Win Rummy only — the 51 `[platform].astro` pages must be removed from this domain
- **Promo depth allowed:** Explanatory only (already correctly implemented — no changes needed)
- **Reward depth allowed:** Entity-facts level only (already correct — no eligibility tables, defers to AllYonoReward)
- **Referral depth allowed:** Explanatory only (already correctly implemented — explicitly refuses code lookup)
- **Update/freshness depth allowed:** Evergreen "recheck" pattern (already correctly implemented, distinct from AllYonoUpdate's dated journalism)
- **Directory depth allowed:** None
- **Main competing domain to avoid:** DhanGame.co and AllYonoArcade.com (via its own Tier-3 pages), AllYonoIndia (India depth, resolved in WinRummyIndia's favor per §10)
- **Unique reason to exist:** it already has the single most rigorous claims-vs-facts editorial methodology in the portfolio — this identity is fully earned within its Tier-1 content and only needs its Tier-3 architecture removed to be coherent

### DhanGame.co
- **Final identity:** DhanGame Entity Authority — *requires the most substantial rebuild in the portfolio*
- **Primary keyword:** DhanGame
- **Primary intent:** Entity / branded navigation
- **Secondary keywords:** DhanGame download, DhanGame APK, DhanGame login, DhanGame India
- **Owns:** DhanGame identity, download, APK, login, safety, promo/reward *explanation*, India-specific DhanGame context
- **May support:** the existing bespoke `win-rummy-vs-dhan-game` comparison post (differentiated, keep)
- **Must not own:** the 51 unrelated brand pages currently making up 98% of its indexed footprint, generic directory intent
- **Entity depth allowed:** Currently near-zero; target = full, mirroring WinRummyIndia's Tier-1 architecture as the model
- **Promo depth allowed:** Explanatory only, once built
- **Reward depth allowed:** Entity-facts level only, once built
- **Referral depth allowed:** None (stays with YonoMoreGames)
- **Update/freshness depth allowed:** Evergreen "recheck" pattern, once built
- **Directory depth allowed:** None — this is the domain's core problem today and must be eliminated
- **Main competing domain to avoid:** YonoLink (directory) and WinRummyIndia/AllYonoArcade (their own `/dhan-game/` conflict pages, which should redirect or point traffic back here once resolved)
- **Unique reason to exist:** the domain name is the strongest entity-relevance asset in the portfolio for DhanGame and is currently almost entirely unused for that purpose

---

## 5. Keyword / Intent Ownership Registry

| Keyword / query family | Search intent | Primary owner | Secondary/supporting | Must avoid targeting | Rationale | Confidence | Data required |
|---|---|---|---|---|---|---|---|
| all Yono games / Yono games list / Yono games | Directory/navigational | YonoLink.co | — | All 11 others | Confirmed by master spec and every audit's own verdict | High | None |
| best Yono games / top Yono games | Commercial investigation | AllYonoOfficial.com | — | YonoLink, entity specialists | Only plausible owner with a trust/verification differentiator, but role not yet earned | Medium | GSC on `/most-rated-apps/`; confirmation methodology is built before claiming |
| Yono game reviews / Yono game comparison | Commercial investigation | AllYonoOfficial.com | Entity specialists (fact-based, non-scored, per-entity) | YonoLink, AllYonoGuru | Matches assigned role; entity specialists may run their own non-scored reviews (WinRummyIndia precedent) | Medium | None |
| Yono promo code (generic, current-code lookup) | Transactional/promo lookup | **UNRESOLVED** | — | — | No domain has an honest, non-scope-creep, non-empty version for Yono specifically | Low | Business decision + GSC across all 7 current implementations (§7) |
| Yono promo code today | Transactional/promo lookup | **UNRESOLVED** | — | — | Same as above | Low | Same as above |
| Uono promo code | Transactional/promo lookup | UonoVoucher.com | — | Everyone else | Directly, repeatedly confirmed by repository evidence | High | None |
| Yono referral code / Yono invite code | Referral/navigation | YonoMoreGames.com | — | Everyone else | Confirmed; only a dedicated generic landing page is missing (a gap, not a conflict) | High | None |
| `{platform} referral code` | Referral/navigation | YonoMoreGames.com | Entity specialists (explanatory only) | — | Confirmed, cleanest domain in the portfolio | High | None |
| Yono rewards / Yono bonus / Yono game rewards | Informational (rewards mechanics) | AllYonoReward.com | Entity specialists (facts-level only) | YonoLink, generic-promo domains | Genuine 12-page mechanics core already exists | High | None |
| Yono game updates / new Yono games / latest Yono games | Freshness/news | AllYonoUpdate.com | — | YonoLink, AllYonoGuru, AllYonoOfficial | Shelved architecture already matches this role; needs restoration not invention | High | Confirm shelved content's original dates are still meaningful, or re-verify before republishing |
| Yono games India / Yono game India | India-localized discovery | AllYonoIndia.com | Entity specialists (entity+India depth) | — | Portfolio-wide India layer is a defensible, non-duplicative role once built | Medium | CMS field build-out; legal sourcing (§10) |
| Yono games legal in India | Localized/legal-informational | AllYonoIndia.com (general framework) + entity specialists (entity-specific) | — | — | Mirrors WinRummyIndia's proven hedged approach | Low-Medium | Legal/authoritative sourcing required before any specific claim |
| Teen Patti games / Teen Patti rules / Teen Patti hand rankings | Category discovery / informational | AllYonoPatti.com | — | AllYonoGuru (must migrate its Teen-Patti-specific posts here) | 10-guide cluster already proves this domain can own it | High | Taxonomy build-out (add Teen Patti as first-class category) |
| Yono Arcade (all forms: download, APK, login, safety) | Entity/branded navigation | AllYonoArcade.com | — | WinRummyIndia, YonoLink (directory-depth only), AllYonoOfficial (comparison-depth only) | Confirmed; core content already earns this | High | None |
| DhanGame (all forms) | Entity/branded navigation | DhanGame.co | — | WinRummyIndia, AllYonoArcade, YonoLink (directory-depth only) | Confirmed by master spec; domain currently doesn't use its own entity relevance | High | GSC comparison — YonoLink and WinRummyIndia currently outrank DhanGame.co's own DhanGame content and this must be assessed before any redirect (§14) |
| Win Rummy / Win Rummy India (all forms) | Entity/branded navigation | WinRummyIndia.com | — | AllYonoArcade, AllYonoIndia (deep entity content), YonoLink (directory-depth only) | Confirmed; Tier-1 content is the strongest single-entity asset in the portfolio | High | None for the assignment itself; text-comparison DATA REQUIRED for de-duplicating existing pages elsewhere (§14) |
| Win Rummy official website | Entity verification | WinRummyIndia.com | — | AllYonoOfficial (should link out, not duplicate) | Dedicated, disclosed, sourced page already exists | High | None |
| Win Rummy review | Commercial investigation (self-limited) / Entity fact-based | WinRummyIndia.com (fact-based) + AllYonoOfficial.com (scored, once built) | — | — | Both can coexist if genuinely differentiated | Medium | Confirm AllYonoOfficial builds a scored methodology before targeting this exact phrase |

*This registry covers the highest-priority, explicitly-named terms from the brief. It is the template to extend to the full long-tail `{platform} + modifier` keyword set once the entity-specialist rebuilds (DhanGame in particular) are underway.*

---

## 6. Entity Ownership & Modifier Rules

### 6.1 Modifier ownership table (applies uniformly to AllYonoArcade / DhanGame / WinRummyIndia)

| Modifier | Owner | Reasoning |
|---|---|---|
| `{Entity}` (bare) | Entity specialist | Core brand navigational query |
| `{Entity} download` / `APK` | Entity specialist | Entity-specific transactional/how-to |
| `{Entity} login` | Entity specialist | Entity-specific access how-to |
| `{Entity} official website` | Entity specialist | Entity verification — WinRummyIndia's disclosed, sourced model is the portfolio template |
| `{Entity} safety` / "is {Entity} safe" | Entity specialist | Entity-specific trust content |
| `{Entity} review` | Entity specialist (fact-based, non-scored) **and** AllYonoOfficial (scored/comparative) can coexist | Legitimate if genuinely differentiated in treatment (§3.2 row 9) |
| `{Entity} games` / game list | Entity specialist | Entity catalogue depth |
| `{Entity} promo code` — explanatory ("how it works") | Entity specialist | Explains mechanics only, per Rule 3 and WinRummyIndia's proven pattern |
| `{Entity} promo code` — current/active code lookup | Generic promo owner (**UNRESOLVED**, §7) or UonoVoucher if the entity is Uono-branded | Lookup function is a different product than explanation |
| `{Entity} bonus` / bonus mechanics | AllYonoReward.com | Reward-mechanics depth is not the entity specialist's job |
| `{Entity} referral code` / invite code | YonoMoreGames.com | Referral lookup is not the entity specialist's job |
| `{Entity} updates` / latest update (dated, network-style) | AllYonoUpdate.com | Freshness/news intent |
| `{Entity} updates` (evergreen "we periodically recheck this") | Entity specialist | WinRummyIndia's own `/updates/` — a distinct intent from AllYonoUpdate's dated journalism |
| `{Entity} India` (deep legal/availability) | Entity specialist | WinRummyIndia's proven model — India strengthens the entity page rather than needing to be forked out |
| `{Entity} India` (brief cross-reference) | AllYonoIndia.com | Short index entry linking to the entity specialist for depth |
| `{Entity}` inside "all Yono games" directory context | YonoLink.co | Directory-listing depth only |
| `{Entity}` ranked against competitors | AllYonoOfficial.com | Commercial investigation |
| `{Entity}` generic mechanics/how-to that isn't brand-specific | AllYonoGuru.com | Generic education (e.g., Android install/permission guides framed without brand specificity) |
| `{Entity}` as a Teen Patti offering specifically | AllYonoPatti.com | Only if the entity is genuinely Teen-Patti-relevant (§11) |

### 6.2 Portfolio-wide Entity Reference Rule (reusable)

Any **non-owner** domain that mentions a portfolio-assigned entity (Win Rummy, Yono Arcade, DhanGame, or any future specialist) must:

1. **Stay inside its own assigned intent.** A directory stays a directory listing; a reward site stays at reward-mechanics depth; an update site stays at dated-news depth; a Teen Patti site only engages where genuine Teen Patti relevance exists.
2. **Not replicate the specialist's core facts at competing depth.** A concise directory profile is fine (YonoLink's existing `/app/win-rummy` is the portfolio's model example); a full identity/APK/install/login authority page is not.
3. **Never operate a live download/APK/affiliate-monetized page for an entity assigned elsewhere.** This is the single highest-severity, portfolio-wide violation found across all 12 audits (WinRummyIndia's `/dhan-game/` and `/yono-arcade/`; AllYonoArcade's `/all-games/win-rummy` and `/all-games/dhangame`). No domain should be monetizing traffic for another domain's assigned entity.
4. **Link to the entity specialist for full depth** rather than trying to become a second source of truth for that entity.

This generalizes the master spec's own Win Rummy example (§5 of the spec) to all three current specialists and any future one.

---

## 7. Promo vs. Reward vs. Referral Boundary

### 7.1 Definitions

- **PROMO CODE** = a specific alphanumeric code, often time-gated (e.g. AM/PM/EVE cadence), entered by a user to unlock a bonus/discount/in-game currency. Owning question: *"what is the current valid code and is it still active?"*
- **REFERRAL CODE** = a code or link tied to an inviting user/affiliate, entered at signup to grant access or a signup credit to both parties. Owning question: *"what code/link do I use to sign up and get credited?"*
- **REWARD / BONUS MECHANICS** = the rules, eligibility, and structure of how rewards work in general (welcome bonus, daily rewards, referral-bonus structure, cashback, VIP/loyalty tiers, wagering/eligibility conditions) — the *system* that codes and referrals plug into, not a specific code. Owning question: *"how do rewards work and what am I entitled to?"*

### 7.2 Assignment

| Intent | Owner | Status |
|---|---|---|
| Referral/invite-code lookup | YonoMoreGames.com | **Confirmed, no dispute** |
| Reward/bonus mechanics | AllYonoReward.com | **Confirmed** — genuine 12-page core exists; architecture needs to catch up (§4, §16) |
| Uono promo-code lookup | UonoVoucher.com | **Confirmed, no dispute** |
| Generic Yono promo-code lookup | — | **UNRESOLVED** |

### 7.3 Why generic Yono promo-code ownership is UNRESOLVED

Seven domains (YonoLink, AllYonoArcade, AllYonoReward, AllYonoGuru, AllYonoUpdate, AllYonoIndia, AllYonoPatti) currently run a near-identical AM/PM/EVE promo-code database for generic "Yono" games, and none of them is the master-spec-assigned owner (that was UonoVoucher, whose own repository evidence disputes the assignment). None of the seven has a demonstrated, non-scope-creep, non-empty, non-integrity-flagged version of this product:

- AllYonoReward's is honestly empty (no fabrication, but no value either).
- AllYonoIndia's is ~87% empty with several entries mislabeled (domains stored as if they were codes).
- The remainder are undifferentiated bolt-ons on domains whose core identity is something else entirely.

Per this task's explicit instruction, this is left **UNRESOLVED rather than invented**. Two non-binding paths exist, presented for the business to decide, not assumed:

- **Option A — build a genuine new generic-Yono lookup product.** Most naturally extends AllYonoReward (closest adjacent mission, already the cleanest editorial voice for reward-adjacent content) if the business wants ONE portfolio-wide Yono promo-code owner. This is an architectural/business decision, not an audit finding.
- **Option B — do not centralize generic Yono promo-code lookup at all.** Each entity specialist explains "how {brand} promo codes work" (explanatory only, per §6.1), and no domain claims the current-code-lookup function for generic Yono. This avoids recreating the exact duplication problem this report is trying to fix.

**Recommendation for Phase-0 action regardless of which option is chosen:** the seven off-mission promo-code layers should not continue to exist in their current duplicated form on domains whose core mission is something else. See §14/§18 for disposition.

### 7.4 What promo-code mentions are allowed on non-owner sites

A short explanatory paragraph or FAQ entry ("Does {brand} have promo codes? Here's generally how they work") is allowed on entity specialists and AllYonoReward, with:
- No current-code claims
- No copy-button UI
- No AM/PM/EVE-style time-gated database
- A link out to whichever domain, if any, ends up owning current-code lookup

---

## 8. Directory Ownership Rules

**Single portfolio owner of "all Yono games" / "Yono games list" / general game discovery: YonoLink.co.** This is confirmed by both the master spec and the independent verdict of every one of the 12 audits — no audit disputes YonoLink's directory role.

**What other domains may retain without competing:**

- **Entity specialists (AllYonoArcade, DhanGame, WinRummyIndia)** may not operate a multi-brand directory at all, including for other portfolio entities. A one-line contextual mention of a sibling entity with a link to YonoLink or that entity's own specialist domain is acceptable; a profile page is not.
- **Category/intent hubs (AllYonoReward, AllYonoGuru, AllYonoUpdate, AllYonoPatti, AllYonoIndia)** may retain a short reference list (one paragraph + link per entity) as a navigational index, not a full templated profile with independent APK/download/rating content. A dedicated URL per entity is only appropriate when that entity's content is genuinely specific to the hub's own intent — e.g., AllYonoReward may keep `/rewards/win-rummy` because that is reward-mechanics content, not a directory listing.
- **AllYonoOfficial's** commercial-investigation role legitimately requires comparison tables spanning many entities. This is different from a directory because it must be evaluative (criteria, verdicts, sourcing), not just a listing — see §13.

---

## 9. Freshness/News Ownership Rules

**AllYonoUpdate.com should become the portfolio freshness/news authority — via restoration, not invention.** The shelved `_removed-pages` architecture (`latest-updates`, `update-archive`, `game-updates`, `app-updates`, `events-notices`) already matches the assigned role better than the live directory/promo architecture, and the domain's own trust pages already describe this shelved system as if it were live — restoring it resolves an existing E-E-A-T mismatch rather than creating a new claim.

**Ownership:**
- Yono game updates, new Yono games, launch status, release dates, maintenance, availability changes, version changes, network-wide announcements → **AllYonoUpdate.com**, provided entries are genuinely dated (no `new Date()`-on-every-build sitemap freshness, no backdating).
- Entity-specific evergreen "we periodically recheck this fact and confirm it's still accurate" content (WinRummyIndia's `/updates/` pattern) **stays with the entity specialist** — this is a distinct intent from AllYonoUpdate's dated network journalism, and both can coexist per the master spec's own Win Rummy example.

**Separating freshness reporting from generic "new"/"latest" sort order:** a domain using "new"/"latest" purely as a catalog SORT ORDER (e.g., YonoLink sorting by date-added) is UI behavior, not a content play, and creates no conflict. A domain publishing a "New Yono Games 2026" ARTICLE (as AllYonoGuru currently does) is content-level freshness/news and belongs to AllYonoUpdate, or should be reworked into evergreen education if it's going to stay elsewhere.

---

## 10. India Localization Boundary

**Is the India-specific hub identity defensible? Yes in principle, not yet in practice.** No CMS fields currently exist for the dimensions that would make the role real (UPI/payment, KYC, TDS/tax, state availability, legal status), and existing legal content is internally contradictory (a state-list claim references a Disclaimer page that does not exist).

**What "India-specific" must mean to be defensible** (per the explicit instruction not to invent legal conclusions):

| Topic | Ownable now? | Basis |
|---|---|---|
| Availability in India (accessibility/functioning) | Yes, if directly observed | Requires direct verification, not assumption |
| Jurisdiction/legal context (general skill-vs-chance framework) | Yes, hedged and sourced | Mirrors WinRummyIndia's disciplined MeitY/PIB-sourced approach |
| State-by-state restrictions | **DATA REQUIRED** | Current content is unsourced and internally contradictory; must not be extended until sourced to an authoritative reference |
| India-specific payment context (UPI compatibility) | Yes, if per-app verified | Factual/observable, not assumable |
| KYC | Only if platform-documented | Do not infer a legal requirement |
| Tax/TDS | **DATA REQUIRED — requires qualified legal review** | Genuine tax law; must not be asserted without sourcing |
| Device/network/access context | Yes, if actually tested | e.g., "confirmed accessible on [network] as of [date]" |
| Responsible gaming resources | Yes | Low legal risk, high trust value — an underused asset worth expanding |

**Boundary vs. entity specialists:** AllYonoIndia keeps brief cross-reference/index entries per entity (a few sentences + link); deep entity+India intersection (e.g., "Win Rummy India") belongs to the entity specialist, per WinRummyIndia's own provisional call, adopted here as portfolio-wide policy for all three specialists. AllYonoIndia's defensible, non-duplicative reason to exist is the **cross-entity, portfolio-wide** India layer (legal framework, payment/device context, responsible gaming) — content no single entity specialist would build for every platform.

**Correction, not deletion, for existing contradictory content:** the state-list inconsistency should be corrected toward the more hedged framing (matching WinRummyIndia's approach) rather than removed outright, unless GSC data shows it carries no ranking/traffic value (Critical Preservation Rule).

---

## 11. Teen Patti Category Boundary

**Should AllYonoPatti become the Teen Patti category authority? Yes** — its 10-guide cluster (hand rankings, blind/seen, chaal, sideshow/show, boot/pot, terminology, variants, probabilities, Teen Patti vs. poker, responsible/legal hedging) is genuinely strong and unique in the portfolio. But this is currently undermined by a structural blocker: **the CMS `GameCategory` taxonomy has no "Teen Patti" category at all**, and the 55-entry directory is dominated by Rummy, Multi-game, Slots, and Spin — this must be fixed before the identity is coherent, not worked around.

**Teen-Patti-relevance threshold (an app must clear this to appear as a first-class AllYonoPatti listing):**
- The entity's own product genuinely centers Teen Patti as a primary offering (not one mode among many), **or**
- The specific page is about that entity's Teen Patti mode/table specifically (e.g., "Win Rummy's Teen Patti table: rules and access" is legitimate if Win Rummy genuinely offers one) — narrow, mode-specific content is fine; a full generic entity profile is not.

An app merely containing a Teen Patti table somewhere in a larger lobby does **not** automatically qualify for a full entity page — per the explicit instruction. Category-discovery content itself (rules, hand rankings, variants, terminology, safety, legal awareness) requires no per-entity gating at all; it is always in scope.

**Required fix to current architecture:** `/games` (×55, dominated by non-Teen-Patti categories) must be pruned to genuinely Teen-Patti-relevant entities under the threshold above, or converted from full entity profiles into a short "Teen Patti offerings across the ecosystem" index that links out to each entity's actual specialist domain — mirroring the directory-ownership rule in §8.

---

## 12. Educational / Guru Boundary

**AllYonoGuru owns:**
- Generic rules/mechanics/terminology education (cross-entity)
- Generic APK/install education, Android permissions (cross-platform — WinRummyIndia's own audit flags its `/app-verification/` guides as "closer to AllYonoGuru's assigned role")
- General safety education (generic, not entity-specific trust/verification, which stays with entity specialists)
- Tutorials/how-tos
- Neutral comparison **methodology** — the criteria/framework for comparing apps, not the comparison verdict itself (that's AllYonoOfficial's job)
- Skill-vs-chance / legal-literacy framework (generic, cross-entity — not state-specific legal claims, which require the same sourcing discipline as §10)

**AllYonoGuru must NOT own:**
- Entity authority → entity specialists
- Rankings/recommendations ("best," "top") → AllYonoOfficial
- News/freshness → AllYonoUpdate
- Rewards mechanics → AllYonoReward
- Promo codes → generic owner (unresolved) / entity specialists (explanatory only)
- Referral codes → YonoMoreGames
- India localization specifics → AllYonoIndia (and entity specialists for entity+India depth)
- **Teen-Patti-specific category education** (hand rankings, variant rules specific to Teen Patti) → **AllYonoPatti**, not AllYonoGuru. This is a meaningful, explicit distinction: AllYonoGuru teaches generic card/skill-game literacy; AllYonoPatti owns the Teen-Patti-specific deep dive. AllYonoGuru's existing Teen Patti hand-ranking and joker-rule posts should be evaluated for migration/consolidation toward AllYonoPatti (§14).

**Required architecture fix:** the homepage must stop self-positioning as "Yono Game All" — this is the single most direct, literal violation of an assigned identity found anywhere in the portfolio (a homepage naming itself after the role explicitly assigned to a different domain).

---

## 13. Commercial Investigation / Official Boundary

**Should the commercial-investigation identity remain assigned to AllYonoOfficial.com? Yes, conditionally.** The domain name carries implied authority, and its trust/safety cluster (scam awareness, link-checking guidance, promo/referral/withdrawal safety, entity-verification journalism) is a genuinely unique differentiator with no equivalent elsewhere in the portfolio. But "best/top/reviews/rankings" queries are **not currently earned**, and a uniform, unsourced 4.1★ rating repeated across ~58 pages (plus a repeated 85 MB size field) is a data-integrity liability that would actively undermine credibility if commercial-investigation content were published on top of it today.

**Required methodology before targeting best/top/rankings queries** (no fabricated ratings, no arbitrary scores, no unsupported "best" labels, per explicit instruction):

1. Publish a visible, stated methodology page defining what is evaluated — safety/verification status, download-source legitimacy, official-domain identifiability, feature completeness, transparency, complaint/red-flag patterns — criteria-based, not star-rating-based.
2. Resolve the uniform 4.1★/85 MB fields: either remove them, replace with genuinely sourced per-entity data with visible sourcing/date, or replace with a qualitative verification-status system ("Verified / Caution / Unverified") consistent with the site's own trust-cluster voice, instead of a numeric rating implying aggregated reviews that don't exist.
3. Build comparison content around the criteria the trust cluster already substantiates (safety, legitimacy, feature set) rather than generic "best app" superlatives — this leverages the one differentiator already proven strong, instead of competing head-on with entity specialists' download/APK depth.
4. `/most-rated-apps/` — currently a full, unranked list mislabeled as an evaluation — must either be renamed to match its actual (directory) behavior or rebuilt with real ranking logic; it should not keep a "most-rated" title without ranking behind it.

**Until these are fixed:** treat "best Yono games" as **earned-in-principle, not earned-in-practice.** AllYonoOfficial remains the intended long-term owner — no other domain has a comparable trust-cluster asset — but should not be treated as though it currently satisfies the intent, and no destructive changes to its existing directory-style pages should happen until the replacement content actually exists (Critical Preservation Rule).

---

## 14. URL Disposition Register

| Domain | URL / template | Current intent | Target owner | Disposition | Rationale | GSC required? | Backlink check required? | Redirect destination if applicable |
|---|---|---|---|---|---|---|---|---|
| AllYonoArcade.com | `/all-games/[slug]` (×50) | Directory | YonoLink.co (directory-depth) | **CONSOLIDATE / DATA REQUIRED** | Duplicates YonoLink's role; two entries (`win-rummy`, `dhangame`) are direct entity conflicts | Yes | Yes | Pending GSC — likely YonoLink's equivalent `/app/[slug]` entries |
| AllYonoArcade.com | `/all-games/win-rummy` | Entity profile | WinRummyIndia.com | **REDIRECT candidate / DATA REQUIRED** | Direct entity-ownership conflict | Yes | Yes | WinRummyIndia.com relevant page, pending comparison |
| AllYonoArcade.com | `/all-games/dhangame` | Entity profile | DhanGame.co | **REDIRECT candidate / DATA REQUIRED** | Direct entity-ownership conflict | Yes | Yes | DhanGame.co relevant page, pending DhanGame.co rebuild |
| AllYonoArcade.com | `/promo-codes` (50-platform product) | Promo lookup | Unresolved (§7) | **NOINDEX or CONSOLIDATE / DATA REQUIRED** | Off-mission duplicate of the portfolio's largest cannibalization pattern | Yes | Yes | Pending §7 resolution |
| AllYonoArcade.com | `/blog/dhangame-promo-code-bonus-guide` | Entity/promo | DhanGame.co | **MIGRATE / DATA REQUIRED** | Deep DhanGame content on the wrong domain | Yes | Yes | DhanGame.co, once rebuilt |
| AllYonoArcade.com | `/blog/win-rummy-vs-yono-arcade` | Comparison | AllYonoArcade.com (keep, verify depth) | **KEEP + REFRAME / DATA REQUIRED** | Legitimate Rule-3 comparison, but GSC should confirm it isn't ranking for bare "Win Rummy" | Yes | No | — |
| YonoLink.co | `/games` (duplicate of `/app`) | Directory | YonoLink.co | **CONSOLIDATE** | Internal duplication, no cross-domain issue | Yes | No | `/app` equivalent |
| YonoLink.co | `/games/[slug]` (×10, orphaned) | Entity profile | YonoLink.co | **CONSOLIDATE / REDIRECT** | Orphaned, dead CTA, duplicate template of `/app/[slug]` | Yes | No | `/app/[slug]` equivalent |
| YonoLink.co | `/promo-codes` | Promo lookup | Unresolved (§7) | **NOINDEX or CONSOLIDATE / DATA REQUIRED** | Off-mission for the master directory | Yes | Yes | Pending §7 resolution |
| YonoLink.co | `best-yono-rummy-apps`, `yono-slots-spin-guide` | Commercial investigation | AllYonoOfficial.com | **MIGRATE / DATA REQUIRED** | Ranked "best" content belongs to the assigned commercial-investigation domain | Yes | Yes | AllYonoOfficial.com, once methodology exists |
| YonoLink.co | `dhan-game-apk-download-promo-code` | Entity/promo | DhanGame.co | **MIGRATE / DATA REQUIRED** | Deep entity content on the directory domain; currently YonoLink outranks DhanGame.co's own DhanGame content — do not redirect until DhanGame.co has a receiving page | Yes | Yes | DhanGame.co, once rebuilt |
| DhanGame.co | 51 of 52 `/games/[slug]` (unrelated brands) | Directory | Portfolio-level decision | **DATA REQUIRED** | Not DhanGame content; disposition depends on whether these brands have independent ranking value and whether any belong to other assigned specialists | Yes | Yes | Case-by-case |
| DhanGame.co | `/games/dhan-game/` | Entity profile (thin) | DhanGame.co | **KEEP + REFRAME** | Right URL, wrong depth — expand into full entity authority, do not replace URL | No | No | — |
| DhanGame.co | `/blog/win-rummy-vs-dhan-game/` | Comparison | DhanGame.co | **KEEP** | Bespoke, differentiated, intent-adjacent not conflicting | No | No | — |
| AllYonoOfficial.com | Homepage + 60-app grid | Directory | YonoLink.co | **REPOSITION / DATA REQUIRED** | Duplicates YonoLink; homepage must reposition to commercial-investigation framing once methodology exists | Yes | Yes | N/A — reposition in place, not redirect |
| AllYonoOfficial.com | `/most-rated-apps/` | Mislabeled directory list | YonoLink.co (as directory) or AllYonoOfficial (if rebuilt as real ranking) | **REPOSITION / DATA REQUIRED** | Currently a full list, not an evaluation; must become one or the other | Yes | Yes | Pending decision |
| AllYonoOfficial.com | 60 entity APK/download pages | Entity/directory | Entity specialists (Arcade/WinRummy/DhanGame) + YonoLink (rest) | **CONSOLIDATE / DATA REQUIRED** | Duplicates specialist and directory territory | Yes | Yes | Case-by-case per entity |
| AllYonoOfficial.com | Trust/safety cluster | Trust/E-E-A-T | AllYonoOfficial.com | **KEEP** | Genuinely unique differentiator — expand, don't touch | No | No | — |
| UonoVoucher.com | Homepage / `/uono-games/` | Promo + mini-directory | UonoVoucher.com | **KEEP + REFRAME** | Trim directory-like framing to stay clearly Uono-scoped | No | No | — |
| UonoVoucher.com | `/vouchers/` | Ambiguous promo/referral | UonoVoucher.com | **DATA REQUIRED** | Product clarification needed against referral/access behavior before disposition | No | No | — |
| AllYonoReward.com | `/games` + `/games/[slug]` (×55) | Directory | YonoLink.co | **CONSOLIDATE / DATA REQUIRED** | Off-mission scope creep, largest architectural risk on this domain | Yes | Yes | YonoLink equivalents |
| AllYonoReward.com | `/promo-codes` + `/promo-codes/[slug]` (×55) | Promo lookup | Unresolved (§7) | **NOINDEX or CONSOLIDATE / DATA REQUIRED** | Off-mission, honestly empty (low migration cost) | Yes | Yes | Pending §7 resolution |
| AllYonoReward.com | `/rewards` + `/rewards/[slug]` (×12) | Reward mechanics | AllYonoReward.com | **KEEP + EXPAND** | Core mission content; add cashback/VIP-loyalty gaps | No | No | — |
| AllYonoReward.com | One DhanGame bonus article | Reward/promo blur | AllYonoReward.com | **KEEP + REFRAME** | Rewrite to strict mechanics framing, remove any code-adjacent claims | No | No | — |
| AllYonoGuru.com | Homepage ("Yono Game All") + 57-app showcase | Directory | YonoLink.co | **REPOSITION (homepage) / CONSOLIDATE (showcase) / DATA REQUIRED** | Direct, literal violation of assigned identity | Yes | Yes | YonoLink equivalents |
| AllYonoGuru.com | 43+ app detail/download pages | Directory/entity | Entity specialists + YonoLink | **CONSOLIDATE / DATA REQUIRED** | Off-mission | Yes | Yes | Case-by-case |
| AllYonoGuru.com | Full promo-code product | Promo lookup | Unresolved (§7) | **NOINDEX or CONSOLIDATE / DATA REQUIRED** | Off-mission | Yes | Yes | Pending §7 resolution |
| AllYonoGuru.com | ~16 educational posts | Education | AllYonoGuru.com | **KEEP + EXPAND** | Core mission content, genuinely authored | No | No | — |
| AllYonoGuru.com | Teen Patti hand-ranking / joker-rule posts | Teen-Patti-specific education | AllYonoPatti.com | **MIGRATE / DATA REQUIRED** | Belongs to the category authority per §12 | Yes | Yes | AllYonoPatti.com equivalent guides |
| AllYonoGuru.com | "New Yono Games 2026" post | Freshness/news | AllYonoUpdate.com | **MIGRATE / DATA REQUIRED** | Belongs to the freshness authority once restored | Yes | Yes | AllYonoUpdate.com, once live |
| AllYonoGuru.com | DhanGame / Win Rummy / Yono Arcade entity pages with live download CTAs | Entity/transactional | Entity specialists | **REDIRECT candidate / DATA REQUIRED** | Direct entity conflict, monetized | Yes | Yes | Respective specialist domains |
| AllYonoUpdate.com | Homepage + `/all-yono-games/` + 8 APK hubs | Directory | YonoLink.co | **REPOSITION (homepage) / CONSOLIDATE (rest) / DATA REQUIRED** | Opposite of assigned identity | Yes | Yes | YonoLink equivalents |
| AllYonoUpdate.com | `/promo-code-updates/` | Promo lookup | Unresolved (§7) | **NOINDEX or CONSOLIDATE / DATA REQUIRED** | Off-mission duplicate | Yes | Yes | Pending §7 resolution |
| AllYonoUpdate.com | Evergreen APK/safety blog silo | Education | AllYonoGuru.com | **MIGRATE / DATA REQUIRED** | Off-mission, belongs to educational authority | Yes | Yes | AllYonoGuru.com equivalents |
| AllYonoUpdate.com | Shelved `_removed-pages` architecture | Freshness/news | AllYonoUpdate.com | **RESTORE** | Matches assigned role; already described by the site's own trust pages | No (internal restoration) | No | N/A — bring back live, verify dates first |
| AllYonoUpdate.com | Win Rummy launch-status article, DhanGame launch guide | Freshness/news | AllYonoUpdate.com | **KEEP** | On-mission, genuinely dated | No | No | — |
| AllYonoIndia.com | Homepage + `/all-yono-games/` (×55) | Directory | YonoLink.co | **REPOSITION (homepage) / CONSOLIDATE (directory) / DATA REQUIRED** | Removing "India" leaves a YonoLink clone | Yes | Yes | YonoLink equivalents |
| AllYonoIndia.com | 55 entity pages (near-devoid of India specifics) | Entity/directory | Entity specialists + YonoLink | **CONSOLIDATE / DATA REQUIRED**, or **KEEP + REFRAME** if India-specific fields get built | Yes | Yes | Case-by-case |
| AllYonoIndia.com | `/promo-code/` (~87% empty, mislabeled entries) | Promo lookup | Unresolved (§7) | **NOINDEX (low-value entries) / DATA REQUIRED** | Data-integrity issue (domains mislabeled as codes) independent of the ownership question | Yes | Yes | Pending §7 resolution |
| AllYonoIndia.com | `win-rummy-india-guide` | India entity guide | WinRummyIndia.com (deep) / AllYonoIndia (brief cross-ref) | **KEEP + REFRAME / DATA REQUIRED** | Highest-priority text comparison in the whole portfolio per WinRummyIndia's own audit | Yes | Yes | Possibly link out to WinRummyIndia rather than full redirect — preserve if it has independent ranking value |
| AllYonoIndia.com | State-list legal posts (contradictory, cite nonexistent Disclaimer) | Legal/informational | AllYonoIndia.com | **KEEP + REFRAME / DATA REQUIRED (legal sourcing)** | Correct toward hedged framing; do not delete a possibly-ranking page outright | No | No | — |
| AllYonoPatti.com | `/games` + `/games/[slug]` (×55, mostly non-Teen-Patti) | Directory | YonoLink.co (non-Teen-Patti entries) / AllYonoPatti (Teen-Patti-relevant entries, reframed) | **CONSOLIDATE (bulk) / KEEP+REFRAME (Teen-Patti-relevant subset) / DATA REQUIRED** | Needs entity-by-entity relevance triage per §11 threshold | Yes | Yes | YonoLink for non-relevant entries |
| AllYonoPatti.com | `/promo-codes` + subpages (×55) | Promo lookup | Unresolved (§7) | **NOINDEX or CONSOLIDATE / DATA REQUIRED** | Off-mission duplicate | Yes | Yes | Pending §7 resolution |
| AllYonoPatti.com | `/rewards` (generic) | Reward mechanics | AllYonoReward.com | **CONSOLIDATE / DATA REQUIRED**, unless reframed strictly to Teen-Patti-specific bonus mechanics | Yes | Yes | AllYonoReward.com |
| AllYonoPatti.com | `/guides` (×10 Teen Patti guides) | Category education | AllYonoPatti.com | **KEEP + EXPAND** | Core mission content, genuinely strong | No | No | — |
| WinRummyIndia.com | `[platform].astro` — `/dhan-game/` | Entity profile | DhanGame.co | **REDIRECT candidate / DATA REQUIRED** | Highest-severity single conflict in the portfolio | Yes | Yes | DhanGame.co, once rebuilt |
| WinRummyIndia.com | `[platform].astro` — `/yono-arcade/` | Entity profile | AllYonoArcade.com | **REDIRECT candidate / DATA REQUIRED** | Highest-severity single conflict, mirror of above | Yes | Yes | AllYonoArcade.com |
| WinRummyIndia.com | `[platform].astro` — 6 more Yono-brand slugs | Entity profile | YonoLink.co / AllYonoOfficial / AllYonoGuru (generic Yono territory) | **REMOVE ONLY AFTER DATA REVIEW** | No single clear specialist owner for Yono777/Yono Rummy/Yono Slots/Yono VIP/Yono Games | Yes | Yes | Case-by-case, likely YonoLink directory entries if any |
| WinRummyIndia.com | `[platform].astro` — 17 unrelated rummy-brand slugs | Entity profile | None assigned | **REMOVE ONLY AFTER DATA REVIEW** | Category-adjacent to AllYonoPatti at most, not assigned to any domain | Yes | Yes | None currently defined |
| WinRummyIndia.com | `[platform].astro` — 27 unrelated slots/casino/betting/bingo slugs | Entity profile | None (outside portfolio scope) | **REMOVE ONLY AFTER DATA REVIEW** | Fully outside the 12-domain master ownership map | Yes | Yes | None — likely straightforward removal once GSC/backlink review clears them, since they don't belong to this portfolio at all |
| WinRummyIndia.com | Tier-1 entity core (~39 pages) | Entity authority | WinRummyIndia.com | **KEEP** | Best-executed content in the portfolio | No | No | — |

---

## 15. Data-Integrity Register

| Domain | Issue | Severity | SEO risk | User/trust risk | Recommended fix | Can fix now? | Requires external verification? |
|---|---|---|---|---|---|---|---|
| AllYonoOfficial.com | Uniform, unsourced 4.1★ rating on ~58 pages | **High** | Structured-data/review-snippet risk if marked up as review schema; blocks credible commercial-investigation identity | High — implies real aggregated user reviews that don't exist | Remove or replace with sourced/qualitative verification-status system (§13) | Yes | No |
| AllYonoOfficial.com | Repeated 85 MB size field across many entity pages | **Medium** | Minor factual-accuracy risk | Medium | Verify per-app or remove the field | Yes, with verification | Per-app, ideally |
| YonoLink.co | Identical `AggregateRating.ratingCount = 10000` across 55 app pages | **High** | Structured-data integrity risk (fabricated-looking rating count if under review schema) | High | Remove fabricated count or replace with accurate/sourced value | Yes | No |
| YonoLink.co | Inconsistent app counts in site copy | **Low** | Minor trust/consistency issue | Low | Reconcile copy with actual catalog count | Yes | No |
| AllYonoUpdate.com | Sitemap index/category `lastmod` uses `new Date()` on every build | **Medium** | Artificial freshness signal to crawlers | Low (not user-facing) | Use genuine last-modified dates tied to actual content changes | Yes | No |
| AllYonoIndia.com | `/promo-code/` entries: several are domains mislabeled as promo codes | **Medium** | Misleading transactional content | Medium | Correct or remove mislabeled entries | Yes | No |
| AllYonoIndia.com | `/promo-code/` missing update timestamp | **Low** | Users can't judge currency of codes | Medium | Add genuine verification date or remove page until it can be maintained | Yes | No |
| AllYonoIndia.com | Legal content contradiction: one post says national framework supersedes state lists, a later post still lists specific states without sourcing, both reference a Disclaimer state-list page that does not exist | **High** | Legal-content contradiction is a trust and potential compliance risk | High | Correct toward hedged, sourced framing (§10); create or remove the referenced Disclaimer page | Partially — sourcing requires external legal verification | Yes, for state-specific claims |
| YonoMoreGames.com | Identical bulk `lastVerifiedAt`/`addedAt` timestamps across sampled entries | **Medium** | Looks like unverified bulk-stamped data rather than genuinely per-entry verified | Medium | Verify and stagger actual per-entry check dates, or relabel as batch-verification date | Yes, with a real verification pass | No |
| WinRummyIndia.com | `APP_FACTS` labeled "verified" while surrounding prose and other pages describe the same values as unverified platform claims | **Medium** | Internal inconsistency undermines the site's own stricter editorial standard | Medium | Relabel to match the site's own "not independently verified" standard | Yes | No |
| WinRummyIndia.com | Uniform placeholder identity facts ("Version 1.0.0," "35–53 MB," "2 GB RAM / 16 GB storage") stamped across all 51 Tier-3 pages | **High** (compounds with the architectural conflict itself) | Templated/thin-content signal at scale | Medium — honestly labeled as unverified, but still implausible-looking as a block | Resolved automatically once Tier-3 pages are removed/migrated (§14) | Yes, contingent on §14 disposition | No |
| WinRummyIndia.com | `contact@winrummyindia.com` is a known placeholder ("pre-launch note" in code) while 50/51 Tier-3 affiliate links are live and tracked | **High** | Monetization infrastructure live, trust infrastructure (contact/corrections) not — mixed launch state | High | Replace placeholder contact before any further indexation of monetized content | Yes | No |
| WinRummyIndia.com | "Customer Support Chat" label for an unverified third-party domain (`winrummysupport.com`) | **Low** | Soft trust-consistency issue | Low-Medium | Either verify the channel or soften the label to match the site's own hedging standard | Yes | No |
| AllYonoArcade.com, AllYonoReward.com, AllYonoGuru.com, AllYonoUpdate.com, AllYonoPatti.com, YonoLink.co | 7-way duplicated AM/PM/EVE promo-code product, several instances empty or near-empty | **Critical** (architectural, cross-referenced with §7/§14) | Portfolio's single largest thin/duplicate-content pattern | Medium — empty databases are honest but low-value, not deceptive | Resolve per §7/§14 disposition | Depends on §7 business decision | No |

*Kept separate from the keyword-ownership registry per the brief's instruction — this table is about factual/data correctness, not intent ownership.*

---

## 16. Future Information Architecture by Domain

> High-level only — no page copy. Each domain's navigation and content types should visibly express its Section 4 identity.

**YonoLink.co**
- Primary navigation: Directory (all games) · Categories · About/Trust
- Core content types: full catalog listing, per-category filters, directory-depth entity profiles
- Allowed supporting content: concise safety/trust notes on the directory itself
- Content types to phase out: `/games` duplicate template, `/games/[slug]`, `/promo-codes`, ranked "best" posts, deep entity blog posts
- Cross-domain links (contextual): entity specialist links from each directory entry; occasional link to AllYonoOfficial for "see our full comparison"

**AllYonoOfficial.com**
- Primary navigation: Reviews/Rankings · Comparisons · Trust & Safety · Methodology
- Core content types: criteria-based evaluations, comparison tables, scam-awareness/entity-verification journalism
- Allowed supporting content: brief per-entity summary linking to the specialist for full facts
- Content types to phase out: 60-app download grid, `/most-rated-apps/` as currently labeled, entity APK/download hosting
- Cross-domain links (contextual): to entity specialists for full facts, to YonoLink for full catalog

**AllYonoIndia.com**
- Primary navigation: India Legal & Access · Payments & Devices · Responsible Gaming · Entity Index (brief)
- Core content types: cross-portfolio India regulatory/access explainers, sourced legal framework content
- Allowed supporting content: short per-entity India index entries linking to specialists
- Content types to phase out: full 55-entry directory, `/promo-code/` in its current mislabeled state
- Cross-domain links (contextual): to entity specialists for entity+India depth (e.g., Win Rummy India → WinRummyIndia.com)

**AllYonoGuru.com**
- Primary navigation: Guides · How Games Work · APK & Android Safety · Comparison Methodology
- Core content types: generic rules/mechanics/terminology education, generic Android/APK safety education
- Allowed supporting content: illustrative brand mentions inside a generic lesson
- Content types to phase out: 57-app showcase, 43+ download pages, full promo product, Teen-Patti-specific posts (migrate), freshness-shaped posts (migrate)
- Cross-domain links (contextual): to AllYonoPatti for Teen-Patti-specific depth, to AllYonoUpdate for "what's new," to entity specialists for brand facts

**AllYonoUpdate.com**
- Primary navigation: Latest Updates · Update Archive · New Games · By Platform
- Core content types: dated launch/version/status/availability reporting, network-wide announcements
- Allowed supporting content: brief per-entity dated update logs
- Content types to phase out: directory homepage/`/all-yono-games/`/8 APK hubs, `/promo-code-updates/`, evergreen APK/safety blog silo (migrate to AllYonoGuru)
- Cross-domain links (contextual): to entity specialists for full entity facts, to YonoLink for full catalog

**AllYonoReward.com**
- Primary navigation: Rewards Explained · Welcome Bonus · Daily Rewards · By Platform
- Core content types: reward/bonus mechanics education, eligibility/expiration/qualification explainers, cashback and VIP/loyalty content (currently missing — build out)
- Allowed supporting content: entity-facts-level reward mechanics per platform, brief explanatory promo-code mentions
- Content types to phase out: `/games` ×55, `/promo-codes` ×55
- Cross-domain links (contextual): to entity specialists for entity facts, to referral owner for referral codes, to generic promo owner once resolved

**UonoVoucher.com**
- Primary navigation: Uono Promo Codes · Uono Vouchers · Uono vs. Yono (clarification)
- Core content types: current Uono/Uono Play code verification and status
- Allowed supporting content: the existing Uono≠Yono disambiguation note (keep, it's a genuine trust asset)
- Content types to phase out: any directory-like framing on `/uono-games/`
- Cross-domain links (contextual): minimal — this domain is intentionally off the generic-Yono axis

**YonoMoreGames.com**
- Primary navigation: Referral Codes by Platform · How Referral Codes Work
- Core content types: `{platform} referral code` pages, a new generic aggregator/explainer landing page
- Allowed supporting content: brief regulatory/safety context in the existing blog
- Content types to phase out: none material — this domain is closest to done
- Cross-domain links (contextual): to entity specialists for entity facts, to AllYonoReward for reward mechanics

**AllYonoArcade.com**
- Primary navigation: Yono Arcade · Download · APK · Login · Safety · Support
- Core content types: full Yono Arcade entity authority
- Allowed supporting content: brief, linked references to other entities where editorially justified (e.g., a genuine comparison article)
- Content types to phase out: `/all-games/[slug]` ×50, `/promo-codes` 50-platform product
- Cross-domain links (contextual): to YonoLink for the full directory, to WinRummyIndia/DhanGame.co for their own entities

**AllYonoPatti.com**
- Primary navigation: Teen Patti Rules & Guides · Hand Rankings · Variants · Teen Patti Apps
- Core content types: the existing 10-guide cluster, a rebuilt Teen-Patti-scoped app index
- Allowed supporting content: mode-specific entity pages for genuinely Teen-Patti-relevant apps
- Content types to phase out: `/games` ×55 (bulk), `/promo-codes` ×55, generic `/rewards`
- Cross-domain links (contextual): to YonoLink for general directory, to entity specialists for full entity facts, to AllYonoReward for reward mechanics

**WinRummyIndia.com**
- Primary navigation: Win Rummy · Download/APK · Login · Official Website · Safety · Games · Updates
- Core content types: the existing Tier-1 claims-vs-facts entity core (keep as-is — this is the model for DhanGame.co to follow)
- Allowed supporting content: generic Android-security guides (already exist, framed generically — fine as supporting content)
- Content types to phase out: all 51 `[platform].astro` pages
- Cross-domain links (contextual): to DhanGame.co and AllYonoArcade.com for those entities instead of hosting them; to AllYonoIndia for the general India regulatory hub

**DhanGame.co**
- Primary navigation: DhanGame · Download · APK · Login · Safety · Rewards (facts-level) — modeled directly on WinRummyIndia's Tier-1 structure
- Core content types: DhanGame identity, install, login, safety, India context — to be built
- Allowed supporting content: the existing `win-rummy-vs-dhan-game` comparison post
- Content types to phase out: 51 unrelated brand pages, generic directory homepage framing
- Cross-domain links (contextual): to YonoLink for the full directory, to AllYonoReward for reward mechanics

---

## 17. Cross-Domain Internal Linking Rules

- **Directory → entity specialist:** every YonoLink directory entry for an entity with a dedicated specialist should link to that specialist domain for full depth.
- **Entity specialist → reward explainer:** entity pages may link to AllYonoReward for "how rewards work on this platform" rather than building their own eligibility tables.
- **Entity specialist → referral lookup:** entity pages may link to YonoMoreGames for "find a referral code" rather than building their own lookup.
- **Update article → entity specialist:** AllYonoUpdate's dated posts should link back to the entity specialist for the underlying facts, rather than re-explaining them.
- **India localization page → entity specialist:** AllYonoIndia's brief per-entity index entries should link to the entity specialist for full India-specific depth (per §10's boundary).
- **Teen Patti category page → qualifying entity specialist:** AllYonoPatti should link to an entity's specialist domain (e.g., WinRummyIndia) only where that entity clears the Teen-Patti-relevance threshold in §11.
- **Commercial-investigation page → entity specialist + trust cluster:** AllYonoOfficial's comparison content should link to entity specialists for facts it doesn't re-host, and can cross-link its own trust/safety cluster as supporting evidence for a verdict.

All links must be **editorially useful in context** — a reader following the link should land on genuinely deeper or more specific content, not a near-duplicate of what they left. Per the master spec (§11) and this task's explicit instruction, **do not build a sitewide reciprocal footer/sidebar link wheel** across all twelve domains. No domain's global footer or sidebar should list all eleven sibling domains as a matter of course.

---

## 18. Migration/Implementation Priority Plan

| Priority | Domain | Action | Why | Risk | Dependency | GSC required? | Backlink review required? | Can be implemented immediately? |
|---|---|---|---|---|---|---|---|---|
| **P0** | WinRummyIndia.com | Resolve the `/dhan-game/` and `/yono-arcade/` Tier-3 pages | Highest-severity, repository-confirmed cross-domain entity trespass in the portfolio | High if handled destructively; low if handled per DATA REQUIRED process | DhanGame.co and AllYonoArcade.com must have (or be building) a receiving page | Yes | Yes | No — needs GSC/backlink review first |
| **P0** | AllYonoOfficial.com | Remove or replace the fabricated-looking uniform 4.1★ rating and 85 MB field | Active data-integrity/E-E-A-T risk, independent of any repositioning decision | Low | None | No | No | **Yes** |
| **P0** | YonoLink.co | Remove or correct the identical `ratingCount = 10000` across 55 pages | Same class of integrity risk as above | Low | None | No | No | **Yes** |
| **P0** | AllYonoIndia.com | Correct the internally contradictory legal/state-list content and the nonexistent Disclaimer reference | Legal-content contradiction is a trust and compliance risk, not just an SEO one | Low-Medium | Legal sourcing for anything beyond hedged correction | No for correction; yes for new claims | No | Correction: **yes**. New sourced claims: no |
| **P0** | AllYonoUpdate.com | Fix trust pages describing the shelved archive/notice system as if live | E-E-A-T mismatch — site claims a capability it doesn't currently have live | Low | Coordinated with the P1 restoration below | No | No | **Yes** |
| **P1** | AllYonoGuru.com | Reposition homepage away from "Yono Game All" | Direct, literal identity violation | Medium (traffic to homepage) | GSC review of current homepage rankings first | Yes | Yes | No — GSC first |
| **P1** | DhanGame.co | Begin building DhanGame entity architecture (download/APK/login/safety), modeled on WinRummyIndia's Tier-1 structure | Domain currently has almost no DhanGame-specific content despite being the assigned entity owner | Low (additive) | None — can start independent of any redirect decisions | No | No | **Yes** (additive build, no removals required first) |
| **P1** | AllYonoUpdate.com | Restore the shelved `_removed-pages` freshness architecture | Directly matches assigned role; content already exists | Medium | Verify shelved content's dates are still meaningful before republishing | No | No | Mostly — date verification first |
| **P1** | AllYonoPatti.com | Add "Teen Patti" as a first-class `GameCategory` | Structural blocker for the entire assigned identity | Low | None | No | No | **Yes** |
| **P1** | AllYonoIndia.com | Add CMS fields for India-specific dimensions (UPI, KYC, TDS flag, state availability) | Structural blocker for the entire assigned identity | Low | None | No | No | **Yes** (schema work; content population is P2/P3) |
| **P1** | AllYonoArcade.com | Stop adding to `/all-games/[slug]`; freeze the 50-page directory pending disposition | Prevents the conflict from growing while GSC/backlink review happens | Low | None | No | No | **Yes** (freeze, not removal) |
| **P2** | All 7 domains with duplicated promo-code layers | Execute §7 disposition once the business chooses Option A or B | Portfolio's largest content-duplication pattern | Medium-High depending on chosen option and existing rankings | §7 business decision | Yes, per domain | Yes, per domain | No — business decision first |
| **P2** | YonoLink.co, AllYonoOfficial.com, AllYonoReward.com, AllYonoGuru.com, AllYonoUpdate.com, AllYonoIndia.com, AllYonoPatti.com | Consolidate/migrate/redirect the 50–60-page directory layers per §14 | Core cannibalization fix, portfolio-wide | High if rushed; the Critical Preservation Rule applies to every one of these URLs | GSC/backlink data per domain (this is the largest data-gathering task in the whole plan) | Yes | Yes | No |
| **P2** | AllYonoGuru.com | Migrate Teen-Patti-specific posts to AllYonoPatti.com | Resolves §12 boundary | Low-Medium | AllYonoPatti's taxonomy fix (P1) should land first | Yes | Yes | No |
| **P2** | AllYonoIndia.com / WinRummyIndia.com | Resolve `win-rummy-india-guide` vs. WinRummyIndia's core premise | Highest-priority named text-comparison item across the audits | Medium | Full-text comparison | Yes | Yes | No |
| **P3** | AllYonoOfficial.com | Build the criteria-based evaluation methodology and comparison content | Only after the P0 integrity fix and P2 directory cleanup, so the new content isn't competing with its own leftover directory pages | Low once dependencies are clear | P0 integrity fix, P2 directory cleanup | No | No | No — sequenced after P0/P2 |
| **P3** | AllYonoReward.com | Build out missing cashback/VIP-loyalty reward-mechanics content | Fills a genuine content gap identified in the audit | Low | None | No | No | **Yes**, independent of other priorities |
| **P3** | YonoMoreGames.com | Build a generic "Yono referral code" aggregator/explainer landing page | Closes the one real gap on an otherwise clean domain | Low | None | No | No | **Yes** |
| **P4** | All domains | Implement `llms.txt` where desired | Explicitly not a ranking factor or cannibalization fix per the master spec — lowest priority | Low | Core positioning work should land first | No | No | Yes, but deliberately last |
| **P4** | YonoLink.co | Core Web Vitals / mobile performance (score 65, CWV failed) | Master spec already flags this as critical for UX, but it's independent of the intent-ownership reconciliation this report covers | Low | None | No | No | Yes, in parallel with the above, not blocking it |

---

## 19. Data Required Before Implementation

- Full GSC (queries, pages, clicks, impressions, CTR, average position) for all 12 domains — no GSC data was available in this session for any domain; every disposition above marked "DATA REQUIRED" depends on it.
- Backlink profiles for every URL flagged CONSOLIDATE/REDIRECT/REMOVE, especially: WinRummyIndia's `/dhan-game/` and `/yono-arcade/`, AllYonoArcade's `/all-games/win-rummy` and `/all-games/dhangame`, AllYonoIndia's `win-rummy-india-guide`, and every domain's directory/promo-code layer.
- Full-text side-by-side comparison of: AllYonoIndia's `win-rummy-india-guide` vs. WinRummyIndia's India content; AllYonoOfficial's Win Rummy/official-site pages vs. WinRummyIndia's equivalents; AllYonoGuru's `/win-rummy` and "Win Rummy Game List" vs. WinRummyIndia's `/win-rummy-games/`; YonoLink's Win Rummy APK safety article vs. WinRummyIndia's `/win-rummy-apk/` and `/app-verification/`.
- Business decision on generic "Yono promo code" ownership (§7, Option A vs. Option B vs. no centralized owner).
- Business/legal decision on the intended fate of WinRummyIndia's 27 fully-unassigned Tier-3 brands (slots/casino/betting/bingo) — these sit entirely outside the 12-domain master ownership map and the business may want to address them independent of this portfolio's SEO reconciliation.
- Clarification on whether WinRummyIndia's 51 `[platform].astro` pages were a deliberate interim monetization layer or an unreviewed build artifact — this materially changes whether the disposition is a considered CONSOLIDATE/REDIRECT decision or an urgent unplanned-content removal.
- Authoritative legal/regulatory sourcing before publishing or extending any India state-specific legality, KYC, or TDS/tax content (AllYonoIndia).
- Confirmation that the dates in AllYonoUpdate's shelved `_removed-pages` architecture are still meaningful (or need re-verification) before restoring them live.
- Verification pass on YonoMoreGames' bulk-identical `lastVerifiedAt`/`addedAt` timestamps.
- DhanGame.co vs. YonoLink/WinRummyIndia/AllYonoArcade GSC comparison, to confirm whether those three domains currently hold ranking value for DhanGame-related queries that DhanGame.co itself does not yet have — this determines redirect sequencing, since DhanGame.co's entity architecture doesn't exist yet to receive traffic.

---

## 20. Unresolved Portfolio Decisions

1. **Generic "Yono promo code" ownership** — no domain currently earns it; two non-binding options presented in §7.3; requires a business decision, not an audit-derived answer.
2. **Fate of WinRummyIndia's 27 off-portfolio Tier-3 brands** (slots/casino/betting/bingo) — outside the 12-domain master ownership map entirely; requires a business decision on whether these belong anywhere in the portfolio or should be treated as an unrelated monetization layer to be removed independent of SEO strategy.
3. **Fate of WinRummyIndia's 17 unrelated rummy-brand Tier-3 pages** — category-adjacent to AllYonoPatti at most, not assigned to any current domain; requires a decision on whether AllYonoPatti should absorb any of them (subject to the Teen-Patti-relevance threshold in §11, which most would likely fail since they are Rummy, not Teen Patti) or whether they should simply be removed.
4. **Whether AllYonoOfficial's `best Yono games` role should proceed before or in parallel with its P0 integrity fix** — this report recommends sequencing (fix integrity first, per §18) but the business may prioritize differently.
5. **DhanGame.co's 51 non-DhanGame brand pages** — disposition marked DATA REQUIRED (§14); some may have independent ranking/traffic value unrelated to DhanGame and could plausibly be redistributed to YonoLink rather than simply removed, but this requires GSC data this session did not have.
6. **UonoVoucher's `/vouchers/` product boundary** — flagged by its own audit as needing clarification against referral/access behavior; not resolved here because the underlying product intent isn't fully documented in the audit evidence.
7. **Whether the portfolio wants ONE generic-Yono directory-of-entities-with-Teen-Patti-relevance page** bridging AllYonoPatti and YonoLink, or whether AllYonoPatti's category index should be entirely self-contained — a minor architectural preference not settled by the audits.

---

## 21. Final Confidence Assessment

| Area | Confidence | Basis |
|---|---|---|
| YonoLink = master directory | **High** | Confirmed by master spec and unanimous audit agreement |
| YonoMoreGames = referral authority | **High** | Cleanest domain in the portfolio, no material dispute found |
| UonoVoucher ≠ generic Yono promo owner | **High** | Repository evidence is direct and repeated (site actively disclaims Yono confusion) |
| WinRummyIndia Tier-1 = strongest entity content in the portfolio | **High** | Most rigorous, most recent, most detailed of the 12 audits; findings are specific and repository-confirmed |
| WinRummyIndia/AllYonoArcade cross-entity conflicts (DhanGame, Yono Arcade pages) | **High** | Directly confirmed in two independent audits (WinRummyIndia's own audit and AllYonoArcade's own audit both report the same collisions from each side) |
| AllYonoReward/AllYonoGuru/AllYonoPatti = strong core content in wrong architecture | **High** | Each audit independently identifies a clear minority of genuinely strong, on-mission content against a majority off-mission architecture |
| AllYonoUpdate = restore-not-build | **High** | The shelved architecture's existence and its match to the assigned role is a direct repository finding, not an inference |
| DhanGame.co requiring substantial rebuild | **High** | Audit is unambiguous: 51/52 listings unrelated, core architecture absent |
| AllYonoOfficial's commercial-investigation identity being earnable | **Medium** | Plausible given the trust-cluster asset, but contingent on methodology work not yet done and not evaluable without it |
| AllYonoIndia's India-hub identity being earnable | **Medium** | Plausible in principle, but contingent on CMS/data-model changes and legal sourcing not yet done |
| Generic "Yono promo code" ownership | **Low (explicitly unresolved)** | Evidence rules out the master-spec default (UonoVoucher) but does not support any alternative single owner |
| Exact cross-domain page-level de-duplication calls (text-comparison items) | **Low-Medium** | Directional calls made using structural/architectural evidence, but explicit full-text comparisons were not possible in this session |
| GSC-dependent dispositions throughout §14/§18 | **Low without the data, High on the *logic* once GSC is available** | No live performance data was available in this session for any of the 12 domains |

**Is the master ownership map ready to be finalized?** The **identity assignments** (which domain owns which primary role) are ready to finalize — every one of the 12 audits independently converges on the same 12 identities the master spec already proposed, with one dispute (UonoVoucher's keyword, not its role) and one open question (generic Yono promo-code ownership). The **implementation** is not ready to finalize — it depends on GSC/backlink data this session did not have, on several explicit business decisions (§20), and on the highest-severity architectural fix in the portfolio (WinRummyIndia's Tier-3 pages) being resolved through the DATA REQUIRED process rather than assumed.

---

*End of reconciliation report. No repository, metadata, sitemap, canonical, or navigation changes were made. `YONO_SEO_POSITIONING_MASTER_SPEC.md` was not modified. Awaiting human review and approval before any implementation phase begins.*
