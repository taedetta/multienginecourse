export default function AnswerReview({ items, title = 'Review Incorrect Answers' }) {
  const wrong = items.filter((a) => !a.correct);
  if (!wrong.length) return null;

  return (
    <div className="answer-review">
      <h3 className="answer-review-title">{title}</h3>
      <div className="review-list">
        {wrong.map((a, i) => (
          <div key={i} className="review-item wrong">
            <p className="review-q">{a.question || a.prompt}</p>
            {a.pickedText && (
              <p className="review-answer review-answer-wrong">
                <span className="review-label">Your answer:</span> {a.pickedText}
              </p>
            )}
            {a.correctText && (
              <p className="review-answer review-answer-correct">
                <span className="review-label">Correct answer:</span> {a.correctText}
              </p>
            )}
            {a.explanation && <p className="review-exp">{a.explanation}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
