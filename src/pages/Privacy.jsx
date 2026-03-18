import { DisclaimerBanner } from '../components/Disclaimer';

function Privacy() {
  return (
    <main className="legal-page privacy-page" aria-labelledby="privacy-heading">
      <DisclaimerBanner />

      <article className="legal-content">
        <header>
          <h1 id="privacy-heading">Privacy Policy</h1>
          <p>
            <strong>Effective Date:</strong> January 1, 2025
            <br />
            <strong>Last Updated:</strong> January 1, 2025
            <br />
            <strong>Entity:</strong> Axiom 38 LLC, a Michigan limited liability company
          </p>
        </header>

        <nav aria-label="Table of Contents">
          <h2>Table of Contents</h2>
          <ol>
            <li><a href="#who-we-are">Who We Are</a></li>
            <li><a href="#what-we-collect">What We Collect</a></li>
            <li><a href="#what-we-do-not-collect">What We Do Not Collect</a></li>
            <li><a href="#coppa">COPPA Compliance</a></li>
            <li><a href="#ferpa">FERPA</a></li>
            <li><a href="#how-we-use-data">How We Use Data</a></li>
            <li><a href="#cookies">Cookies</a></li>
            <li><a href="#third-party">Third-Party Services</a></li>
            <li><a href="#data-retention">Data Retention</a></li>
            <li><a href="#user-rights">User Rights</a></li>
            <li><a href="#mcpa">Michigan Consumer Protection</a></li>
            <li><a href="#no-sale">No Sale of Data</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#changes">Changes to This Policy</a></li>
            <li><a href="#contact">Contact</a></li>
          </ol>
        </nav>

        <section id="who-we-are" aria-labelledby="who-heading">
          <h2 id="who-heading">1. Who We Are</h2>
          <p>
            PlanVocate is a product of <strong>Axiom 38 LLC</strong>, a limited liability company
            organized under the laws of the State of Michigan. We operate the PlanVocate web
            application (the &ldquo;Service&rdquo;), which provides educational resources to help
            parents and guardians of children with disabilities understand their rights under federal
            and state special education law.
          </p>
          <p>
            Axiom 38 LLC is the data controller responsible for your personal information collected
            through the Service. If you have questions about how we handle your data, you may contact
            us at <a href="mailto:support@planvocate.com">support@planvocate.com</a>.
          </p>
        </section>

        <section id="what-we-collect" aria-labelledby="collect-heading">
          <h2 id="collect-heading">2. What We Collect</h2>
          <p>We collect the following categories of information from adult users:</p>
          <h3>Purchase Information</h3>
          <ul>
            <li>Email address (collected at checkout for payment confirmation and receipt delivery)</li>
          </ul>
          <h3>Payment Information</h3>
          <ul>
            <li>
              Payment transactions are processed by Stripe. We receive confirmation of payment status
              and a Stripe customer identifier. We do not receive, process, or store your full credit
              card number, CVV, or banking details on our servers.
            </li>
          </ul>
          <h3>Usage Data</h3>
          <ul>
            <li>Guides generated (type, state, date of creation)</li>
            <li>Features accessed and pages visited</li>
            <li>Device type, browser type, and operating system</li>
            <li>IP address (collected for security and fraud prevention purposes)</li>
            <li>Timestamps of account activity</li>
          </ul>
          <h3>Voluntary Feedback</h3>
          <ul>
            <li>
              Reviews, testimonials, or feedback you choose to submit through the Service
            </li>
          </ul>
        </section>

        <section id="what-we-do-not-collect" aria-labelledby="not-collect-heading">
          <h2 id="not-collect-heading">3. What We Do Not Collect</h2>
          <p>
            PlanVocate is specifically designed to avoid collecting sensitive information about
            children. <strong>We do not collect, store, or process:</strong>
          </p>
          <ul>
            <li>Children&rsquo;s names or personally identifiable information</li>
            <li>Dates of birth of children</li>
            <li>School names or school district information tied to a specific child</li>
            <li>Disability diagnoses or medical information about children</li>
            <li>Educational records, IEP documents, or Section 504 plans</li>
            <li>Social Security numbers of any user or child</li>
            <li>Photographs or biometric data of any user or child</li>
            <li>Precise geolocation data</li>
          </ul>
          <p>
            If a user voluntarily provides any of the above information through a free-text field or
            communication with us, we will make commercially reasonable efforts to delete such
            information promptly upon discovery.
          </p>
        </section>

        <section id="coppa" aria-labelledby="coppa-heading">
          <h2 id="coppa-heading">4. COPPA Compliance</h2>
          <p>
            PlanVocate is designed for use exclusively by adults (individuals 18 years of age or
            older). We comply with the Children&rsquo;s Online Privacy Protection Act (COPPA), 15
            U.S.C. &sect;&sect; 6501&ndash;6506, and its implementing regulations at 16 C.F.R. Part
            312.
          </p>
          <p>
            We do not knowingly collect personal information from children under the age of 13. The
            Service does not target children, does not allow children to create accounts, and does not
            include features designed for use by children. If we become aware that we have
            inadvertently collected personal information from a child under 13, we will take immediate
            steps to delete that information from our systems.
          </p>
          <h3>2025 COPPA Amendments</h3>
          <p>
            We are aware of the amendments to the COPPA Rule finalized by the Federal Trade Commission
            in 2025, which strengthen protections for children&rsquo;s personal information online.
            Key changes include enhanced requirements for verifiable parental consent, expanded
            definitions of personal information to include biometric identifiers and certain
            advertising identifiers, new data retention and deletion requirements, restrictions on
            push notifications directed to children, and requirements related to educational
            technology providers.
          </p>
          <p>
            While PlanVocate does not collect children&rsquo;s data and is designed for adult users
            only, we continue to monitor these regulatory developments to ensure our practices remain
            fully compliant. Our commitment to not collecting, storing, or processing children&rsquo;s
            personal information exceeds the requirements of COPPA and its 2025 amendments.
          </p>
          <p>
            If you believe a child under 13 has provided personal information through our Service,
            please contact us immediately at{' '}
            <a href="mailto:support@planvocate.com">support@planvocate.com</a>.
          </p>
        </section>

        <section id="ferpa" aria-labelledby="ferpa-heading">
          <h2 id="ferpa-heading">5. FERPA</h2>
          <p>
            The Family Educational Rights and Privacy Act (FERPA), 20 U.S.C. &sect; 1232g, protects
            the privacy of student education records. PlanVocate does not access, collect, store, or
            process any student education records as defined under FERPA.
          </p>
          <p>
            PlanVocate is not a &ldquo;school official&rdquo; as defined by FERPA and does not have a
            &ldquo;legitimate educational interest&rdquo; in student records. We do not receive data
            from schools, school districts, or state educational agencies. The educational guides
            generated by the Service are based on general legal information and do not incorporate or
            reference any specific student&rsquo;s educational records.
          </p>
          <p>
            Users should not upload, submit, or otherwise provide student education records to
            PlanVocate. If any such records are inadvertently provided, we will delete them promptly.
          </p>
        </section>

        <section id="how-we-use-data" aria-labelledby="use-data-heading">
          <h2 id="use-data-heading">6. How We Use Data</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul>
            <li>
              <strong>Service Delivery:</strong> To create and maintain your account, process payments,
              generate educational guides, and provide the core functionality of the Service.
            </li>
            <li>
              <strong>Communication:</strong> To send you account-related notifications, respond to
              your inquiries, and provide customer support.
            </li>
            <li>
              <strong>Service Improvement:</strong> To understand how users interact with the Service,
              identify areas for improvement, and develop new features.
            </li>
            <li>
              <strong>Security:</strong> To detect, prevent, and address fraud, abuse, security risks,
              and technical issues.
            </li>
            <li>
              <strong>Legal Compliance:</strong> To comply with applicable laws, regulations, legal
              processes, or governmental requests.
            </li>
          </ul>
          <p>
            We do not use your personal information for behavioral advertising, profiling, or
            automated decision-making that produces legal or similarly significant effects.
          </p>
        </section>

        <section id="cookies" aria-labelledby="cookies-heading">
          <h2 id="cookies-heading">7. Cookies</h2>
          <p>
            PlanVocate uses cookies and similar technologies for the following purposes:
          </p>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> Required for authentication, session management, and
              security. These cookies are necessary for the Service to function and cannot be disabled.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Used to remember your preferences (such as your
              selected state) and provide enhanced functionality.
            </li>
          </ul>
          <p>
            We do not use advertising cookies, tracking cookies, or third-party analytics cookies that
            track your activity across other websites. We do not engage in cross-site tracking.
          </p>
          <p>
            You can control cookies through your browser settings. Please note that disabling essential
            cookies may prevent you from using certain features of the Service.
          </p>
        </section>

        <section id="third-party" aria-labelledby="third-party-heading">
          <h2 id="third-party-heading">8. Third-Party Services</h2>
          <p>
            We use the following third-party services to operate PlanVocate. Each service processes
            data as described below:
          </p>
          <h3>Supabase</h3>
          <p>
            We use Supabase as our backend-as-a-service provider for authentication, database
            management, and data storage. Supabase processes your account information (email address,
            hashed password) and stores application data. Supabase&rsquo;s infrastructure is hosted
            on secure cloud servers with encryption at rest and in transit. For more information, see{' '}
            <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">
              Supabase&rsquo;s Privacy Policy
            </a>.
          </p>
          <h3>Stripe</h3>
          <p>
            We use Stripe to process payments. When you make a payment, your payment information
            (credit card number, billing address) is transmitted directly to Stripe and is subject to{' '}
            <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
              Stripe&rsquo;s Privacy Policy
            </a>.
            Stripe is certified as a PCI Level 1 Service Provider, the most stringent level of
            certification available in the payments industry. We receive only a payment confirmation,
            transaction identifier, and Stripe customer ID; we do not receive or store your full
            payment card details.
          </p>
          <h3>Netlify</h3>
          <p>
            We use Netlify to host and deploy the PlanVocate web application. Netlify may collect
            server logs including IP addresses, browser types, and access timestamps as part of its
            standard hosting operations. For more information, see{' '}
            <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">
              Netlify&rsquo;s Privacy Policy
            </a>.
          </p>
          <p>
            We do not share your personal data with any third parties other than those described above,
            and only to the extent necessary to operate the Service.
          </p>
        </section>

        <section id="data-retention" aria-labelledby="retention-heading">
          <h2 id="retention-heading">9. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes
            for which it was collected and to comply with our legal obligations:
          </p>
          <ul>
            <li>
              <strong>Payment Records:</strong> Transaction records (email and Stripe session ID) are
              retained for a minimum of 7 years to comply with tax and financial reporting obligations.
            </li>
            <li>
              <strong>Generated Guides:</strong> Guide content is generated entirely in your browser
              and is never stored on our servers.
            </li>
            <li>
              <strong>Server Logs:</strong> Automatically purged after 90 days.
            </li>
            <li>
              <strong>Support Communications:</strong> Retained for up to 2 years after the last
              communication to ensure continuity of support and resolution of disputes.
            </li>
          </ul>
        </section>

        <section id="user-rights" aria-labelledby="rights-heading">
          <h2 id="rights-heading">10. User Rights</h2>
          <p>You have the following rights regarding your personal information:</p>
          <ul>
            <li>
              <strong>Access:</strong> You may request a copy of the personal information we hold about
              you.
            </li>
            <li>
              <strong>Correction:</strong> You may request that we correct any inaccurate or incomplete
              personal information.
            </li>
            <li>
              <strong>Deletion:</strong> You may request that we delete your personal information,
              subject to legal retention requirements.
            </li>
            <li>
              <strong>Data Portability:</strong> You may request a copy of your data in a commonly used,
              machine-readable format.
            </li>
            <li>
              <strong>Objection:</strong> You may object to specific types of processing of your
              personal information.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:support@planvocate.com">support@planvocate.com</a>. We will respond to
            your request within 30 days. We may ask you to verify your identity before processing your
            request.
          </p>
        </section>

        <section id="mcpa" aria-labelledby="mcpa-heading">
          <h2 id="mcpa-heading">11. Michigan Consumer Protection</h2>
          <p>
            Axiom 38 LLC operates in compliance with the Michigan Consumer Protection Act (MCPA), MCL
            &sect;&sect; 445.901&ndash;445.922. We are committed to fair and transparent data
            practices.
          </p>
          <p>
            Michigan residents may have additional rights under state consumer protection laws. We will
            not discriminate against you for exercising any of your privacy rights. If you believe your
            consumer rights have been violated, you may file a complaint with the Michigan Attorney
            General&rsquo;s Consumer Protection Division in addition to contacting us directly.
          </p>
        </section>

        <section id="no-sale" aria-labelledby="no-sale-heading">
          <h2 id="no-sale-heading">12. No Sale of Data</h2>
          <p>
            <strong>
              Axiom 38 LLC does not sell, rent, lease, or trade your personal information to third
              parties for monetary or other valuable consideration.
            </strong>
          </p>
          <p>
            We do not share your personal information with data brokers, advertisers, or marketing
            companies. We do not participate in data exchanges or data cooperatives. We do not allow
            third parties to collect personal information from users through our Service for their own
            purposes.
          </p>
          <p>
            The only third parties that receive user data are our service providers (Supabase, Stripe,
            and Netlify) as described in Section 8, and only to the extent necessary to provide the
            Service.
          </p>
        </section>

        <section id="security" aria-labelledby="security-heading">
          <h2 id="security-heading">13. Security</h2>
          <p>
            We implement commercially reasonable technical and organizational measures to protect your
            personal information against unauthorized access, alteration, disclosure, or destruction.
            These measures include:
          </p>
          <ul>
            <li>Encryption of data in transit using TLS/SSL</li>
            <li>Encryption of data at rest</li>
            <li>Secure password hashing using industry-standard algorithms</li>
            <li>Row-Level Security (RLS) policies in our database to restrict data access</li>
            <li>Regular security assessments and monitoring</li>
            <li>Principle of least privilege for internal access controls</li>
            <li>Secure handling and restricted access to API keys and service credentials</li>
          </ul>
          <p>
            No method of transmission over the Internet or method of electronic storage is 100%
            secure. While we strive to use commercially acceptable means to protect your personal
            information, we cannot guarantee its absolute security. If you become aware of a security
            vulnerability or suspected data breach, please contact us immediately at{' '}
            <a href="mailto:support@planvocate.com">support@planvocate.com</a>.
          </p>
        </section>

        <section id="changes" aria-labelledby="changes-heading">
          <h2 id="changes-heading">14. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make material changes, we will
            provide at least <strong>30 days&rsquo; notice</strong> before the changes take effect.
            Notice may be provided by posting the updated policy on the Service with a revised
            &ldquo;Last Updated&rdquo; date, by sending an email to the address associated with your
            account, or by other reasonable means.
          </p>
          <p>
            We encourage you to review this Privacy Policy periodically. Your continued use of the
            Service after the effective date of the revised policy constitutes your acceptance of the
            updated terms. If you do not agree with the revised policy, you should discontinue use of
            the Service and request deletion of your account.
          </p>
        </section>

        <section id="contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">15. Contact</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our
            data practices, please contact us:
          </p>
          <address>
            <strong>Axiom 38 LLC</strong>
            <br />
            Email: <a href="mailto:support@planvocate.com">support@planvocate.com</a>
            <br />
            State of Organization: Michigan
          </address>
          <p>
            For privacy-related requests, we will respond within 30 days of receiving your inquiry.
          </p>
        </section>
      </article>
    </main>
  );
}

export default Privacy;
