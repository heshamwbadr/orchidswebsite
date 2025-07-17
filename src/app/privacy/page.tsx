// COMPLETE PRIVACY POLICY PAGE

export default function PrivacyPolicy() {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-6 py-20">
          {/* Header Section */}
          <div className="text-center space-y-6 mb-16">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                Privacy Policy
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full opacity-60"></div>
            </div>
            <div className="space-y-3">
              <p className="text-lg text-muted-foreground font-medium">
                Last Updated: June 27, 2025
              </p>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                This Privacy Policy explains how I, Hesham Badr, collect, use, disclose, and safeguard your information when you visit my personal website (heshambadr.com). By using this site, you agree to the practices described below.
              </p>
            </div>
          </div>
  
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Information I Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              While using my website, you may be asked to provide personal information such as:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Email address</li>
              <li>First and last name</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Any data you submit via forms</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-6">
              I may also automatically collect usage data such as your IP address, browser type, pages visited, time of visit, and device diagnostics.
            </p>
          </section>
  
          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Use of Information</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>To operate and maintain the website</li>
              <li>To respond to inquiries or submissions</li>
              <li>To notify you about updates</li>
              <li>To analyze and improve site performance</li>
              <li>To detect and resolve technical issues</li>
            </ul>
          </section>
  
          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website uses cookies and similar technologies to enhance your experience. You can instruct your browser to refuse all cookies or to notify you when a cookie is sent. If you choose to disable cookies, some portions of the site may not work properly.
            </p>
          </section>
  
          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data may be stored and processed in countries outside your own. By using the site, you consent to such transfers, in accordance with applicable laws.
            </p>
          </section>
  
          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Data Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I may disclose your personal data only in these circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>To comply with a legal obligation</li>
              <li>To protect my rights or property</li>
              <li>To investigate website misuse</li>
              <li>To protect user safety</li>
              <li>To avoid legal liability</li>
            </ul>
            <p className="text-muted-foreground font-medium mt-4">
              I do not sell or rent your personal data to third parties.
            </p>
          </section>
  
          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              I implement reasonable security measures to protect your information. However, no method of online transmission or electronic storage is 100% secure, and I cannot guarantee absolute security.
            </p>
          </section>
  
          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              My website may contain links to external websites. I am not responsible for the privacy practices or content of those third-party sites.
            </p>
          </section>
  
          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Children’s Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              I do not knowingly collect data from children under 13. If I become aware that such data has been submitted without parental consent, I will take steps to remove it.
            </p>
          </section>
  
          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              This policy may be updated from time to time. The latest version will always be available on this page, with the effective date clearly marked.
            </p>
          </section>
  
          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Me</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, you can contact me at:
            </p>
            <p className="mt-4">
              📧{' '}
              <a href="mailto:hesham.badr@neuronovate.consulting" className="text-primary underline">
                hesham.badr@neuronovate.consulting
              </a>
            </p>
          </section>
        </div>
      </div>
    );
  }