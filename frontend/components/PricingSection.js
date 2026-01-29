export default function PricingSection() {
  const plans = [
    {
      name: "Bronze",
      price: "$9",
      words: "10,000",
      templates: "10+",
      languages: "30+",
      active: false,
    },
    {
      name: "Silver",
      price: "$19",
      words: "20,000",
      templates: "10+",
      languages: "50+",
      active: true, // Highlighted Plan
    },
    {
      name: "Diamond",
      price: "$39",
      words: "50,000",
      templates: "15+",
      languages: "70+",
      active: false,
    },
  ];

  return (
    <section className="pricing-section">
      {/* Heading */}
      <p className="pricing-tag">PRICING</p>

      <h2 className="pricing-title">
        Start your content writing with AI
      </h2>

      <p className="pricing-subtitle">
        With our simple plans, supercharge your content <br />
        writing to helps your business.
      </p>

      {/* Pricing Cards */}
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.active ? "active-plan" : ""}`}
          >
            <h3>{plan.name}</h3>

            <h1>
              {plan.price} <span>/ month</span>
            </h1>

            <button
              className={`plan-btn ${
                plan.active ? "active-btn" : ""
              }`}
            >
              Start free trial today
            </button>

            <ul>
              <li>✔ {plan.words} Monthly Word Limit</li>
              <li>✔ {plan.templates} Templates</li>
              <li>✔ {plan.languages} Languages</li>
              <li>✔ Advance Editor Tool</li>
              <li>✔ Regular Technical Support</li>
              <li>✔ Unlimited Logins</li>
              <li>✔ Newest Features</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
