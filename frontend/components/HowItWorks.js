export default function HowItWorks() {
  return (
    <section className="how-section">
      {/* ✅ Top Heading */}
      <p className="how-tag">HOW IT WORKS</p>

      <h2 className="how-title">
        Instruct to our AI and generate copy
      </h2>

      <p className="how-subtitle">
        Give our AI a few descriptions and we’ll automatically create blog
        articles, product descriptions and more for you within just few second.
      </p>

      {/* ✅ Steps Row */}
      <div className="steps-grid">
        {/* Step 1 */}
        <div className="step-box">
          <h3>Select writing template</h3>
          <p>
            Simply choose a template from available list to write content for
            blog posts, landing page, website content etc.
          </p>
        </div>

        <div className="step-number">1</div>

        {/* Step 2 */}
        <div className="step-box">
          <h3>Describe your topic</h3>
          <p>
            Provide our AI content writer with few sentences on what you want to
            write, and it will start writing for you.
          </p>
        </div>

        <div className="step-number">2</div>

        {/* Step 3 */}
        <div className="step-box">
          <h3>Generate quality content</h3>
          <p>
            Our powerful AI tools will generate content in few second, then you
            can export it to wherever you need.
          </p>
        </div>

        <div className="step-number">3</div>
      </div>

      {/* ✅ Buttons */}
      <div className="how-buttons">
        <button className="trial-btn">Start free trial today</button>

        <button className="video-btn">
          ▶ See action in video
        </button>
      </div>

      {/* ✅ Bottom Content Section */}
      <div className="content-row">
        {/* Left Image */}
        <div className="content-img">
          <img
            src="https://copygen.themenio.com/images/app-screens/dashboard.png"
            alt="preview"
          />
        </div>

        {/* Right Text */}
        <div className="content-text">
          <h2>AI Generate content in seconds</h2>

          <p>
            Generate copy that converts for business bios, facebook ads, product
            descriptions, emails, landing pages, social ads, and more.
          </p>

          <ul>
            <li>Create article that are complete in less than 15 seconds.</li>
            <li>Save hundreds of hours with our AI article generator.</li>
            <li>Improve your copy with the article rewriter.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
