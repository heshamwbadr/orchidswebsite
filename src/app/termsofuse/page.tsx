// TERMS OF USE PAGE FOR HESHAM BADR

export default function TermsOfUse() {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center space-y-6 mb-16">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                Terms of Use
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full opacity-60"></div>
            </div>
            <div className="space-y-3">
              <p className="text-lg text-muted-foreground font-medium">
                Effective Date: July 17, 2025
              </p>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                These Terms of Use ("Terms") govern your access to and use of this website, operated by Hesham Badr. By visiting or using this website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, do not use the website.
              </p>
            </div>
          </div>
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Ownership and Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All content on this website — including but not limited to text, code, layout, visual design, animations, logos, frameworks, original tools, and media — is the intellectual property of <strong>Hesham Badr</strong> or is used under appropriate license.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Proprietary frameworks and thought leadership content</li>
              <li>Brand and personal name marks</li>
              <li>Design systems, layout structure, and page animations</li>
              <li>Any AI-generated or custom-created tools hosted or embedded</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Unauthorized use of this website or its content will be considered intellectual property infringement and may result in legal action, including claims for damages, injunctive relief, and recovery of legal fees.
            </p>
          </section>
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Limited License</h2>
            <p className="text-muted-foreground leading-relaxed">
              You are granted a limited, revocable, non-transferable license to access and use the website for personal, non-commercial use only. This license does not include the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Modify, adapt, or create derivative works</li>
              <li>Use the site or content for training AI models or datasets</li>
              <li>Resell or redistribute any information or downloadable content</li>
            </ul>
          </section>
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Prohibited Conduct</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Copy or clone any aspect of the website</li>
              <li>Use the website to solicit or impersonate the owner</li>
              <li>Attempt to access non-public sections or backend infrastructure</li>
              <li>Upload malicious software or compromise the site</li>
              <li>Use the content to compete or imply affiliation with Hesham Badr or Neuronovate Consulting</li>
            </ul>
          </section>
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. No Warranty</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website is provided “as is.” I make no warranties, expressed or implied, regarding the accuracy, reliability, or availability of the website or its content. You use the site at your own risk.
            </p>
          </section>
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, I will not be liable for any indirect, incidental, or consequential damages arising from your use of the website. This includes loss of business, reputation, or data — even if advised of such potential loss.
            </p>
          </section>
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. External Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website may contain links to third-party websites. I am not responsible for the content, accuracy, or availability of those sites and do not endorse them. You access them at your own discretion.
            </p>
          </section>
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Enforcement and Legal Action</h2>
            <p className="text-muted-foreground leading-relaxed">
              I actively monitor unauthorized reuse or replication of the site and its content. If I identify a clone or use of protected material without consent, I reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Issue takedown notices</li>
              <li>Initiate cease and desist proceedings</li>
              <li>Pursue litigation under copyright, trademark, or unfair competition laws</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              All legal disputes will be governed by the laws of Australia and may be escalated in Australian courts.
            </p>
          </section>
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms may be updated from time to time. Continued use of the site constitutes acceptance of any revisions. The current version will always be accessible on this page.
            </p>
          </section>
  
          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              For questions or concerns about these Terms, contact me at:
            </p>
            <p className="text-primary">
              📧{' '}
              <a href="mailto:hesham.badr@neuronovate.consulting" className="underline">
                hesham.badr@neuronovate.consulting
              </a>
            </p>
            <p className="text-primary mt-2">
              🌐{' '}
              <a
                href="https://hesham.badr.neuronovate.consulting"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                hesham.badr.neuronovate.consulting
              </a>
            </p>
          </section>
        </div>
      </div>
    );
  }