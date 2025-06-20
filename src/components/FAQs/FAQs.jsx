import { useState } from "react";
import FAQList from "./FAQList";
import { frequentlyAskedQuestions } from "../../assets/assets";

export default function FAQs() {
  const [category, setActiveCategory] = useState("General");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const categoryObj = frequentlyAskedQuestions.find(obj => obj.category === category);
  const questionsArr = categoryObj?.questions || [];

  const handleQuestionClick = (id) => {
    setActiveQuestion(id === activeQuestion ? null : id);
  };

  const handleCategoryClick = (category) => {
    setActiveQuestion(null);
    setActiveCategory(category);
  };

  return (
    <section className="bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary-dull)] to-[var(--color-accent-dark)] text-white py-24 px-4 sm:px-6 md:px-10 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-12">
          Everything you need to know about K Pure and our products. Can’t find the answer you’re looking for?
          <br className="hidden md:inline" /> 
          <a href="#" className="underline hover:text-[var(--color-accent)] transition">
            Chat with our team
          </a>
        </p>

        {/* Category Selector */}
        <ul className="flex flex-wrap justify-center gap-4 mb-12">
          {frequentlyAskedQuestions.map((obj) => (
            <li key={obj.id}>
              <button
                onClick={() => handleCategoryClick(obj.category)}
                className={`rounded-full border-2 px-6 py-2.5 text-sm sm:text-base font-medium transition-all 
                  ${
                    obj.category === category
                      ? "bg-white text-[var(--color-primary)] border-white shadow-md"
                      : "border-white text-white hover:bg-white hover:text-[var(--color-primary)]"
                  }`}
              >
                {obj.category}
              </button>
            </li>
          ))}
        </ul>

        {/* Questions List */}
        <FAQList
          category={category}
          questions={questionsArr}
          activeQuestion={activeQuestion}
          handleQuestionClick={handleQuestionClick}
        />
      </div>
    </section>
  );
}
