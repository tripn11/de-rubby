"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Does De Rubby follow a specific curriculum?",
    answer:
      "Yes, we combine the Nigerian and British Curriculum, designed to suit the developmental and academic needs of each age group.",
  },
  {
    question: "What are the school hours?",
    answer:
      "Our Nursery and Primary classes typically run from 8:00 a.m. to 2:30 p.m., with early drop-off and after-school care available.",
  },
  {
    question: "How does the school support children with special learning needs?",
    answer:
      "We provide extra attention, individualized learning plans, and teacher support to ensure every child learns at their own pace.",
  },
  {
    question: "What is the student-to-teacher ratio in the Nursery?",
    answer:
      "We keep our Nursery classes small, ensuring a low student-to-teacher ratio so every child receives proper care and attention.",
  },
  {
    question: "What types of activities are included in the Nursery program?",
    answer:
      "Our Nursery program includes creative play, music, art, storytelling, outdoor play, and early literacy & numeracy skills to encourage holistic development.",
  },
  {
    question: "Are there extracurricular activities available for Primary students?",
    answer:
      "Yes, Primary students can take part in sports, arts & crafts, music, drama, robotics, and cultural activities to build skills beyond academics.",
  },
  {
    question: "What is the procedure for applying to the school?",
    answer:
      "Parents can fill out an admission form online or on-site, after which an assessment and interview are scheduled before enrollment.",
  },
];

const Faq = () => {
  const [point, setPoint] = useState(0);

  return (
    <div id="faq">
      <div className="banner">
        <h1>FAQs</h1>
      </div>
      <img src="/images/faq.jpg" alt="FAQ banner" />
      <section>
        <h2>Need To Ask Some Questions?</h2>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className={point === index ? "active" : ""}
            onClick={() => setPoint(point === index ? null : index)}
          >
            <h3 aria-expanded={point === index}>
              <span>{faq.question}</span>
              <button>{point === index ? "−" : "+"}</button>
            </h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Faq;