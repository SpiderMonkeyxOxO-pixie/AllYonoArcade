import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/sections/PageHeader";
import ContentSection from "../components/sections/ContentSection";
import BulletList from "../components/sections/BulletList";
import RelatedLinks from "../components/sections/RelatedLinks";

const TITLE = "Disclaimer";
const DESCRIPTION =
  "Legal disclaimer for AllYonoArcade.com — independence from third-party apps, affiliate disclosure, and Indian online gaming law compliance.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "https://allyonoarcade.com/disclaimer" },
  openGraph: {
    title: `${TITLE} | AllYonoArcade.com`,
    description: DESCRIPTION,
    url: "https://allyonoarcade.com/disclaimer",
  },
  twitter: {
    title: `${TITLE} | AllYonoArcade.com`,
    description: DESCRIPTION,
  },
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Disclaimer"
        title="Disclaimer"
        answer="Last Updated: July 22, 2026. This Disclaimer applies to every visitor and user of the AllYonoArcade website, including its game directory, download guides, APK-related information, promo-code pages, safety reviews, platform comparisons, blog articles, images, links and other published materials."
      />

      <RelatedLinks />

      <ContentSection heading="Welcome to AllYonoArcade">
        <p>
          AllYonoArcade is an independent and unofficial informational website. We publish general
          information about third-party arcade, casual, social and other gaming applications that
          may be available online.
        </p>
        <p>
          By accessing or using AllYonoArcade, you acknowledge that you have read and understood
          this Disclaimer. If you do not agree with any part of it, you should discontinue using
          the website.
        </p>
      </ContentSection>

      <ContentSection heading="Informational purpose">
        <p>
          The information published on AllYonoArcade is provided for general informational,
          educational and editorial purposes only.
        </p>
        <p>Nothing on this website should be treated as:</p>
        <BulletList
          items={[
            "legal advice",
            "financial advice",
            "professional advice",
            "an instruction to download an application",
            "an invitation to create an account",
            "encouragement to make a payment",
            "encouragement to participate in paid gaming",
            "a guarantee of any reward or outcome",
            "an endorsement of a third-party platform",
          ]}
        />
        <p>
          Users remain responsible for deciding whether to visit, install, register with or use
          any application discussed on this website.
        </p>
      </ContentSection>

      <ContentSection heading="Independent and unofficial guide">
        <p>
          AllYonoArcade does not own, develop, operate, manage or control Yono Arcade or any other
          third-party application discussed or listed on this website unless expressly stated
          otherwise.
        </p>
        <p>
          We are not an application operator, gaming operator, payment processor, wallet provider,
          software developer or customer-support provider for any third-party platform.
        </p>
        <p>We do not control:</p>
        <BulletList
          items={[
            "account registration",
            "identity verification",
            "application development",
            "gameplay systems",
            "deposits or payments",
            "withdrawals or refunds",
            "prizes or rewards",
            "promo-code eligibility",
            "account balances",
            "account suspension",
            "privacy practices",
            "customer complaints",
            "platform availability",
          ]}
        />
        <p>
          Every third-party application remains under the ownership, operation and responsibility
          of its respective developer or operator.
        </p>
      </ContentSection>

      <ContentSection heading="No affiliation with Yono Arcade">
        <p>
          AllYonoArcade is not affiliated with, sponsored by, endorsed by, authorised by or
          officially connected to Yono Arcade or its developer unless a specific relationship is
          expressly disclosed.
        </p>
        <p>
          The name &quot;Yono Arcade&quot; is used for identification, reporting, commentary and
          informational reference.
        </p>
        <p>Nothing on this website should be interpreted as suggesting that AllYonoArcade is:</p>
        <BulletList
          items={[
            "the official Yono Arcade website",
            "an official distributor of the application",
            "the application developer",
            "an authorised customer-support provider",
            "a payment or withdrawal representative",
            "an approved partner of the platform",
          ]}
        />
        <p>
          All product names, application names, logos, screenshots, icons, trademarks and related
          materials remain the property of their respective owners.
        </p>
      </ContentSection>

      <ContentSection heading="No affiliation with SBI or YONO SBI">
        <p>
          AllYonoArcade is not affiliated with, sponsored by, endorsed by or connected to the
          State Bank of India, SBI or the YONO SBI application.
        </p>
        <p>
          The word &quot;Yono&quot; is used only as part of the name by which certain independent
          gaming applications may be known online.
        </p>
        <p>
          Nothing published on AllYonoArcade suggests that SBI or YONO SBI owns, manages,
          approves, supports or guarantees any gaming application discussed on this website.
        </p>
      </ContentSection>

      <ContentSection heading="Affiliate and referral disclosure">
        <p>
          Some links, buttons, download references or promo-code pages on AllYonoArcade may
          contain affiliate or referral links.
        </p>
        <p>
          When a visitor follows one of these links or completes a qualifying action through a
          third-party platform, AllYonoArcade may receive a referral fee or commission. This will
          generally not create an additional cost for the visitor.
        </p>
        <p>An affiliate relationship does not mean that AllYonoArcade:</p>
        <BulletList
          items={[
            "owns the platform",
            "operates the platform",
            "controls its services",
            "guarantees its security",
            "verifies every operator claim",
            "guarantees any reward",
            "assumes responsibility for the user's account or transactions",
          ]}
        />
        <p>
          Affiliate compensation does not remove the user's responsibility to independently assess
          the platform, operator, terms, privacy practices, download source and applicable law.
        </p>
        <p>
          Where reasonably practical, an additional disclosure may appear close to the relevant
          affiliate link or button.
        </p>
      </ContentSection>

      <ContentSection heading="Scope of published content">
        <p>AllYonoArcade may publish information about:</p>
        <BulletList
          items={[
            "arcade and casual gaming applications",
            "game collections and platform features",
            "application versions",
            "installation methods",
            "APK availability",
            "login and account-access procedures",
            "publicly advertised promo codes",
            "rewards and promotional offers",
            "safety and transparency checks",
            "alternative applications",
            "publicly available operator information",
            "responsible-use considerations",
          ]}
        />
        <p>
          This content is informational only. The publication of a game, application, download
          guide, promo code or external link does not constitute a recommendation or instruction
          to use the relevant service.
        </p>
      </ContentSection>

      <ContentSection heading="Third-party applications">
        <p>
          Applications discussed or linked on AllYonoArcade are independently developed, owned and
          operated by third parties.
        </p>
        <p>AllYonoArcade does not supervise or control:</p>
        <BulletList
          items={[
            "application design or development",
            "software updates",
            "game mechanics",
            "random outcomes",
            "scoring systems",
            "contests or leaderboards",
            "advertisements",
            "in-app purchases",
            "payment processing",
            "withdrawal procedures",
            "data collection",
            "security systems",
            "customer service",
            "complaint handling",
            "dispute resolution",
          ]}
        />
        <p>
          Any interaction between a user and a third-party application takes place directly
          between those parties. AllYonoArcade is not responsible for the actions, omissions,
          statements, policies, promises or decisions of a third-party operator.
        </p>
      </ContentSection>

      <ContentSection heading="No ownership, approval or endorsement">
        <p>
          The appearance of an application, logo, screenshot, download button, promo code, safety
          review or external link on AllYonoArcade does not mean that we:
        </p>
        <BulletList
          items={[
            "own or operate the application",
            "approve its business practices",
            "certify its software",
            "guarantee its authenticity",
            "verify its legal status",
            "confirm all promotional statements",
            "guarantee its payments",
            "recommend financial participation",
            "accept responsibility for its operation",
          ]}
        />
        <p>A listing or article is provided for informational and identification purposes only.</p>
      </ContentSection>

      <ContentSection heading="User responsibility and due diligence">
        <p>
          Users are responsible for conducting their own checks before accessing, downloading,
          installing, registering with or using a third-party application.
        </p>
        <p>Before using an application, users should verify:</p>
        <BulletList
          items={[
            "the legal identity of the operator",
            "the official website or authorised app listing",
            "the authenticity of the domain",
            "the developer or publisher name",
            "the Terms and Conditions",
            "the Privacy Policy",
            "the permissions requested by the application",
            "age and eligibility requirements",
            "geographic restrictions",
            "customer-support details",
            "payment and withdrawal conditions",
            "promotional terms",
            "regulatory status",
            "applicable Indian law",
          ]}
        />
        <p>
          Users should not rely solely on advertisements, social-media posts, influencer claims,
          referral messages, screenshots, testimonials or promotional banners.
        </p>
      </ContentSection>

      <ContentSection heading="Accuracy of information">
        <p>AllYonoArcade makes reasonable efforts to publish clear, useful and current information.</p>
        <p>However, third-party application information may change without notice. Changes may affect:</p>
        <BulletList
          items={[
            "the operator or developer",
            "application versions",
            "domain names",
            "download links",
            "APK files",
            "platform features",
            "login methods",
            "promo codes",
            "reward values",
            "eligibility conditions",
            "payment methods",
            "withdrawal rules",
            "privacy practices",
            "customer-support details",
            "regional availability",
          ]}
        />
        <p>
          We do not guarantee that every page will always be complete, accurate, current,
          error-free or applicable to every user. Users should consider the publication or review
          date of a page and verify important information directly through reliable official
          sources before taking action.
        </p>
      </ContentSection>

      <ContentSection heading="Verification and safety labels">
        <p>AllYonoArcade may use editorial labels such as:</p>
        <BulletList
          items={[
            "Verified",
            "Recently Checked",
            "Unverified",
            "Awaiting Verification",
            "Official Source Not Confirmed",
            "Expired",
            "Platform-Specific",
            "No Public Information Available",
          ]}
        />
        <p>
          These labels describe the status recorded by our editorial process at the time a page
          was reviewed. A verification or safety label does not guarantee that:
        </p>
        <BulletList
          items={[
            "the information will remain accurate",
            "the platform will remain available",
            "the operator will remain unchanged",
            "a download will remain safe",
            "a code will remain active",
            "an application is legally approved",
            "every user will have the same experience",
          ]}
        />
        <p>Users should independently confirm current details before relying on any platform or download.</p>
      </ContentSection>

      <ContentSection heading="Downloads and APK files">
        <p>
          Some applications discussed on AllYonoArcade may be distributed as APK files or through
          websites outside recognised application stores.
        </p>
        <p>
          Installing software from an unknown or unauthorised source can expose a device, account
          or personal information to risks such as malware, data theft, unauthorised permissions
          or altered software.
        </p>
        <p>Before downloading or installing an application, users should verify:</p>
        <BulletList
          items={[
            "whether the website is authentic",
            "whether the source is authorised by the developer",
            "the publisher or developer identity",
            "the file name and version",
            "the permissions requested",
            "available security information",
            "the application's Privacy Policy",
            "whether the file may have been modified",
          ]}
        />
        <p>
          AllYonoArcade does not guarantee the authenticity, safety, integrity, functionality or
          security of software supplied by a third-party website. Unless expressly stated
          otherwise, AllYonoArcade does not develop, own, host, scan, inspect, certify or
          distribute third-party APK files. Users download and install third-party files at their
          own discretion and responsibility.
        </p>
      </ContentSection>

      <ContentSection heading="No technical or account support">
        <p>
          AllYonoArcade does not create, access, manage, recover or modify accounts held with
          third-party applications.
        </p>
        <p>We cannot assist with:</p>
        <BulletList
          items={[
            "account registration",
            "login credentials",
            "passwords",
            "one-time passwords",
            "identity verification",
            "account balances",
            "deposits",
            "payments",
            "withdrawals",
            "refunds",
            "rewards",
            "account suspension",
            "transaction records",
            "disputes with an operator",
          ]}
        />
        <p>
          All account, payment, login or support concerns must be addressed directly with the
          relevant application operator through its verified official support channels.
        </p>
        <p>
          Users should never send passwords, one-time passwords, payment PINs, bank details,
          identity documents or other sensitive information to anyone claiming to provide
          third-party application support through AllYonoArcade.
        </p>
      </ContentSection>

      <ContentSection heading="Promo codes, bonuses and rewards">
        <p>
          AllYonoArcade may publish publicly available information about promo codes, welcome
          offers, referral rewards, cashback, vouchers, spins, events or other promotional
          incentives.
        </p>
        <p>These offers may be subject to:</p>
        <BulletList
          items={[
            "expiry dates",
            "account eligibility",
            "new-user restrictions",
            "geographic restrictions",
            "identity verification",
            "platform-specific conditions",
            "minimum activity requirements",
            "payment conditions",
            "usage restrictions",
            "withdrawal conditions",
          ]}
        />
        <p>AllYonoArcade does not guarantee that:</p>
        <BulletList
          items={[
            "a promo code will work",
            "an offer is still active",
            "a user will qualify",
            "a reward will be credited",
            "a bonus can be withdrawn",
            "an advertised amount will be paid",
            "an operator will honour an outdated promotion",
          ]}
        />
        <p>
          Promotional amounts should not be treated as guaranteed money, income or funds already
          belonging to a user. Unless expressly stated otherwise, AllYonoArcade does not create,
          issue, sell, activate, redeem, administer or process third-party promo codes or rewards.
        </p>
      </ContentSection>

      <ContentSection heading="Financial risk">
        <p>
          Some third-party applications may contain in-app purchases, paid features, entry
          payments, rewards, prizes or withdrawal-related claims.
        </p>
        <p>
          Any payment or financial transaction made through a third-party application is
          undertaken entirely at the user's own discretion and responsibility.
        </p>
        <p>AllYonoArcade does not guarantee:</p>
        <BulletList
          items={[
            "winnings",
            "successful deposits",
            "successful withdrawals",
            "refunds",
            "cashback",
            "referral payments",
            "bonuses",
            "account balances",
            "prize distribution",
            "recovery of money paid",
            "any other financial result",
          ]}
        />
        <p>
          Users should not treat advertisements or promotional claims as proof that they will earn
          money or receive a payment. Users should never spend money required for food, housing,
          healthcare, education, bills, debt repayments or other essential needs.
        </p>
      </ContentSection>

      <ContentSection heading="Compliance with Indian law">
        <p>
          Users are responsible for ensuring that their access to or use of any third-party
          application complies with all applicable laws and regulations in India and in their
          State or Union Territory.
        </p>
        <p>
          The Promotion and Regulation of Online Gaming Act, 2025 and the Promotion and Regulation
          of Online Gaming Rules, 2026 establish a national framework for online gaming. The Rules
          came into force on May 1, 2026.
        </p>
        <p>
          The framework provides for the recognition and development of certain e-sports and
          online social games while prohibiting online money games and specified activities
          connected with their offering, promotion and funding.
        </p>
        <p>
          The legal treatment of a particular application depends on its actual features,
          operating model, payment structure and official regulatory status.
        </p>
        <p>AllYonoArcade does not classify any third-party application as:</p>
        <BulletList
          items={[
            "an e-sport",
            "an online social game",
            "an online money game",
            "a registered game",
            "a lawful platform",
            "a licensed service",
            "a government-approved application",
          ]}
        />
        <p>unless that status is supported by reliable official information.</p>
        <p>
          Any description or category appearing on AllYonoArcade is an editorial description and
          not a formal legal determination. Nothing published on this website should be
          interpreted as promoting, facilitating or encouraging an online money game or any other
          activity prohibited under Indian law.
        </p>
        <p>
          Users who require advice regarding the legal status of a particular application should
          consult an appropriately qualified legal professional.
        </p>
      </ContentSection>

      <ContentSection heading="Regional restrictions">
        <p>
          A platform being accessible from a particular location does not necessarily mean that
          every feature or activity offered through it is legally permitted there.
        </p>
        <p>
          Users are responsible for checking whether an application, game, promotion, purchase or
          paid feature is permitted in their State or Union Territory. AllYonoArcade does not
          guarantee that every application or feature discussed on the website is available or
          legally accessible throughout India.
        </p>
        <p>
          Users should not attempt to bypass legal, geographic, age or platform restrictions by
          using false information, VPN services or other circumvention methods.
        </p>
      </ContentSection>

      <ContentSection heading="Age restrictions">
        <p>AllYonoArcade is intended for individuals aged 18 years and above.</p>
        <p>
          Third-party applications may impose their own age requirements, and some services may
          require users to meet additional eligibility conditions. Users must comply with all age
          and eligibility restrictions stated by the relevant operator and applicable law.
        </p>
        <p>
          Parents and guardians should supervise minors' internet and device use and take
          reasonable steps to prevent access to age-restricted applications or content.
        </p>
      </ContentSection>

      <ContentSection heading="Responsible gaming and digital well-being">
        <p>
          Gaming should be approached as entertainment and used within reasonable personal,
          financial and time limits.
        </p>
        <p>Users should avoid:</p>
        <BulletList
          items={[
            "spending money needed for essential expenses",
            "borrowing money for gaming",
            "attempting to recover losses through continued activity",
            "repeatedly making payments after losses",
            "hiding gaming activity or spending",
            "allowing gaming to interfere with work or education",
            "allowing gaming to damage relationships",
            "continuing when it causes emotional or financial distress",
          ]}
        />
        <p>
          If gaming stops being enjoyable, voluntary or controllable, the user should stop using
          the relevant application. Anyone experiencing gaming-related harm should consider
          seeking support from an appropriately qualified professional or responsible-gaming
          organisation.
        </p>
      </ContentSection>

      <ContentSection heading="App-specific notices">
        <p>
          The categories below apply to the corresponding type of application wherever it's
          discussed on this site.
        </p>
      </ContentSection>

      <ContentSection heading="Arcade games">
        <p>
          Arcade applications may include free games, advertisements, virtual items, in-app
          purchases, rewards, leaderboards or account-based features. Users should review the
          application's official terms, privacy practices, permissions and purchase conditions
          before using it. The appearance of an arcade application on AllYonoArcade does not
          constitute approval, certification or endorsement.
        </p>
      </ContentSection>

      <ContentSection heading="Casual and social games">
        <p>
          Casual and social gaming applications may collect account information, display
          advertisements or offer optional purchases and virtual rewards. Users should
          independently verify the operator, download source, Privacy Policy and Terms and
          Conditions. AllYonoArcade does not guarantee the safety, availability or regulatory
          status of any casual or social application.
        </p>
      </ContentSection>

      <ContentSection heading="Ludo applications">
        <p>
          Ludo applications may operate as free casual games or may contain advertisements,
          contests, purchases, rewards or payment-related features. Users should review official
          platform information before registering or making a payment. AllYonoArcade does not
          guarantee game outcomes, rewards, prizes, withdrawals or promotional benefits connected
          with a Ludo application.
        </p>
      </ContentSection>

      <ContentSection heading="Rummy applications">
        <p>
          Information about rummy applications is provided for general informational purposes
          only. Rummy platforms may differ in their rules, payment features, operating models,
          eligibility conditions and regional availability. Users should review the operator's
          official documentation and applicable law before accessing any rummy service.
        </p>
      </ContentSection>

      <ContentSection heading="Poker and card-game applications">
        <p>
          Poker and other card-game applications may be subject to legal, regional and eligibility
          restrictions. Users should independently examine the platform's operator, game model,
          payment structure, age requirements and regulatory status. A reference to a poker or
          card-game application does not constitute endorsement or encouragement to participate.
        </p>
      </ContentSection>

      <ContentSection heading="Fantasy sports applications">
        <p>
          Fantasy sports platforms may be subject to specific legal, geographic and eligibility
          conditions. Users are responsible for determining whether a particular service and its
          features are permitted in their location. AllYonoArcade does not guarantee contest
          entry, rankings, results, prizes, payments or withdrawals.
        </p>
      </ContentSection>

      <ContentSection heading="Other gaming applications">
        <p>
          Any other gaming application mentioned on AllYonoArcade remains under the ownership and
          responsibility of its respective developer or operator. Users should conduct their own
          checks before downloading, installing, registering, providing personal information or
          making a payment.
        </p>
      </ContentSection>

      <ContentSection heading="Privacy and personal information">
        <p>
          AllYonoArcade does not control how third-party applications collect, process, store, use
          or share personal information.
        </p>
        <p>Before using an application, users should review its Privacy Policy and understand:</p>
        <BulletList
          items={[
            "what information is collected",
            "why it is collected",
            "which device permissions are requested",
            "whether information is shared with third parties",
            "where information may be stored",
            "how long information is retained",
            "how an account can be closed",
            "how data deletion can be requested",
            "how privacy complaints are handled",
          ]}
        />
        <p>
          Users should avoid applications that request excessive permissions, unnecessary
          sensitive information or payments without providing clear operator and privacy details.
        </p>
        <p>
          Information collected directly by AllYonoArcade is governed by our separate{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>
      </ContentSection>

      <ContentSection heading="External links">
        <p>
          AllYonoArcade may contain links to third-party websites, applications, app stores,
          download pages, social-media accounts, support channels or other external resources.
        </p>
        <p>
          We do not control the content, availability, security, accuracy, functionality, privacy
          practices or policies of external websites. The presence of an external link does not
          constitute endorsement, approval, verification or guarantee.
        </p>
        <p>
          Users access external resources at their own discretion and should review the relevant
          third party's Terms and Conditions and Privacy Policy.
        </p>
      </ContentSection>

      <ContentSection heading="Intellectual property">
        <p>
          Third-party game names, application names, trademarks, logos, screenshots, icons and
          other identifying materials remain the property of their respective owners. Their use on
          AllYonoArcade is intended for identification, reporting, reference, review or
          informational commentary. Such use does not imply ownership, sponsorship, partnership,
          endorsement or official affiliation.
        </p>
        <p>
          A rights holder who believes that protected material has been used improperly may
          contact AllYonoArcade at{" "}
          <a href="mailto:AllYonoarcadenewsupport@gmail.com">AllYonoarcadenewsupport@gmail.com</a>{" "}
          and provide:
        </p>
        <BulletList
          items={[
            "identification of the protected material",
            "the page where it appears",
            "evidence of ownership or authority",
            "contact information",
            "a clear explanation of the concern",
          ]}
        />
      </ContentSection>

      <ContentSection heading="No professional advice">
        <p>
          Nothing published on AllYonoArcade constitutes legal, financial, tax, technical,
          security or other professional advice. Descriptions of applications, download methods,
          promo codes, safety considerations, platform features or legal status are general
          informational observations. Users should consult an appropriately qualified professional
          when advice is required for their individual circumstances.
        </p>
      </ContentSection>

      <ContentSection heading="Limitation of liability">
        <p>
          To the fullest extent permitted by applicable law, AllYonoArcade and its owners,
          administrators, writers, editors and contributors will not be liable for any direct,
          indirect, incidental, consequential, special or punitive loss arising from:
        </p>
        <BulletList
          items={[
            "reliance on information published on the website",
            "inaccurate, incomplete or outdated information",
            "the use or inability to use a third-party application",
            "an expired or invalid promo code",
            "an unavailable or refused reward",
            "account registration, suspension, restriction or closure",
            "deposits, purchases, withdrawals, refunds or payment disputes",
            "loss of money, account access or virtual items",
            "misleading claims made by third parties",
            "installation of an APK or other software",
            "malware, viruses, device damage or security incidents",
            "loss, theft or misuse of personal information",
            "interruption, alteration or removal of an external service",
            "disputes between users and third-party operators",
            "decisions made after reading content on this website",
          ]}
        />
        <p>
          Nothing in this Disclaimer is intended to remove, restrict or exclude any liability,
          remedy or consumer right that cannot lawfully be excluded under applicable Indian law.
        </p>
      </ContentSection>

      <ContentSection heading="No warranty">
        <p>
          AllYonoArcade and its content are provided on an &quot;as available&quot; and &quot;as
          published&quot; basis.
        </p>
        <p>We do not warrant that:</p>
        <BulletList
          items={[
            "the website will always be available",
            "every page will be accurate or error-free",
            "external links will remain active",
            "download files will remain unchanged",
            "promo codes will remain valid",
            "third-party applications will function as described",
            "external operators will honour their terms",
            "the website or external services will be free from harmful components",
          ]}
        />
        <p>
          Users remain responsible for maintaining suitable device security, account protection,
          antivirus safeguards and data backups.
        </p>
      </ContentSection>

      <ContentSection heading="Corrections and removal requests">
        <p>
          AllYonoArcade welcomes reasonable requests to correct inaccurate, incomplete or outdated
          information. Submitting a correction or removal request does not automatically require
          the website to change or remove content.
        </p>
        <p>
          Requests may be reviewed according to the available evidence, applicable law,
          intellectual-property rights and legitimate editorial considerations.
        </p>
        <p>
          Requests may be sent to{" "}
          <a href="mailto:AllYonoarcadenewsupport@gmail.com">AllYonoarcadenewsupport@gmail.com</a>.
        </p>
      </ContentSection>

      <ContentSection heading="Changes to this Disclaimer">
        <p>
          AllYonoArcade may update or amend this Disclaimer to reflect changes in the website,
          editorial practices, third-party applications or applicable law. Any revised version
          becomes effective when published on this page. Users are encouraged to review the
          &quot;Last Updated&quot; date periodically.
        </p>
      </ContentSection>

      <ContentSection heading="Governing law and jurisdiction">
        <p>
          This Disclaimer and the use of AllYonoArcade are governed by the laws of India. Subject
          to any mandatory consumer protections and applicable jurisdictional requirements, any
          dispute relating to this website shall be subject to the exclusive jurisdiction of the
          competent courts in Bengaluru, Karnataka, India.
        </p>
      </ContentSection>

      <ContentSection heading="Contact us">
        <p>
          Questions, correction requests, legal notices or intellectual-property concerns relating
          to this Disclaimer may be sent to:
        </p>
        <p>
          Website: AllYonoArcade
          <br />
          Website Address: <a href="https://allyonoarcade.com/">https://allyonoarcade.com/</a>
          <br />
          Email: <a href="mailto:AllYonoarcadenewsupport@gmail.com">AllYonoarcadenewsupport@gmail.com</a>
        </p>
        <p>
          By continuing to use AllYonoArcade, you acknowledge that it is an independent, unofficial
          informational and affiliate guide. All third-party applications, games, downloads, promo
          codes, rewards and services remain under the ownership and responsibility of their
          respective operators.
        </p>
      </ContentSection>
    </>
  );
}
