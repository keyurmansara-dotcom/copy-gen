export default function FooterSection() {
  return (
    <section className="footer-wrapper">
      {/* ✅ CTA BOX */}
      <div className="cta-box">
        <p className="cta-tag">BOOST YOUR WRITING PRODUCTIVITY</p>

        <h2>End writer’s block today</h2>

        <p className="cta-text">
          It’s like having access to a team of copywriting experts writing
          powerful copy for you in 1-click.
        </p>

        <button className="cta-btn">
          Start writing for free →
        </button>

        {/* ✅ CTA Checks */}
        <div className="cta-checks">
          <span>✅ No credit card required</span>
          <span>✅ Cancel anytime</span>
          <span>✅ 10+ tools to explore</span>
        </div>
      </div>

      {/* ✅ FOOTER */}
      <footer className="footer">
        {/* Column 1 */}
        <div className="footer-col">
          <div className="footer-logo">
            <div className="logo-icon"></div>
            <h3>COPYGEN</h3>
          </div>

          <h4>Save time. Get inspired.</h4>
          <p>
            Automatically generate blog articles, website copy, landing pages &
            digital ads for your business in seconds.
          </p>

          <p className="copyright">
            © 2023 CopyGenAI. Template Made By{" "}
            <span>Softnio</span>
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h3>USE CASE</h3>
          <ul>
            <li>AI Writer</li>
            <li>AI Article Writer</li>
            <li>Content Generator</li>
            <li>AI Content Writing</li>
            <li>Content Rewriter</li>
            <li>Blog Post Writer</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col">
          <h3>ABOUT</h3>
          <ul>
            <li>Pricing</li>
            <li>Login</li>
            <li>Sign up</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="footer-col">
          <h3>COPYGEN</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Affiliate Program</li>
          </ul>
        </div>
      </footer>
    </section>
  );
}
