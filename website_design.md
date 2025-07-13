<website_design>
This is a sophisticated, executive-level personal portfolio website for Hesham Badr, an AI & Digital Transformation Strategist. The design employs a modern dark theme with premium gold (#FFD700) and electric blue (#007AFF) accents to convey innovation and strategic sophistication.

The website opens with a striking hero section featuring Hesham's value proposition "Turning strategy into real-world impact with AI" against a dark background with subtle animated neural network patterns. The hero includes professional headshot, compelling copy, and clear CTAs for "View Portfolio" and "Book a Call".

Following the hero, an elegant about section establishes credibility with Hesham's background and expertise. The services section presents three strategic pillars in a clean grid format with premium icons and detailed service offerings. Case studies showcase real-world impact through structured Challenge-Solution-Impact cards with AI-relevant tags and metrics.

Social proof comes through a testimonials carousel featuring client feedback, followed by a compelling newsletter signup encouraging strategic insights subscription. The site concludes with a comprehensive footer containing contact information and professional links.

Throughout the design, subtle animations enhance the premium feel - gentle hover effects, smooth scrolling reveals, and tech-inspired UI elements that reinforce the AI/digital transformation theme. The typography uses a modern sans-serif family for maximum clarity and professional appeal.
</website_design>

<high_level_design>
**Color Palette:**
- Primary Background: #0A0A0B (Deep charcoal for premium dark theme)
- Accent Gold: #FFD700 (Premium gold for highlights and CTAs)
- Accent Blue: #007AFF (Electric blue for secondary accents and links)
- Text Primary: #FFFFFF (Pure white for maximum contrast)
- Text Secondary: #A1A1AA (Light gray for supporting text)

**Typography:**
- Font Family: Inter (Modern, highly legible sans-serif perfect for executive/tech contexts)
</high_level_design>

<components>

<edit_component>
<file_path>src/components/blocks/heros/simple-centered.tsx</file_path>
<design_instructions>
Transform this into a premium dark hero for Hesham Badr's portfolio:
- Change background to dark theme (#0A0A0B)
- Update heading to "Turning strategy into real-world impact with AI"
- Add subheading: "AI & Digital Transformation Strategist helping Fortune 500 companies navigate the future of business"
- Replace content with Hesham's value proposition
- Style primary button as "View Portfolio" in gold (#FFD700)
- Style secondary button as "Book a Call" with blue accent (#007AFF)
- Use Inter font family throughout
- Add subtle animated background pattern suggesting AI/neural networks
- Include professional headshot image on the right side
- Ensure all text is white/light gray for dark theme contrast
</design_instructions>
<references>src/components/blocks/heros/simple-centered.tsx</references>
</edit_component>

<edit_component>
<file_path>src/components/blocks/feature-sections/simple-three-column-with-large-icons-on-dark.tsx</file_path>
<design_instructions>
Convert this into Hesham's services section:
- Keep dark background to match portfolio theme
- Title: "Strategic Services"
- Subtitle: "Comprehensive AI & Digital Transformation Solutions"
- Three service pillars:
  1. "Strategic Intelligence & AI" - Use brain/AI icon in gold
     • AI Strategy Development
     • Machine Learning Implementation
     • Data Analytics & Insights
     • Intelligent Automation
     • Predictive Business Models
  2. "Digital & Operational Transformation" - Use transformation/gear icon in blue
     • Digital Roadmap Creation
     • Process Optimization
     • Technology Integration
     • Cloud Migration Strategy
     • Enterprise Architecture
  3. "Leadership & Change Acceleration" - Use rocket/growth icon in gold
     • Executive Coaching
     • Change Management
     • Team Transformation
     • Innovation Culture Building
     • Strategic Communication
- Use Inter font family
- Gold (#FFD700) and blue (#007AFF) accent colors for icons and highlights
</design_instructions>
<references>src/components/blocks/feature-sections/simple-three-column-with-large-icons-on-dark.tsx</references>
</edit_component>

<create_component>
<file_path>src/components/blocks/portfolio/case-studies-grid.tsx</file_path>
<design_instructions>
Create a sophisticated case studies section for Hesham's portfolio with dark theme:
- Section title: "Case Studies" with subtitle "Real-world impact across industries"
- Background: Dark (#0A0A0B) with subtle grid pattern
- Display 3-4 case study cards in a responsive grid
- Each card features:
  * Company/Industry header
  * Challenge section with icon
  * Solution section with methodology
  * Impact section with quantified results
  * Relevant AI/tech tags (e.g., "Machine Learning", "Process Automation", "Digital Strategy")
- Card styling: Dark background with subtle border, hover effects with gold/blue accent glow
- Use Inter font family
- Include metrics like "40% efficiency increase", "€2M cost savings", "6-month implementation"
- Professional color scheme with white text, gold highlights for impact metrics
- Smooth hover animations and subtle card shadows
</design_instructions>
</create_component>

<edit_component>
<file_path>src/components/blocks/testimonials/testimonials-grid-with-centered-carousel.tsx</file_path>
<design_instructions>
Adapt for Hesham's client testimonials:
- Change to dark background (#0A0A0B) to match portfolio theme
- Title: "Client Testimonials"
- Subtitle: "Trusted by executives and industry leaders"
- Include 4-5 executive testimonials with:
  * Professional headshots
  * Client names and titles (e.g., "Sarah Chen, CTO at TechCorp")
  * Company context
  * Testimonial text focusing on strategic impact and results
- Style testimonial cards with dark theme, white text
- Use gold (#FFD700) for quote marks and highlights
- Blue (#007AFF) for client titles
- Inter font family throughout
- Smooth carousel transitions with premium feel
</design_instructions>
<references>src/components/blocks/testimonials/testimonials-grid-with-centered-carousel.tsx</references>
</edit_component>

<edit_component>
<file_path>src/components/blocks/newsletter-sections/side-by-side-with-details.tsx</file_path>
<design_instructions>
Transform into a premium newsletter signup for strategic insights:
- Convert to dark theme (#0A0A0B) background
- Heading: "Strategic Insights Weekly"
- Description: "Get exclusive AI and digital transformation insights delivered to your inbox. Join 2,500+ executives staying ahead of the curve."
- Include benefits list:
  • Weekly strategic frameworks
  • AI implementation case studies
  • Industry transformation trends
  • Executive interviews and insights
- Style signup form with dark theme, gold (#FFD700) submit button
- Use Inter typography
- Professional illustration or abstract AI-themed graphic
- Premium styling with subtle animations
</design_instructions>
<references>src/components/blocks/newsletter-sections/side-by-side-with-details.tsx</references>
</edit_component>

<edit_component>
<file_path>src/components/blocks/footers/footer-with-grid.tsx</file_path>
<design_instructions>
Create Hesham's professional footer:
- Dark background (#0A0A0B) consistent with site theme
- Left column: Hesham Badr branding with tagline "AI & Digital Transformation Strategist"
- Contact information:
  • Email: hesham@strategicai.expert
  • Phone: +1 (555) 123-4567
  • Location: San Francisco, CA
- Quick links: About, Services, Case Studies, Contact
- Social links: LinkedIn, Twitter, Medium (in gold/blue accents)
- Copyright: "© 2024 Hesham Badr. All rights reserved."
- Use Inter font family
- Gold (#FFD700) and blue (#007AFF) accent colors for links and social icons
- Clean, professional layout with proper spacing
</design_instructions>
<references>src/components/blocks/footers/footer-with-grid.tsx</references>
</edit_component>

</components>