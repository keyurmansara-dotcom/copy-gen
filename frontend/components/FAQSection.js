import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What is a copy?",
      answer:
        "Yes, you can write long article for your blog posts, product descriptions or any long article with CopyGen. We're always updating our template and tools, so let us know what you are expecting!",
    },
    {
      question: "Does CopyGen to write long articles?",
      answer:
        "Yes, CopyGen can generate long-form content such as blogs, product descriptions, and marketing articles easily.",
    },
    {
      question: "Is the generated content original?",
      answer:
        "Absolutely. Our AI generates unique content based on your instructions and requirements.",
    },
    {
      question: "Do you have wordpress plugin?",
      answer:
        "Currently, we are working on a WordPress plugin. It will be released soon with full integration support.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            {/* Question */}
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3
                className={activeIndex === index ? "active" : ""}
              >
                {faq.question}
              </h3>

              <span className="icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {/* Answer */}
            {activeIndex === index && (
              <p className="faq-answer">{faq.answer}</p>
            )}

            <hr />
          </div>
        ))}
      </div>
    </section>
  );
}
