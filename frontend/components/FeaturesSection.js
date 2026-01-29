export default function FeaturesSection() {
  const features = [
    {
      title: "Blog Post & Articles",
      desc: "Generate optimized blog post and articles to get organic traffic - making you visible to the world.",
      icon: "📘",
    },
    {
      title: "Product Description",
      desc: "Create a perfect description for your products to engage your customers to click and buy.",
      icon: "📄",
    },
    {
      title: "Social Media Ads",
      desc: "Create ads copies for your social media - make an impact with your online marketing campaigns.",
      icon: "📢",
    },
    {
      title: "Product Benefits",
      desc: "Create a bullet point list of your product benefits that appeal to your customers to purchase.",
      icon: "✅",
    },
    {
      title: "Landing Page Content",
      desc: "Write very attractive headlines, slogans or paragraph for your landing page of your website.",
      icon: "🌍",
    },
    {
      title: "Suggest Improvements",
      desc: "Need to improve your existing content? Our AI will rewrite and improve the content for you.",
      icon: "⚡",
    },
  ];

  return (
    <section className="features-section">
      {/* Heading */}
      <h6 className="small-heading">GET STARTED FOR FREE</h6>

      <h1 className="main-heading">AI Generate content in seconds</h1>

      <p className="sub-text">
        Give our AI a few descriptions and we’ll automatically create blog
        articles, product descriptions and more for you within just few second.
      </p>

      {/* Cards */}
      <div className="features-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon-box">{item.icon}</div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
